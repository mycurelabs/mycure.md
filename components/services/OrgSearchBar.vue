<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="11").pb-0
        v-toolbar(
          height="65"
          color="white"
          :class="{'toolbar-shadow': !$isMobile }"
        ).toolbar
          v-row.search-container.d-flex.mt-5.ml-1
            v-col.grow.search-fields.mt-2
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Facility
                v-text-field(
                  v-if="!showSuggestions || $isMobile"
                  v-model="orgSearchQuery"
                  placeholder="Search for a health facility"
                  clearable
                  solo
                  flat
                  dense
                  @click:clear="clearSearch"
                  @keyup.enter="searchFacility"
                  @input="debouncedSearch"
                ).font-14.font-weight-regular
                v-combobox(
                  v-else
                  v-model="orgSuggestionsSearchQuery"
                  color="white"
                  item-text="name"
                  placeholder="Search for a health facility"
                  clearable
                  return-object
                  solo
                  flat
                  dense
                  @click:clear="clearSearch"
                  @update:search-input="debouncedSuggestionsSearch"
                  @keyup.enter="searchFacility"
                  @change="onSelectOrganization"
                  :items="orgSuggestions"
                  :append-icon="null"
                ).font-14.font-weight-regular

            template(v-if="!$isMobile")
              v-divider(inset vertical).mt-5.mb-10
              v-col(cols="4" md="4").search-fields.mt-2
                v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Location
                  v-autocomplete(
                    placeholder="Municipality"
                    v-model="orgSearchLocation"
                    clearable
                    solo
                    flat
                    dense
                    :append-icon="null"
                    :items="cities"
                    @keyup.enter="searchFacility"
                  ).font-14.font-weight-regular
              v-col(cols="1").mt-2
                v-btn(
                  fab
                  color="primary"
                  @click="searchFacility(true)"
                ).elevation-0
                  v-icon mdi-magnify

        template(v-if="$isMobile")
          v-toolbar(
            height="65"
            color="white"
            :class="{'toolbar-shadow': !$isMobile }"
          ).toolbar.mt-5
            v-row.search-container.d-flex.mt-5.ml-1
              v-col.grow.search-fields.mt-2
                v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Location
                  v-autocomplete(
                    placeholder="Municipality"
                    v-model="orgSearchLocation"
                    clearable
                    solo
                    flat
                    dense
                    :append-icon="null"
                    :items="cities"
                    @keyup.enter="searchFacility"
                  ).font-14.font-weight-regular
          v-row(justify="end")
            v-col(cols="4")
              v-btn(
                block
                :color="mobileSearchBtnColor"
                @click="searchFacility(true)"
              ).text-none Search
</template>

<script>
import { debounce } from 'lodash';
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
    orgSearchLocation (val) {
      if (!val && !this.orgSearchQuery) {
        this.$emit('clear-organizations');
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
        this.$emit('clear-organizations');
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
