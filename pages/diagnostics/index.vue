<template lang="pug">
  v-container(fluid).white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="Diagnostics-Landing-Page"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="Your Diagnostic Center Transformed"
        meta-title="MYCURE Diagnostic"
        description="The best tool to streamline diagnostic laboratories and imaging centers’ operations, automate routine tasks, and reduce costs and errors."
        image="Diagnostics-Mobile-USP"
        image-col-offset="1"
        custom-image-path="diagnostics/"
        parse-title
        :parse-title-fields="['Diagnostic ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
        @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'diagnostic' }})"
      )
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="stakesContent"
          :title-classes="headerClasses"
          :content-classes="descriptionClasses"
          hide-btn
        )
          template(slot="content")
            v-col(cols="12")
              v-row(v-for="(item, key) in stakesContent.itemList" :key="key" align="center")
                v-icon(color="red" small) {{ mdiClose }}
                v-col.pa-0.mb-1
                  p.mc-list-b3.mb-0.ml-2 {{ item }}
    v-container.py-16
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel
            v-col(cols="12").text-center
              h2.mc-h2.mb-5 Seamless Workflows Tailored for You
              v-row(justify="center")
                v-col(cols="12" sm="10")
                  p.mc-b2 MYCURE Diagnostics is an end-to-end solution that eliminates the old challenges of processing paperwork manually. If you’re not using the technologies available today, you’re missing out on more than you might think.  MYCURE Diagnostics’ laboratory information management system was designed with the patient journey in mind, meaning you can book appointments, upload medical records, and accept payment all on one app. Reduce the time spent on manual recordkeeping and filing paperwork all thanks to MYCURE Diagnostics.
                  div.text-center
                    signup-button(
                      depressed
                      color="primary"
                      event-label="signup"
                      class="rounded-lg"
                      :width="!$isWideScreen ? '228px' : '300'"
                      :height="!$isWideScreen ? '59px' : '73.68'"
                    ).text-none
                      span.generic-button-text Start for Free
    lazy-hydrate(when-visible)
      generic-blue-bg
        features(
          title="MYCURE Diagnostics is No Ordinary LIS App"
          description="It’s a platform built for the unique needs of laboratory and radiology information systems. Connect and securely share files with other healthcare providers, labs, hospitals, and pharmacies within the MYCURE One network."
          :items="features"
          :title-col-size="10"
          :content-col-size="10"
          image-dir="diagnostics/"
          panel-height="70vh"
          has-blue-bg
        )
    v-container
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12" md="10").text-center
              h2(:class="headerClasses").font-weight-semibold.mb-5 Advanced Tools for a Busy Diagnostic Center
              p(:class="descriptionClasses").mb-10.font-open-sans.font-gray We’re here to make managing your lab so much easier. We offer full functionality for our free accounts, and you only need to upgrade as your center grows. We’re here to help you make the world a healthier place.
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
                    span.mc-btn1 Imaging
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
                    span.mc-btn1 Laboratory
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
    template(v-for="info in infoPanels")
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="info"
          hide-btn
          :title-classes="headerClasses"
          :content-classes="descriptionClasses"
        )
          //- Check list
          template(slot="additional-content" v-if="info.list")
            template(v-for="(item, i) in info.list")
              v-row(dense)
                v-col(cols="2" sm="1" md="1"  :class="$isWideScreen ? 'pt-3' : ( $isRegularScreen ? 'pt-2' : 'pt-1')").pr-2
                  img(
                    src="~/assets/images/mycure-check.png"
                    alt="Check icon"
                    :width="$isWideScreen ? '30' : '20'"
                    :height="$isWideScreen ? '30' : '20'"
                  )
                v-col(cols="10" sm="11" md="11")
                  span.mc-b2.font-open-sans.font-gray {{ item }}
    lazy-hydrate(when-visible)
      mycure-csi(title="Lab's Records" page="Diagnostics")
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="tenthPanel"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
    lazy-hydrate(when-visible)
      syncbase(:version="2" title="Online or Off, MYCURE Diagnostics Is Here for You")
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="expandPanel"
        hide-btn
      )
        div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
          signup-button(
            depressed
            color="primary"
            event-label="signup"
            class="rounded-lg"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
          ).text-none
            span.mc-btn1 Join Today
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="cmsPanel"
        align="center"
        :super-title-classes="['mc-h7']"
      )
        template(slot="cta-button")
          div(:class="{'text-center': $isMobile}")
            //- SEO issue non descriptiove link
            mc-btn(
              depressed
              event-label="clinics-info"
              color="primary"
              :to="{ name: 'clinics' }"
              class="rounded-lg"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              //- v-icon(left)  mdi-information-outline
              span.mc-btn1 Learn More
    lazy-hydrate(when-visible)
      storybrand(
        title="Invaluable Radiology Information System at an Affordable Price"
        :content="['MYCURE Diagnostics offers a variety of laboratory and radiology information system tools that you can mix and match to maximize efficiency for your diagnostic center, without the costly overhead other platforms might require. Daily reports, digital records, and appointments can all be accessed in one app – instead of needing to keep track of multiple platforms on your lab’s devices.']"
      )
    lazy-hydrate(when-visible)
      scroller(title="placeholder" :items="carouselItems")
    lazy-hydrate(when-idle)
      care(:metrics-data="metricsData")
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="It's Time to Take the First Step"
          type="diagnostic"
          has-trial-option
        ).mb-n3
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free step-col-size="11")
    lazy-hydrate(when-visible)
      call-to-action(:version="1").mt-16
