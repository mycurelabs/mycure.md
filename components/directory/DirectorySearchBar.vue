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
              v-model="searchObject.searchString"
              :placeholder="searchPlaceholder"
              append-icon="mdi-tune-variant"
              solo
              flat
              :height="$isMobile ? '40px' : '60px'"
              @click:append="tagSearchDialog = true"
              @keyup.enter="emitSearch"
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
        v-row
          v-col.py-0.mt-n3
            template(v-for="(tag, index) in searchObject.specialties")
              v-chip(
                clearable
                close
                close-icon="mdi-close"
                color="white"
                @click:close="tag.selected = false; searchObject.specialties.splice(index, 1);"
              ).ma-1 {{tag.strVal}}
            //- v-btn(
            //-   v-if="searchObject.specialties.length >= 1"
            //-   text
            //-   color="primary"
            //-   @click="clearSpecialties"
            //- ).ma-1.font-12 Clear filters

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
        //- v-card(v-for="doctorName in doctorsSuggestions" :key="doctorName")
        //-   v-list-item
        //-     v-list-item-content
        //-       v-list-item-title.text-wrap {{doctorName}}
    v-dialog(
      v-model="tagSearchDialog"
      width="80%"
      height="80%"
      persistent
    )
      v-card.rounded-xl.pa-16
        v-card-text
          v-col.pa-0
            v-row.mb-2
              v-col.pa-0
                h1.font-weight-bold.black--text Filter by Services
              v-col(align="end").pa-0
                v-icon(@click="tagSearchDialog = false") mdi-close
            v-row
              p.font-18 Popular tags:
            v-row
              p.font-18 Alphabetical:
            v-row
              template(v-for="specialty in specialtiesList")
                v-chip(
                  large
                  outlined
                  :color="specialty.selected ? 'primary' : 'grey' "
                  @click="toggleChip(specialty.indexVal)"
                ).mx-1.my-2.font-weight-semibold
                  v-icon(v-if="specialty.selected" left) mdi-check
                  |{{specialty.strVal}}
</template>

<script>
// import debounce from 'lodash/debounce';
// import NCR_CITIES from '~/assets/fixtures/ncr-cities';
// import { fetchdocanizations } from '~/services/docanizations';
// import { searchDoctors } from '~/utils/axios';
import specialties from '~/assets/fixtures/specialties';
export default {
  components: {
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
      selectedMode: '',
      deleteTag: {
        removeIndex: undefined,
      },
      tagSearchDialog: false,
      searchText: null,
      searchObject: {
        searchString: '',
        specialties: [],
        mode: 'all',
      },
      specialtiesList: specialties.map((str, index) => ({ strVal: str, selected: false, indexVal: index })),
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
      switch (this.searchObject.mode) {
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
      console.log(this.searchObject.mode);
      this.searchObject.mode = this.selectedMode;
    },
    emitSearch () {
      this.$emit('enter', this.searchObject);
    },
    toggleChip (index) {
      // console.log(this.specialtiesList[index].selected);
      if (!this.specialtiesList[index].selected) {
        this.specialtiesList[index].selected = true;
        this.searchObject.specialties.push(this.specialtiesList[index]);
      } else {
        this.specialtiesList[index].selected = false;
        for (let i = 0; i < this.searchObject.specialties.length; i++) {
          if (this.specialtiesList[index].indexVal === this.searchObject.specialties[i].indexVal) {
            this.searchObject.specialties.splice(i, 1);
            console.log('weewee' + i);
          }
        };
      };
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
