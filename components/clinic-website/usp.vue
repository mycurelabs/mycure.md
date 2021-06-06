<template lang="pug">
  v-col(
    :style="!hideBanner ? backgroundStyle : null"
    :class="[searchResultsMode ? 'search-mode-container' : 'full-container', { 'mobile-height': $isMobile }]"
  )
    v-container(fluid).pa-0
      v-row(align="center" justify="center" :no-gutters="noGutters").content-container.mx-1
        v-col(cols="10" md="6").text-center
          h1(v-if="(!searchResultsMode || $isMobile) && !hideBanner" :class="{ 'font-30': $isMobile }").white--text Easily book your next visit to #[br] {{ name }}
          v-text-field(
            v-if="isInitialSearchBarVisible"
            solo
            clearable
            :placeholder="`Search ${name}’s doctors, diagnostic tests, and services`"
            v-model="searchText"
            :disabled="isPreviewMode"
            @keyup.enter="debouncedSearch"
          ).mt-3.search-bar
            template(v-slot:append)
              v-icon(color="white").search-icon mdi-magnify
        v-col(v-if="(searchResultsMode && !hideSearchBars)" cols="10" md="2")
          v-select(
            v-model="serviceType"
            :items="availableServiceTypes"
            label="Service Type"
            item-text="text"
            item-value="value"
            solo
            clearable
            :class="{ 'mt-3': !$isMobile }"
            :disabled="isPreviewMode"
            @change="onServiceTypeSelect"
            @click:clear="clearServiceFilter"
          ).search-bar
        v-col(v-if="searchResultsMode && !hideSearchBars" cols="10" md="2")
          search-insurance-contracts(
            solo
            :class="{ 'mt-3': !$isMobile }"
            :disabled="isPreviewMode"
            @select="onInsuranceSelect"
            @clear="clearInsuranceFilter"
          ).search-bar
        v-col(v-if="searchResultsMode && !hideSearchBars" cols="10" md="2" :class="{ 'mt-n4': !$isMobile }")
          date-picker-menu(
            v-model="dateFilter"
            solo
            bordered
            :disabled="isPreviewMode"
            @clear="dateFilter = null"
          )
</template>

<script>
// utils
import { debounce, isEmpty } from 'lodash';
// components
import SearchInsuranceContracts from './services/search-insurance-contracts';
import DatePickerMenu from '~/components/commons/date-picker-menu';
export default {
  components: {
    DatePickerMenu,
    SearchInsuranceContracts,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    coverURL: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: 'the health center',
    },
    orgId: {
      type: String,
      default: null,
    },
    searchResultsMode: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    hideSearchBars: {
      type: Boolean,
      default: false,
    },
    hideBanner: {
      type: Boolean,
      default: false,
    },
    noGutters: {
      type: Boolean,
      default: false,
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    this.serviceTypeMappings = {
      'clinical-consultation': { text: 'Consult', value: 'clinical-consultation' },
      'clinical-procedure': { text: 'Procedure', value: 'clinical-procedure' },
      lab: { text: 'Laboratory', value: 'lab' },
      imaging: { text: 'Imaging', value: 'imaging' },
      pe: { text: 'PE Package', value: 'pe' },
      dental: { text: 'Dental', value: 'dental' },
    };
    return {
      searchFilters: {},
      serviceType: null,
      dateFilter: null,
      debouncedSearch: debounce(this.search, 500),
    };
  },
  computed: {
    availableServiceTypes () {
      if (isEmpty(this.serviceTypes)) return [];
      const types = this.serviceTypes.map((type) => {
        return this.serviceTypeMappings[type];
      });
      if (!types.length) return [];
      return types;
    },
    searchText: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
    backgroundStyle () {
      const overlay = 'linear-gradient(270deg, rgba(0, 0, 0, .5), rgba(0, 0, 0, .5))';
      return { 'background-image': `${overlay}, url(${this.coverURL})` };
    },
    isInitialSearchBarVisible () {
      if (this.$isMobile && !this.searchResultsMode) return true;
      if (!this.$isMobile) return true;
      return false;
    },
  },
  watch: {
    dateFilter (val) {
      this.$emit('filter:date', val);
    },
  },
  methods: {
    search () {
      this.$emit('searchLoading', true);
      this.$emit('search', { searchText: this.searchText, searchFilters: this.searchFilters });
    },
    onServiceTypeSelect () {
      this.searchFilters = {
        ...this.searchFilters,
        type: this.serviceType === 'lab' || this.serviceType === 'imaging' ? 'diagnostic' : this.serviceType,
        subtype: this.serviceType === 'lab' || this.serviceType === 'imaging' ? this.serviceType : null,
      };
      this.search();
    },
    onInsuranceSelect (insurer) {
      this.searchFilters = {
        ...this.searchFilters,
        insurer,
      };
      this.search();
    },
    clearServiceFilter () {
      delete this.searchFilters?.type;
      delete this.searchFilters?.subtype;
      this.search();
    },
    clearInsuranceFilter () {
      delete this.searchFilters?.insurer;
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

.mobile-height {
  height: 450px !important;
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
