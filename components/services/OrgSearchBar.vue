<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="11").pb-0
        v-toolbar(
          height="65"
          color="white"
        ).toolbar
          v-row.search-container.d-flex.mt-5.ml-1
            v-col.grow.search-fields.mt-2
              v-toolbar-title.font-14.ml-4.text-left.font-weight-bold Facility
                v-text-field(
                  v-model="orgSearchQuery"
                  placeholder="Search for a health facility"
                  clearable
                  solo
                  flat
                  dense
                  @click:clear="clearTextfield"
                  @keyup.enter="searchFacility"
                  @input="debouncedSearch"
                ).font-14.font-weight-regular
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
</template>
<script>
import { debounce } from 'lodash';
import NCR_CITIES from '~/assets/fixtures/ncr-cities';
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
  },
  data () {
    this.cities = NCR_CITIES;
    return {
      orgSearchQuery: null,
      orgSearchLocation: null,
      debouncedSearch: debounce(this.searchDebounce, 500),
    };
  },
  watch: {
    orgSearchLocation (val) {
      if (!val && !this.orgSearchQuery) {
        this.$emit('clear-organizations');
        return;
      }
      this.searchFacility();
    },
  },
  methods: {
    searchDebounce () {
      if (this.requireAction) return;
      this.searchFacility();
    },
    searchFacility (forceSearch = false) {
      if (forceSearch && (this.orgSearchQuery || this.orgSearchLocation)) {
        this.$emit('search-organizations', { searchText: this.orgSearchQuery, locationText: this.orgSearchLocation });
        return;
      }
      if (!this.orgSearchQuery && this.orgSearchLocation && this.requireAction) {
        return;
      }
      if (!this.orgSearchQuery && !this.orgSearchLocation) {
        this.$emit('clear-organizations');
        return;
      }
      this.$emit('search-organizations', { searchText: this.orgSearchQuery, locationText: this.orgSearchLocation });
    },
    clearTextfield () {
      this.orgSearchQuery = '';
      this.$emit('clear-organizations');
    },
  },
};
</script>

<style scoped>
.toolbar{
  border-radius: 50px;
  background-color: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.18);
}

.filter-menu {
  flex-wrap: nowrap !important;
  font-weight: 600;
}

.filter >>> .v-input__slot {
  box-shadow: none !important;
  background-color: #0369A5 !important;
  border: none !important;
}

.filter >>> label {
  font-size: 14px;
  color: #FFFFFF;
}

.filter >>> i {
  color: #FFFFFF;
}

.search-fields >>> .v-input__slot::before {
  border-style: none !important;
}

.search-select >>> .v-select__selection--comma {
  color: #FFFFFF !important;
}

.suggestion-item {
  flex: auto;
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
