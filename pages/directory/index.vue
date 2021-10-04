<template lang="pug">
  v-container.pa-0.mt-16
    v-row(v-if="!loading.page" justify="center")
      generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
        v-col
          v-row(justify="center")
            v-col(align="center" cols="10" sm="8").pl-0
              nuxt-link(to="/")
                img(
                  src="~/assets/images/MYCURE Logo - black.png"
                    width="50%"
                  alt="MYCURE logo"
                )
          v-row(justify="center" align="center").search-bar-container
            v-col(cols="12")
              //- clinics-org-search-bar(
              directory-search-bar(
                require-action
                show-suggestions
                :mode="searchMode"
                :location="location"
                :loadingLocation="loading.location"
                @search="onSearch($event)"
                @update:mode="onChangeMode($event)"
                @select:location="onLocationPick($event)"
                @clear:location="onClearLocation"
              )
    //- //- Loading Location
    //- v-dialog(v-model="preparingDirectoryDialog" width="350" persistent)
    //-   v-card.text-center
    //-     v-card-text.pa-8
    //-       h3.primary--text Preparing the directory...
    //-       v-progress-circular(indeterminate size="50" color="primary")
    //- Location Dialog
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
    //- Snack bar
    v-snackbar(
      v-model="showSnack"
      :color="snackbarModel.color"
    ) {{ snackbarModel.text }}
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
      preparingDirectoryDialog: false,
      locationDialog: false,
      location: null,
      // Snack
      snackbarModel: {
        text: '',
        color: null,
      },
      showSnack: false,
    };
  },
  head () {
    return {
      ...headMeta({
        title: 'MYCURE Directory',
        description: 'Search for clinics, doctors, and specialties in the MYCURE Directory',
        socialBanner: require('~/assets/images/banners/OG Patients.png'),
      }),
      script: [
        {
          hid: 'google',
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCpEuK4K_sSRKLy_wLqymgQPT8aJpsns0g&libraries=places&v=weekly',
          defer: true,
          // callback: () => { this.loading.page = false; },
        },
      ],
    };
  },
  mounted () {
    this.loading.page = false;
    // Check if already has location
    // this.checkLocation();
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
    onChangeMode (val) {
      this.searchMode = val.mode;
    },
    /** TOGGLE LOCATION USAGE (OLD) */
    async checkLocation () {
      this.preparingDirectoryDialog = true;
      await navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
        .then((result) => {
          this.preparingDirectoryDialog = false;
          if (result.state === 'granted') {
            this.getLocation();
          } else if (result.state === 'prompt') {
            this.locationDialog = true;
          } else {
            this.snackbarModel = {
              color: 'warning',
              text: 'Please update your browser location settings before enabling location search.',
            };
            this.showSnack = true;
          }
        });
      this.preparingDirectoryDialog = false;
    },
    async getLocation () {
      try {
        this.loading.location = true;
        await this.$getLocation()
          .then((coordinates) => {
            this.coordinates = coordinates;
          });
        if (this.coordinates) {
          this.location = {
            lat: this.coordinates.lat,
            lng: this.coordinates.lng,
          };
        } else {
          this.location = null;
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.preparingDirectoryDialog = false;
        this.locationDialog = false;
        this.loading.location = false;
      }
    },
    async onLocationSwitchUpdate (val) {
      if (!val) {
        this.location = null;
        return;
      }
      await navigator.permissions && navigator.permissions.query({ name: 'geolocation' })
        .then((result) => {
          this.preparingDirectoryDialog = false;
          if (result.state === 'granted' || result.state === 'prompt') {
            this.getLocation();
          } else if (result.state === 'denied') {
            this.snackbarModel = {
              color: 'warning',
              text: 'Please update your browser location settings before enabling location search.',
            };
            this.showSnack = true;
          }
        });
    },
    /** GMAPS USAGE (NEW) */
    onLocationPick (address) {
      console.log('address', address);
      const { geometry } = address;
      if (!geometry?.location) return;
      const lat = geometry.location.lat();
      const lng = geometry.location.lng();
      console.log('lat', lat);
      console.log('lng', lng);
      this.location = { lat, lng };
    },
    onClearLocation () {
      this.location = null;
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
