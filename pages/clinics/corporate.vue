<template lang="pug">
  div.white
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="corporate-clinics-full"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="Save Your Corporate Clinic from Chaos"
        meta-title="MYCURE CORPORATE CLINICS"
        description="MYCURE Clinics is designed to help you keep your corporate clinic operating smoothly every single day."
        btn-text="Get Started"
        image="corporate-clinics-mobile"
        custom-image-path="clinics/corporate/"
        parse-title
        parse-meta-title
        :parse-title-fields="['Corporate ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
    lazy-hydrate(when-visible)
      stakes(
        :version="4"
        panel-title="Not Using a Clinic Management System Is Costly"
        sub-title="As a doctor, your ability to keep your corporate clinic organized influences the quality of care you can provide your patients. Inefficiency behind the scenes can result in frustrated providers, frustrated patients, and a mess to deal with for the office staff. But instead of continuing to suffer, there’s hope."
        :contents="stakesContent"
        hide-btn
        not-free
      )
    lazy-hydrate(when-visible)
      generic-blue-bg
        features(
          extension-exclusive
          image-dir="clinics/corporate/"
          icon-container-col-size="10"
          title="Meet MYCURE Clinics: The Newest Tool for the Newest Generation of Healthcare"
          description="Everyone in your workplace is online. MYCURE Clinics helps you monitor their health and safety through the cloud. It’s a clinic management system built for the unique ecosystem of healthcare, allowing you to connect and securely share files with other healthcare providers, labs, hospitals, and pharmacies within the MYCURE One network."
          :icon-column-bindings="{ cols: 6, sm: 3 }"
          :items="features"
          has-blue-bg
        )
          template(slot="additional-content").text-center
            signup-button(
              depressed
              class="rounded-lg"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              color="success"
            ).text-none.mt-4
              span.generic-button-text Sign Up
    lazy-hydrate(when-visible)
      generic-media-panel(
        align="center"
        hide-btn
        :content="statusPanel"
        :title-classes="headerClasses"
      )
        template(slot="additional-content")
          signup-button(
            depressed
            class="rounded-lg"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
            color="primary"
          ).text-none
            span.mc-btn1.white--text Get Started
    lazy-hydrate(when-visible)
      generic-media-panel(
        align="center"
        hide-btn
        :content="fifthPanel"
        :title-classes="headerClasses"
      )
    lazy-hydrate(when-visible)
      mycure-csi
    lazy-hydrate(when-visible)
      features(
        title="Healthcare Providers Trust MYCURE"
        :title-col-size="11"
        :content-col-size="10"
        description="MYCURE Clinics is the latest in clinic information and practice management systems. Its intuitive interface makes is easy to use for everyone on staff – from the providers to the administrative team. Your staff will be able to pull up your patients’ medical records in a snap without wading through the mountains of paperwork."
        :items="doctorFeatures"
        image-dir="doctors-clinics/"
      ).my-16
    //- placeholder
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free step-col-size="11")
    lazy-hydrate(when-visible)
      storybrand(
        title="Modern Tools to Boost Your Practice"
        :content="['At MYCURE, we know your patients’ experience is of the utmost importance to you. Top quality care is non-negotiable, and you need clinic management system solution that has those same principles. But in your search for the right IT solution for you, you’ve probably seen too many that are focused on the product, not the experience you and your patients have with it. MYCURE Clinics is here to change the game.']"
      )
    client-only
      lazy-hydrate(when-idle)
        pricing(
          type="clinic"
          title="Take the first step today."
        )

    //- 3rd panel
</template>

