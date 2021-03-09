<template lang="pug">
  //- USP
  v-container(:class="{'usp-container' : !$isMobile }")
    v-row(
      justify="center"
      align="center"
      no-gutters
      :style="{ height: $isMobile ? 'auto' : '520px' }"
    )
      v-col(cols="12")
        org-search-bar(
          require-action
          show-suggestions
          @search-organizations="onSearch($event)"
        )
      v-col(cols="8" md="5" :class="{ 'order-last' : !$isMobile }")
        v-img(
          :src="require('~/assets/images/patients/usp-patients.png')"
          width="100%"
          alt="patients-usp"
        )
      v-col(cols="12" md="6" :class="{ 'text-center' : $isMobile }")
        h1(:class="{ 'font-50 mb-8' : !$isMobile, 'font-35 mb-6' : $isMobile }").primary--text Find the right healthcare services near you
        p(:class="{ 'font-18' : !$isMobile, 'font-14' : $isMobile }").gray--text Diagnostic clinics, hospitals, and full service clinics in Metro Manila are within your reach whenever you need them.
</template>

<script>
import OrgSearchBar from '~/components/services/OrgSearchBar';
export default {
  components: {
    OrgSearchBar,
  },
  methods: {
    onSearch ({ searchText, locationText, suggestion }) {
      this.$nuxt.$router.push({
        name: 'services',
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
.usp-container {
  padding-bottom: 70px;
}
</style>
