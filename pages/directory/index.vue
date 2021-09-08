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
                require-action
                show-suggestions
                :mode="searchMode"
                :location="location"
                @search="onSearch($event)"
                @update:mode="onChangeMode($event)"
                @update:locationSwitch="onLocationSwitchUpdate($event)"
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
                | Find the nearest health facility to where you are now.
          v-row(justify="center")
            v-col(cols="10").py-0
              v-row(justify="center")
                v-col(cols="6")
                  v-btn(
                    color="primary"
                    elevation="0"
                    rounded
                    :loading="loading.location"
                    @click="getLocation"
                  ) Allow
                v-col(cols="6" justify="start")
                  v-btn(
                    rounded
                    outlined
                    :disabled="loading.location"
                    @click="locationDialog = false"
                  ) Decline
</template>

<script>
import headMeta from '~/utils/head-meta';
export default {
  components: {
    DirectorySearchBar: () => import('~/components/directory/DirectorySearchBar'),
  },
  layout: 'directory',
  data () {
    this.titleClasses = ['mc-title-set-1', 'font-weight-bold'];
    this.subheaderClasses = ['mc-title-set-2', 'font-weight-light', 'primary--text'];
    return {
      loading: {
        page: true,
        location: false,
      },
      searchMode: 'account',
      coordinates: null,
      locationDialog: false,
      location: null,
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
    this.loading.page = false;
    this.locationDialog = true;
  },
  methods: {
    /**
     * @param {String} searchString
     * @param {String []} specializations
     * @param {String} serviceType
     * @param {String} mode doctor | clinic | location
     */
    onSearch ({ searchString, specializations, mode, serviceType, location }) {
      this.$nuxt.$router.push({
        name: 'directory-results',
        query: {
          searchText: searchString,
          searchMode: mode,
        },
        params: {
          serviceType,
          specializations,
          location,
        },
      });
    },
    async getLocation () {
      this.loading.location = true;
      await this.$getLocation()
        .then((coordinates) => {
          this.coordinates = coordinates;
        });
      this.locationDialog = false;
      if (this.coordinates) {
        this.location = {
          lat: this.coordinates.lat,
          lng: this.coordinates.lng,
        };
      }
    },
    onChangeMode (val) {
      this.searchMode = val.mode;
    },
    onLocationSwitchUpdate (val) {
      if (!val) {
        this.location = null;
      }
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
