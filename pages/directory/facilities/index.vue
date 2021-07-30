<template lang="pug">
  div(v-if="!loading").mt-16
    v-row(justify="center")
      v-col(align="center" cols="10" sm="8")
        div.title-card
          h1(:class="titleClasses") MYCURE Clinic
          h1(:class="subheaderClasses") Find clinics in our directory
        v-row(justify="center" align="center").search-bar-container
          v-col(cols="12" md="10")
            pxp-org-search-bar(
              require-action
              show-suggestions
              @search-organizations="onSearch($event)"
          )
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  components: {
    PxpOrgSearchBar: () => import('~/components/facilities-directory/PxpOrgSearchBar'),
  },
  layout: 'pxp',
  data () {
    this.titleClasses = ['mc-title-set-1', 'font-weight-bold'];
    this.subheaderClasses = ['mc-title-set-2', 'font-weight-light'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinics Directory',
      description: 'Search for facilities and services in the MYCURE Clinics Directory',
      socialBanner: require('~/assets/images/banners/OG Patients.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    onSearch ({ searchText, locationText, suggestion }) {
      this.$nuxt.$router.push({
        name: 'directory-facilities-results',
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
.title-card {
  color: #0369A5 !important;
}
</style>
