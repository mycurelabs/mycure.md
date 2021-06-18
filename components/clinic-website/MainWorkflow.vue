<template lang="pug">
  div
    search-panel(
      v-model="searchText"
      :search-results-mode="searchResultsMode"
      :name="clinicName"
      :org-id="orgId"
      :coverURL="coverURL"
      :is-preview-mode="isPreviewMode"
      :service-types="serviceTypes"
      :hide-banner="hideBanner"
      @search="onSearch"
      style="margin-top: 12px;"
    )
    div#services-panel
      v-container
        v-row(justify="center")
          generic-panel(:column="fullWidth ? '12' : '10'" :row-bindings="{ justify: 'center' }")
            //- Content Area
            v-col(
              v-if="!searchResultsMode"
              cols="12"
              :md="!serviceTypes.length ? '12' : '8'"
              :xl="!serviceTypes.length ? '12' : '7'"
              :class="{ 'order-first': $isMobile, 'order-last': !$isMobile }"
            )
              service-types-mobile-selection(
                v-if="!mobileServicesListView && $isMobile"
                :service-types="serviceTypes"
                :has-doctors="hasDoctors"
                :is-preview-mode="isPreviewMode"
                @select="activeTab = $event; mobileServicesListView = true"
              )
              services-list(
                v-else-if="showServiceTabs"
                v-model="activeTab"
                :show-back-button="$isMobile"
                :items="items"
                :items-pagination-length="itemsPaginationLength"
                :organization="orgId"
                :loading="loading"
                :has-next-page="hasNextPage"
                :has-previous-page="hasPreviousPage"
                :has-doctors="hasDoctors"
                :is-preview-mode="isPreviewMode"
                :service-types="serviceTypes"
                :search-results-mode="searchResultsMode"
                @back="mobileServicesListView = false"
                @paginate="onPaginate($event)"
              )
            //- Selection Area
            v-col(
              cols="12"
              :md="searchResultsMode ? '3' : '4'"
              :xl="searchResultsMode ? '2' : '3'"
            )
              service-types-selection(
                v-if="!$isMobile && !searchResultsMode"
                v-model="activeTab"
                :service-types="serviceTypes"
                :has-doctors="hasDoctors"
                :is-preview-mode="isPreviewMode"
                @select="activeTab = $event"
              )
              v-btn(
                v-if="searchResultsMode && !$isMobile"
                tile
                outlined
                color="primary"
                @click="$emit('back')"
              ).text-none
                v-icon(small left) mdi-arrow-left
                | Go back to Main Page
            v-col(
              cols="12"
              :md="!serviceTypes.length ? '12' : '9'"
              :xl="!serviceTypes.length ? '12' : '8'"
              v-if="searchResultsMode"
            )#services
              services-search-results(
                :organization="orgId"
                :loading="loading"
                :items="searchResults"
                :is-preview-mode="isPreviewMode"
                :service-types="serviceTypes"
                @search="onSearch({ searchText, ...$event})"
                @filter:date="$emit('filter:date', $event)"
              )
</template>

<script>
import ServicesSearchResults from './services/search-results';
import ServicesList from './services/ServicesList';
import ServiceTypesMobileSelection from './services/service-types-mobile-selection';
import ServiceTypesSelection from './services/service-types-selection';
import SearchPanel from './SearchPanel';
import GenericPanel from '~/components/generic/GenericPanel';
export default {
  components: {
    GenericPanel,
    ServicesSearchResults,
    ServicesList,
    ServiceTypesMobileSelection,
    ServiceTypesSelection,
    SearchPanel,
  },
  props: {
    organization: {
      type: Object,
      default: () => ({}),
    },
    loading: {
      type: Boolean,
      default: false,
    },
    isPreviewMode: {
      type: Boolean,
      default: false,
    },
    searchResultsMode: {
      type: Boolean,
      default: false,
    },
    // - Items filtered through search
    searchResults: {
      type: Array,
      default: () => ([]),
    },
    serviceTypes: {
      type: Array,
      default: () => ([]),
    },
    hasDoctors: {
      type: Boolean,
      default: false,
    },
    // - All items by service type
    items: {
      type: Array,
      default: () => ([]),
    },
    itemsPaginationLength: {
      type: Number,
      default: 0,
    },
    // - Next page for items
    hasNextPage: {
      type: Boolean,
      default: false,
    },
    // - Previous page for items
    hasPreviousPage: {
      type: Boolean,
      default: false,
    },
    // - Hide search bar and banner
    hideBanner: {
      type: Boolean,
      default: false,
    },
    // - Make component occupy full 12 cols of generic panel
    fullWidth: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      // - UI State
      mobileServicesListView: false,
      // - Data Models
      activeTab: 'lab',
      // - Search
      searchText: null,
    };
  },
  computed: {
    orgId () {
      return this.organization.id;
    },
    clinicName () {
      return this.organization.name;
    },
    coverURL () {
      return this.organization.coverURL || require('~/assets/images/clinics-website/usp-background.png');
    },
    showServiceTabs () {
      if (this.$isMobile && this.mobileServicesListView) return true;
      if (!this.$isMobile && !this.searchResultsMode) return true;
      return false;
    },
  },
  watch: {
    activeTab (val) {
      this.onPaginate();
    },
  },
  methods: {
    onSearch (searchObject) {
      this.$emit('search', searchObject);
    },
    onPaginate (page = 1) {
      this.$emit('paginate', { tab: this.activeTab, page });
    },
  },
};
</script>
