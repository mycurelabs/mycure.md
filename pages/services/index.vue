<template lang="pug">
  div(v-if="!loading")
    app-bar(isServices)
    div(align="center" justify="center")
      //- v-col(cols="12")
      //- v-col(cols="12").mt-12.text-center.pb-0.search-container
      //-   search-bar(
      //-     icon
      //-     services
      //-     @search-services="searchServices"
      //-   )
    v-row(align="center" justify="center").results-summary
      v-col(cols="12" md="8")
        h4(v-if="!searchQuery").font-weight-regular.font-20.text-left.ml-10 #[strong {{ searchedServicesLength }}] services found
        h4(v-if="searchQuery").font-weight-regular.font-20.text-left.ml-10 #[strong {{ searchedServicesLength }}] results found on #[strong {{ searchQuery }}] in #[strong {{ locationQuery }}]
      v-col(cols="12")
        template(v-if="initialServicesList.length > 1" v-for="initialService in initialServicesList")
          results-card(
            isService
            :service="initialService"
            )
        v-pagination(
            v-if="initialServicesList.length > 1"
            v-model="initialServicesPage"
            :length="initialServicesLength"
            total-visible="10"
          )
        template(v-if="servicesList" v-for="service in servicesList")
          results-card(
            isService
            :service="service"
          )
        v-pagination(
            v-if="servicesList.length > 1"
            v-model="servicesPage"
            :length="servicesLength"
            total-visible="10"
          )
        template(v-if="doctorsList" v-for="doctor in doctorsList")
          results-card(isDoctor)
    my-footer
</template>

<script>
import AppBar from '~/components/home/AppBar';
import MyFooter from '~/components/home/MyFooter';
import ResultsCard from '~/components/services/ResultsCard';
import SearchBar from '~/components/commons/SearchBar';
export default {
  layout: 'home',
  components: {
    AppBar,
    MyFooter,
    ResultsCard,
    SearchBar,
  },
  data () {
    return {
      loading: true,
      initialServicesList: [],
      initialOrgsList: [],
      servicesList: [],
      doctorsList: [],
      searchQuery: '',
      locationQuery: '',
      initialServicesPage: 1,
      servicesPage: 1,
      initialServicesTotal: 0,
      servicesTotal: 0,
      initialServicesLimit: 6,
      servicesLimit: 6,
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
  },
  watch: {
    initialServicesPage (val) {
      this.fetchAllServices(val);
    },
    servicesPage (val) {
      this.queryServicesName(this.searchQuery, val);
    },
  },
  mounted () {
    this.loading = false;
    this.fetchAllServices();
  },
  methods: {
    fetchSearchQuery (searchText) {
      this.queryServicesName(searchText);
      this.queryServicesSpecialization(searchText);
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
      const initialServices = items;
      if (!initialServices?.length) return initialServices;
      this.initialServicesList = initialServices;
    },
    async queryServicesName (searchText, page = 1) {
      const skip = this.servicesLimit * (page - 1);
      const query = {
        name: { $regex: `^${searchText}`, $options: 'i' },
      };

      query.$limit = this.servicesLimit;
      query.$skip = skip;

      const { items, total } = await this.$sdk.service('services').find(query);

      this.servicesTotal = total;
      const services = items;
      if (!services?.length) return services;
      this.servicesList = services;
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
  },
};
</script>

<style scoped>
.search-container {
  background-color: #0087B5;
  position: fixed;
  z-index: 99;
  top: 0;
}

.results-summary {
  z-index: -1;
  background-color: #FFFFFF;
  /* margin-top: 240px; */
}
</style>
