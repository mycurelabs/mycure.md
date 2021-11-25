<template lang="pug">
  v-col(
    :style="!hideBanner ? backgroundStyle : null"
    :class="{ 'mobile-height': $isMobile, 'full-container': !hideBanner }"
  )
    v-container(fluid).pa-0
      v-row(align="center" justify="center" :no-gutters="noGutters" :class="{'content-container': !hideBanner}").mx-1
        v-col(cols="10" :md="!hideBanner ? '6' : '12'").text-center
          h1(v-if="!hideBanner" :class="{ 'font-30': $isMobile }").white--text Easily book your next visit to #[br] {{ name }}
          v-text-field(
            v-if="hasSearchables"
            solo
            clearable
            :placeholder="`Search ${name}’s doctors, diagnostic tests, and services`"
            v-model="searchText"
            :disabled="isPreviewMode"
            @keyup.enter="debouncedSearch"
          ).mt-3.search-bar
            template(v-slot:append)
              v-icon(color="white").search-icon {{ mdiMagnify }}
</template>

<script>
// utils
import { mdiMagnify } from '@mdi/js';
import debounce from 'lodash/debounce';
export default {
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
    hasServices: {
      type: Boolean,
      default: false,
    },
    hasDoctors: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      debouncedSearch: debounce(this.search, 500),
      mdiMagnify,
    };
  },
  computed: {
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
    hasSearchables () {
      return this.hasServices || this.hasDoctors;
    },
  },
  methods: {
    search () {
      this.$emit('searchLoading', true);
      this.$emit('search', { searchText: this.searchText, searchFilters: this.searchFilters });
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
  border-radius: 5px 5px 5px 5px;
  border: 4px solid #0099CC;
  padding-right: 0 !important;
}
.search-icon {
  background-color: #0099CC;
padding: 8px;
}
</style>
