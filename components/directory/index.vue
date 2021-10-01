<template lang="pug">
  div(v-if="!loading.page").white
    //- App Bar
    v-app-bar(
      :height="$isMobile ? (searchMode ==='account' ? '240' : '305') : '290'"
      app
      color="white"
      elevate-on-scroll
    )
      v-container
        v-row(justify="center")
          generic-panel(
            :column="$isMobile ? 12 : 10"
            disable-parent-padding
          )
            v-col(cols="12" :class="{'pa-0': $isMobile}")
              nuxt-link(to="/")
                img(
                  src="~/assets/images/MYCURE Logo - black.png"
                  width="120px"
                  height="34.46px"
                  alt="MYCURE logo"
                ).mb-2
              directory-search-bar(
                app-bar
                :mode="searchMode"
                :location="location"
                @search="onSearch($event)"
                @update:mode="onSearch($event)"
                @update:locationSwitch="onLocationSwitchUpdate($event)"
              )
    results-section(
      :results-name="resultsName"
      :type="searchMode"
      :items="entries"
      :loading="loading.results"
      :pagination="resultsPagination"
      :read-only="readOnly"
      @page:update="onPagination($event)"
    )#resultsSection
    //- Snack bar
    v-snackbar(
      v-model="showSnack"
      :color="snackbarModel.color"
    ) {{ snackbarModel.text }}
</template>

<script>
import VueScrollTo from 'vue-scrollto';
// import intersection from 'lodash/intersection';
import isEqual from 'lodash/isEqual';
import ResultsSection from './ResultsSection';
import DirectoryAppBar from '~/components/directory/DirectoryAppBar';
import DirectorySearchBar from '~/components/directory/DirectorySearchBar';
import { unifiedDirectorySearch } from '~/services/unified-directory';

