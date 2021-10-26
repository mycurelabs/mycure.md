<template lang="pug">
  v-card
    v-card-text.map-container.pa-3
      //- address input
      v-text-field(
        type="text"
        placeholder="Search Address"
        outlined
        autofocus
        prepend-inner-icon="mdi-map-search-outline"
      )#pac-input
      //- map display
      div#map
    //- card actions
    v-card-actions
      v-btn(
        :loading="loading"
        :disabled="loading"
        label="Cancel"
        text
        @click="getMyPos"
      ) Use my position
      v-spacer
      v-btn(
        :loading="loading"
        :disabled="loading"
        label="Cancel"
        text
        @click="onCancel"
      ) Cancel
      v-btn(
        :loading="loading"
        :disabled="loading"
        label="Save"
        color="primary"
        depressed
        @click="onSave"
      ) Select
</template>

<script>
export default {
  props: {
    address: {
      type: Object,
      default: null,
    },
  },
  data () {
    this.gmapsGeocodingAPIKey = process.env.GMAPS_GEOCODING_API_KEY;
    this.defaultMapPosition = { lat: 14.5813167, lng: 120.9761788 };
    return {
      loading: false,
      map: null,
      mapGeocoder: null,
      mapMarker: null,
      resolvedAddress: {},
    };
  },
  computed: {
    addressGeometry () {
      if (!this.address?.lat || !this.address?.lng) return null;
      return { lat: this.address.lat, lng: this.address.lng };
    },
    addressDisplay () {
      if (!this.address) return null;
      const { street1, city, region, country } = this.address;
      return [street1, city, region, country].filter(Boolean).join(', ');
    },
  },
  mounted () {
    this.initialize();
  },
  methods: {
    initialize () {
      this.initializeAddressAutocomplete();

      // Create a marker for passed address
      const position = this.addressGeometry || this.defaultMapPosition;
      this.mapMarker = this.createMapMarker(position);
      this.addMapMarkerDragEvent();
    },
    initializeAddressAutocomplete () {
      this.mapGeocoder = new google.maps.Geocoder(); /* eslint-disable-line no-undef */
      const center = this.addressGeometry || this.defaultMapPosition;
      const mapOptions = {
        center,
        zoom: 15,
        mapTypeId: 'roadmap',
      };
      this.map = new google.maps.Map(document.getElementById('map'), mapOptions); /* eslint-disable-line no-undef */

      // Create the search box and link it to the UI element.
      const input = document.getElementById('pac-input');
      const searchBox = new google.maps.places.SearchBox(input); /* eslint-disable-line no-undef */

      // Bias the SearchBox results towards current map's viewport.
      this.map.addListener('bounds_changed', () => {
        searchBox.setBounds(this.map.getBounds());
      });

      // add click event
      this.map.addListener('click', (params) => { /* eslint-disable-line no-undef */
        this.mapMarker.setMap(null);
        this.mapMarker = this.createMapMarker(params.latLng);
        this.geocodePosition(this.mapMarker.getPosition());
        this.addMapMarkerDragEvent();
      });

      // Listen for the event fired when the user selects a prediction and retrieve
      // more details for that place.
      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (!places?.length) return null;
        this.resolvedAddress = this.mapAddressComponents(places[0]);
        this.mapMarker.setMap(null);

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds(); /* eslint-disable-line no-undef */
        places.forEach((place) => {
          if (!place?.geometry || !place?.geometry?.location) return null;

          // Create a marker for each place.
          const placeMarkerOptions = {
            map: this.map,
            position: place.geometry.location,
            draggable: true,
          };
          const placeMarker = new google.maps.Marker(placeMarkerOptions); /* eslint-disable-line no-undef */
          this.mapMarker = placeMarker;
          this.addMapMarkerDragEvent();

          if (place?.geometry?.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        this.map.fitBounds(bounds);
      });
    },
    createMapMarker (position) {
      const placeMarkerOptions = {
        map: this.map,
        position,
        draggable: true,
      };
      return new google.maps.Marker(placeMarkerOptions); /* eslint-disable-line no-undef */
    },
    addMapMarkerDragEvent () {
      google.maps.event.addListener(this.mapMarker, 'dragend', () => { /* eslint-disable-line no-undef */
        this.geocodePosition(this.mapMarker.getPosition());
      });
    },
    geocodePosition (position) {
      if (!this.mapMarker || !position) return null;
      const input = document.getElementById('pac-input');
      this.mapGeocoder.geocode({ latLng: position }, (places) => {
        if (!places?.length) return null;

        const place = places[0];
        input.value = place.formatted_address;
        this.resolvedAddress = this.mapAddressComponents(place);

        const bounds = new google.maps.LatLngBounds(); /* eslint-disable-line no-undef */
        if (place?.geometry?.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }

        this.map.fitBounds(bounds);
      });
    },
    mapAddressComponents (result) {
      const address = result?.address_components?.reduce((accumulator, addressComponent) => {
        const types = addressComponent?.types;
        const longName = addressComponent?.long_name;
        // Get Premise
        if (types?.includes('premise')) {
          accumulator.premise = longName;
        }
        // Get Street
        if (types?.includes('street_number')) {
          accumulator.street = longName;
        }
        // Get Route
        if (types?.includes('route')) {
          accumulator.route = longName;
        }
        // Get City
        if (types?.includes('locality') && types?.includes('political')) {
          accumulator.city = longName;
        }
        // Get Region
        if (types?.includes('administrative_area_level_1') && types.includes('political')) {
          accumulator.region = longName;
        }
        // Get Country
        if (types?.includes('country') && types?.includes('political')) {
          accumulator.country = longName;
        }
        return accumulator;
      }, {
        // initial values
        fullAddress: result?.formatted_address,
        geometry: result?.geometry,
        name: result?.name,
        types: result?.types,
      });
      return address;
    },
    onCancel () {
      this.$emit('close', false);
    },
    onSave () {
      this.$emit('resolve', this.resolvedAddress);
      this.$emit('close', true);
    },
    getMyPos () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.mapMarker.setMap(null);
            this.mapMarker = this.createMapMarker(pos);
            this.geocodePosition(this.mapMarker.getPosition());
            this.addMapMarkerDragEvent();
            this.map.setCenter(pos);
            this.addMapMarkerDragEvent();
          },
        );
      } else {
        console.log("Browser doesn't support Geolocation");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.map-container {
  max-height: 80vh;
}

#map {
  min-height: 450px;
  height: 100%;
  min-width: 450px;
  max-width: 600px;
  width: 100%;
}

#pac-input {
  width: 100% !important;
  max-width: none !important;
  text-overflow: ellipsis !important;
  padding: 5px 10px;
}
</style>
