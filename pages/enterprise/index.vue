<template lang="pug">
  div(v-if="!loading")
    //- 1st panel
    usp(@getStarted="onGetStarted($event)" @startNow="startNow")
    //- 2nd panel
    your-patients(@getStarted="goToSignup")#your-patients
    v-divider.edge-divider
    //- 3rd panel
    handle-outpatient(@getStarted="goToSignup")
    v-divider.edge-divider
    //- 4th panel
    patients-loop(@getStarted="goToSignup")
    v-divider.edge-divider
    //- 5th panel
    smarter-decisions
    v-divider.edge-divider
    //- 6th panel
    multiple-branches(@getStarted="goToSignup")#multibranch-facilities
    v-divider.edge-divider
    //- 7th panel
    one-stop(@goToFeatures="goToFeatures" @getStarted="goToSignup")
    v-divider.edge-divider
    //- 8th panel
    keep-employees(@goToFeatures="goToFeatures" @getStarted="goToSignup")#corporate-clinics
    v-divider.edge-divider
    //- 9th panel
    enriching-hearts(@goToFeatures="goToFeatures" @getStarted="goToSignup")#medical-arts-centers
    v-divider.edge-divider
    //- 10th panel
    release-diagnostics(@goToFeatures="goToFeatures" @getStarted="goToSignup")#diagnostic-centers
    //- cta panel
    div.cta-container
      cta(@getStarted="onGetStarted($event)")
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/enterprise/usp';
import YourPatients from '~/components/enterprise/your-patients';
import HandleOutpatient from '~/components/enterprise/handle-outpatient';
import PatientsLoop from '~/components/enterprise/patients-loop';
import SmarterDecisions from '~/components/enterprise/smarter-decisions';
import MultipleBranches from '~/components/enterprise/multiple-branches';
import OneStop from '~/components/enterprise/one-stop';
import KeepEmployees from '~/components/enterprise/keep-employees';
import EnrichingHearts from '~/components/enterprise/enriching-hearts';
import ReleaseDiagnostics from '~/components/enterprise/release-diagnostics';
import Cta from '~/components/enterprise/cta';

export default {
  components: {
    Usp,
    YourPatients,
    HandleOutpatient,
    PatientsLoop,
    SmarterDecisions,
    MultipleBranches,
    OneStop,
    KeepEmployees,
    EnrichingHearts,
    ReleaseDiagnostics,
    Cta,
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
  },
  mounted () {
    this.loading = false;
    const panel = this.scrollPanel || '#app';
    this.$nextTick(() => {
      VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset: -70 });
    });
  },
  methods: {
    onGetStarted (email) {
      localStorage.setItem('multi:step3:email', email);
      this.goToSignup();
    },
    goToSignup () {
      // this.$nuxt.$router.push({ name: 'signup-multispecialty-step-1' });
      window.open('https://calendly.com/mycure/demo', '_blank');
    },
    goToFeatures () {
      this.$nuxt.$router.push({ name: 'features' });
    },
    startNow () {
      VueScrollTo.scrollTo('#your-patients', 500, { easing: 'ease', offset: -70 });
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Enterprise | Healthcare Practice Online',
      description: 'Build an online brand for your healthcare facility with MYCURE. Best for multispecialty clinics, multi-branch clinic chains, medical arts centers, and more.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images - Enterprise.png'),
    });
  },
};
</script>

<style>
#top {
  margin-top: 12vh;
}
.cta-container {
  position: relative;
  margin-bottom: 0%;
  z-index: 1;
}
.get-started-btn {
  margin-left: -3%;
}
</style>