export default {
  components: {
    DirectoryAppBar,
    DirectorySearchBar,
    ResultsSection,
  },
  props: {
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      // UI State
      loading: {
        page: true,
        results: false,
        location: false,
      },
      // Snack Bar
      showSnack: false,
      snackbarModel: {
        color: null,
        text: '',
      },
      // Data
      entries: [],
      municipalityList: [],
      // Search
      searchMode: 'account',
      searchText: null,
      specializationFilters: [],
      serviceType: null,
      // === Location ====
      // - Coordinates
      location: null,
      // === Pagination ====
      entriesTotal: 0,
      entriesPage: 1,
      entriesLimit: 12,
    };
  },
  computed: {
    resultsPagination () {
      return {
        page: this.entriesPage,
        itemsTotal: this.entriesTotal,
        totalVisible: 9,
        itemsLength: this.entriesLength,
      };
    },
    resultsName () {
      switch (this.searchMode) {
        case 'account': return 'doctor';
        case 'organization': return 'organization';
        default: return 'results';
      }
    },
    entriesLength () {
      return Math.ceil(this.entriesTotal / this.entriesLimit) || 0;
    },
    buttonSize () {
      const size = { xs: 'small', sm: 'large', lg: 'large', xl: 'x-large' }[this.$vuetify.breakpoint.name];
      return size ? { [size]: true } : {};
    },
    iconSize () {
      const size = this.$vuetify.breakpoint.name !== 'xs' && this.$vuetify.breakpoint.name !== 'sm' ? 'medium' : 'small';
      return { [size]: true };
    },
  },
  // watch: {
  //   async entriesPage (val) {
  //     await this.fetchDoctors(this.orgsSearchQuery, val);
  //     VueScrollTo.scrollTo('#org-results', 500, { offset: -250, easing: 'ease' });
  //   },
  // },
  async mounted () {
    this.loading.page = false;
    await this.search({
      searchText: this.$route.query.searchText,
      searchMode: this.$route.query.searchMode,
      specializations: this.$route.params.specializations,
      serviceType: this.$route.params.serviceType,
      location: this.$route.params.location,
    });
  },
  methods: {
    async search ({
      searchText,
      searchMode,
      specializations,
      serviceType,
      location,
    }, page = 1) {
      try {
        this.loading.results = true;
        this.searchText = searchText;
        this.searchMode = searchMode || this.searchMode;
        this.specializationFilters = specializations || [];
        this.location = location;
        this.entriesPage = page;
        const skip = this.entriesLimit * (page - 1);
        const query = {
          type: this.searchMode,
          text: this.searchText,
          limit: this.entriesLimit,
          skip,
          // Apply filters
          ...(serviceType || specializations) && { tags: this.composeTags(serviceType, specializations) },
          // Apply location
          ...location && { location: this.location },
        };
        const { items, total } = await unifiedDirectorySearch(this.$sdk, query);

        this.entriesTotal = total;
        const entryItems = items || [];

        VueScrollTo.scrollTo('#resultsSection', 500, { easing: 'ease' });

        // If no items fetched, clear
        if (!this.entriesTotal) {
          this.entries = [];
          return;
        }

        // - Fetch Account details
        if (this.searchMode === 'account' && entryItems.length) {
          const entryPromises = entryItems.map(async (entry) => {
            const personalDetails = await this.$sdk.service('personal-details').get(entry.ref.id);
            return personalDetails;
          });

          const doctors = await Promise.all(entryPromises);
          this.entries = doctors;
          return;
        }

        // Fetch Org Details
        if (this.searchMode === 'organization' && entryItems.length) {
          const entryPromises = entryItems.map(async (entry) => {
            const orgDetails = await this.$sdk.service('organizations').get(entry.ref.id);
            return { ...orgDetails, tags: entry.tags };
          });
          this.entries = await Promise.all(entryPromises);
          return;
        }
      } catch (e) {
        console.error(e);
        this.enqueueSnack({
          color: 'error',
          message: e.message,
        });
      } finally {
        this.loading.results = false;
      }
    },
    onSearch (searchOpts = {}) {
      const { searchString, mode, specializations, serviceType, location } = searchOpts;
      const searchObject = {
        ...searchString && { searchText: searchString },
        searchMode: mode,
      };
      // update route queries
      if (!isEqual(searchObject, this.$route.query)) {
        this.$router.replace({ query: null });
        this.$router.replace({ query: searchObject });
      }
      // search
      this.search({
        ...searchObject,
        specializations,
        serviceType,
        location,
      });
    },
    composeTags (serviceType, specializations) {
      const tags = [];
      if (serviceType) {
        tags.push(`sto:${['lab', 'imaging'].includes(serviceType) ? 'diagnostic/' : ''}${serviceType}`);
      }
      if (specializations?.length) {
        specializations.map(s => tags.push(`spc:${s.replace(/\s+/g, '-').toLowerCase()}`));
      }
      return tags;
    },
    onPagination (page) {
      if (page === this.entriesPage) return;
      this.search({
        searchText: this.searchText,
        serviceType: this.serviceType,
        specializations: this.specializationFilters,
        location: this.location,
      }, page);
    },
    onLocationSwitchUpdate (val) {
      if (!val) {
        this.location = null;
        this.search({
          searchText: this.searchText,
          serviceType: this.serviceType,
          specializations: this.specializationFilters,
          location: this.location,
        });
        return;
      }
      if (val && !this.location) this.getLocation();
    },
    async getLocation () {
      try {
        this.loading.results = true;
        await this.$getLocation()
          .then((coordinates) => {
            if (!coordinates) return;
            this.location = {
              lat: coordinates.lat,
              lng: coordinates.lng,
            };
            this.search({
              searchText: this.searchText,
              serviceType: this.serviceType,
              specializations: this.specializationFilters,
              location: this.location,
            });
          });
      } catch (e) {
        console.error(e);
        this.enqueueSnack({
          color: 'error',
          message: 'Failed to retrieve your location',
        });
      }
    },
    enqueueSnack ({ color, message }) {
      this.snackbarModel.color = color;
      this.snackbarModel.text = message;
      this.showSnack = true;
    },
  },
};
</script>

<style scoped>

 .fixed-container{
  position: fixed;
  z-index: 99;
  width: 100%;
  left: 0px;
  top: 0px;

  /* background: linear-gradient(180deg, #EBEDFF 0%, #F7E8E6 100%); */
}
</style>
