<template lang="pug">
  div#top
    //- 1st panel
    usp
    //- 2nd panel
    platform-panels
    //- workflow
    //- //- 3rd panel
    //- features
    //- //- 4th panel
    //- pricing
    //- //- 5th panel
    //- faqs
    //- //- CTA
    //- mc-cta-bottom(
    //-   parse-text
    //-   :parseIndicators="['when']"
    //-   :ctaContent="ctaContent"
    //-   btnColor="accent"
    //- )
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/doctors-clinics/usp';

export default {
  components: {
    Usp,
    PlatformPanels: () => import('~/components/doctors-clinics/platform-panels'),
    Workflow: () => import('~/components/doctors-clinics/workflow'),
    Features: () => import('~/components/doctors-clinics/features'),
    Pricing: () => import('~/components/doctors-clinics/pricing'),
    Faqs: () => import('~/components/doctors-clinics/faqs'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  data () {
    this.ctaContent = {
      text: 'It\'s always better when we work together',
      subtext: 'Experience what more you can do with MYCURE technology by your side.',
      btnText: 'Start Free',
      btnLink: 'signup-individual',
    };
    return {};
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management Solution for Doctors',
      description: 'MYCURE is the best EMR clinic practice management system that helps doctors doing solo or group practice manage their daily clinical needs. Start FREE today!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Doctors-Clinic.png?alt=media&token=a4c57fe8-8ac7-479c-a959-949930299ca5',
    });
  },
};
</script>
