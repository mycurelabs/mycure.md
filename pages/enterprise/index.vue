<template lang="pug">
  div(v-if="!loading")#top
    //- 1st panel
    usp(@getStarted="onGetStarted($event)")
    //- 2nd panel
    your-patients(@getStarted="goToSignup")
    //- 3rd panel
    handle-outpatient(@getStarted="goToSignup")
    //- 4th panel
    patients-loop(@getStarted="goToSignup")
    //- 5th panel
    smarter-decisions
    //- 6th panel
    multiple-branches(@getStarted="goToSignup")
    //- 7th panel
    one-stop#multispecialty-clinics(@goToFeatures="goToFeatures" @getStarted="goToSignup")
    //- 8th panel
    keep-employees#corporate-clinics(@goToFeatures="goToFeatures" @getStarted="goToSignup")
    //- 9th panel
    enriching-hearts#medical-arts-centers(@goToFeatures="goToFeatures" @getStarted="goToSignup")
    //- 10th panel
    release-diagnostics#diagnostic-centers(@goToFeatures="goToFeatures" @getStarted="goToSignup")
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
    const offset = panel === '#app' ? 0 : 400;
    this.$nextTick(() => {
      VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset });
    });
  },
  methods: {
    onGetStarted (email) {
      localStorage.setItem('multi:step3:email', email);
      this.goToSignup();
    },
    goToSignup () {
      this.$nuxt.$router.push({ name: 'signup-multispecialty' });
    },
    goToFeatures () {
      this.$router.push({ name: 'features' });
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE Virtual Clinic | Healthcare Practice Online',
      description: 'MYCURE is an advanced clinic management system that allows you to securely consult with patients online and get real-time medical and business insights.',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Doctors-Clinic.png?alt=media&token=a4c57fe8-8ac7-479c-a959-949930299ca5',
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
  margin-bottom: -30px;
  z-index: 1;
}
.get-started-btn {
  margin-left: -3%;
}
</style>
