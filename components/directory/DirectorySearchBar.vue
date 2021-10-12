<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(:cols="appBar ? '12' : '9'").pb-0
        v-row
          v-btn-toggle(
            v-model="selectedMode"
            background-color="transparent"
            dense
            borderless
            mandatory
            @change="onModeChange($event)"
          ).mb-4
            //- v-btn(value="all" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font all
            v-btn(
              value="account"
              text active-class="active-button"
              :disabled="appBar && loadingResults"
              :class="[$isMobile ? 'font-14' : 'font-16', ...buttonGroupClasses]"
            ).mr-3.tight-font.rounded-pill doctor
            v-btn(
              value="organization"
              text active-class="active-button"
              :disabled="appBar && loadingResults"
              :class="[$isMobile ? 'font-14' : 'font-16', ...buttonGroupClasses]"
            ).mr-3.tight-font.rounded-pill clinics
              //- v-btn(value="location" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font.rounded-pill location
          v-spacer
          v-col(v-if="isOrganization" :cols="$isMobile ? '12' : null")
            v-row(align="start" :justify="$isMobile ? 'start' : 'end'" :class="{'mt-3': $isMobile}")
              span.font-weight-bold.font-14.mt-1 USE LOCATION
              v-progress-circular(indeterminate size="20" v-if="loadingLocation" color="secondary").pl-1
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
              autofocus
              :items="suggestionEntries"
              item-text="name"
              :search-input.sync="searchDummy"
              :height="$isMobile ? '40px' : '60px'"
              :return-object="false"
              :menu-props="{ bottom: true, offsetY: true }"
              @keyup.enter="onSearch(true)"
              @click:clear="clearSearchText"
              @update:search-input="handleDebouncedSearch($event)"
            ).rounded-lg
              template(slot="append")
                v-btn(
                  :small="!$isMobile"
                  :x-small="$isMobile"
                  fab
                  color="secondary"
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
                      v-row(v-if="selectedMode === 'account'")
                        v-col.pb-0
                          v-row.px-3
                            v-icon(color="secondary" small) mdi-medical-bag
                            span(:class="{'font-italic': !data.item.tags}") &nbsp;{{ data.item.tags? tagFormat(data.item.tags[0]) : 'No specialty listed'  }}
                        //- TODO: Location search not yet applicable for doctor
                        //- v-col.pb-0
                        //-   v-row.px-3
                        //-     v-icon(color="secondary" small) mdi-map-marker
                        //-     span(:class="{'font-italic': !data.item.location}") &nbsp;{{ searchObject.mode === 'account' ? (data.item.location || 'Not Available') : ((formatAddress(data.item.address) || 'Not Available')) }}
                        v-spacer
                    v-icon(color="secondary" large) mdi-arrow-right
        v-row(:justify="appBar? 'start' : 'center'")
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
            v-text-field(
              v-model="specialtiesDisplay"
              placeholder="Specializations"
              prepend-inner-icon="mdi-filter"
              outlined
              dense
              :disabled="dialog"
              @click="dialog = true"
            )
              template(slot="append")
                v-icon(
                  v-if="searchObject.specializations.length > 0"
                  @click="searchObject.specializations = []; onSearch(false)"
                ) mdi-close
    v-dialog(v-model="dialog" width="600" height="100%" @click:outside="onSearch(false)")
      v-card.pa-5
        v-card-title
          v-row
            v-col
              h2 Filter by Specialization
            v-col(cols="1" align-self="center").pa-0
              v-icon(large @click="dialog = false; onSearch(false)") mdi-close
        v-card-subtitle.pt-3.pb-0
          v-row.pa-3.mt-1
            v-text-field(
              v-model="searchTagText"
              placeholder="Search"
              outlined
              dense
            )
            v-btn(
              v-if="searchObject.specializations.length > 0"
              color="secondary"
              text
              @click="searchObject.specializations = []"
            ).font-12 CLEAR FILTERS
        v-card-text
          div(v-for="(tag, key) in specialtiesList" :key="key")
            v-checkbox(
              v-if="searchTagText ? tagSearch(tag, searchTagText) : true"
              v-model="searchObject.specializations"
              :value="tag"
              :label="tag"
            ).ma-0
    //- Map Dialog
    v-dialog(v-model="mapDialog" width="600")
      map-picker(
        :address="address"
        @resolve="onLocationPick"
        @close="onMapDialogClose"
      )
</template>

<script>
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import VClamp from 'vue-clamp';
import { unifiedDirectorySearch } from '~/services/unified-directory';
import { formatAddress } from '~/utils/formats';
import SPECIALTIES from '~/assets/fixtures/specialties';
import MapPicker from '~/components/commons/MapPicker';
export default {
  components: {
    MapPicker,
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
    locationKM: {
      type: Number,
      default: 5,
    },
    loadingLocation: {
      type: Boolean,
      default: false,
    },
    address: {
      type: Object,
      default: null,
    },
    loadingResults: {
      type: Boolean,
      default: true,
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
      // - Map Dialog
      mapDialog: false,
      searchDummy: null,
      dialog: false,
      searchTagText: null,
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
        console.log('location', !!this.location);
        return !!this.location;
      },
      set (val) {
        if (!val) {
          this.searchObject.location = null;
          this.$emit('clear:location');
          return;
        }
        this.mapDialog = true;
        // this.$emit('update:locationSwitch', val);
      },
    },
    specialtiesDisplay () {
      const output = this.searchObject.specializations[0] || null;
      let etc = '';
      if (this.searchObject.specializations.length > 1) {
        etc = ` +${this.searchObject.specializations.length - 1} others`;
      }
      return output ? `${output}${etc}` : null;
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
      this.suggestionEntries = [];
      this.searchObject.mode = val;
      this.searchObject.specializations = [];
      this.searchObject.serviceType = null;
      if (val === 'account' && !isEmpty(this.searchObject.location)) this.searchObject.location = null;
      this.selectedMode = val;
      this.searchTagText = null;
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
      // - Record search event
      this.$gtag.event('search', {
        event_category: 'directory',
        event_label: `${this.selectedMode} search`,
      });
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
      if (!searchText) this.suggestionEntries = [];
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
      this.suggestionEntries = [];
      this.onSearch();
    },
    clearSpecialties () {
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
    tagSearch (text1, text2) {
      const textBase = text1.toLowerCase();
      const textSearch = text2.toLowerCase();
      return textBase.includes(textSearch);
    },
    onLocationPick (address) {
      if (!address) return null;
      this.$emit('select:location', address);
    },
    onMapDialogClose (hasAddress) {
      this.mapDialog = false;
      if (!hasAddress) {
        this.searchObject.location = null;
        this.$emit('clear:location');
      }
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
