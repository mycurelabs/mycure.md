<template lang="pug">
  div(v-if="!isLoading")
    healthcare-facilities(
      :hcFacilities="hcFacilities"
      :isLoadingFacilityInfo="isLoadingFacilityInfo"
      :isLoadingFacilityList="isLoadingFacilityList"
      :selectedHcFacilityProviders="selectedHcFacilityProviders"
      :selectedHcFacilityServices="selectedHcFacilityServices"
      @populateServices="getSelectedFacilityServices"
      @searchFacility="searchFacility"
    )
</template>

<script>
import headMeta from '~/utils/head-meta';
// components
import HealthcareFacilities from '~/components/lgu-website/healthcare-facilities';
// utils
import { getFacilities, getFacilityMembers, getFacilityServices, searchFacilities } from '~/utils/axios/healthcare-facility';
export default {
  layout: 'doctor-website',
  components: {
    HealthcareFacilities,
  },
  data () {
    return {
      isLoading: true,
      isLoadingFacilityInfo: false,
      isLoadingFacilityList: false,
      hcFacilities: [],
      selectedHcFacilityProviders: [],
      selectedHcFacilityServices: [],
    };
  },
  async mounted () {
    // get all healthcare facility for this LGU ID;
    // TODO: change LGU id to var on integration and use this for final
    const { data } = await getFacilities({ parentId: '5f7d1a1b8d72338cb3b76412' });
    this.hcFacilities = data;
    this.isLoading = false;
  },
  methods: {
    async getSelectedFacilityServices (orgId) {
      this.isLoadingFacilityInfo = true;
      // reset services and providers to empty
      this.selectedHcFacilityServices = [];
      this.selectedHcFacilityProviders = [];
      // get and set the new values
      const services = await getFacilityServices({ orgId });
      const providers = await getFacilityMembers({ orgId });
      this.selectedHcFacilityServices = services;
      this.selectedHcFacilityProviders = providers;
      this.isLoadingFacilityInfo = false;
    },
    async searchFacility (searchString) {
      this.isLoadingFacilityList = true;
      // TODO: change lgu id to var
      const { data } = await searchFacilities({ parentId: '5f7d1a1b8d72338cb3b76412', searchString });
      this.hcFacilities = data;
      this.isLoadingFacilityList = false;
    },
  },
  head () {
    return headMeta({
      title: 'Municipality of <name here>, <province>',
      description: 'Telemedizip | Municipality of <name here>, <province>.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Home.png'),
    });
  },
};
</script>
