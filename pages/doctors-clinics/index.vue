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
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header="callToActionPanel.header"
      :header-classes="headerClasses"
      :descriptions="callToActionPanel.descriptions"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// components
import Features from '~/components/commons/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import InfoPanels from '~/components/doctors-clinics/InfoPanels';
import MycureCsi from '~/components/commons/MycureCsi';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import Pricing from '~/components/commons/Pricing';
import ThinkLongTerm from '~/components/commons/ThinkLongTerm';
import Usp from '~/components/commons/SevenWondersUsp';

export default {
  components: {
    Features,
    GenericMediaPanel,
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
    this.pricingDetails = [
      {
        title: 'ALWAYS FREE',
        currency: 'PHP',
        monthlyPrice: 0,
        users: 1,
        inclusions: [
          'Unlimited Patients',
          '3 clinics',
          '200 MB Storage',
          'Core Features',
        ],
        btnText: 'Get Started Free',
        btnRoute: 'signup-health-facilities',
      },
      {
        title: 'PREMIUM',
        currency: 'PHP',
        monthlyPrice: 488,
        annualMonthlyPrice: 399,
        users: 'per',
        inclusions: [
          'Unlimited Patients',
          'Unlimited clinics',
          '10 GB Storage',
          'Core Features',
          'Premium Features',
          'Add Ons',
        ],
        btnText: 'Get Started Free',
        btnRoute: 'signup-health-facilities',
      },
    ];
    this.callToActionPanel = {
      header: 'Learn the basics with ease',
      descriptions: [
        'Worrying about the shift to digital records? We got you covered. ',
        'We understand that it may be difficult to change what you’re used to doing. That’s why we have happiness agents who’d love to guide you through each step via one-on-one training session.',
      ],
    };
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management System for Doctors',
      description: 'MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images - Doctors Clinic.png'),
    });
  },
  computed: {
    panelMargins () {
      return { 'mt-10': this.$isMobile };
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
  mounted () {
    this.loading = false;
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
