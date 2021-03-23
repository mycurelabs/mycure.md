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
    //- 7th panel
    practice-online(@getStarted="getStarted")#group-practice
    //- 8th panel
    think-long-term(extended)
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
// components
import Features from '~/components/commons/Features';
import InfoPanels from '~/components/doctors-clinics/InfoPanels';
import MycureCsi from '~/components/commons/MycureCsi';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import ThinkLongTerm from '~/components/commons/ThinkLongTerm';
import Usp from '~/components/commons/SevenWondersUsp';

export default {
  components: {
    Features,
    InfoPanels,
    MycureCsi,
    PracticeOnline,
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
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
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
