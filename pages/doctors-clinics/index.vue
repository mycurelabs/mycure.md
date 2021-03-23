<template lang="pug">
  div(v-if="!loading")
    //- 1st panel
    usp(
      title="Bring Out the Hero in You"
      meta-title="MYCURE DOCTOR"
      :description="uspDescription"
    )
    //- 2nd panel
    features(
      title="Your Practice. Your Call"
      :description="featuresDescription"
      :items="features"
    )
    //- 3rd to 5th panels
    info-panels
    //- 6th panel
    mycure-csi
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
import Features from '~/components/commons/Features';
import InfoPanels from '~/components/doctors-clinics/InfoPanels';
import MycureCsi from '~/components/commons/MycureCsi';
import Usp from '~/components/commons/SevenWondersUsp';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import SpecializedPlans from '~/components/doctors-clinics/specialized-plans';
import QualityHealthcare from '~/components/doctors-clinics/quality-healthcare';
import Cta from '~/components/doctors-clinics/cta';

export default {
  components: {
    Features,
    InfoPanels,
    MycureCsi,
    Usp,
    PracticeOnline,
    SpecializedPlans,
    QualityHealthcare,
    Cta,
  },
  data () {
    // Panel content
    this.uspDescription = 'Designed for modern doctors, MYCURE lets you focus on what you do best — caring for your patients.  MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.';
    this.featuresDescription = 'Use the tools that work best for you. Everything you need is here. It’s FREE.';
    this.features = [
      {
        title: 'Digital Records',
      },
      {
        title: 'Telehealth',
      },
      {
        title: 'Daily Reports',
      },
      {
        title: 'Professional Website',
      },
      {
        title: 'Appointment Booking',
      },
    ];
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
