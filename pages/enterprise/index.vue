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
    multiple-branches
    //- 7th panel
    one-stop#multispecialty-clinics
    //- 8th panel
    keep-employees#corporate-clinics
    //- 9th panel
    enriching-hearts#medical-arts-centers
    //- 10th panel
    release-diagnostics#diagnostic-centers
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
  mounted () {
    VueScrollTo.scrollTo('#app', 500, { easing: 'ease' });
    this.loading = false;
  },
  methods: {
    onGetStarted (email) {
      localStorage.setItem('multi:step3:email', email);
      this.goToSignup();
    },
    goToSignup () {
      this.$nuxt.$router.push({ name: 'signup-multispecialty' });
    },
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
