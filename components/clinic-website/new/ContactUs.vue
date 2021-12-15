<template lang="pug">
  v-card(flat :class="$isMobile ? 'px-4' : 'px-12'").py-8
    v-row
      v-col(cols="12" md="6")
        h3.mc-h3.title--text Contact Us
        br
        v-col(cols="12" md="8")
          //- span.mc-b4.mb-4 {{ address }}
          h3.mc-h5.title--text.mb-.font-weight-semibold Facility Schedule
          //- v-row(v-for="(sched, key) in schedules" :key="key")
          //-   v-col(cols="4").py-2
          //-     span.mc-b3.title--text.font-weight-semibold {{ sched.day }}
          //-   v-col(cols="8").py-2
          //-     span.mc-b3 {{ sched.time }}
          span {{ clinic }}
      v-col(v-if="!$isMobile" cols="1")
        v-divider(vertical)
      v-col(cols="12" md="5").pl-0
        h3.mc-h4.title--text Location
        br
        div#map
</template>

<script>
export default {
  props: {
    address: {
      type: String,
      default: null,
    },
    position: {
      type: Object,
      default: null,
    },
    clinic: {
      type: Object,
      default: null,
    },
  },
  data () {
    this.defaultMapPosition = { lat: 14.5813167, lng: 120.9761788 };
    return {
      map: null,
    };
  },
  head () {
    return {
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
    this.initialize();
  },
  methods: {
    initialize () {
      this.mapGeocoder = new google.maps.Geocoder(); /* eslint-disable-line no-undef */
      const center = this.addressGeometry || this.defaultMapPosition;
      const mapOptions = {
        center,
        zoom: 15,
        mapTypeId: 'roadmap',
      };
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions); /* eslint-disable-line no-undef */

      // Create a marker for passed address
      const position = this.addressGeometry || this.defaultMapPosition;
      this.mapMarker = this.createMapMarker(position);
    },
    createMapMarker (position) {
      const placeMarkerOptions = {
        map: this.map,
        position,
        draggable: false,
      };
      return new google.maps.Marker(placeMarkerOptions); /* eslint-disable-line no-undef */
    },
  },
};
</script>

<style scoped>
.img-border {
  border: 8px solid white;
}
#map {
  min-height: 400px;
  height: 50%;
  min-width: 250px;
  max-width: 600px;
  width: 100%;
}
</style>
