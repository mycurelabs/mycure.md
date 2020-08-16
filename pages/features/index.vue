<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(@startNow="startNow")
    //- 2nd panel
    roles-and-privileges#roles-and-privileges
    v-divider.edge-divider
    //- 3rd panel
    medical-records
    v-divider.edge-divider
    //- 4th panel
    virtual-practice
    v-divider.edge-divider
    //- 5th panel
    reports
    v-divider.edge-divider
    //- 6th panel
    billing
    v-divider.edge-divider
    //- 7th panel
    registration-and-queuing
    v-divider.edge-divider
    //- 8th panel
    laboratory-and-imaging
    v-divider.edge-divider
    //- 9th panel
    inventory
    v-divider.edge-divider
    //- 10th panel
    syncbase
    v-divider.edge-divider
    //- 11th panel
    modules
    //- CTA
    div.cta-container.pa-0
      features-cta(@getStarted="goToSignupIndividual($event)")
</template>

<script>
import VueScrollTo from 'vue-scrollto';
// - components
import Usp from '~/components/features/usp';
import RolesAndPrivileges from '~/components/features/roles-and-privileges';
import MedicalRecords from '~/components/features/medical-records';
import VirtualPractice from '~/components/features/virtual-practice';
import Reports from '~/components/features/reports';
import Billing from '~/components/features/billing';
import RegistrationAndQueuing from '~/components/features/registration-and-queuing';
import LaboratoryAndImaging from '~/components/features/laboratory-and-imaging';
import Inventory from '~/components/features/inventory';
import Syncbase from '~/components/features/syncbase';
import Modules from '~/components/features/modules';
import FeaturesCta from '~/components/features/cta';
// - utils
import headMeta from '~/utils/head-meta';

export default {
  components: {
    Usp,
    RolesAndPrivileges,
    MedicalRecords,
    VirtualPractice,
    Reports,
    Billing,
    RegistrationAndQueuing,
    LaboratoryAndImaging,
    Inventory,
    Syncbase,
    Modules,
    FeaturesCta,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  methods: {
    goToSignupIndividual (email) {
      this.$router.push({ name: 'signup-individual', params: { email } });
    },
    startNow () {
      VueScrollTo.scrollTo('#roles-and-privileges', 500, { easing: 'ease', offset: -70 });
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinic Management System and EMR Features',
      description: 'MYCURE Clinic Management System includes modularized features that are customizable, user-friendly and efficient for a more patient-centric care.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images - Features.png'),
    });
  },
};
</script>

<style scoped>
#top {
  margin-top: 12vh;
}
.cta-container {
  position: relative;
  margin-bottom: 0%;
  z-index: 1;
}

</style>
