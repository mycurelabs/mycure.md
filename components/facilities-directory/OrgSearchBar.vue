<template lang="pug">
  v-container
    v-row(justify="end" align="center")
      v-col(cols="12" sm="5").pb-0.mb-n5
        v-combobox(
          v-model="orgSuggestionsSearchQuery"
          :background-color="$isMobile ? '#e5e5e5' : 'white' "
          item-text="name"
          placeholder="Search for clinics"
          return-object
          solo
          :height="$isMobile ? '40px' : '60px'"
          rounded
          @update:search-input="debouncedSuggestionsSearch"
          @keyup.enter="searchFacility"
          @change="onSelectOrganization"
          :items="orgSuggestions"
          :clear-icon="null"
        ).font-14.font-weight-regular
          template(v-slot:append)
            v-row
              v-btn(
                icon
                color="primary"
              ).mx-1.pt-1
                v-icon mdi-microphone
      v-spacer(v-if="!$isMobile")
      v-col(cols="5" sm="3").search-fields.mb-n5
        v-autocomplete(
          placeholder="Location"
          v-model="orgSearchLocation"
          :background-color="$isMobile ? '#e5e5e5' : 'white' "
          :height="$isMobile ? '40px' : '60px'"
          rounded
          solo
          dense
          :white--text="$isMobile"
          :append-icon="null"
          :items="cities"
          @keyup.enter="searchFacility"
        ).font-14.font-weight-regular.mt-2
</template>

<script>
import debounce from 'lodash/debounce';
import NCR_CITIES from '~/assets/fixtures/ncr-cities';
import { fetchOrganizations } from '~/services/organizations';
export default {
  props: {
    provinces: {
      type: Array,
      default: () => ([]),
    },
    requireAction: {
      type: Boolean,
      default: false,
    },
    showSuggestions: {
      type: Boolean,
      default: false,
    },
    mobileSearchBtnColor: {
      type: String,
      default: 'primary',
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
    };
  },
  watch: {
    orgSuggestionsSearchQuery (val) {
      this.searchFacility();
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
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
}

.toolbar-shadow {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}

.search-fields >>> .v-input__slot::before {
  border-style: none !important;
}

.search-select >>> .v-select__selection--comma {
  color: #FFFFFF !important;
}

@media screen and (max-width: 1269px) {
  .search-container {
    margin-right: -5px;
  }
}
@media screen and (min-width: 1270px) {
  .search-container {
    margin-right: -20px;
  }
}
</style>
