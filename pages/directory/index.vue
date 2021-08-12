<template lang="pug">
  v-container.pa-0.mt-16
    v-row(justify="center")
      generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
        v-col
          v-row(justify="center")
            v-col(align="center" cols="10" sm="8")
              div
                h1(:class="titleClasses") MYCURE Directory
                h1(:class="subheaderClasses") Find doctors in our directory
          v-row(justify="center" align="center").search-bar-container
            v-col(cols="12")
              //- clinics-org-search-bar(
              directory-search-bar(
                @search-doctors="onSearch($event)"
                :location-switch="locationAccess"
                @tags-search="tagSearchDialog = true"
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
                v-btn(color="primary" elevation="0" rounded @click="locationDialog = false; locationAccess = true;").mx-2 Allow
                v-btn(rounded outlined @click="locationDialog = false").mx-2 Decline
    v-dialog(
      v-model="tagSearchDialog"
      width="80%"
      height="80%"
      persistent
    )
      v-card.rounded-xl.pa-16
        v-card-text
          v-col.pa-0
            v-row.mb-2
              v-col.pa-0
                h1.font-weight-bold.black--text Filter by Services
              v-col(align="end").pa-0
                v-icon(@click="tagSearchDialog = false") mdi-close
            v-row
              p.font-18 Popular tags:
            v-row
              template(v-for="(specialty, index) in specialties")
                v-chip(
                  small
                  @click:close="removeSpecialty(index)"
                ).ma-1 {{specialty}}
</template>

<script>
// import debounce from 'lodash/debounce';
// import VueScrollTo from 'vue-scrollto';

import headMeta from '~/utils/head-meta';
import specialties from '~/assets/fixtures/specialties';
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
    this.specialties = specialties;
    this.titleClasses = ['mc-title-set-1', 'font-weight-bold'];
    this.subheaderClasses = ['mc-title-set-2', 'font-weight-light', 'primary--text'];
    return {
      loading: true,
      locationDialog: true,
      locationAccess: false,
      tagSearchDialog: false,
      specilatiesList: [],
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
    onSearch ({ searchText, locationText, suggestion }) {
      this.$nuxt.$router.push({
        name: 'directory-doctors-results',
        query: {
          doctorSearchText: searchText,
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
  color: #0369A5 !important;
}
</style>
