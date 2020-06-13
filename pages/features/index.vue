<template lang="pug">
  div(v-if="!loading")#top.white
    //- 1st panel
    usp
    //- 2nd panel
    roles-and-privileges
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
    div.cta-container
      features-cta
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
import { parseTextWithNewLine } from '~/utils/newline';
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
      ctaContent: {
        text: 'Embrace a new habit',
        subtext: this.parseCtaSubText(),
        btnText: 'Get Started Today',
        image: 'mycure-web-footer',
      },
      isMobile: true,
      loading: true,
    };
  },
  computed: {
    uspTitle () {
      const { title } = this.uspContents;
      return parseTextWithNewLine(title, ['time', 'more']);
    },
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.isMobile = this.$isMobile;
    this.loading = false;
  },
  methods: {
    parseCtaSubText () {
      const subtext = 'Let your patients experience top-of-the-line services with the help of MYCURE.';
      return subtext;
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinic Management System and EMR Features',
      description: 'MYCURE Clinic Management System includes modularized features that are customizable, user-friendly and efficient for a more patient-centric care.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Features.png?alt=media&token=6bac1cce-cd24-4af2-b3d8-b0cf3005ec91',
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
  margin-bottom: -4%;
  z-index: 1;
}
</style>
