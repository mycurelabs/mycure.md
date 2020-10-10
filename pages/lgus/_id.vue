<template lang="pug">
  div
    app-bar(:picURL="picURL" :clinicName="orgName")
    usp(
      :background-pic="coverURL"
      :name="orgName"
      @selectBrgy="openSelectBrgyDialog"
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
      @toggleSelectBrgyDialog="toggleSelectBrgyDialog"
    )
</template>

<script>
// services
import { getOrganization, getChildOrganizations, getLocationTags, getProviders } from '~/utils/axios';
// utils
import headMeta from '~/utils/head-meta';
// components
import AppBar from '~/components/lgu-website/app-bar';
import Usp from '~/components/lgu-website/usp';
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
    Providers,
    About,
    Cta,
    LguFooter,
    SelectBarangayDialog,
  },
  async asyncData ({ params, error }) {
    try {
      const lguOrganization = await getOrganization({ id: params.id });
      const childOrgs = await getChildOrganizations({ parentOrgId: params.id });
      const locationTags = await getLocationTags({ parentOrgId: params.id });
      const healthCareProviders = await getProviders({ parentOrgId: params.id });
      return {
        lguOrganization,
        childOrgs,
        locationTags,
        healthCareProviders,
      };
    } catch (error) {
      console.error(error);
    }
  },
  data () {
    return {
      loading: false,
      backgroundPicUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/6a/fd/bb/dron-mavic-pro.jpg?w=900&h=-1&s=1',
      selectBrgyDialog: false,
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
