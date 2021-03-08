<template lang="pug">
  div(v-if="!loading")
    v-row(justify="center" no-gutters :class="{ 'fixed-container': fixedSearchBar }").search-container.pt-3
      v-col(cols="12").text-center
        v-btn-toggle(color="primary" tile mandatory)
          v-btn(
            v-bind="buttonSize"
            @click="searchMode = 'facility'"
          ).text-none
            v-icon(
              v-bind="iconSize"
              :color="searchMode === 'facility' ? 'primary' : 'black'"
              left
            ) mdi-domain
            strong Search Facilities
          v-btn(
            v-bind="buttonSize"
            @click="searchMode = 'service'"
          ).text-none
            v-icon(
              v-bind="iconSize"
              :color="searchMode === 'service' ? 'primary' : 'black'"
              left
            ) mdi-format-list-bulleted
            strong Search Services
      v-col(cols="12").text-center.pb-0
        search-bar(
          v-if="searchMode === 'service'"
          icon
          services
          @search-services="searchServices"
          @filter-services="filterServices"
          @clear-services="clearServicesResults"
          @sort-results="sortServicesResults"
          :allServices="allServicesList"
          :searchQuery="searchQuery"
          :locationQuery="locationQuery"
        )
        org-search-bar(
          v-else-if="searchMode === 'facility'"
          icon
          @search-organizations="searchOrganizations($event)"
          @clear-organizations="clearOrganizationResults"
        )
    //- Service Results
    v-row(align="center" justify="center" v-if="searchMode === 'service'" :class="{ 'services-results-margin': fixedSearchBar }").services-results-summary
      v-col(cols="11" md="9")
        //- h4(v-if="!searchQuery").font-weight-regular.font-20.text-left.ml-10 #[strong {{ searchedServicesLength }}] services found
        //- h4(v-if="searchQuery").font-weight-regular.font-20.text-left.ml-10 #[strong {{ searchedServicesLength }}] results found on #[strong {{ searchQuery }}] in #[strong {{ locationQuery }}]
        h4 {{ resultsSummary }}
      v-col(cols="12")
        //- search results on initial page load
        template(v-if="initialServicesList.length > 1 && sortMethod === 'Relevance'" v-for="initialService in initialServicesList")
          results-card(
            v-if="filterLabel !== 'Teleconsult'"
            isService
            :service="initialService"
            :initialServices="true"
            :read-only="readOnly"
          )
        v-pagination(
          v-if="initialServicesList.length > 1 && sortMethod === 'Relevance'"
          v-model="initialServicesPage"
          :length="initialServicesLength"
          total-visible="10"
        )
        template(v-if="filteredItems.length > 1 && sortMethod !== 'Relevance'" v-for="filteredItem in filteredItems")
          results-card(
            v-if="filterLabel !== 'Teleconsult'"
            isService
            :service="filteredItem"
            :initialServices="true"
            :read-only="readOnly"
          )
        v-pagination(
          v-if="filteredItems.length > 1 && sortMethod !== 'Relevance'"
          v-model="initialServicesPage"
          :length="initialServicesLength"
          total-visible="10"
        )
        //- services search results on search with text query
        template(v-if="servicesList && sortMethod === 'Relevance'" v-for="service in servicesList")
          results-card(
            v-if="filterLabel !== 'Teleconsult'"
            isService
            :service="service"
            :locationText="locationQuery"
            :emptyLocationSearch="emptyLocationSearch"
             :read-only="readOnly"
            @location-not-matched="clearServicesResults"
          )
        v-pagination(
          v-if="servicesList.length > 1 && sortMethod === 'Relevance'"
          v-model="servicesPage"
          :length="servicesLength"
          total-visible="10"
        )
        template(v-if="servicesList && sortMethod !== 'Relevance'" v-for="filteredResultsService in filteredResultsServices")
          results-card(
            v-if="filterLabel !== 'Teleconsult'"
            isService
            :service="filteredResultsService"
            :locationText="locationQuery"
            :emptyLocationSearch="emptyLocationSearch"
             :read-only="readOnly"
            @location-not-matched="clearServicesResults"
          )
        v-pagination(
          v-if="filteredResultsServices.length > 1 && sortMethod !== 'Relevance'"
          v-model="servicesPage"
          :length="servicesLength"
          total-visible="10"
        )
      //- doctors search results on search with text query
      template(v-if="doctorsList" v-for="doctor in doctorsList")
        results-card(isDoctor)

    //- Facility Results
    v-row(align="center" justify="center" v-else-if="searchMode === 'facility'" :class="{ 'org-results-margin': fixedSearchBar }").org-results-summary
      v-col(cols="11" md="10")#org-results
        h4(v-if="orgsTotal") There are {{ orgsTotal }} organization{{ orgsTotal > 1 ? 's' : '' }} available.
        h4(v-else) There are no results available.
      v-col(cols="12")
        v-row(justify="center" align="stretch")
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
    my-footer
