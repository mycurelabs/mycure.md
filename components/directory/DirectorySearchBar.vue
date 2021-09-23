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
            mandatory
            @change="onModeChange($event)"
          )
            //- v-btn(value="all" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font all
            v-btn(value="account" text active-class="active-button" :class="[$isMobile ? 'font-14' : 'font-16', ...buttonGroupClasses]").mr-3.tight-font.rounded-pill doctor
            v-btn(value="organization" text active-class="active-button" :class="[$isMobile ? 'font-14' : 'font-16', ...buttonGroupClasses]").mr-3.tight-font.rounded-pill clinics
              //- v-btn(value="location" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill location
          v-spacer
          v-col(v-if="isOrganization" :cols="$isMobile ? '12' : null")
            v-row(align="start" :justify="$isMobile ? 'start' : 'end'" :class="{'mt-3': $isMobile}")
              span.font-weight-bold.font-14.mt-1 USE MY LOCATION
              v-progress-circular(indeterminate size="20" v-if="loadingLocation" color="primary").pl-1
              v-switch(
                v-else
                v-model="locationSwitch"
                inset
              ).ml-3.mt-0
          v-col(v-else)
            br
        v-row.pt-2
          v-col.pa-0
            v-combobox(
              v-model="searchObject.searchString"
              :placeholder="searchPlaceholder"
              solo
              outlined
              flat
              dense
              clearable
              :items="suggestionEntries"
              item-text="name"
              cache-items
              :search-input.sync="searchDummy"
              :height="$isMobile ? '40px' : '60px'"
              :return-object="false"
              @keyup.enter="onSearch(true)"
              @click:clear="clearSearchText"
              @update:search-input="handleDebouncedSearch($event)"
            ).rounded-lg
              template(slot="append")
                v-btn(
                  :small="!$isMobile"
                  :x-small="$isMobile"
                  fab
                  color="primary"
                  @click="onSearch(true)"
                ).elevation-0
                  v-icon mdi-magnify
              template(v-slot:item="data")
                v-col(cols="12")
                  v-row.py-3
                    v-col.mc-content-set-4
                      v-row
                        v-col.py-0
                          span.font-weight-semibold {{ data.item.name }}
                      v-row
                        v-col.pb-0
                          v-row.px-3
                            v-icon(color="primary" small) mdi-medical-bag
                            span(:class="{'font-italic': !data.item.tags}") &nbsp;{{ data.item.tags? tagFormat(data.item.tags[0]) : 'Not Available'  }}
                        v-col.pb-0
                          v-row.px-3
                            v-icon(color="primary" small) mdi-map-marker
                            span(:class="{'font-italic': !data.item.location}") &nbsp;{{ searchObject.mode === 'account' ? (data.item.location || 'Not Available') : ((formatAddress(data.item.address) || 'Not Available')) }}
                        v-spacer
                    v-icon(color="primary" large) mdi-arrow-right
        v-row
          //- Service Type Filter
          v-col(v-if="searchObject.mode === 'organization'" cols="12" md="5" lg="4").pa-0
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
              prepend-inner-icon="mdi-filter"
              :items="serviceTypes"
              @change="onSearch(false)"
            )
          //- Specialization
          v-col(
            v-if="showSpecializationsField" cols="12" md="5" lg="4"
            :class="{'pl-1 py-0 pr-0': searchObject.mode === 'organization', 'pa-0': searchObject.mode === 'account'}"
          )
            v-autocomplete(
              v-model="searchObject.specializations"
              label="Specializations"
              prepend-inner-icon="mdi-filter"
              solo
              outlined
              flat
              dense
              multiple
              chips
              small-chips
              deletable-chips
              clearable
              :menu-props="{ bottom: true }"
              :items="specialtiesList"
              @change="onSearch(false)"
            )
              template(v-slot:selection="{ item, index }")
                v-clamp(
                  v-if="index === 0"
                  autoresize
                  :max-lines="1"
                ) {{ item }}
                span(
                  v-if="index === 1"
                  class="grey--text text-caption"
                ) (+{{ searchObject.specializations.length - 1 }} others)
</template>

<script>
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import VClamp from 'vue-clamp';
import { unifiedDirectorySearch } from '~/services/unified-directory';
import SPECIALTIES from '~/assets/fixtures/specialties';
import { formatAddress } from '~/utils/formats';
export default {
  components: {
    VClamp,
  },
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
    loadingLocation: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    // this.cities = NCR_CITIES;
    this.buttonGroupClasses = ['font-weight-semibold', 'black--text'];
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
        searchString: null,
        specializations: [],
        mode: 'account',
        serviceType: null,
        location: null,
      },
      suggestionEntries: [],
      debouncedResultsSearch: debounce((event) => { this.onSearch(true, event); }, 500),
      debouncedSuggestionsSearch: debounce(this.searchSuggestions, 500),
      searchDummy: null,
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
    isOrganization () {
      return this.selectedMode === 'organization';
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
    this.searchObject.searchString = this.$route.query.searchText || '';
    if (this.selectedMode === 'account' && specializations) this.searchObject.specializations = specializations;
    if (this.selectedMode === 'organization' && serviceType) this.searchObject.serviceType = serviceType;
  },
  methods: {
    onModeChange (val) {
      this.searchObject.mode = val;
      this.searchObject.specializations = [];
      if (val === 'account' && !isEmpty(this.searchObject.location)) this.searchObject.location = null;
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
      this.searchObject.location = this.isOrganization ? this.location : null;
      this.$emit('search', {
        ...this.searchObject,
      });
    },
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
      this.searchObject.searchString = searchText;
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
    capitalizeLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    tagFormat (string) {
      let finArray = [];
      let str1 = '';
      if (string.includes('sto:') || string.includes('spc:')) str1 = string.slice(4, string.length);
      finArray = str1.split('-');
      finArray = finArray.map(x => `${x.charAt(0).toUpperCase()}${x.slice(1)}`);
      return finArray.join(' ');
    },
    formatAddress (address) {
      return formatAddress(address, 'street1, street2, city, province, region, country');
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
