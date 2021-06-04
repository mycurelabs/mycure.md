<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Doctor Landing Page"
      title="Bring Out the Hero in You"
      meta-title="MYCURE Doctor"
      image="Doc USP"
      image-width="115%"
      custom-image-path="doctors-clinics/"
      image-align="right"
      btn-text="Get Started Free"
      parse-title="regular"
      :description="uspDescription"
      :parse-title-fields="['the ']"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
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
      :title-classes="headerClasses"
      hide-btn
    )
    //-6th panel
    generic-media-panel(
      content-right
      :content="sixthPanel"
      :title-classes="headerClasses"
      hide-btn
    )
      //- Check list
      template(slot="additional-content")
        div.mb-10
          v-row(
            v-for="(item, i) in sixthPanel.list"
            :key="item"
            dense
          )
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="7" sm="5" md="7")
              span(:class="descriptionClasses") {{ item }}
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            color="success"
          ).text-none.font-s
            span Get Started Free
            v-icon(small right) mdi-arrow-right
    //- 7th panel
    div.grey-bg.mx-n3
      mycure-csi
    //- 8th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        :content="eightPanel"
        :title-classes="[...headerClasses, 'white--text']"
        :contentClasses="eightPanelContentClasses"
        hide-btn
      )
        template(slot="additional-content")
          v-row(
            v-for="(item, i) in eightPanel.list"
            :key="i"
            dense
          )
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              v-icon(color="white") mdi-checkbox-marked-circle
            v-col(cols="10" sm="5" md="7")
              span(:class="eightPanelContentClasses") {{ item }}
    //- 9th panel
    think-long-term
    v-divider.divider
    //- 10th panel
    pricing(
      type="doctor"
      title="Start free and only pay as you grow"
      :column-bindings="{ cols: '12', md: '4', xl: '3'}"
    )
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
          customPath: 'doctors-clinics/',
          image: 'Lightning fast.png',
          extensionExclusive: true,
          mobileImage: 'Lightning fast mobile.png',
        },
      },
      {
        title: 'Going digital means better medical history',
        description: 'Imagine looking back at your charts from 5 or 10 years ago on your mobile devices with a quick search. How convenient? S-U-P-E-R.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'doctors-clinics/',
          image: 'Going digital.png',
          mobileImage: 'Going digital mobile.png',
          extensionExclusive: true,
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
      title: 'Expand Your Reach',
      description: 'Opt in to MYCURE ONE, a global online directory of modern healthcare practitioners and facilities',
      list: [
        'Patients can easily find you',
        'Get more organized appointments',
        'Comes with a Professional Website',
      ],
      contentAlign: 'right',
      imageBindings: {
        image: 'Expand your reach.png',
        customPath: 'commons/',
        extensionExclusive: true,
      },
    };
    this.eightPanel = {
      title: 'Practice as a Group',
      description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
      imageBindings: {
        image: 'Practice.png',
        customPath: 'doctors-clinics/',
        extensionExclusive: true,
      },
      list: [
        'Collated Medical Records',
        'Optimized Patient Queuing',
        'Group Clinic Chatbox',
        'Shared Secretary Account',
        'Booking Website',
      ],
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
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
        'lh-title',
        'primary--text',
        'font-weight-semibold',
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
    eightPanelContentClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'white--text',
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: #fafafa;
}
.blue-bg {
  background-color: #0099cc;
}
.divider {
  margin-right: 40% !important;
  margin-left: 40% !important;
}
</style>
