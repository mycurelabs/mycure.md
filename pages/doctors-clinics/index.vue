<template lang="pug">
  div(v-if="!loading")
    //- 1st panel
    usp(
      title="Bring Out the Hero in You"
      meta-title="MYCURE DOCTOR"
      parse-title
      :parse-title-fields="['Hero ']"
      :description="uspDescription"
    )
    //- 2nd panel
    features(
      title="Your Practice. Your Call"
      :description="featuresDescription"
      :items="features"
      :class="panelMargins"
    )
    //- 3rd to 5th panels
    info-panels(:class="panelMargins")
    //- 6th panel
    mycure-csi(:class="panelMargins")
    //- 7th panel
    practice-online(:class="panelMargins")#group-practice
    //- 8th panel
    think-long-term(extended :class="panelMargins")
    //- 9th panel
    pricing(
      title="Start free and only pay as you grow"
      :pricing-details="pricingDetails"
    ).py-10.my-10
    //- 10th panel
    call-to-action
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
// constants
import { DOCTORS_PRICING } from '~/constants/pricing';
// components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import InfoPanels from '~/components/doctors-clinics/InfoPanels';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    InfoPanels,
    MycureCsi,
    PracticeOnline,
    Pricing,
    ThinkLongTerm,
    Usp,
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
    this.pricingDetails = DOCTORS_PRICING;
    return {
      loading: true,
    };
  },
  computed: {
    panelMargins () {
      return { 'mt-10': this.$isMobile };
    },
  },
  mounted () {
    this.loading = false;
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management System for Doctors',
      description: 'MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.',
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
