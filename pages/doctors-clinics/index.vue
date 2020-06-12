<template lang="pug">
  div(v-if="!loading")#top
    //- 1st panel
    usp(@getStarted="getStarted")
    //- 2nd panel
    increase-revenue(@getStarted="getStarted")
    //- 3rd panel
    safekeep-data(@getStarted="getStarted")
    //- 4th panel
    practice-online(@getStarted="getStarted")#group-practice
    //- 5th panel
    specialized-plans#specialized-practice
    //- 6th panel
    quality-healthcare(@getStarted="getStarted")
    //- 7th panel
    div.cta-container
      cta(@getStarted="goToSignupIndividual($event)")
    //- )
</template>

<script>
// utils
import VueScrollTo from 'vue-scrollto';
import headMeta from '~/utils/head-meta';
// components
import Usp from '~/components/doctors-clinics/usp';
import IncreaseRevenue from '~/components/doctors-clinics/increase-revenue';
import SafekeepData from '~/components/doctors-clinics/safekeep-data';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import SpecializedPlans from '~/components/doctors-clinics/specialized-plans';
import QualityHealthcare from '~/components/doctors-clinics/quality-healthcare';
import Cta from '~/components/doctors-clinics/cta';

export default {
  components: {
    Usp,
    IncreaseRevenue,
    SafekeepData,
    PracticeOnline,
    SpecializedPlans,
    QualityHealthcare,
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
    const offset = panel === '#app' ? 0 : 700;
    this.$nextTick(() => {
      VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset });
    });
  },
  methods: {
    getStarted () {
      this.$router.push({ name: 'signup-individual' });
    },
    goToSignupIndividual (email) {
      this.$router.push({ name: 'signup-individual', params: { email } });
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
  margin-bottom: -4%;
  z-index: 1;
}
.content-container {
  position: relative;
}
.get-started-btn {
  margin-left: -3%;
}
</style>