</template>

<script>
// - utils
import LazyHydrate from 'vue-lazy-hydration';
import { mdiWeb, mdiClose } from '@mdi/js';
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - constants
import { DIAGNOSTICS_PRICING } from '~/constants/pricing';
// - components
import PictureSource from '~/components/commons/PictureSource';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    PictureSource,
    Pricing: () => import('~/components/commons/panels/Pricing'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    GenericBlueBg: () => import('~/components/generic/GenericBlueBg.vue'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Care: () => import('~/components/home/Care'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
    Scroller: () => import('~/components/commons/panels/Scroller'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Laboratory Information System (LIS)',
        icon: 'LIS',
        iconExtension: '.webp',
      },
      {
        title: 'Booking System',
        icon: 'Booking-Systems',
        iconExtension: '.webp',
      },
      {
        title: 'Radiology Information System (RIS)',
        icon: 'RIS',
        iconExtension: '.webp',
      },
      {
        title: 'Billing',
        icon: 'Billing',
        iconExtension: '.webp',
      },
      {
        title: 'Online Results',
        icon: 'Online-Results',
        iconExtension: '.webp',
      },
    ];
    this.stepsContent = [
      {
        title: 'Create your Free Account',
        description: 'You’ll have your own LIS ready for you',
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
    this.pricingDetails = DIAGNOSTICS_PRICING;
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    return {
      reportType: 'imaging',
      loading: true,
      mdiWeb,
      mdiClose,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Diagnostics for Lab & Imaging Centers | HL7-Ready LIS RIS',
      description: 'Do you want to streamline diagnostic laboratories & imaging centers’ operations, automate routine tasks, & reduce errors? MYCURE\'s Diagnostic is the solution.',
      socialBanner: require('~/assets/images/banners/diag-og-banner.png'),
    });
  },
  computed: {
    infoPanels () {
      return [
        {
          title: 'Easy to Integrate. Easy to Use.',
          list: [
            'Get more customers through referrals',
            'Easily validate prescriptions',
            'Promote your products',
          ],
          imageBindings: {
            image: 'easy.webp',
            imageAlt: 'Charts and graphs artwork',
            customPath: 'diagnostics/',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          },
          contentAlign: 'left',
        },
        {
          title: 'Send Test Results Instantly',
          description: 'Give your patients quick access to their test results through the MYCURE app for patients.',
          list: [
            'Patient Portal for Diagnostic Tests',
            'Tabulated Cumulative Results',
            'Quick Appointment Booking',
          ],
          imageBindings: {
            image: 'Fast-results.webp',
            imageAlt: 'Sending out health results artwork',
            customPath: 'diagnostics/',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          },
          contentAlign: 'right',
        },
      ];
    },
    expandPanel () {
      return {
        title: 'Help Providers Find You',
        description: 'Join MYCURE One, a global directory of healthcare providers and labs, so other healthcare providers can easily find you.',
        imageBindings: {
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          customPath: 'commons/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
        contentAlign: 'left',
      };
    },
    cmsPanel () {
      return {
        title: 'Grow into a full service clinic anytime.',
        superTitle: 'MYCURE CLINIC MANAGEMENT SYSTEM',
        description: 'Cover all your patient journeys with MYCURE’s most complete clinic management system.',
        imageBindings: {
          image: 'FullService.webp',
          imageAlt: 'Doctor and patient transacting over a counter artwork',
          customPath: 'diagnostics/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '161.56px' : (this.$isRegularScreen ? '257.6px' : '397.59px'),
        },
        contentAlign: 'left',
      };
    },
    stakesContent () {
      return {
        title: 'Placeholder Problem Statement',
        itemList: [
          'Wasted time and resources',
          'Long wait times',
          'Overworked staff',
          'Cancelled appointments',
          'Frustrated patients',
          'Error-prone reports',
          'Compliance issues',
        ],
        contentAlign: 'right',
        imageBindings: {
          image: 'Diagnostic-Stakes.png',
          mobileImage: 'Diagnostic-Stakes.png',
          imageAlt: 'Doctor with hourglass and downhill chart in monitor',
          customPath: 'diagnostics/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '184.14px' : (this.$isRegularScreen ? '306.92px' : '473.72px'),
        },
      };
    },
    tenthPanel () {
      return {
        title: 'Maintain Communication with Clinic Staff',
        description: 'In addition to being a powerful laboratory information management system, MYCURE Diagnostics comes with its own chat feature, allowing everyone in your lab to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re working, and you can communicate with other techs at your lab quickly.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'doctors-clinics/',
          image: 'Practice.webp',
          imageAlt: 'Physicians and health workers',
          width: this.$isMobile ? '296px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '323.75px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
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
    carouselItems () {
      return [
        {
          title: 'Gain New Insights into Your Lab’s Strengths and Weaknesses',
          description: 'Keeping meticulous records is vital to providing quality dental care. But as your practice thrives, your file cabinets will grow and grow, and you and your office staff will run the risk of misplacing important paperwork. Instead, use MYCURE Dental’s practice management system to digitize your patients’ records. You’ll be able to glance over electronic copies of complete health records – prior illnesses, vaccinations, and current medication – all in one place!',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-5.png',
            extensionExclusive: true,
            imageAlt: 'Doctor Gaining Insight',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '268.41px' : this.$isRegularScreen ? '175.43px' : '160.4px',
          },
        },
        {
          title: 'A Lifeline for Your Practice – Easy to Use Practice Management System',
          description: 'Keeping meticulous records is vital to providing quality medical care. But as your outpatient clinic grows, your file cabinets will grow and grow, and you and your office staff will run the risk of misplacing important paperwork. Instead, use MYCURE Clinics’ information system to digitize your patients’ records. You’ll be able to glance over electronic copies of complete health records – prior illnesses, vaccinations, and current medication – all in one place!',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-1.png',
            extensionExclusive: true,
            imageAlt: 'Man searching through records',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '305.02px' : this.$isRegularScreen ? '199.37px' : '182.9px',
          },
        },
        {
          title: 'Corporate Clinic Management System at an Affordable Price',
          description: 'MYCURE Clinics offers a variety of tools that you can mix and match to maximize efficiency for your corporate clinic, without the costly overhead other platforms might require. Daily reports, digital records, and appointments can all be accessed in one app – instead of needing to keep track of multiple platforms on your office’s devices. You can even fill out prescriptions to submit to pharmacies.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-3.png',
            extensionExclusive: true,
            imageAlt: 'Patient looking at network',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '294.77' : this.$isRegularScreen ? '192.65px' : '176.14px',
          },
        },
        {
          title: 'Accessible Appointment Booking for Your Patients',
          description: 'Make booking appointments easy for your patients with MYCURE Booking. We’re all living busy lives these days and having an app your patients can use to see your availability is one of the best ways to maximize efficiency. If your corporate clinic has more than one healthcare provider, your patients will also see that they can make an appointment with another doctor if you’re already booked for the day.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-2.png',
            extensionExclusive: true,
            imageAlt: 'Doctor looking at booking appointments',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '291.02px' : this.$isRegularScreen ? '190.22px' : '173.91px',
          },
        },
      ];
    },
  },
  created () {
    this.loading = false;
  },
};
</script>

<style scoped>
.diagnostics-bg {
  width: 100vw;
  background-image: url('../../assets/images/diagnostics/Diagnostics-Landing-Page.png');
  background-position: center center;
  background-size: contain;
}
.grey-bg {
  background-color: #fafafa;
}
.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.button {
  text-decoration: none;
}
</style>
