<template lang="pug">
  div
    app-bar(:picURL="picURL" :clinicName="orgName")
    usp(
      :background-pic="coverURL"
      :name="orgName"
      @selectBrgy="openSelectBrgyDialog"
    )
    healthcare-facilities(
      :hcFacilities="hcFacilities"
      :isLoadingFacilityInfo="isLoadingFacilityInfo"
      :isLoadingFacilityList="isLoadingFacilityList"
      :selectedHcFacilityProviders="selectedHcFacilityProviders"
      :selectedHcFacilityServices="selectedHcFacilityServices"
      :lguId="orgId"
      @populateServices="getSelectedFacilityServices"
      @searchFacility="searchFacility"
    )
    providers(:doctors="healthCareProviders")
    about(
      :description="description"
      :picURL="picURL" :name="orgName"
      @toggleSelectBrgyDialog="toggleSelectBrgyDialog"
    )
    cta
    lgu-footer
    select-barangay-dialog(
      v-model="selectBrgyDialog"
      :barangays="locationTags"
      :orgId="orgId"
      @toggleSelectBrgyDialog="toggleSelectBrgyDialog"
    )
</template>

<script>
// utils
import {
  // - Note: Commented out for disabling purposes
  // getFacilities,
  getFacilityMembers,
  getFacilityServices,
  searchFacilities,
} from '~/utils/axios/healthcare-facility';
// import { getOrganization, getChildOrganizations, getLocationTags, getProviders } from '~/utils/axios';
// utils
import headMeta from '~/utils/head-meta';
// components
import AppBar from '~/components/lgu-website/app-bar';
import Usp from '~/components/lgu-website/usp';
import HealthcareFacilities from '~/components/lgu-website/healthcare-facilities';
import Providers from '~/components/lgu-website/healthcare-providers';
import About from '~/components/lgu-website/about';
import Cta from '~/components/lgu-website/cta';
import LguFooter from '~/components/lgu-website/footer';
import SelectBarangayDialog from '~/components/lgu-website/select-barangay-dialog';

export default {
  layout: 'clinic-website',
  components: {
    AppBar,
    Usp,
    HealthcareFacilities,
    Providers,
    About,
    Cta,
    LguFooter,
    SelectBarangayDialog,
  },
  asyncData ({ redirect, params, error }) {
    // - NOTE: For disabling purposes
    return redirect('/');
    // try {
    //   const lguOrganization = await getOrganization({ id: params.id });
    //   const childOrgs = await getChildOrganizations({ parentOrgId: params.id });
    //   const locationTags = await getLocationTags({ parentOrgId: params.id });
    //   const healthCareProviders = await getProviders({ parentOrgId: params.id });
    //   const healthCareFacilities = await getFacilities({ parentId: params.id });
    //   return {
    //     lguOrganization,
    //     childOrgs,
    //     locationTags,
    //     healthCareProviders,
    //     hcFacilities: healthCareFacilities.data,
    //   };
    // } catch (error) {
    //   console.error(error);
    // }
  },
  data () {
    return {
      loading: false,
      backgroundPicUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/6a/fd/bb/dron-mavic-pro.jpg?w=900&h=-1&s=1',
      selectBrgyDialog: false,
      // healthcare facilities data
      isLoading: false,
      isLoadingFacilityInfo: false,
      isLoadingFacilityList: false,
      hcFacilities: [],
      selectedHcFacilityProviders: [],
      selectedHcFacilityServices: [],
    };
  },
  computed: {
    orgId () {
      return this.$route.params.id;
    },
    picURL () {
      return this.lguOrganization?.picURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    coverURL () {
      return this.lguOrganization?.coverURL || require('~/assets/images/clinics-website/hospital-thumbnail.jpg');
    },
    description () {
      return this.lguOrganization?.description ||
      `${this.lguOrganization?.name} specializes in telehealth services. ${this.lguOrganization?.name} telemedicine service is committed to provide medical consultation via video conference or phone call to our patient 24 hours a day 7 days a week.`;
    },
    orgName () {
      return this.lguOrganization?.name || 'MYCURE LGU';
    },
  },
  methods: {
    toggleSelectBrgyDialog () {
      this.selectBrgyDialog = !this.selectBrgyDialog;
    },
    openSelectBrgyDialog () {
      this.selectBrgyDialog = true;
    },
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
      const { data } = await searchFacilities({ parentId: this.orgId, searchString });
      this.hcFacilities = data;
      this.isLoadingFacilityList = false;
    },
  },
  head () {
    return headMeta({
      title: `${this.lguOrganization?.name || 'LGU Website'}`,
      description: this.description,
      socialBanner: this.picURL,
    });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
