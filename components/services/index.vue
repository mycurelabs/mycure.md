<template lang="pug">
  div(v-if="!loading.page")
    v-row(justify="center" no-gutters :class="{ 'fixed-container': fixedSearchBar, 'primary': fixedSearchBar }").search-container
      v-col(cols="12").text-center.pb-0
        org-search-bar(
          @search-organizations="searchOrganizations($event)"
          @clear-organizations="clearOrganizationResults"
        )
    //- Facility Results
    v-row(align="center" justify="center" :class="{ 'org-results-margin': fixedSearchBar }").org-results-summary
      v-col(v-if="!loading.results" cols="11" md="10")#org-results
        h4(v-if="orgsTotal") There are {{ orgsTotal }} organization{{ orgsTotal > 1 ? 's' : '' }} available.
        h4(v-else) There are no results available.
      v-col(cols="12")
        //- Loading
        v-row(v-if="loading.results" justify="center")
          v-col(cols="12" md="4").text-center
            v-progress-circular(
              color="primary"
              indeterminate
              size="100"
            )
        v-row(v-else justify="center" align="stretch")
          v-col(
            v-for="(organization, key) in orgsList"
            :key="key"
            cols="12"
            md="5"
          )
            org-list-card(
              :organization="organization"
              :read-only="readOnly"
            )
        v-pagination(
          v-model="orgsPage"
          :length="orgsLength"
          total-visible="10"
        )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import OrgListCard from '~/components/organizations/OrgListCard';
import OrgSearchBar from '~/components/services/OrgSearchBar';
export default {
  components: {
    OrgListCard,
    OrgSearchBar,
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
      locationQuery: '',
      orgsTotal: 0,
      orgsLimit: 10,
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
      await this.fetchOrganizations(this.orgsSearchQuery, val);
      VueScrollTo.scrollTo('#org-results', 500, { offset: -250, easing: 'ease' });
    },
  },
  async mounted () {
    this.loading.page = false;
    if (this.$route.params.facilitySearchText || this.$route.params.facilityLocationText) {
      await this.searchOrganizations({
        searchText: this.$route.params.facilitySearchText,
        locationText: this.$route.params.facilityLocationText,
      });
      return;
    }
    await this.fetchOrganizations();
  },
  methods: {
    async fetchOrganizations (searchQuery = {}, page = 1) {
      try {
        this.loading.results = true;
        const skip = this.orgsLimit * (page - 1);
        const query = {
          $limit: this.orgsLimit,
          $skip: skip,
          // TODO: confirm org types that are not included
          type: { $nin: ['company', 'warehouse', 'insurance'] },
        };

        const { searchText, locationText } = searchQuery;

        if (searchText) {
          query.$and = [];
          query.$and.push(
            { name: { $regex: `^${searchText}`, $options: 'gi' } },
          );
        }

        if (locationText) {
          if (!query.$and) query.$and = [];
          query.$and.push(
            { 'address.city': { $regex: `^${locationText}`, $options: 'gi' } },
          );
        }

        const { items, total } = await this.$sdk.service('organizations').find(query);
        this.orgsList = items || [];
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
    async searchOrganizations ({ searchText, locationText }) {
      this.orgsSearchQuery = { searchText, locationText };
      await this.fetchOrganizations(this.orgsSearchQuery);
      VueScrollTo.scrollTo('#org-results', 500, { offset: -250, easing: 'ease' });
    },
    clearOrganizationResults () {
      this.orgsList = [];
      this.orgsTotal = 0;
      this.searchQuery = null;
    },
  },
};
</script>

<style scoped>
.search-container {
  margin-top: 60px;
  width: 100%;
}

.fixed-container {
  position: fixed;
  z-index: 99;
  top: 0;
}
.org-results-summary {
  z-index: -1;
  background-color: #fafafa;
}

.org-results-margin {
  margin-top: 160px;
}
</style>
