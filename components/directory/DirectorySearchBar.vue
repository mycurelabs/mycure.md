<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12").pb-0
        v-row
          v-col
            v-btn-toggle(
              v-model="selectedMode"
              background-color="transparent"
              dense
              mandatory
              borderless
              @change="searchSelect"
            )
              v-btn(value="all" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font all
              v-btn(value="doctor" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font doctor
              v-btn(value="clinic" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font clinics
              v-btn(value="location" text active-class="active-button" :class="buttonGroupClasses").mr-3.tight-font location
          v-spacer
          v-col
            v-row(align="center" justify="end")
              span.font-weight-bold.font-18 Use my Location
              v-switch(v-model="locationSwitch" inset).ml-3
        v-row
          v-col.pa-0
            v-text-field(
              v-model="sea"
              :placeholder="searchPlaceholder"
              append-icon="mdi-tune-variant"
              solo
              flat
              :height="$isMobile ? '40px' : '60px'"
              @click:append="tagsSearch"
            ).rounded-bl-lg.rounded-tl-lg
              template(v-slot:prepend-inner)
                v-icon(small).mx-3 mdi-magnify
          v-col(cols="1").pa-0
            v-btn(
              v-if="!$isMobile"
              small
              block
              tile
              color="primary"
              @click="searchFacilityBtn(true)"
              :height="$isMobile ? '40px' : '60px'"
            ).elevation-0.rounded-br-lg.rounded-tr-lg
              v-icon mdi-microphone-outline

          //- v-combobox(
          //-   v-if="mode==='all'"
          //-   v-model="docSuggestionsSearchQuery"
          //-   color="white"
          //-   placeholder="Search for clinics, doctors and services"
          //-   return-object
          //-   solo
          //-   :height="$isMobile ? '40px' : '60px'"
          //-   :items="doctorsSuggestions"
          //-   :clear-icon="null"
          //-   @update:search-input="debouncedSuggestionsSearch"
          //-   @keyup.enter="searchFacilityBtn"
          //-   @change="onSelectDoctor"
          //- ).font-14.font-weight-regular.rounded-lg
          //-   template(v-slot:append)
          //-     //- v-row
          //-       //- voice search
          //-         v-btn(
          //-           icon
          //-           color="primary"
          //-         ).mx-1.pt-1
          //-           v-icon mdi-microphone
          //-     v-col(fill-height)
          //-       v-btn(
          //-         v-if="!$isMobile"
          //-         color="light-grey"
          //-         @click="searchFacilityBtn(true)"
          //-       ).elevation-0.rounded-lg
          //-         v-icon mdi-tune-variant
              //- v-col(fill-height)
              //-   v-btn(
              //-     v-if="!$isMobile"
              //-     small
              //-     block
              //-     color="primary"
              //-     @click="searchFacilityBtn(true)"
              //-   ).elevation-0.rounded-lg
              //-     v-icon mdi-microphone-outline
                //- v-icon mdi-magnify
          doctors-search-bar(
            v-if="mode==='doctor'"
          )
          clinics-search-bar(
            v-if="mode==='clinic'"
          )
          locations-search-bar(
            v-if="mode==='location'"
          )
        //- v-card(v-for="doctorName in doctorsSuggestions" :key="doctorName")
        //-   v-list-item
        //-     v-list-item-content
        //-       v-list-item-title.text-wrap {{doctorName}}
</template>

<script>
// import debounce from 'lodash/debounce';
// import NCR_CITIES from '~/assets/fixtures/ncr-cities';
// import { fetchdocanizations } from '~/services/docanizations';
// import { searchDoctors } from '~/utils/axios';
export default {
  components: {
    DoctorsSearchBar: () => import('~/components/directory/DoctorsSearchBar'),
    ClinicsSearchBar: () => import('~/components/directory/ClinicsSearchBar'),
    LocationsSearchBar: () => import('~/components/directory/LocationsSearchBar'),
  },
  props: {
    // requireAction: {
    //   type: Boolean,
    //   default: false,
    // },
    // showSuggestions: {
    //   type: Boolean,
    //   default: false,
    // },
    locationSwitch: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    // this.cities = NCR_CITIES;
    this.buttonGroupClasses = ['font-weight-semibold', 'font-16', 'black--text'];
    return {
      mode: 'all',
      selectedMode: '',
      // docSearchQuery: null,
      // docSuggestionsSearchQuery: null,
      // docSearchLocation: null,
      // doctorsSuggestions: [],
      // selectedSuggestion: null,
      // debouncedSearch: debounce(this.searchDebounce, 500),
      // debouncedSuggestionsSearch: debounce((event) => {
      //   this.handleSuggestions(event);
      // }, 500),
    };
  },
  computed: {
    searchPlaceholder () {
      switch (this.mode) {
        case 'doctor': return 'Search for doctors';
        case 'clinic': return 'Search for clinics';
        case 'location': return 'Search by location';
        default: return 'Search for clinics, doctors, and services';
      };
    },
  },
  watch: {
    // docSuggestionsSearchQuery (val) {
    //   this.searchFacility(true);
    // },
    // docSearchLocation (val) {
    //   if (!val && !this.docSearchQuery) {
    //     this.clearSearch();
    //     return;
    //   }
    //   if (this.showSuggestions && !this.$isMobile) this.handleSuggestions();
    //   this.searchFacility();
    // },
  },
  methods: {
    searchSelect () {
      console.log(this.selectedMode);
      this.mode = this.selectedMode;
    },
    tagsSearch () {
      this.$emit('tags-search', { tagSearchDialog: true });
    },
    // fullName () {
    //   return this.name.firstName;
    // },
    // searchDebounce () {
    //   if (this.requireAction) {
    //     return;
    //   };
    //   this.searchFacility();
    // },
    // handleSuggestions (searchText) {
    //   if (!searchText) return;
    //   this.docSearchQuery = searchText;
    //   this.searchSuggestions(searchText);
    // },
    // async searchSuggestions (searchText) {
    //   // - If location is selected, only places within that location will be suggested
    //   const query = {
    //     searchText,
    //     limit: 10,
    //     type: 'diagnostic-center',
    //   };
    //     const { items } = await fetchdocanizations(this.$sdk, query);
    //     this.doctorSuggestions = items || [];
    //   },
    //   async searchDoctors () {
    //   const { page, itemsPerPage } = this.doctorsTablePaginationOptions;
    //   const query = {
    //     ...this.searchObject,
    //   };
    //   if (page && itemsPerPage) {
    //     query.limit = itemsPerPage;
    //     query.skip = query.limit * (page - 1);
    //   }
    //   const { data } = await searchDoctors(query);
    //   this.doctorsSuggestions = data.map(x => x.name.firstName + ' ' + x.name.lastName);
    // },
    // searchFacility (forceSearch = false) {
    //   if (this.requireAction && !forceSearch) return;
    //   if (!this.docSearchQuery && !this.docSearchLocation) {
    //     this.clearSearch();
    //     return;
    //   }
    //   const suggestion = this.mapSuggestion();
    //   this.$emit('search-doctors', {
    //     searchText: this.docSuggestionsSearchQuery,
    //     locationText: this.docSearchLocation,
    //     ...suggestion && { suggestion },
    //   });
    // },
    // searchFacilityBtn (forceSearch = false) {
    //   if (this.requireAction && !forceSearch) return;
    //   if (!this.docSearchQuery && !this.docSearchLocation) {
    //     this.clearSearch();
    //     return;
    //   }
    //   const suggestion = this.mapSuggestion();
    //   this.$emit('search-doctors', {
    //     searchText: this.docSearchQuery,
    //     locationText: this.docSearchLocation,
    //     ...suggestion && { suggestion },
    //   });
    // },
    // clearSearch () {
    //   this.docSearchQuery = '';
    //   this.$emit('clear-doctors');
    // },
    // onSelectDoctor (doctor) {
    //   this.selectedSuggestion = doctor;
    // },
    // // - Check if suggestion satisfies location
    // mapSuggestion () {
    //   if (!this.docSearchLocation) return null;
    //   const city = this.selectedSuggestion?.address?.city;
    //   if (!city) return null;
    //   return city.includes(this.docSearchLocation)
    //     ? this.selectedSuggestion?.id
    //     : null;
    // },
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
</style>
