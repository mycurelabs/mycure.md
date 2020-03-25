<template lang="pug">
  div#top.white
    //- 1st panel
    usp(@getStarted="getStarted")
    //- final panel
    mc-cta-bottom(
      parse-text
      :parseIndicators="['for']"
      :ctaContent="ctaContent"
      @btnClick="getStarted"
    )
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/home/usp';
import McCtaBottom from '~/components/commons/mc-cta-bottom';

export default {
  components: {
    Usp,
    McCtaBottom,
  },
  data () {
    this.ctaContent = {
      text: 'Find the best solution for your health facility',
      btnText: 'Get Started',
      image: 'mycure-web-footer',
    };
    return {};
  },
  // mounted () {
  //   this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
  //     : VueScrollTo.scrollTo('#top', 500, { easing: 'ease' });
  // },
  methods: {
    getStarted () {
      VueScrollTo.scrollTo('#health-suites', 500, { easing: 'ease' });
    },
  },
  head () {
    return headMeta({
      title: 'Advanced Complete Clinic Management System',
      description: 'MYCURE is an advanced clinic management system that optimizes workflows, gives real-time EMR and business insights — loved by doctors and medical staff.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
hr {
  border: 1px solid #2e9fdf;
  margin: auto;
  width: 10%;
}
</style>