</template>

<script>
import { uniqBy } from 'lodash';
import VueScrollTo from 'vue-scrollto';
import AppBar from '~/components/home/AppBar';
import MyFooter from '~/components/home/MyFooter';
import OrgListCard from '~/components/organizations/OrgListCard';
import OrgSearchBar from '~/components/services/OrgSearchBar';
import ResultsCard from '~/components/services/ResultsCard';
import SearchBar from '~/components/commons/SearchBar';
import { fetchClinicServices } from '~/services/services';
export default {
  components: {
    AppBar,
    MyFooter,
    OrgListCard,
    OrgSearchBar,
    ResultsCard,
    SearchBar,
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
      loading: true,
      initialServicesList: [],
      allServicesList: [],
      servicesList: [],
      doctorsList: [],
      searchQuery: null,
      locationQuery: '',
      hmoQuery: null,
      initialServicesPage: 1,
      servicesPage: 1,
      initialServicesTotal: 0,
      servicesTotal: 0,
      orgsTotal: 0,
      initialServicesLimit: 6,
      orgsLimit: 10,
      servicesLimit: 6,
      filterLabel: '',
      orgsList: [],
      orgsPage: 1,
      orgsSearchQuery: {},
      municipalityList: [],
      // - facility | service
      searchMode: 'facility',
      sortMethod: 'Relevance',
    };
  },
  computed: {
    searchedServicesLength () {
      if (this.initialServicesList.length > 0) {
        return this.initialServicesTotal;
      } else if (this.servicesList.length > 0) {
        return this.servicesList.length;
      } else {
        return 0;
      }
    },
    initialServicesLength () {
      return Math.ceil(this.initialServicesTotal / this.initialServicesLimit) || 0;
    },
    servicesLength () {
      return Math.ceil(this.servicesTotal / this.servicesLimit) || 0;
    },
    orgsLength () {
      return Math.ceil(this.orgsTotal / this.orgsLimit) || 0;
    },
    emptyLocationSearch () {
      return !this.locationQuery;
    },
    resultsSummary () {
      if (!this.searchQuery && this.initialServicesTotal < 1) {
        return 'No results available. Try searching for a different keyword or location.';
      } else {
        const serviceName = (typeof (this.searchQuery) === 'object' ? this.searchQuery?.name : this.searchQuery) || 'the service';
        const resultsLength = !this.searchQuery && !this.hmoQuery ? this.initialServicesTotal : this.searchedServicesLength;
        const resultText = `${resultsLength} result${resultsLength > 1 || resultsLength === 0 ? 's' : ''} found for ${serviceName} ${this.locationQuery ? `in ${this.locationQuery}` : ''}`;
        return !this.searchQuery && !this.hmoQuery ? '' : resultText;
      }
    },
    filteredItems () {
      if (!this.loading && this.initialServicesList.length > 1) {
        const filteredItems = this.initialServicesList;
        if (this.sortMethod === 'Alphabetical (Ascending)') {
          filteredItems.sort(function (a, b) {
            const textA = a.name.toUpperCase();
            const textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
          return filteredItems;
        }
        if (this.sortMethod === 'Alphabetical (Descending)') {
          filteredItems.reverse(function (a, b) {
            const textA = a.name.toUpperCase();
            const textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
          return filteredItems;
        }
      }
      return this.initialServicesList;
    },
    filteredResultsServices () {
      if (!this.loading && this.servicesList.length > 1) {
        const filteredItems = this.servicesList;
        if (this.sortMethod === 'Alphabetical (Ascending)') {
          filteredItems.sort(function (a, b) {
            const textA = a.name.toUpperCase();
            const textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
          return filteredItems;
        }
        if (this.sortMethod === 'Alphabetical (Descending)') {
          filteredItems.reverse(function (a, b) {
            const textA = a.name.toUpperCase();
            const textB = b.name.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
          });
          return filteredItems;
        }
      }
      return this.servicesList;
    },
    provinces () {
      return this.municipalityList.map(municipality => municipality.name) || [];
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
    initialServicesPage (val) {
      this.fetchAllServices(val);
    },
    servicesPage (val) {
      this.queryServicesName(this.searchQuery, val);
    },
    async orgsPage (val) {
      await this.fetchOrganizations(this.orgsSearchQuery, val);
      VueScrollTo.scrollTo('#org-results', 500, { offset: -250, easing: 'ease' });
    },
    async searchMode (val) {
      if (val === 'service') {
        await this.fetchAllServices();
        return;
      }
      await this.fetchOrganizations();
      // if (!this.municipalityList.length) await this.fetchMunicipalities();
    },
  },
  async mounted () {
    this.loading = false;
    if (this.$route.params.facilitySearchText || this.$route.params.facilityLocationText) {
      await this.searchOrganizations({
        searchText: this.$route.params.facilitySearchText,
        locationText: this.$route.params.facilityLocationText,
      });
      return;
    }
    if (this.$route.params.serviceSearchQuery || this.$route.params.serviceSearchLocation) {
      this.searchQuery = this.$route.params.serviceSearchQuery?.name;
      this.locationQuery = this.$route.params.serviceSearchLocation;
      this.searchServices(this.searchQuery, this.locationQuery);
      return;
    }
    await this.fetchOrganizations();
    await this.fetchAllServicesNotPaginated();
    await this.fetchAllServices();
  },
  methods: {
    async fetchSearchQuery (searchQuery) {
      await this.queryServicesName(searchQuery);
      await this.queryServicesSpecialization(searchQuery);
    },
    async fetchAllServices (page = 1) {
      try {
        this.initialServicesList = [];
        this.servicesList = [];
        this.searchQuery = '';
        const skip = this.initialServicesLimit * (page - 1);
        const { items, total } = await fetchClinicServices(this.$sdk, {
          $limit: this.initialServicesLimit,
          $skip: skip,
        });
        this.initialServicesTotal = total;
        this.initialServicesList = items || [];
      } catch (error) {
        console.error(error);
      }
    },
    async fetchAllServicesNotPaginated () {
      try {
        this.allServicesList = [];
        const { items } = await this.$sdk.service('services').find();
        const allServices = items;
        if (!allServices?.length) return allServices;
        this.allServicesList = allServices;
      } catch (error) {
        console.error(error);
      }
    },
    async fetchOrganizations (searchQuery = {}, page = 1) {
      try {
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
    async queryServicesName (searchQuery, page = 1) {
      const skip = this.servicesLimit * (page - 1);
      let searchText = searchQuery;
      let selection = null;
      if (typeof (searchText) === 'object' && searchText?.name) {
        searchText = searchQuery.name;
        selection = searchQuery;
      }

      const { items, total } = await fetchClinicServices(this.$sdk, {
        searchText,
        ...this.hmoQuery && { insurer: this.hmoQuery },
        skip,
        limit: this.servicesLimit,
      });

      this.servicesTotal = total;
      let services = items || [];
      if (selection && !this.hmoQuery) {
        services = uniqBy([selection].concat(services), 'id');
      }
      this.servicesList = services || [];
    },
    async queryServicesSpecialization (searchText) {
      const query = {
        'specialization.name': { $regex: `^${searchText}`, $options: 'i' },
      };

      const { items } = await this.$sdk.service('services').find(query);

      console.log('queryServicesSpecialization', items);
    },
    searchServices (searchQuery, locationQuery, hmoQuery) {
      this.searchQuery = searchQuery;
      this.locationQuery = locationQuery;
      this.hmoQuery = hmoQuery;
      this.initialServicesList = [];
      this.fetchSearchQuery(searchQuery);
    },
    filterServices (filterLabel) {
      this.filterLabel = filterLabel;
    },
    clearServicesResults () {
      this.servicesList = [];
      this.searchQuery = null;
      this.fetchAllServices();
    },
    clearOrganizationResults () {
      this.orgsList = [];
      this.orgsTotal = 0;
      this.searchQuery = null;
    },
    sortServicesResults (sortMethod) {
      this.sortMethod = sortMethod;
    },
  },
};
</script>

<style scoped>
.search-container {
  margin-top: 70px;
  background-color: #0087B5;
  width: 100%;
}

.fixed-container {
  position: fixed;
  z-index: 99;
  top: 0;
}

.services-results-summary {
  z-index: -1;
  background-color: #fafafa;
}

.services-results-margin {
  margin-top: 225px;
}

.org-results-summary {
  z-index: -1;
  background-color: #fafafa;
}

.org-results-margin {
  margin-top: 250px;
}
</style>
