<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="11").pb-0
        v-combobox(
          v-model="orgSuggestionsSearchQuery"
          color="white"
          item-text="name"
          placeholder="Search for clinics"
          return-object
          solo
          rounded
          :height="$isMobile ? '40px' : '60px'"
          :items="orgSuggestions"
          :clear-icon="null"
          @update:search-input="debouncedSuggestionsSearch"
          @keyup.enter="searchFacilityBtn"
          @change="onSelectOrganization"
        ).font-14.font-weight-regular
          template(v-slot:append)
              v-btn(
                v-if="!$isMobile"
                fab
                small
                color="primary"
                @click="searchFacilityBtn(true)"
              ).elevation-0
                v-icon {{ mdiMagnify }}
</template>

<script>
import debounce from 'lodash/debounce';
import { mdiMagnify } from '@mdi/js';
import NCR_CITIES from '~/assets/fixtures/ncr-cities';
import { fetchOrganizations } from '~/services/organizations';
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
      orgSearchQuery: null,
      orgSuggestionsSearchQuery: null,
      orgSearchLocation: null,
      orgSuggestions: [],
      selectedSuggestion: null,
      debouncedSearch: debounce(this.searchDebounce, 500),
      debouncedSuggestionsSearch: debounce((event) => {
        this.handleSuggestions(event);
      }, 500),
      mdiMagnify,
    };
  },
  watch: {
    orgSuggestionsSearchQuery (val) {
      this.searchFacility(true);
    },
    orgSearchLocation (val) {
      if (!val && !this.orgSearchQuery) {
        this.clearSearch();
        return;
      }
      if (this.showSuggestions && !this.$isMobile) this.handleSuggestions();
      this.searchFacility();
    },
  },
  methods: {
    searchDebounce () {
      if (this.requireAction) {
        return;
      };
      this.searchFacility();
    },
    handleSuggestions (searchText) {
      if (!searchText) return;
      this.orgSearchQuery = searchText;
      this.searchSuggestions(searchText);
    },
    async searchSuggestions (searchText) {
      // - If location is selected, only places within that location will be suggested
      const query = {
        searchText,
        limit: 10,
        type: 'diagnostic-center',
      };

      const { items } = await fetchOrganizations(this.$sdk, query);
      this.orgSuggestions = items || [];
    },
    searchFacility (forceSearch = false) {
      if (this.requireAction && !forceSearch) return;
      if (!this.orgSearchQuery && !this.orgSearchLocation) {
        this.clearSearch();
        return;
      }
      const suggestion = this.mapSuggestion();
      this.$emit('search-organizations', {
        searchText: this.orgSuggestionsSearchQuery.name,
        locationText: this.orgSearchLocation,
        ...suggestion && { suggestion },
      });
    },
    searchFacilityBtn (forceSearch = false) {
      if (this.requireAction && !forceSearch) return;
      if (!this.orgSearchQuery && !this.orgSearchLocation) {
        this.clearSearch();
        return;
      }
      const suggestion = this.mapSuggestion();
      this.$emit('search-organizations', {
        searchText: this.orgSearchQuery,
        locationText: this.orgSearchLocation,
        ...suggestion && { suggestion },
      });
    },
    clearSearch () {
      this.orgSearchQuery = '';
      this.$emit('clear-organizations');
    },
    onSelectOrganization (organization) {
      this.selectedSuggestion = organization;
    },
    // - Check if suggestion satisfies location
    mapSuggestion () {
      if (!this.orgSearchLocation) return null;
      const city = this.selectedSuggestion?.address?.city;
      if (!city) return null;
      return city.includes(this.orgSearchLocation)
        ? this.selectedSuggestion?.id
        : null;
    },
  },
};
</script>

<style scoped>
</style>
