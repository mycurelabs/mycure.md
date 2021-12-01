<template lang="pug">
  div(v-if="!loading").white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="dental-clinics-usp-full-illu"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="An Advanced Clinic Management System for Dentists"
        meta-title="MYCURE DENTAL CLINICS"
        description="Everything your dental clinic needs from appointments, billing, inventory, to charting."
        btn-text="Get Started Free"
        image="dental-clinics-usp-mobile-version"
        custom-image-path="clinics/dental/"
        parse-title
        parse-meta-title
        :parse-title-fields="['Clinic ', 'System ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="stakesContent"
        :title-classes="headerClasses"
        :content-classes="contentClasses"
        hide-btn
      )
        template(slot="additional-content")
          signup-button(
            depressed
            class="rounded-lg"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
            color="primary"
          ).text-none
            span.mc-btn1.white--text Get Started Free
    //- 2nd panel
    div.blue-bg.mx-n3
      lazy-hydrate(when-visible)
        problem-statement
    //- 3rd panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="thirdPanel"
      )
        template(slot="content")
          h2(:class="headerClasses") Always accessible dental charts.
          br
          h2(:class="contentClasses") Never miss an appointment.
            br
            span Never miss a tooth.
        template(slot="cta-button")
          div(:class="{ 'text-center': $isMobile }")
            signup-button(
              depressed
              color="primary"
              class="rounded-lg"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              span.generic-button-text Get Started
    lazy-hydrate(when-visible)
      straightforward
    lazy-hydrate(when-visible)
      storybrand(
        title="Still a student?"
        :content="['Join the next free webinar series for dentistry students.']"
      )
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="multiplePanel"
        :title-classes="headerClasses"
        hide-btn
      )
    //- 8th panel
    lazy-hydrate(when-visible)
      syncbase(:version="2" title="Online or Off, MYCURE Clinics Is Here for You")
    //- placeholder
    lazy-hydrate(when-visible)
      steps(
        :steps="stepsContent"
        title="Start Your MYCURE Dental Journey Today for Free"
        not-free
      )
    lazy-hydrate(when-visible)
      storybrand(
        title="Use Modern Clinic Information System Tools to Boost Your Dental Clinic"
        :content="storybrandContent"
      )
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="It’s time to take the first step"
          description="Choose the best plan for your clinic. Only pay for what you need."
          type="clinic"
        )
    lazy-hydrate(when-visible)
      call-to-action(:version="1").mt-16
</template>

<script>
// - utils
import { mdiWeb } from '@mdi/js';
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ProblemStatement: () => import('~/components/dental-clinics/ProblemStatement'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Straightforward: () => import('~/components/dental-clinics/Straightforward'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    Care: () => import('~/components/home/Care'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    this.studentPanel = {
      header: 'Still a student?',
      descriptions: [
        'Join the next free webinar series for dentistry students',
      ],
    };
    this.stepsContent = [
      {
        title: 'Create your Free Account',
        description: 'This activates your Dental Management System.',
      },
      {
        title: 'Fill out your profile',
        description: 'You can utilize our range of modules and features',
      },
      {
        title: 'Start filing electronic medical records',
        description: 'Securely store and organize your patient records.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know your clients’ experience is of the utmost importance to you. Top quality dental care is non-negotiable, and you need a clinic management system solution designed to support you. But in your search for the right solution for you, you’ve probably seen too many that are focused on the product, not the experience you and your clients have with it. MYCURE Dental is here to change the game.',
    ];
    this.headerClasses = ['mc-h2'];
    this.contentClasses = ['mc-b2'];
    this.btnClasses = ['mc-btn1'];
    return {
      loading: true,
      mdiWeb,
    };
  },
  head () {
    return headMeta({
      title: 'Dental Clinic Management System | MYCURE for Dental Clinics',
      description: 'MYCURE is a complete dental clinic management system for dentists to manage everything in their dental practice, from patient appointments to billing. Visit us.',
      socialBanner: require('~/assets/images/banners/dental-clinic-og-banner.png'),
    });
  },
  computed: {
    thirdPanel () {
      return {
        contentAlign: 'right',
        imageBindings: {
          image: 'dental-charts.png',
          mobileImage: 'dental-charts-mobile.png',
          imageAlt: 'Dental charts in a tablet',
          customPath: 'clinics/dental/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '231.38px' : (this.$isRegularScreen ? '385.52px' : '595.03px'),
        },
      };
    },
    multiplePanel () {
      return {
        title: 'One view for multiple locations',
        description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'clinics/skin/',
          image: 'multiple-locations.png',
          mobileImage: 'multiple-locations-mobile.png',
          extensionExclusive: true,
          imageAlt: 'Charts and graphs',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '156.16px' : (this.$isRegularScreen ? '260.29px' : '401.63px'),
        },
      };
    },
    stakesContent () {
      return {
        title: 'Don\'t Get Left Behind',
        description: 'MYCURE Dental offers a variety of clinic information system tools that you can mix and match to maximize efficiency for your dental clinic, without the costly overhead. Daily reports, digital records, and appointments can all be accessed in one clinic management system – instead of needing to keep track of multiple platforms on your office’s devices. You can even fill out prescriptions to submit to pharmacies.',
        contentAlign: 'right',
        imageBindings: {
          image: 'skin-the-stakes.png',
          mobileImage: 'skin-the-stakes.png',
          imageAlt: 'Doctor listening to patient feedback',
          customPath: 'clinics/skin/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '206.56px' : (this.$isRegularScreen ? '329.3px' : '531.38px'),
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
.blue-bg {
  background: radial-gradient(50% 50% at 50% 50%, #0099CC 0%, #0173C6 100%);
}
</style>