<script>
// - utils
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
import GenericBlueBg from '~/components/generic/GenericBlueBg.vue';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Usp,
    GenericBlueBg,
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    this.features = [
      {
        title: 'Online Health Records',
        icon: 'online-health-records',
        iconExtension: '.png',
      },
      {
        title: 'Medical Certificates',
        icon: 'Certificate',
        iconExtension: '.png',
      },
      {
        title: 'Annual Checkups',
        icon: 'Annual',
        iconExtension: '.png',
      },
      {
        title: 'COVID-19 Test and Vaccine Tracker',
        icon: 'covid-vaccine-tracker',
        iconExtension: '.png',
      },
    ];
    this.doctorFeatures = [
      {
        title: 'Digital Records',
        icon: 'Digital-Records',
        iconExtension: '.webp',
      },
      {
        title: 'Telehealth',
        icon: 'Telehealth',
        iconExtension: '.webp',
      },
      {
        title: 'Daily Reports',
        icon: 'Daily-Reports',
        iconExtension: '.webp',
      },
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
    ];
    this.stakesContent = [
      {
        title: 'Non-Compliance',
        description: 'With strict laws and heavy penalties on data privacy and security, storing and management of employee health records have to be compliant.',
        imageBindings: {
          image: 'Non-Compliance.png',
          mobileImage: 'Non-Compliance.png',
          imageAlt: 'Data privacy breach',
          customPath: 'clinics/corporate/',
          extensionExclusive: true,
          width: '100%',
        },
      },
      {
        title: 'Low Safety Monitoring',
        description: 'With the ‘new normal’ due to the pandemic, a robust health system would greatly complement HR’s processes on vaccine and testing tracking.',
        imageBindings: {
          image: 'low-safety-monitoring.png',
          mobileImage: 'low-safety-monitoring.png',
          imageAlt: 'Woman confused at list',
          customPath: 'clinics/corporate/',
          extensionExclusive: true,
          width: '100%',
        },
      },
      {
        title: 'Low Productivity',
        description: 'Having a health platform with analytics could provide helpful insights that can help in creating activities to boost productivity.',
        imageBindings: {
          image: 'low-productivity.png',
          mobileImage: 'low-productivity.png',
          imageAlt: 'Man sleeping on the job due to slow software',
          customPath: 'clinics/corporate/',
          extensionExclusive: true,
          width: '100%',
        },
      },
    ];
    this.stepsContent = [
      {
        title: 'Create your Free Account',
        description: 'You’ll have your own clinic management system ready for you',
      },
      {
        title: 'Fill out your profile',
        description: 'You can utilize our range of modules and features',
      },
      {
        title: 'Start filing electronic medical records',
        description: 'Take advantage of our tutorials and training videos or book a virtual session with one of our specialists.',
      },
    ];
    this.headerClasses = ['mc-h2'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'Custom-Built Corporate Clinic Management System | MYCURE',
      description: 'MYCURE is a Corporate Clinic Management System that helps manage your clinic with ease. It helps with analytics and data privacy while you provide healthcare.',
      socialBanner: require('~/assets/images/banners/corporate-clinic-og-banner.png'),
    });
  },
  computed: {
    fifthPanel () {
      return {
        title: 'Maintain Communication with Clinic Staff',
        description: 'MYCURE Clinics comes with its own chat feature, allowing everyone to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re with a patient, and you can communicate with other providers quickly.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'doctors-clinics/',
          image: 'Practice.webp',
          imageAlt: 'Physicians and health workers',
          width: this.$isMobile ? '296px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '323.75px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
        },
      };
    },
    statusPanel () {
      return {
        title: 'Know the Status of Your Employees\' Health Quickly',
        description: 'Easily access and share medical records securely through the MYCURE Clinics information system. We’re here to make practice management systems so much easier. We offer full functionality for our free accounts, and you only need to upgrade as your practice grows. We’re here to help you make the world a healthier place.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'home/',
          image: 'simple-and-powerful',
          imageFileExtension: '.webp',
          imageAlt: 'Health application in Macbook laptop',
          width: this.$vuetify.breakpoint.width > 1919 ? '750px' : (this.$isRegularScreen ? '485px' : '250px'),
          height: this.$vuetify.breakpoint.width > 1919 ? '414.68px' : (this.$isRegularScreen ? '268.18px' : '138.23px'),
        },
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
</style>
