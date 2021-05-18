<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      title="Bring Out the Hero in You"
      meta-title="MYCURE Doctor"
      image="Doc USP"
      image-width="128%"
      custom-image-path="doctors-clinics/"
      image-align="right"
      btn-text="Get Started Free"
      parse-title="regular"
      regular-height="650px"
      :description="uspDescription"
      :parse-title-fields="['the ']"
    )
    //- 2nd panel
    div.grey-bg
      features(
        extension-exclusive
        title="Your Practice. Your Call."
        :description="featuresDescription"
        :items="features"
        icon-container-col-size="8"
        image-dir="doctors-clinics/"
      )
    //- 3rd to 5th panels
    generic-media-panel(
      v-for="(content, key) in contents"
      :key="key"
      :content="content"
      hide-btn
    )
    //-6th panel
    //- generic-media-panel(
    //-   :fluid="!$isMobile"
    //-   content-align-right
    //-   cols-right="4"
    //-   cols-left="5"
    //-   offset-cols-right="1"
    //-   align-content-right="center"
    //-   :header="sixthPanel.header"
    //-   :descriptions="sixthPanel.descriptions"
    //-   :header-classes="headerClasses"
    //-   :description-classes="descriptionClasses"
    //-   custom-image-path="commons/"
    //-   extension-exclusive
    //-   file-extension=".png"
    //-   :web-image="sixthPanel.image"
    //- )
    //-   //- Check list
    //-   template(slot="additional-content")
    //-     div.mb-5
    //-       v-row(
    //-         v-for="(item, i) in sixthPanel.list"
    //-         :align="i === 2 ? 'center' : 'start'"
    //-         :key="i"
    //-         dense
    //-       )
    //-         v-col(cols="1").pr-2.pt-2
    //-           v-icon(color="black") mdi-arrow-right
    //-         v-col
    //-           span(:class="descriptionClasses") {{ item }}
    //-     br
    //-     div(:class="{ 'text-center': $isMobile }")
    //-       signup-button(
    //-         depressed
    //-         rounded
    //-         :x-large="$isWideScreen"
    //-         :large="$isRegularScreen"
    //-         color="success"
    //-       ).text-none.font-s
    //-         span Get Started Free
    //-         v-icon(small right) mdi-arrow-right
    //- 7th panel
    div.grey-bg
      mycure-csi(:class="panelMargins").pt-10
    //- 8th panel
    div.blue-bg
      practice-online
    //- 9th panel
    think-long-term(
      :fluid="!$isMobile"
      :class="panelMargins"
    )
    //- 10th panel
    pricing(
      :fluid="!$isMobile"
      title="Start free and only pay as you grow"
      :pricing-details="pricingDetails"
    ).py-10.my-10
    //- 11th panel
    call-to-action(:fluid="!$isMobile")
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
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import PracticeOnline from '~/components/doctors-clinics/practice-online';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    MycureCsi,
    PracticeOnline,
    Pricing,
    ThinkLongTerm,
    Usp,
    SignupButton,
  },
  data () {
    // Panel content
    this.uspDescription = 'Designed for modern doctors, MYCURE lets you focus on what you do best — caring for your patients.  MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.';
    this.featuresDescription = 'Use the tools that work best for you. Everything you need is here. It’s FREE!';
    this.contents = [
      {
        title: 'Lightning-fast prescriptions',
        description: 'Create and print prescriptions and other medical forms in 10 seconds or less.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'features/',
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription.webp',
          mobileImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-02-print-prescription-mobile.png',
        },
      },
      {
        title: 'Going digital = better medical history',
        description: 'Imagine looking back at your charts from 5 or 10 years ago on your mobile device with a quick search. How convenient? S-U-P-E-R.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'features/',
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting.webp',
          mobileImage: 'MYCURE-virtual-clinic-healthcare-practice-online-features-B-03-charting-mobile.png',
        },
      },
      {
        title: 'Help patients anywhere',
        description: 'Reach out to more people who need your expertise without getting limited by time or location.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'features/',
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-C-telehealth.webp',
        },
      },
    ];
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
          wide: ['font-xl'],
        }),
        'lh-title',
        'primary--text',
        'font-weight-medium',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
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
.grey-bg {
  background-color: #fafafa;
}
.blue-bg {
  background-color: #0099cc;
}
</style>
