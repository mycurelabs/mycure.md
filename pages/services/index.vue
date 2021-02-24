<template lang="pug">
  div(v-if="!loading")
    app-bar(isServices)
    v-row(justify="center" no-gutters).search-container.pt-3
      v-col(cols="12" md="3")
        v-btn(
          color="white"
          x-large
          block
          :outlined="searchMode !== 'service'"
          @click="searchMode = 'service'"
        ).text-none
          v-icon(left) mdi-format-list-bulleted
          strong Search Services
      v-col(cols="12" md="3")
        v-btn(
          color="white"
          x-large
          block
          :outlined="searchMode !== 'facility'"
          @click="searchMode = 'facility'"
        ).text-none
          v-icon(left) mdi-domain
          strong Search Facilities
      v-col(cols="12").text-center.pb-0
        search-bar(
          v-if="searchMode === 'service'"
          v-model="searchQuery"
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
        )
    v-row(align="center" justify="center").results-summary
      template(v-if="searchMode === 'service'")
        v-col(cols="12" md="8")
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
    my-footer
</template>

<script>
import { uniqBy } from 'lodash';
import AppBar from '~/components/home/AppBar';
import MyFooter from '~/components/home/MyFooter';
import OrgSearchBar from '~/components/services/OrgSearchBar';
import ResultsCard from '~/components/services/ResultsCard';
import SearchBar from '~/components/commons/SearchBar';
import { fetchClinicServices } from '~/services/services';
export default {
  layout: 'home',
  components: {
    AppBar,
    MyFooter,
    OrgSearchBar,
    ResultsCard,
    SearchBar,
  },
  data () {
    return {
      loading: true,
      initialServicesList: [],
      allServicesList: [],
      initialOrgsList: [],
      servicesList: [],
      doctorsList: [],
      searchQuery: null,
      locationQuery: '',
      initialServicesPage: 1,
      servicesPage: 1,
      initialServicesTotal: 0,
      servicesTotal: 0,
      initialServicesLimit: 6,
      servicesLimit: 6,
      filterLabel: '',
      // - facility | service
      searchMode: 'service',
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
    emptyLocationSearch () {
      return !this.locationQuery;
    },
    resultsSummary () {
      if (!this.searchQuery && this.initialServicesTotal < 1) {
        console.log('services list', this.initialServicesTotal);
        return 'No results available. Try searching for a different keyword or location.';
      } else {
        const serviceName = (typeof (this.searchQuery) === 'object' ? this.searchQuery.name : this.searchQuery) || 'the service';
        return `${this.searchedServicesLength} result${this.searchedServicesLength > 1 || this.searchedServicesLength === 0 ? 's' : ''} found for ${serviceName} ${this.locationQuery ? `in ${this.locationQuery}` : ''}`;
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
  },
  watch: {
    initialServicesPage (val) {
      this.fetchAllServices(val);
    },
    servicesPage (val) {
      this.queryServicesName(this.searchQuery, val);
    },
  },
  async mounted () {
    this.loading = false;
    await this.fetchAllServicesNotPaginated();
    if (this.$route.params.serviceSearchQuery || this.$route.params.serviceSearchLocation) {
      this.searchQuery = this.$route.params.serviceSearchQuery?.name;
      this.locationQuery = this.$route.params.serviceSearchLocation;
      this.searchServices(this.searchQuery, this.locationQuery);
    } else {
      await this.fetchAllServices();
    }
  },
  methods: {
    fetchSearchQuery (searchQuery) {
      this.queryServicesName(searchQuery);
      this.queryServicesSpecialization(searchQuery);
    },
    async fetchAllServices (page = 1) {
      this.initialServicesList = [];
      this.servicesList = [];
      this.searchQuery = '';
      const skip = this.initialServicesLimit * (page - 1);
      const { items, total } = await this.$sdk.service('services').find({
        $limit: this.initialServicesLimit,
        $skip: skip,
      });
      this.initialServicesTotal = total;
      this.initialServicesList = items || [];
    },
    async fetchAllServicesNotPaginated () {
      this.allServicesList = [];
      const { items } = await this.$sdk.service('services').find();
      const allServices = items;
      if (!allServices?.length) return allServices;
      this.allServicesList = allServices;
    },
    async queryServicesName (searchQuery, page = 1) {
      const skip = this.servicesLimit * (page - 1);

      let searchText = searchQuery;
      let selection = null;
      if (typeof (searchText) === 'object') {
        searchText = searchQuery.name;
        selection = searchQuery;
      }
      const { items, total } = await fetchClinicServices(this.$sdk, {
        searchText,
        skip,
        limit: this.servicesLimit,
      });

      this.servicesTotal = total;
      let services = items || [];
      if (selection) {
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
    searchServices (searchQuery, locationQuery) {
      this.searchQuery = searchQuery;
      this.locationQuery = locationQuery;
      this.initialServicesList = [];
      this.fetchSearchQuery(searchQuery);
    },
    filterServices (filterLabel) {
      this.filterLabel = filterLabel;
    },
    clearServicesResults () {
      this.initialServicesList = [];
      this.servicesList = [];
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
  position: fixed;
  z-index: 99;
  top: 0;
}

.results-summary {
  z-index: -1;
  background-color: #FFFFFF;
  margin-top: 340px;
}
</style>
