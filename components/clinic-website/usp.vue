<template lang="pug">
  v-col(:style="backgroundStyle" :class="[searchResultsMode ? 'search-mode-container' : 'full-container']")
    v-container(fluid).pa-0
      v-row(align="center" justify="center").content-container.mx-1
        v-col(cols="10" md="6").text-center
          h1(v-if="!searchResultsMode" :class="{ 'font-30': $isMobile }").white--text Consult online with #[br] MYCURE Health Center today
          v-text-field(
            solo
            clearable
            placeholder="Search MYCURE Health Center’s doctors, diagnostic tests, and services"
            v-model="searchText"
            @keyup.enter="debouncedSearch"
          ).mt-3.search-bar
            template(v-slot:append)
              v-icon(color="white").search-icon mdi-magnify
        v-col(v-if="searchResultsMode" cols="10" md="2")
          v-select(
            v-model="serviceType"
            :items="serviceTypes"
            label="Service Type"
            item-text="text"
            item-value="value"
            solo
            clearable
            @change="onServiceTypeSelect"
          ).mt-3.search-bar
        v-col(v-if="searchResultsMode" cols="10" md="2")
          search-insurance-contracts.mt-3.search-bar
        v-col(v-if="searchResultsMode" cols="10" md="2")
          v-text-field(
            solo
            clearable
          ).mt-3.search-bar
</template>

<script>
// utils
import _ from 'lodash';
// components
import SearchInsuranceContracts from './services/search-insurance-contracts';

export default {
  components: {
    SearchInsuranceContracts,
  },
  props: {
    coverURL: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'Awesome Hospital',
    },
    orgId: {
      type: String,
      default: null,
    },
    searchResultsMode: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    this.serviceTypes = [
      { text: 'Consult', value: 'clinical-consultation' },
      { text: 'Laboratory', value: 'lab' },
      { text: 'Imaging', value: 'imaging' },
      { text: 'PE Package', value: 'pe' },
      { text: 'Procedure', value: 'clinical-procedure' },
    ];
    return {
      searchText: null,
      searchFilters: {},
      serviceType: null,
      debouncedSearch: _.debounce(this.search, 500),
    };
  },
  computed: {
    backgroundStyle () {
      const overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
      return { 'background-image': `${overlay}, url(${this.coverURL})` };
    },
  },
  methods: {
    search () {
      this.$emit('searchLoading', true);
      this.$emit('search', { searchText: this.searchText, searchFilters: this.searchFilters });
    },
    onServiceTypeSelect () {
      this.searchFilters = {
        type: this.serviceType === 'lab' || this.serviceType === 'imaging' ? 'diagnostic' : this.serviceType,
        subtype: this.serviceType === 'lab' || this.serviceType === 'imaging' ? this.serviceType : null,
      };
      this.search();
    },
  },
};
</script>

<style scoped>
.full-container {
  margin-top: 70px;
  padding: 0;
  width: 100%;
  height: 425px;
  background-size: cover;
  background-position: center;
}

.search-mode-container {
  padding: 0;
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.content-container {
  height: 425px;
}
.search-bar >>> .v-input__slot {
  border-radius: 0px 5px 5px 0px;
  border: 4px solid #0099CC;
  padding-right: 0 !important;
}
.search-icon {
  background-color: #0099CC;
padding: 8px;
}
</style>
