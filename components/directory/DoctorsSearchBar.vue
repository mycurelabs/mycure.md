<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="11").pb-0
        v-combobox(
          v-model="docSuggestionsSearchQuery"
          color="white"
          placeholder="Search for doctors"
          return-object
          solo
          rounded
          :height="$isMobile ? '40px' : '60px'"
          :items="doctorsSuggestions"
          :clear-icon="null"
          @update:search-input="debouncedSuggestionsSearch"
          @keyup.enter="searchFacilityBtn"
          @change="onSelectDoctor"
        ).font-14.font-weight-regular
          template(v-slot:append)
            v-row
              //- voice search
                v-btn(
                  icon
                  color="primary"
                ).mx-1.pt-1
                  v-icon mdi-microphone
              v-btn(
                v-if="!$isMobile"
                fab
                small
                color="primary"
                @click="searchFacilityBtn(true)"
              ).elevation-0
                v-icon mdi-magnify
        //- v-card(v-for="doctorName in doctorsSuggestions" :key="doctorName")
        //-   v-list-item
        //-     v-list-item-content
        //-       v-list-item-title.text-wrap {{doctorName}}
</template>

<script>
import debounce from 'lodash/debounce';
import NCR_CITIES from '~/assets/fixtures/ncr-cities';
// import { fetchdocanizations } from '~/services/docanizations';
import { searchDoctors } from '~/utils/axios';
export default {
  props: {
    requireAction: {
      type: Boolean,
      default: false,
    },
    showSuggestions: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.cities = NCR_CITIES;
    return {
      docSearchQuery: null,
      docSuggestionsSearchQuery: null,
      docSearchLocation: null,
      doctorsSuggestions: [],
      selectedSuggestion: null,
      debouncedSearch: debounce(this.searchDebounce, 500),
      debouncedSuggestionsSearch: debounce((event) => {
        this.handleSuggestions(event);
      }, 500),
    };
  },
  watch: {
    docSuggestionsSearchQuery (val) {
      this.searchFacility(true);
    },
    docSearchLocation (val) {
      if (!val && !this.docSearchQuery) {
        this.clearSearch();
        return;
      }
      if (this.showSuggestions && !this.$isMobile) this.handleSuggestions();
      this.searchFacility();
    },
  },
  methods: {
    fullName () {
      return this.name.firstName;
    },
    searchDebounce () {
      if (this.requireAction) {
        return;
      };
      this.searchFacility();
    },
    handleSuggestions (searchText) {
      if (!searchText) return;
      this.docSearchQuery = searchText;
      this.searchSuggestions(searchText);
    },
    async searchSuggestions (searchText) {
      // - If location is selected, only places within that location will be suggested
      const query = {
        searchText,
        // limit: 10,
        // type: 'diagnostic-center',
      };
      //   const { items } = await fetchdocanizations(this.$sdk, query);
      //   this.doctorSuggestions = items || [];
      // },
      // async searchDoctors () {
      // const { page, itemsPerPage } = this.doctorsTablePaginationOptions;
      // const query = {
      //   ...this.searchObject,
      // };
      // if (page && itemsPerPage) {
      //   query.limit = itemsPerPage;
      //   query.skip = query.limit * (page - 1);
      // }
      const { data } = await searchDoctors(query);
      this.doctorsSuggestions = data.map(x => x.name.firstName + ' ' + x.name.lastName);
    },
    searchFacility (forceSearch = false) {
      if (this.requireAction && !forceSearch) return;
      if (!this.docSearchQuery && !this.docSearchLocation) {
        this.clearSearch();
        return;
      }
      const suggestion = this.mapSuggestion();
      this.$emit('search-doctors', {
        searchText: this.docSuggestionsSearchQuery,
        locationText: this.docSearchLocation,
        ...suggestion && { suggestion },
      });
    },
    searchFacilityBtn (forceSearch = false) {
      if (this.requireAction && !forceSearch) return;
      if (!this.docSearchQuery && !this.docSearchLocation) {
        this.clearSearch();
        return;
      }
      const suggestion = this.mapSuggestion();
      this.$emit('search-doctors', {
        searchText: this.docSearchQuery,
        locationText: this.docSearchLocation,
        ...suggestion && { suggestion },
      });
    },
    clearSearch () {
      this.docSearchQuery = '';
      this.$emit('clear-doctors');
    },
    onSelectDoctor (doctor) {
      this.selectedSuggestion = doctor;
    },
    // - Check if suggestion satisfies location
    mapSuggestion () {
      if (!this.docSearchLocation) return null;
      const city = this.selectedSuggestion?.address?.city;
      if (!city) return null;
      return city.includes(this.docSearchLocation)
        ? this.selectedSuggestion?.id
        : null;
    },
  },
};
</script>

<style scoped>
</style>
