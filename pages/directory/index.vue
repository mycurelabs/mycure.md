<template lang="pug">
  v-container.pa-0.mt-16
    v-row(justify="center")
      generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
        v-col
          v-row(justify="center")
            v-col(align="center" cols="10" sm="8").pl-0
              nuxt-link(to="/")
                img(
                  src="~/assets/images/MYCURE Logo - black.png"
                    width="50%"
                  alt="MYCURE logo"
                ).ml-n16
          v-row(justify="center" align="center").search-bar-container
            v-col(cols="12")
              //- clinics-org-search-bar(
              directory-search-bar(
                @enter="onSearch($event)"
                :location-switch="locationAccess"
              )
    v-dialog(
      v-model="locationDialog"
      width="350"
      persistent
    )
      v-card.text-center.rounded-xl.pa-8
        v-card-text
          v-icon(color="primary" size="100px") mdi-map-marker-outline
          v-row(justify="center").mt-5
            v-col(cols="10")
              h2.font-weight-bold.black--text Enable Location Services
          v-row(justify="center")
            v-col(cols="10").py-0
              p.py-3
                | We need your location to give you a better experience
          v-row(justify="center")
            v-col(cols="10").py-0
              v-row(justify="center")
                v-col(cols="6")
                  v-btn(color="primary" elevation="0" rounded @click="locationDialog = false; locationAccess = true;") Allow
                v-col(cols="6" justify="start")
                  v-btn(rounded outlined @click="locationDialog = false") Decline
</template>

<script>
// import debounce from 'lodash/debounce';
// import VueScrollTo from 'vue-scrollto';

import headMeta from '~/utils/head-meta';
// import DoctorsTable from '~/components/directory-doctor/doctors-table';
// import GenericContainer from '~/components/commons/generic-container';
// import SearchControls from '~/components/directory-doctor/search-controls';
// import { /* getDoctors */ getFeaturedDoctors, searchDoctors } from '~/utils/axios';
export default {
  components: {
    // DoctorsTable,
    // GenericContainer,
    // SearchControls,
    DirectorySearchBar: () => import('~/components/directory/DirectorySearchBar'),
  },
  layout: 'directory',
  data () {
    this.titleClasses = ['mc-title-set-1', 'font-weight-bold'];
    this.subheaderClasses = ['mc-title-set-2', 'font-weight-light', 'primary--text'];
    return {
      loading: true,
      locationDialog: true,
      locationAccess: false,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Directory',
      description: 'Search for clinics, doctors, and specialties in the MYCURE Directory',
      socialBanner: require('~/assets/images/banners/OG Patients.png'),
    });
  },
  mounted () {
    this.loading = false;
  },
  methods: {
    onSearch ({ searchString, specialties, mode }) {
      this.$nuxt.$router.push({
        name: 'directory-results',
        query: {
          searchText: searchString,
          tagArray: specialties,
          searchMode: mode,
        },
      });
    },
  },
};
</script>

<style scoped>
.mycure-link {
  color: #2e9fdf;
  text-decoration: none;
}
.search-bar-container {
  height: 150px;
}
.title-card {
  color: #0369a5 !important;
}
</style>
