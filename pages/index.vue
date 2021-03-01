<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(@getStarted="goToSignupIndividual")
    start-easy
    features
    syncbase
    hipaa
    plans
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
import { parseTextWithNewLine } from '~/utils/newline';
// - components
import Usp from '~/components/providers/Usp';
import StartEasy from '~/components/providers/StartEasy';
import Features from '~/components/providers/Features';
import Syncbase from '~/components/providers/Syncbase';
import Hipaa from '~/components/providers/Hipaa';
import Plans from '~/components/providers/Plans';

export default {
  components: {
    Usp,
    StartEasy,
    Features,
    Syncbase,
    Hipaa,
    Plans,
  },
  data () {
    return {
      loading: true,
    };
  },
  computed: {
    scrollPanel () {
      const panel = this.$nuxt.$route.params.panel;
      return panel ? `#${panel}` : null;
    },
    storyflowIntroText () {
      return this.$isMobile
        ? this.introText
        : parseTextWithNewLine(this.introText, ['need']);
    },
  },
  mounted () {
    this.loading = false;
    const panel = this.scrollPanel || '#app';
    setTimeout(() => {
      VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset: -100 });
    }, 0);

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
      this.$router.push({ name: 'signup-individual' });
    },
    goToPatientPortal () {
      window.open(process.env.PX_PORTAL_URL, '_blank', 'noopener, noreferrer');
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
      title: 'MYCURE Healthcare Service Booking Management Software',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Home.png'),
    });
  },
};
</script>

<style scoped>
.cta-container {
  position: relative;
  margin-bottom: 0%;
  z-index: 1;
}
</style>
