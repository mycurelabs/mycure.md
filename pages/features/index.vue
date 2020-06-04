<template lang="pug">
  div(v-if="!loading")#top.white
    //- 1st panel
    usp

    //- Old components
    //- //- 2nd panel
    //- roles-and-privileges(:isMobile="isMobile")
    //- //- 3rd panel
    //- medical-records(:isMobile="isMobile")
    //- //- 4th panel
    //- reports(:isMobile="isMobile")
    //- //- 5th panel
    //- billing(:isMobile="isMobile")
    //- //- 6th panel
    //- registration-and-queuing(:isMobile="isMobile")
    //- //- 7th panel
    //- laboratory-and-imaging(:isMobile="isMobile")
    //- //- 8th panel
    //- inventory(:isMobile="isMobile")
    //- //- 9th panel
    modules(:isMobile="isMobile")
    //- //- cta
    //- mc-cta-bottom(
    //-   :ctaContent="ctaContent"
    //-   btnColor="accent"
    //- )
</template>

<script>
import VueScrollTo from 'vue-scrollto';
// - Import all new components here
// - components
import Usp from '~/components/features/usp';
// - utils
import { parseTextWithNewLine } from '~/utils/newline';
import headMeta from '~/utils/head-meta';

export default {
  components: {
    Usp,
    // - Old components
    // RolesAndPrivileges: () => import('~/components/features/roles-and-privileges'),
    // MedicalRecords: () => import('~/components/features/medical-records'),
    // Reports: () => import('~/components/features/reports'),
    // Billing: () => import('~/components/features/billing'),
    // RegistrationAndQueuing: () => import('~/components/features/registration-and-queuing'),
    // LaboratoryAndImaging: () => import('~/components/features/laboratory-and-imaging'),
    // Inventory: () => import('~/components/features/inventory'),
    // Syncbase: () => import('~/components/features/syncbase'),
    Modules: () => import('~/components/features/modules'),
    // McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
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
</style>
