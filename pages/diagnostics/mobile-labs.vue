<template lang="pug">
  div(v-if="!loading").white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="Mobile-Clinics-Full"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="The Simplest Clinic Management System for Mobile Labs"
        meta-title="MYCURE MOBILE LABS"
        description="MYCURE Diagnostics is an easy to use, secure, cloud based clinic information system that you can set up no matter where your mobile labs clinic is based."
        btn-text="Start Free Today"
        image="Mobile-Clinics-Mobile-Version"
        custom-image-path="diagnostics/mobile-labs/"
        parse-title
        parse-meta-title
        :parse-title-fields="['Clinic ', 'System ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
    //- stakes
    lazy-hydrate(when-visible)
      workflow
    lazy-hydrate(when-visible)
      generic-blue-bg
        generic-media-panel(
          :content="fourthPanel"
          :title-classes="[...headerClasses, 'white--text']"
          :content-classes="[...descriptionClasses, 'white--text']"
          hide-btn
        )
          div(slot="additional-content")
            signup-button(
              depressed
              color="success"
              event-label="signup"
              class="rounded-lg"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              span.mc-btn1 Start for Free
    v-container
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" mmd="6").text-center
              h2(:class="headerClasses").font-weight-semibold.mb-5 Advanced Tools for a Growing Mobile Lab
              p(:class="descriptionClasses").mb-10.font-open-sans.font-gray We’re here to make managing your mobile lab so much easier. We offer full functionality for our free clinic management system accounts, and you only need to upgrade as your mobile lab grows. We’re here to help you make the world a healthier place.
            v-col(cols="12").text-center
              v-row.justify-center.gutterless
                v-col(cols="6" md="3").pa-0
                  v-btn(
                    color="primary"
                    depressed
                    tile
                    block
                    :height="$isMobile ? '36' : $isRegularScreen ? '52' : '75'"
                    :outlined="reportType !== 'imaging'"
                    @click="reportType = 'imaging'"
                  ).text-none
                    span.mc-button-set-1 Imaging
                v-col(cols="6" md="3").pa-0
                  v-btn(
                    color="primary"
                    depressed
                    tile
                    block
                    :height="$isMobile ? '36' : $isRegularScreen ? '52' : '75'"
                    :outlined="reportType !== 'lab'"
                    @click="reportType = 'lab'"
                  ).text-none
                    span.mc-button-set-1 Laboratory
              br
              br
              v-tabs-items(v-model="reportType")
                v-tab-item(v-for="(mockup, key) in reportMockups" :key="key" :value="mockup.value")
                  picture-source(
                    image-file-extension=".png"
                    custom-path="diagnostics/mobile-labs/"
                    extensionExclusive
                    :image="`${mockup.image}${$isMobile ? '-mobile' : ''}`"
                    :image-alt="`A ${reportType} sample report from MYCURE Clinic Management System on laptop screen`"
                    :image-width="$isMobile ? '276px' : ($isRegularScreen ? '945px' : '1445px')"
                    :image-height="reportsPanelImgHeight"
                  )
    lazy-hydrate(when-visible)
      mycure-csi(title="Mobile Lab" page="Diagnostics")
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="fifthPanel"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
    lazy-hydrate(when-visible)
      syncbase(:version="2" title="Online or Off, MYCURE Diagnostics Is Here for You")
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="directoryPanel"
        :title-classes="headerClasses"
      )
        template(slot="cta-button")
          div(:class="{'text-center ml-4': $isMobile}")
            nuxt-link(to="/directory" :class="{'d-flex': !$isMobile}").text-none
              span.mc-hyp1.primary--text Visit the Directory
              v-icon(left color="primary" :large="$isWideScreen") {{ mdiChevronRight }}
    lazy-hydrate(when-idle)
      care(:metrics-data="metricsData")
    lazy-hydrate(when-visible)
      storybrand(
        title="Invaluable Practice Management System at an Affordable Price"
        :content="['MYCURE Diagnostics offers a variety of tools that you can mix and match to maximize efficiency for your mobile lab clinic, without the costly overhead other clinic information systems might require. Daily reports, digital records, and appointments can all be accessed in one app – instead of needing to keep track of multiple platforms on your office’s devices.']"
      )
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="Take the first step"
          description="Choose the best plan for your mobile lab. Only pay for what you need."
          type="diagnostic"
        )
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free title="Get started today!" description="Joining MYCURE is simple. Take advantage of our tutorials and training videos or book a virtual session with one of our specialists.")
    lazy-hydrate(when-visible)
      call-to-action(:version="1")

</template>

<script>
// - utils
import LazyHydrate from 'vue-lazy-hydration';
import { mdiWeb, mdiChevronRight } from '@mdi/js';
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
    GenericBlueBg: () => import('~/components/generic/GenericBlueBg.vue'),
    PictureSource: () => import('~/components/commons/PictureSource'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Workflow: () => import('~/components/mobile-labs/Workflow'),
    Usp,
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    Care: () => import('~/components/home/Care'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    this.reportMockups = [
      {
        image: 'Imaging-Report',
        value: 'imaging',
      },
      {
        image: 'Mobile-Labs-Laboratory',
        value: 'lab',
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
        title: 'You can utilize our range of modules and features',
        description: 'Get Started',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of diagnostic center that prioritizes using modern tools to optimize efficiency and improve operations. In order to be that way, you need a solution that can automate routine tasks that will result in reducing costly errors.',
      'The problem is it’s hard to find such a system that is easy to use, affordable and interoperable with other systems, which is lacking from your current provider.  We believe that diagnostic centers like yours should never have to deal with this. We’ve talked to dozens of labs and understand that there is a need for this.',
      'That’s why we\'ve built MYCURE Diagnostics with powerful LIS and RIS modules to specifically address this need.',
    ];
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.btnClasses = ['mc-btn1'];
    return {
      reportType: 'imaging',
      loading: true,
      mdiWeb,
      mdiChevronRight,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE\'s Simplest LIS for Mobile Labs | Secure & Easy to Use',
      description: 'MYCURE\'s LIS provides the easiest way to manage your mobile lab. Its simple, intuitive interface allows you to get started right. Get more details here.',
      socialBanner: require('~/assets/images/banners/mobile-clinic-og-banner.png'),
    });
  },
  computed: {
    fourthPanel () {
      return {
        title: 'MYCURE Diagnostics is No Ordinary Practice Management System ',
        description: 'It’s a platform built for the unique ecosystem of mobile lab clinics. Connect and securely share files with other healthcare providers, labs, hospitals, and pharmacies within the MYCURE One network. ',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'diagnostics/mobile-labs/',
          extensionExclusive: true,
          image: 'MYCURE-Mobile-Labs-Solution.png',
          imageAlt: 'Physicians and health workers',
        },
      };
    },
    fifthPanel () {
      return {
        title: 'Maintain Communication with Clinic Staff',
        description: 'MYCURE Diagnostics comes with its own chat feature, allowing everyone in your clinic to stay in touch on busy days',
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
    directoryPanel () {
      return {
        title: 'Help Your Patients Find You',
        description: 'Join MYCURE ONE, a global directory of healthcare providers, so patients can easily find and book appointments',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'commons/',
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
      };
    },
    reportsPanelImgHeight () {
      if (this.reportType === 'imaging') {
        if (this.$isMobile) return '147.06px';
        if (this.$isRegularScreen) return '502.89px';
        return '768.96px';
      } else {
        if (this.$isMobile) return '181.77px';
        if (this.$isRegularScreen) return '621.8px';
        return '950.79px';
      }
    },
  },
  created () {
    this.loading = false;
  },
};
</script>
