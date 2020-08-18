<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(@getStarted="goToSignupIndividual($event)")
    //- 2nd panel
    platform-panels(@getStarted="getStarted")
    v-divider.edge-divider
    //- 3rd panel
    storyflow(
      :storyflow="storyflowItems"
      :introduction="storyflowIntroText"
      customPath="virtual-clinic-home/"
      horizontal
      horizontal-image-size="40%"
    )
    //- 4th panel
    privacy
    //- 5th panel
    apis
    //- 6th panel
    patient-portal(@goToPatientPortal="goToPatientPortal")#patient-portal
    //- 7th panel
    testimonial
    //- final panel
    div.cta-container
      cta(@getStarted="getStarted")
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
import { parseTextWithNewLine } from '~/utils/newline';
// - components
import Usp from '~/components/virtual-clinic-home/usp';
import PlatformPanels from '~/components/virtual-clinic-home/platform-panels';
import Storyflow from '~/components/commons/storyflow';
import Privacy from '~/components/virtual-clinic-home/privacy';
import Apis from '~/components/virtual-clinic-home/apis';
import Testimonial from '~/components/virtual-clinic-home/testimonial';
import PatientPortal from '~/components/virtual-clinic-home/patient-portal';
import Cta from '~/components/virtual-clinic-home/cta';

export default {
  components: {
    Usp,
    PlatformPanels,
    Storyflow,
    Privacy,
    Apis,
    PatientPortal,
    Testimonial,
    Cta,
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
    this.scrollToPosition();
    this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
      : VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    window.$crisp.push(['safe', true]);
    this.loading = false;
  },
  methods: {
    scrollToPosition () {
      const panel = this.scrollPanel || '#app';
      const offsetMappings = [
        { key: '#app', offset: 0 },
        { key: '#patient-portal', offset: 100 },
      ];
      const { offset } = offsetMappings.find(mapping => mapping.key === panel);
      this.$nextTick(() => {
        VueScrollTo.scrollTo(panel, 400, { easing: 'ease', offset });
      });
    },
    getStarted () {
      this.$router.push({ name: 'signup-individual-invite' });
    },
    goToSignupIndividual (email) {
      this.$router.push({ name: 'signup-individual-invite', params: { email } });
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
      title: 'MYCURE Virtual Clinic | Healthcare Practice Online',
      description: 'MYCURE is an advanced clinic management system that allows you to securely consult with patients online and get real-time medical and business insights.',
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
