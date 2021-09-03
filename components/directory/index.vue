<template lang="pug">
  div(v-if="!loading.page").white
    //- App Bar
    v-app-bar(
      height="275"
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
            v-col(cols="12")
              nuxt-link(to="/")
                img(
                  src="~/assets/images/MYCURE Logo - black.png"
                  width="120px"
                  height="34.46px"
                  alt="MYCURE logo"
                ).ml-2.mb-5
              directory-search-bar(
                v-model="searchMode"
                @search="onSearch($event)"
              )
    results-section(
      :results-name="resultsName"
      :type="searchMode"
      :items="entries"
      :loading="loading.results"
      :pagination="resultsPagination"
      :read-only="readOnly"
      @page:update="onPagination($event)"
    )
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
// import uniqBy from 'lodash/uniqBy';
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
      },
      // Data
      entries: [],
      municipalityList: [],
      // Search
      searchMode: 'account',
      searchText: null,
      // Pagination
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
    });
  },
  methods: {
    async search ({
      searchText,
      searchMode,
    }, page = 1) {
      try {
        this.loading.results = true;
        this.searchText = searchText || this.searchText;
        this.searchMode = searchMode || this.searchMode;
        const skip = this.entriesLimit * (page - 1);
        const query = {
          type: this.searchMode,
          text: this.searchText,
          limit: this.entriesLimit,
          skip,
          // Apply filters
        };
        const { items, total } = await unifiedDirectorySearch(this.$sdk, query);

        this.entriesTotal = total;
        console.log('total', this.entriesTotal);
        const entryItems = items || [];

        this.entries = entryItems;

        if (this.searchMode === 'account' && entryItems.length) {
          const entryPromises = entryItems.map(async (entry) => {
            console.log('entry.ref.id', entry.ref.id);
            const personalDetails = await this.$sdk.service('personal-details').get(entry.ref.id);
            return personalDetails;
          });

          this.entries = await Promise.all(entryPromises);
          console.log('entries', this.entries);
          return;
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.loading.results = false;
      }
    },
    onPagination (page) {
      this.search({}, page);
    },
    async fetchMunicipalities () {
      try {
        const { items } = await this.$sdk.service('fixtures').find({ type: 'address-province' });
        this.municipalityList = items || [];
      } catch (error) {
        console.error(error);
      }
    },
    // clearOrganizationResults () {
    //   this.orgsSearchQuery = '';
    //   this.entriesPage = 1;
    //   this.fetchDoctors();
    //   this.searchQuery = null;
    // },
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
