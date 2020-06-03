<template lang="pug">
  div(v-if="!loading")#top
    //- 1st panel
    Usp
    //- 2nd panel
    YourPatients
    //- 3rd panel
    HandleOutpatient
    //- 4th panel
    SmarterDecisions
    //- 5th panel
    MultipleBranches
    //- 6th panel
    div.cta-container
      Cta
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/enterprise/usp';
import YourPatients from '~/components/enterprise/your-patients';
import HandleOutpatient from '~/components/enterprise/handle-outpatient';
import SmarterDecisions from '~/components/enterprise/smarter-decisions';
import MultipleBranches from '~/components/enterprise/multiple-branches';
import Cta from '~/components/enterprise/cta';

export default {
  components: {
    Usp,
    YourPatients,
    HandleOutpatient,
    SmarterDecisions,
    MultipleBranches,
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

<style scoped>
#top {
  margin-top: 12vh;
}
.cta-container {
  position: relative;
  margin-bottom: -30px;
  z-index: 1;
}
</style>
