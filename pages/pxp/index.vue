<template lang="pug">
  div(v-if="!loading")
    v-row(justify="center" align="center").search-bar-container
      v-col(cols="12" md="10")
        org-search-bar(
          require-action
          show-suggestions
          @search-organizations="onSearch($event)"
        )
    usp(
      title="Find the right healthcare services near you"
      description="Diagnostic clinics, hospitals, and full service clinics in Metro Manila are within your reach whenever you need them."
      image="Patients USP"
      image-width="80%"
      custom-image-path="patients/"
      hide-btn
    )
    locations
</template>

<script>
import Locations from '~/components/pxp/Locations';
import OrgSearchBar from '~/components/services/OrgSearchBar';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import headMeta from '~/utils/head-meta';
export default {
  components: {
    Locations,
    OrgSearchBar,
    Usp,
  },
  layout: 'pxp',
  middleware: ['disable-route'],
  data () {
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Healthcare Directory',
      description: 'Search for facilities and services in the MYCURE Healthcare Directory',
      socialBanner: require('~/assets/images/banners/OG Patients.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    onSearch ({ searchText, locationText, suggestion }) {
      this.$nuxt.$router.push({
        name: 'directory-results',
        params: {
          facilitySearchText: searchText,
          facilityLocationText: locationText,
          facilitySuggestion: suggestion,
        },
      });
    },
  },
};
</script>

<style scoped>
.search-bar-container {
  height: 150px;
}
</style>
