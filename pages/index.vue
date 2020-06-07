<template lang="pug">
  div(v-if="!loading")#top.white
    //- 1st panel
    usp(@getStarted="goToSignupIndividual($event)")
    //- 2nd panel
    platform-panels(@getStarted="getStarted").platform-panel
    //- 3rd panel
    storyflow(
      :storyflow="storyflowItems"
      :introduction="storyflowIntroText"
      customPath="virtual-clinic-home/"
      horizontal
      horizontal-image-size="40%"
    ).mt-10
    //- 4th panel
    privacy
    //- 5th panel
    apis
    //- 6th panel
    testimonial
    //- final panel
    cta(@getStarted="getStarted")
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
import { parseTextWithNewLine } from '~/utils/newline';
// - components
import Apis from '~/components/virtual-clinic-home/apis';
import Cta from '~/components/virtual-clinic-home/cta';
import PlatformPanels from '~/components/virtual-clinic-home/platform-panels';
import Privacy from '~/components/virtual-clinic-home/privacy';
import Storyflow from '~/components/commons/storyflow';
import Testimonial from '~/components/virtual-clinic-home/testimonial';
import Usp from '~/components/virtual-clinic-home/usp';

export default {
  components: {
    Apis,
    Cta,
    PlatformPanels,
    Privacy,
    Storyflow,
    Testimonial,
    Usp,
  },
  data () {
    this.storyflowItems = [
      {
        title: 'Secure Electronic Health Records (EHR)',
        text: 'Powerful, robust and proven solution that organizes health records based on global health standards.',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-E-benefits-01-secure-ehr.png',
      },
      {
        title: 'Solving Everyday Challenges Efficiently',
        text: 'Duplicate or missing charts, billing mishaps, excess costs, and crazy workflows become the least of your worries.',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-E-benefits-02-analytics.png',
      },
      {
        title: 'Holistic Patient Care Experience',
        text: 'From registration to billing, evaluate your patient care performance through fast reporting and analytics.',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-E-benefits-03-holistic-patient-care.png',
      },
    ];
    this.introText = 'The best tech tool you\'ll need every step of the way';
    return {
      loading: true,
    };
  },
  computed: {
    storyflowIntroText () {
      return this.$isMobile
        ? this.introText
        : parseTextWithNewLine(this.introText, ['need']);
    },
  },
  mounted () {
    this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
      : VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    window.$crisp.push(['safe', true]);
    this.loading = false;
  },
  methods: {
    getStarted () {
      this.$router.push({ name: 'signup-individual' });
    },
    goToSignupIndividual (email) {
      this.$router.push({ name: 'signup-individual', params: { email } });
    },
    handleWatchFeatures () {
      this.$ga.event({
        eventCategory: 'button',
        eventLabel: 'home-watch-features-btn',
        eventAction: 'click-home-watch-features-btn',
      });

      this.featuresVideoDialog = true;
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Advanced Complete Clinic Management System',
      description: 'MYCURE is an advanced clinic management system that optimizes workflows, gives real-time EMR and business insights — loved by doctors and medical staff.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
.platform-panel {
  margin-top: 10vh;
}
</style>
