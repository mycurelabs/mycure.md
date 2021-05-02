<template lang="pug">
  v-container.my-10
    v-row(justify="center")
      v-col(cols="12" md="10")
        v-row(justify="center" align="center")
          div.d-flex.text-center
            img(
              src="~/assets/images/patients/location.png"
              alt="Location icon"
              width="23%"
            )
            h1(:class="{ 'font-25': $isMobile }") &nbsp;Locations
      v-col(cols="12" md="10")
        v-row
          v-col(
            v-for="(city, key) in ncrCities"
            :key="key"
            cols="6"
            md="4"
            @click="onLocationClick(city)"
          )
            v-btn(
              text
              block
              color="primary"
            ).text-none
              span(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }") {{ city }}
</template>

<script>
import NCR_CITIES from '~/assets/fixtures/ncr-cities';
export default {
  data () {
    this.ncrCities = NCR_CITIES;
    return {};
  },
  methods: {
    onLocationClick (city) {
      this.$nuxt.$router.push({ name: 'directory-results', params: { facilityLocationText: city } });
    },
  },
};
</script>
