<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Bring Out the Hero in You"
      meta-title="MYCURE Doctor"
      :description="uspDescription"
      image="USP"
      custom-image-path="doctors-clinics/"
      btn-text="Get Started Free"
      web-height="600px"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', params: { type: 'doctors' }})"
      parse-title="regular"
      :parse-title-fields="['the ']"
    )
    //- 2nd panel
    features(
      extension-exclusive
      title="Your Practice. Your Call"
      :description="featuresDescription"
      :items="features"
      image-dir="doctors-clinics/"
      panel-height="70vh"
    ).mt-1
    //- 3rd to 5th panels
    info-panels(:class="panelMargins")
    //-6th panel
    generic-media-panel(
      content-align-right
      cols-right="4"
      cols-left="5"
      offset-cols-right="1"
      align-content-right="center"
      :header="sixthPanel.header"
      :descriptions="sixthPanel.descriptions"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      custom-image-path="commons/"
      extension-exclusive
      file-extension=".png"
      :web-image="sixthPanel.image"
    )
      //- Check list
      template(slot="additional-content")
        div.mb-5
          v-row(
            v-for="(item, i) in sixthPanel.list"
            :align="i === 2 ? 'center' : 'start'"
            :key="i"
            dense
          )
            v-col(cols="1").pr-2.pt-2
              v-icon(color="black") mdi-arrow-right
            v-col
              span(:class="descriptionClasses") {{ item }}
        br
        div(:class="{ 'text-center': $isMobile }")
          mc-btn(
            depressed
            color="success"
            event-label="signup"
            :to="{ name: 'signup-health-facilities' }"
          ).text-none.font-12
            span Get Started Free
            v-icon(small right) mdi-arrow-right
    //- 7th panel
    mycure-csi(:class="panelMargins")
    //- 8th panel
    practice-online(:class="panelMargins")#group-practice
    //- 9th panel
    think-long-term(extended :class="panelMargins")
    //- 10th panel
    pricing(
      title="Start free and only pay as you grow"
      :pricing-details="pricingDetails"
    ).py-10.my-10
    //- 11th panel
    call-to-action
</template>

<script>
// utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// constants
import { DOCTORS_PRICING } from '~/constants/pricing';
// components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
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
    this.featuresDescription = 'Use the tools that work best for you. Everything you need is here. It’s FREE!';
    this.features = [
      {
        title: 'Digital Records',
        icon: 'Digital Records',
        iconExtension: '.png',
      },
      {
        title: 'Telehealth',
        icon: 'Telehealth',
        iconExtension: '.png',
      },
      {
        title: 'Daily Reports',
        icon: 'Daily Reports',
        iconExtension: '.png',
      },
      {
        title: 'Professional Website',
        icon: 'Professional Website',
        iconExtension: '.png',
      },
      {
        title: 'Appointment Booking',
        icon: 'Appointment Booking',
        iconExtension: '.png',
      },
    ];
    this.sixthPanel = {
      header: 'Expand Your Reach',
      descriptions: [
        'Opt in to MYCURE ONE, a global online directory of modern healthcare practitioners and facilities',
      ],
      list: [
        'Patients can easily find you',
        'Get more organized appointments',
        'Comes with a Professional Website',
      ],
      contentAlign: 'right',
      image: 'Expand your reach',
    };
    this.pricingDetails = DOCTORS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR Practice Management System for Doctors',
      description: 'MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.',
      socialBanner: require('~/assets/images/banners/OG Doc.png'),
    });
  },
  computed: {
    panelMargins () {
      return { 'mt-10': this.$isMobile, 'web-margins': !this.$isMobile };
    },
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m', 'text-center'],
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

<style scoped>
.web-margins {
  margin-top: 50px;
}
</style>
