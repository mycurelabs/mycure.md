<template lang="pug">
  div(v-if="!loading")
    app-bar(isServices)
    div(align="center" justify="center"
      )
      v-col(cols="12")
      v-col(cols="12").mt-12.text-center.pb-0.search-container
        search-bar(
          icon
          services
          @search-services="searchServices"
        )
    v-row(align="center" justify="center").results-summary
      v-col(cols="12" md="8")
        h4.font-weight-regular.font-20.text-left.ml-10 #[strong 420] results found on #[strong Endocrinology] in #[strong Quezon City]
      v-col(cols="12")
        template(v-if="initialServicesList" v-for="initialService in initialServicesList")
          results-card(
            isService
            :service="initialService"
            )
        template(v-if="servicesList" v-for="service in servicesList")
          results-card(
            isService
            :service="service"
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
    };
  },
  mounted () {
    this.loading = false;
    this.fetchAllServices();
  },
  methods: {
    fetchSearchQuery (searchText) {
      this.initialServicesList = [];
      this.queryServicesName(searchText);
      this.queryServicesSpecialization(searchText);
    },
    async fetchAllServices () {
      const { items } = await this.$sdk.service('services').find();
      if (items) {
        this.initialServicesList = items;
      }
    },
    async queryServicesName (searchText) {
      const query = {
        name: { $regex: `^${searchText}`, $options: 'i' },
      };

      const { items } = await this.$sdk.service('services').find(query);
      if (items) {
        this.servicesList = items;
      };
      console.log('queryServicesName', items);
    },
    async queryServicesSpecialization (searchText) {
      const query = {
        'specialization.name': { $regex: `^${searchText}`, $options: 'i' },
      };

      const { items } = await this.$sdk.service('services').find(query);

      console.log('queryServicesSpecialization', items);
    },
    async queryDoctorMembers (query) {
      const { items } = await this.$sdk.service('organization-members').find({
        roles: 'doctor',
      });

      console.log('doctors items', items);
    },
    searchServices (params) {
      this.fetchSearchQuery(params);
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
  margin-top: 240px;
}
</style>
