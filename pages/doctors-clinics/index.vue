<template lang="pug">
  div(v-if="!loading")
    //- 1st panel
    usp(@getStarted="getStarted($event)" @startNow="startNow")
    //- 2nd panel
    increase-revenue(@getStarted="getStarted")#increase-revenue
    v-divider.edge-divider
    //- 3rd panel
    safekeep-data(@getStarted="getStarted")
    v-divider.edge-divider
    //- 4th panel
    practice-online(@getStarted="getStarted")#group-practice
    v-divider.edge-divider
    //- 5th panel
    specialized-plans#specialized-practice
    v-divider.edge-divider
    //- 6th panel
    quality-healthcare(@getStarted="goToPatientPortal")
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
    this.$nextTick(() => {
      if (this.$route.query.scrollToSpecializedClinics) {
        VueScrollTo.scrollTo('#specialized-practice', 500, { easing: 'ease', offset: 800 });
      } else {
        VueScrollTo.scrollTo(panel, 500, { easing: 'ease', offset: -20 });
      }
    });
  },
  methods: {
    getStarted () {
      this.$nuxt.$router.push({ name: 'signup-individual' });
    },
    goToSignupIndividual (email) {
      this.$nuxt.$router.push({ name: 'signup-individual', params: { email } });
    },
    goToPatientPortal () {
      this.$nuxt.$router.push({ name: 'index', params: { panel: 'patient-portal' } });
    },
    startNow () {
      VueScrollTo.scrollTo('#increase-revenue', 500, { easing: 'ease', offset: -70 });
    },
  },
  head () {
    return headMeta({
      title: 'MYCURE for Doctors | Healthcare Practice Online',
      description: 'Give your patients the quality care they deserve with MYCURE Clinic Management and Telemedicine Solutions.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images - Doctors Clinic.png'),
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
.content-container {
  position: relative;
}
.get-started-btn {
  margin-left: -3%;
}
</style>
