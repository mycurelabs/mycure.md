<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Doctor-Landing-Page"
      :background-image-file-extension="$useWebp? '.webp' : '.png'"
      title="Bring Out the Hero in You"
      meta-title="MYCURE Doctor"
      image="Doc-USP"
      image-width="90%"
      custom-image-path="doctors-clinics/"
      image-align="right"
      btn-text="Get Started Free"
      parse-title
      extension-exclusive
      :description="uspDescription"
      :parse-title-fields="['the ']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Make it easy for your patients to schedule a consultation"
        :title-col-size="11"
        :description="featuresDescription"
        :items="features"
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
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
      hide-btn
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in sixthPanel.list")
          v-row(dense align="center").my-2
            img(
              src="~/assets/images/mycure-check.png"
              alt="Check icon"
              :width="$isWideScreen ? '30' : '20'"
              :height="$isWideScreen ? '30' : '20'"
            )
            span(:class="[descriptionClasses, ($isMobile ? 'ml-2' : ($isRegularScreen ? 'ml-3' : 'ml-4'))]") {{ item }}
        div.mb-10
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            class="rounded-pill"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
            color="success"
          ).text-none
            span.generic-button-text Get Started Free
            v-icon(small right) mdi-arrow-right
    //- 7th panel
    div.grey-bg.mx-n3
      mycure-csi
    //- 8th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        :content="eightPanel"
        :title-classes="[...listHeaderClasses, 'white--text']"
        :contentClasses="eightPanelContentClasses"
        hide-btn
      )
        template(slot="additional-content")
          template(v-for="item in eightPanel.list")
            v-row(dense align="center").my-2
              v-icon(color="white" :large="$isWideScreen") mdi-checkbox-marked-circle
              span(:class="[eightPanelContentClasses, ($isMobile ? 'ml-2' : ($isRegularScreen ? 'ml-3' : 'ml-4'))]") {{ item }}
    //- 9th panel
    different-video
    steps(:steps="stepsContent")
    testimonials
    think-long-term
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    v-divider.divider
    //- 10th panel
    client-only
      pricing(
        center-items
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
// constants
import { DOCTORS_PRICING } from '~/constants/pricing';
// components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    SignupButton: () => import('~/components/commons/SignupButton'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Testimonials: () => import('~/components/doctors-clinics/Testimonials'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
    DifferentVideo: () => import('~/components/commons/panels/DifferentVideo'),
  },
  data () {
    // Panel content
    this.uspDescription = 'Designed for modern doctors, MYCURE lets you focus on what you do best — caring for your patients.  MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.';
    this.featuresDescription = 'Use the tools that work best for you. Everything you need is here from task management to data compliance. It’s FREE!';
    this.features = [
      {
        title: 'Professional Website',
        icon: 'Professional-Website',
        iconExtension: '.webp',
      },
      {
        title: 'Appointment Booking',
        icon: 'Appointment-Booking',
        iconExtension: '.webp',
      },
      {
        title: 'Telehealth',
        icon: 'Telehealth',
        iconExtension: '.webp',
      },
      {
        title: 'Digital Records',
        icon: 'Daily-Reports',
        iconExtension: '.webp',
      },
      {
        title: 'Daily Reports',
        icon: 'Daily-Reports',
        iconExtension: '.webp',
      },
    ];
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates the features in your account for FREE.',
      },
      {
        title: 'Set up your Website',
        description: 'Allow your patients to easily find and book you.',
      },
      {
        title: 'Set up your EMR',
        description: 'Securely store and organize your patient records.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of doctor who wants to be efficient, organized and prefers to use modern tools. In order to be that way, you need a solution that will make it easier for you to securely organize and secure patients’ records while allowing them to conveniently book an appointment with you.',
      'The problem is it’s hard to find such a system that is easy to use, affordable and customized to your practice, which makes you feel frustrated.  We believe that health providers should never have to deal with this. We’ve talked to hundreds of doctors and understand that there is a need for this. ',
      'That’s why we’ve been continuously building MYCURE EMR Practice Management System designed for modern doctors like you so you can focus on what you do best - taking care of your patients, while MYCURE takes care of the rest.',
    ];
    this.pricingDetails = DOCTORS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'primary--text', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.eightPanelContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'white--text'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'primary--text', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'EMR Practice Management System for Doctors - Start Free | MYCURE',
      description: 'MYCURE organizes your daily tasks to make your practice more simple, secure, and efficient.',
      socialBanner: require('~/assets/images/banners/doc-og-banner.png'),
    });
  },
  computed: {
    contents () {
      return [
        {
          title: 'Lightning-fast prescriptions',
          description: 'Create and print prescriptions and other medical forms in 10 seconds or less.',
          contentAlign: 'left',
          imageBindings: {
            customPath: 'doctors-clinics/',
            image: 'Lightning-fast.webp',
            mobileImage: 'Lightning-fast-mobile.png',
            imageAlt: 'Print preview of health prescription receipt',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '210.45px' : (this.$isRegularScreen ? '324.5px' : '523.62px'),
          },
        },
        {
          title: 'Going digital means better medical history',
          description: 'Imagine looking back at your charts from 5 or 10 years ago on your mobile devices with a quick search. How convenient? S-U-P-E-R.',
          contentAlign: 'right',
          imageBindings: {
            customPath: 'doctors-clinics/',
            image: 'Going-digital.webp',
            mobileImage: 'Going-digital-mobile.png',
            imageAlt: 'Growth chart showing an increasing trend',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '210.45px' : (this.$isRegularScreen ? '324.5px' : '523.62px'),
          },
        },
        {
          title: 'Help patients anywhere',
          description: 'Reach out to more people who need your expertise without getting limited by time or location.',
          contentAlign: 'left',
          imageBindings: {
            customPath: 'features/',
            image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-C-telehealth.webp',
            imageAlt: 'Woman in a video call using MYCURE telehealth',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '183.72px' : (this.$isRegularScreen ? '281.71px' : '454.59px'),
          },
        },
      ];
    },
    sixthPanel () {
      return {
        title: 'Expand your reach',
        description: 'Opt in to MYCURE ONE, a global online directory of modern healthcare practitioners and facilities',
        list: [
          'Patients can easily find you',
          'Get more organized appointments',
          'Comes with a Professional Website',
        ],
        contentAlign: 'right',
        imageBindings: {
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          customPath: 'commons/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
      };
    },
    eightPanel () {
      return {
        title: 'Practice as a Group',
        description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
        imageBindings: {
          image: 'Practice.webp',
          imageAlt: 'Physicians and health workers',
          customPath: 'doctors-clinics/',
          width: this.$isMobile ? '296px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '323.75px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
        },
        list: [
          'Collated Medical Records',
          'Optimized Patient Queuing',
          'Group Clinic Chatbox',
          'Shared Secretary Account',
          'Booking Website',
        ],
      };
    },
  },
  created () {
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
