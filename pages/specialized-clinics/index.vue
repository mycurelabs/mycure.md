<template lang="pug">
  div(v-if="!loading")#top
    //- 1st panel
    usp
    //- 2nd panel
    workflow
    //- 3rd panel
    features
    //- CTA
    mc-cta-bottom(
      :ctaContent="ctaContent"
      parse-text
      :parseIndicators="['the']"
      btnColor="accent"
    )
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/specialized-clinics/usp';
export default {
  components: {
    Usp,
    Workflow: () => import('~/components/specialized-clinics/workflow'),
    Features: () => import('~/components/specialized-clinics/features'),
    McCtaBottom: () => import('~/components/commons/mc-cta-bottom'),
  },
  data () {
    this.ctaContent = {
      text: 'Grow your practice with the right tools to use',
      subtext: 'Customize your system with MYCURE. Start your 14-day trial today.',
      btnText: 'Start 14-Day Trial',
      btnLink: 'signup-specialized',
      image: 'mycure-web-footer',
    };
    return {
      loading: true,
    };
  },
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management for Specialized Clinics',
      description: 'MYCURE is the best customizable EMR clinic practice management system for skin, maternity care, pediatric, dental, & diagnostic clinics. Book a free demo now!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Specialized-Clinic.png?alt=media&token=cb08fe03-e7c8-4ea7-9f40-c9742c68cfbc',

    });
  },
};
</script>

<style scoped>
#top {
  margin-top: 12vh;
}
</style>
