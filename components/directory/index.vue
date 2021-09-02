<template lang="pug">
  div(v-if="!loading.page")
    v-container.mb-5.fixed-container
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
              ).mt-8.ml-2.mb-5
      v-row(justify="center")
        generic-panel(
          :column="$isMobile ? 12 : 10"
          disable-parent-padding
        )
          v-col(cols="12")
            v-row(align="center" justify="center").my-6
              directory-search-bar(
                v-model="searchMode"
                @search="onSearch($event)"
              )
    results-section(
      section-title="Doctors"
      type="doctor"
      :items="entries"
      :loading="loading.results"
      :pagination="resultsPagination"
      :read-only="readOnly"
    )
</template>

<script>
// import VueScrollTo from 'vue-scrollto';
// import uniqBy from 'lodash/uniqBy';
import ResultsSection from './ResultsSection';
import DirectoryAppBar from '~/components/directory/DirectoryAppBar';
import DirectorySearchBar from '~/components/directory/DirectorySearchBar';
import { unifiedDirectorySearch } from '~/services/unified-directory';
import { searchDoctors } from '~/utils/axios';

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
    await this.search();
  },
  methods: {
    async search (page = 1) {
      try {
        this.loading.results = true;
        this.searchText = this.$route.query.searchText;
        this.searchMode = this.$route.query.searchMode;
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
    async fetchDoctors (searchQuery = {}, page = 1) {
      try {
        this.loading.results = true;
        this.$emit('results:filled', false);
        const { searchString, specialties, sortBy } = searchQuery;
        const skip = this.entriesLimit * (page - 1);
        const query = {
          limit: this.entriesLimit,
          skip,
          searchString,
          specialties,
          sortBy,
        };

        const { data, total } = await searchDoctors(query);
        this.entries = data;
        this.entriesTotal = total;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading.results = false;
      }
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

.fixed-container {
  position: fixed;
  z-index: 99;
  width: 100%;
  left: 0px;
  top: 0px;

  /* background: linear-gradient(180deg, #EBEDFF 0%, #F7E8E6 100%); */
}
</style>
