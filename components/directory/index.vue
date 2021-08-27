<template lang="pug">
  div(v-if="!loading.page")
    v-row(justify="center" no-gutters).fixed-container
      directory-app-bar(:class="$isMobile ? ['mt-3', 'ml-3'] : '' ")
      v-container
        v-row(justify="center")
          generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
            directory-search-bar(
              @enter="onSearch($event)"
              :location-switch="locationAccess"
            )
    v-container
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
          v-container
            v-row(align="center" justify="center" :class="$isMobile? 'org-results-margin-mobile' : 'org-results-margin' ").org-results-summary
              v-col(v-if="!loading.results" cols="12" :class="{'text-center': $isMobile}")#org-results
                h4(v-if="orgsTotal") There {{ orgsTotal > 1 ? 'are' : 'is' }} {{ orgsTotal }} doctor{{ orgsTotal > 1 ? 's' : '' }} available.
                h4(v-else) There are no results available.
              v-col(cols="12")
                v-row(v-if="loading.results" justify="center")
                  v-col(cols="12" md="5").text-center
                    v-progress-circular(
                      color="primary"
                      indeterminate
                      size="100"
                    ).mt-16
                v-row(v-else justify="center" align="stretch")
                  v-col(
                    v-for="(doctorObj, key) in orgsList"
                    :key="key"
                    cols="12"
                    md="4"
                  ).px-2
                    doc-search-card(
                      :organization="doctorObj"
                      :read-only="readOnly"
                    )
                br
                v-pagination(
                  v-model="orgsPage"
                  :length="orgsLength"
                  total-visible="9"
                )
    v-container
      v-row(justify="center")
        generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
          v-container
            v-row(align="center" justify="center" :class="$isMobile? 'org-results-margin-mobile' : 'org-results-margin' ").org-results-summary
              v-col(v-if="!loading.results" cols="12" :class="{'text-center': $isMobile}")#org-results
                h4(v-if="orgsTotal") There {{ orgsTotal > 1 ? 'are' : 'is' }} {{ orgsTotal }} doctor{{ orgsTotal > 1 ? 's' : '' }} available.
                h4(v-else) There are no results available.
              v-col(cols="12")
                v-row(v-if="loading.results" justify="center")
                  v-col(cols="12" md="5").text-center
                    v-progress-circular(
                      color="primary"
                      indeterminate
                      size="100"
                    ).mt-16
                v-row(v-else justify="center" align="stretch")
                  v-col(
                    v-for="(doctorObj, key) in orgsList"
                    :key="key"
                    cols="12"
                    md="4"
                  ).px-2
                    clinic-search-card(
                      :organization="doctorObj"
                      :read-only="readOnly"
                    )
                br
                v-pagination(
                  v-model="orgsPage"
                  :length="orgsLength"
                  total-visible="9"
                )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import uniqBy from 'lodash/uniqBy';
import { searchDoctors } from '~/utils/axios';
import DirectoryAppBar from '~/components/directory/DirectoryAppBar';
import DirectorySearchBar from '~/components/directory/DirectorySearchBar';
export default {
  components: {
    DocSearchCard: () => import('~/components/directory/DocSearchCard'),
    SearchControls: () => import('~/components/directory-doctor/search-controls'),
    DirectoryAppBar,
    DirectorySearchBar,
    GenericPanel: () => import('~/components/generic/GenericPanel.vue'),
    ClinicSearchCard: () => import('~/components/directory/ClinicSearchCard'),
  },
  props: {
    fixedSearchBar: {
      type: Boolean,
      default: true,
    },
    readOnly: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      loading: {
        page: true,
        results: false,
      },
      orgsTotal: 0,
      orgsLimit: 12,
      orgsList: [],
      orgsPage: 1,
      orgsSearchQuery: {},
      municipalityList: [],
    };
  },
  computed: {
    orgsLength () {
      return Math.ceil(this.orgsTotal / this.orgsLimit) || 0;
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
  watch: {
    async orgsPage (val) {
      await this.fetchDoctors(this.orgsSearchQuery, val);
      VueScrollTo.scrollTo('#org-results', 500, { offset: -250, easing: 'ease' });
    },
  },
  mounted () {
    this.init();
  },
  methods: {
    searchFromControls (searchObject) {
      this.isLoading = true;
      this.searchQuery = searchObject;
      this.fetchDoctors(this.searchQuery);
      this.isLoading = false;
    },
    async init () {
      this.loading.page = false;
      const { doctorSearchText } = this.$route.query;
      let finalOrgResults = [];
      if (doctorSearchText) {
        await this.searchFromControls({
          searchString: doctorSearchText,
        });

        if (!this.orgsTotal && finalOrgResults.length) this.orgsTotal++;

        finalOrgResults = uniqBy([...finalOrgResults, ...this.orgsList], 'id');
        this.orgsList = finalOrgResults;
        return;
      }
      await this.fetchDoctors();
    },
    async fetchDoctors (searchQuery = {}, page = 1) {
      try {
        this.loading.results = true;
        this.$emit('results:filled', false);
        const { searchString, specialties, sortBy } = searchQuery;
        const skip = this.orgsLimit * (page - 1);
        const query = {
          limit: this.orgsLimit,
          skip,
          searchString,
          specialties,
          sortBy,
        };

        const { data, total } = await searchDoctors(query);
        this.orgsList = data;
        this.orgsTotal = total;
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
    async searchOrganizations ({ searchText }) {
      this.orgsSearchQuery = { searchText };
      await this.fetchDoctors(this.orgsSearchQuery);
      VueScrollTo.scrollTo('#org-results', 500, { offset: -250, easing: 'ease' });
    },
    clearOrganizationResults () {
      this.orgsSearchQuery = '';
      this.orgsPage = 1;
      this.fetchDoctors();
      this.searchQuery = null;
    },
  },
};
</script>

<style scoped>

.fixed-container {
  position: fixed;
  z-index: 99;
  width: 100%;
  height: 200px;
  left: 0px;
  top: 0px;

  background: linear-gradient(180deg, #EBEDFF 0%, #F7E8E6 100%);
}
.org-results-summary {
  z-index: -1;
  background-color: #fafafa;
}

.org-results-margin {
  margin-top: 200px;
}
.org-results-margin-mobile {
  margin-top: 200px;
}

@media screen and (max-width: 970px) {
  .org-results-margin {
    margin-top: 330px;
  }
}
</style>
