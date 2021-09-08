<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12").pb-0
        v-row
          v-btn-toggle(
            v-model="selectedMode"
            background-color="transparent"
            dense
            borderless
            @change="onModeChange($event)"
          )
            //- v-btn(value="all" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font all
            v-btn(value="account" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill doctor
            v-btn(value="organization" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill clinics
              //- v-btn(value="location" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill location
          v-spacer
          v-col
            v-row(align="center" justify="end")
              span.font-weight-bold.font-14 USE MY LOCATION
              v-switch(v-model="locationSwitch" inset :class="{'mt-5': appBar}").ml-3
        v-row.pt-2
          v-col.pa-0
            //- Combobox has return-object triggered by default
            v-combobox(
              v-model="searchObject.searchString"
              :placeholder="searchPlaceholder"
              solo
              outlined
              flat
              clearable
              :items="suggestionEntries"
              item-text="name"
              :height="$isMobile ? '40px' : '60px'"
              :return-object="false"
              @keyup.enter="onSearch(true)"
              @click:clear="clearSearchText"
              @update:search-input="handleDebouncedSearch($event)"
            ).rounded-bl-lg.rounded-tl-lg
          v-col(cols="1").pa-0
            v-btn(
              small
              block
              tile
              color="primary"
              @click="onSearch(true)"
              :height="$isMobile ? '40px' : '60px'"
            ).elevation-0.rounded-br-lg.rounded-tr-lg
              v-icon mdi-magnify
        v-row
          //- Service Type Filter
          v-col(v-if="searchObject.mode === 'organization'" cols="12" md="4").pa-0
            v-autocomplete(
              v-model="searchObject.serviceType"
              placeholder="Service Type"
              solo
              outlined
              flat
              dense
              clearable
              item-text="name"
              item-value="value"
              :items="serviceTypes"
              @change="onSearch(false)"
            )
          //- Specialization
          v-col(
            v-if="showSpecializationsField" cols="12" md="4"
            :class="{'pl-1 py-0 pr-0': searchObject.mode === 'organization', 'pa-0': searchObject.mode === 'account'}"
          )
            v-autocomplete(
              v-model="searchObject.specializations"
              label="Specializations"
              solo
              outlined
              flat
              dense
              multiple
              chips
              small-chips
              deletable-chips
              clearable
              :items="specialtiesList"
              @change="onSearch(false)"
            )
              template(v-slot:selection="{ item, index }")
                v-chip(v-if="index === 0")
                  span {{ item }}
                span(
                  v-if="index === 1"
                  class="grey--text text-caption"
                ) (+{{ searchObject.specializations.length - 1 }} others)
</template>

<script>
import debounce from 'lodash/debounce';
import { unifiedDirectorySearch } from '~/services/unified-directory';
import SPECIALTIES from '~/assets/fixtures/specialties';
export default {
  props: {
    appBar: {
      type: Boolean,
      default: false,
    },
    // - If button needs to be clicked before search can proceed
    requireAction: {
      type: Boolean,
      default: false,
    },
    // - If suggested results should be shown
    showSuggestions: {
      type: Boolean,
      default: false,
    },
    // Search Mode
    mode: {
      type: String,
      default: 'account',
    },
    /**
     * @param {Number} lat
     * @param {Number} lng
     */
    location: {
      type: Object,
      default: null,
    },
  },
  data () {
    // this.cities = NCR_CITIES;
    this.buttonGroupClasses = ['font-weight-semibold', 'font-16', 'black--text'];
    this.serviceTypes = [
      { name: 'Consult', value: 'clinical-consultation' },
      { name: 'Procedure', value: 'clinical-procedure' },
      { name: 'Laboratory', value: 'lab' },
      { name: 'Imaging', value: 'imaging' },
      { name: 'Physical Exam', value: 'pe' },
      { name: 'Dental', value: 'dental' },
    ];
    this.specialtiesList = SPECIALTIES;
    return {
      loading: {
        initial: true,
      },
      deleteTag: {
        removeIndex: undefined,
      },
      tagSearchDialog: false,
      searchText: null,
      searchObject: {
        searchString: '',
        specializations: [],
        mode: 'account',
        serviceType: null,
        location: null,
      },
      suggestionEntries: [],
      debouncedResultsSearch: debounce((event) => { this.onSearch(true, event); }, 500),
      debouncedSuggestionsSearch: debounce(this.searchSuggestions, 500),
    };
  },
  computed: {
    searchPlaceholder () {
      switch (this.searchObject.mode) {
        case 'account': return 'Search for doctors';
        case 'organization': return 'Search for clinics';
        case 'location': return 'Search by location';
        default: return 'Search for clinics, doctors, and services';
      };
    },
    showSpecializationsField () {
      return this.searchObject.mode === 'account';
      // this.searchObject.serviceType === 'clinical-consultation' ||
      // this.searchObject.serviceType === 'clinical-procedure';
    },
    selectedMode: {
      get () {
        return this.mode || 'account';
      },
      set (val) {
        this.$emit('update:mode', {
          ...this.searchObject,
          mode: val,
        });
      },
    },
    locationSwitch: {
      get () {
        return !!this.location;
      },
      set (val) {
        if (!val) this.searchObject.location = null;
        this.$emit('update:locationSwitch', val);
      },
    },
  },
  mounted () {
    this.loading.initial = false;
    this.searchObject.mode = this.selectedMode;
    // Load Route data
    const { specializations, serviceType } = this.$route.params;
    this.searchObject.searchString = this.$route.query.searchText;
    if (this.selectedMode === 'account' && specializations) this.searchObject.specializations = specializations;
    if (this.selectedMode === 'organization' && serviceType) this.searchObject.serviceType = serviceType;
  },
  methods: {
    onModeChange (val) {
      this.searchObject.mode = val;
      this.searchObject.specializations = [];
      this.selectedMode = val;
    },
    /**
     * @param {Boolean} allowableSearch - if true, continue with search regardless of action requirement
     * An action requirement is usually a trigger through button or enter key
     * @param {String} customSearchText - for passing a custom search text value
     * Usually used for debouncing purposes, because it does not update `searchObject.searchString` on its own.
     */
    onSearch (allowableSearch = false, customSearchText) {
      if (!allowableSearch && this.requireAction) return;
      if (customSearchText) this.searchObject.searchString = customSearchText;
      this.searchObject.mode = this.selectedMode;
      console.log('existing location', this.location);
      this.searchObject.location = this.location;
      console.log('searchObject', this.searchObject);
      console.log('search string', this.searchObject.searchString);
      this.$emit('search', {
        ...this.searchObject,
      });
    },
    // async fetchSpecialties () {
    //   try {
    //     const { items } = await this.$sdk.service('fixtures').find({ type: 'specialty' });
    //     this.specialtiesList = items;
    //   } catch (e) {
    //     console.error(e);
    //   }
    // },
    /**
     * HandleDebouncedSearch
     *
     * There are two scenarios in handling:
     * A.
     * Displaying the results in the combobox dropdown
     * This is usually used in the landing page of the directory
     *
     * or
     *
     * B.
     * Displaying the results in the directory list as you type
     * Used for results page
     *
     * Both scenarios are exclusive depending on the values of
     * `showSuggestions` and `requireAction` props.
     */
    handleDebouncedSearch (searchText) {
      if (this.loading.initial && !searchText) return;
      // For A
      if (searchText && this.showSuggestions) {
        this.debouncedSuggestionsSearch(searchText);
        return;
      }
      // For B
      if (!this.requireAction) {
        if (!searchText) {
          this.clearSearchText();
          return;
        }
        this.debouncedResultsSearch(searchText);
      }
    },
    async searchSuggestions (searchText) {
      // - If location is selected, only places within that location will be suggested
      const query = {
        text: searchText,
        limit: 10,
        type: this.selectedMode,
      };
      const { items } = await unifiedDirectorySearch(this.$sdk, query);
      this.suggestionEntries = items || [];
    },
    clearSearchText () {
      this.searchObject.searchString = null;
      this.onSearch();
    },
    clearSpecialties () {
      for (let i = 0; i < this.specialtiesList.length; i++) {
        this.specialtiesList[i].selected = false;
      }
      this.searchObject.specialties = [];
    },
  },
};
</script>

<style scoped>
.active-button {
  background: #0099ee !important;
  color: white !important;
}
.tight-font {
  letter-spacing: 0px;
}
.bordered-chip {
  border: 1px solid black;
}
</style>
