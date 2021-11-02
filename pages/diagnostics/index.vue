<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
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
    stakes(
      :version="3"
      :media-content="stakesContent"
      hide-btn
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Embrace the power to choose"
        description="Don’t settle for anything less. Customize your experience based on the tools you need. MYCURE is designed for diagnostic labs and imaging centers of all sizes."
        :items="features"
        image-dir="diagnostics/"
        panel-height="70vh"
      )
    //- 3rd to 4th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :content="info"
      :key="key"
      hide-btn
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
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
              span.mc-content-set-1.font-open-sans.font-gray {{ item }}
    //- 5th panel
    div.grey-bg.mx-n3
      generic-media-panel(
        :content="integrationsPanel"
        hide-btn
        align="center"
        :super-title-classes="['mc-content-set-1', 'font-open-sans', 'font-weight-semibold', 'primary--text']"
      )
        template(slot="content")
          v-row(justify="start")
            v-col(
              v-for="(item, key) in integrationsPanel.list"
              :key="key"
              cols="6"
              md="4"
            ).text-center
              picture-source(
                custom-path="diagnostics/"
                image-file-extension=".png"
                extension-exclusive
                :image="item.icon"
                :image-alt="item.title"
                :image-width="$isMobile ? '76px' : ($isRegularScreen ? '111px' : '180px' )"
                :image-height="$isMobile ? '76px' : ($isRegularScreen ? '111px' : '180px' )"
              )
              br
              h3(:class="{'font-s': $isWideScreen}").font-open-sans.font-gray {{ item.title }}
    //- 6th panel
    generic-media-panel(
      :content="expandPanel"
      hide-btn
    )
      div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
        signup-button(
          depressed
          color="success"
          event-label="signup"
          class="rounded-pill"
          :width="!$isWideScreen ? '228px' : '300'"
          :height="!$isWideScreen ? '59px' : '73.68'"
        ).text-none
          v-icon(left) mdi-web
          span.generic-button-text Create my website
    v-divider(v-if="$isMobile").divider
    //- 7th panel
    generic-media-panel(
      :content="cmsPanel"
      align="center"
      :super-title-classes="['mc-content-set-1', 'font-open-sans', 'font-weight-semibold', 'primary--text']"
    )
      template(slot="cta-button")
        div(:class="{'text-center': $isMobile}")
          //- SEO issue non descriptiove link
          mc-btn(
            depressed
            event-label="clinics-info"
            color="success"
            :to="{ name: 'clinics' }"
            class="rounded-pill"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
          ).text-none
            //- v-icon(left)  mdi-information-outline
            span.generic-button-text See MYCURE for Clinics
    //- 7.5
    care(:metrics-data="metricsData")
    steps(:steps="stepsContent" not-free)
    //- 8th panel
    think-long-term
    //- 9th panel
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- 10th panel
    client-only
      pricing(
        title="Take the first step today"
        description="Choose the best plan for your diagnostic center. Only pay for what you need."
        type="diagnostic"
        has-trial-option
      ).mb-n3
    call-to-action(:version="2" not-free)
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - constants
import { DIAGNOSTICS_PRICING } from '~/constants/pricing';
// - components
import PictureSource from '~/components/commons/PictureSource';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    PictureSource,
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    SignupButton: () => import('~/components/commons/SignupButton'),
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
        title: 'Create an Account',
        description: 'This activates your Laboratory and Imaging Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize your account based on your facilities’ needs.',
      },
      {
        title: 'Integrate',
        description: 'Integrate to your existing EMR system or use MYCURE’s homegrown health system.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of diagnostic center that prioritizes using modern tools to optimize efficiency and improve operations. In order to be that way, you need a solution that can automate routine tasks that will result in reducing costly errors.',
      'The problem is it’s hard to find such a system that is easy to use, affordable and interoperable with other systems, which is lacking from your current provider.  We believe that diagnostic centers like yours should never have to deal with this. We’ve talked to dozens of labs and understand that there is a need for this.',
      'That’s why we\'ve built MYCURE Diagnostics with powerful LIS and RIS modules to specifically address this need.',
    ];
    this.pricingDetails = DIAGNOSTICS_PRICING;
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for Diagnostic Labs & Imaging Centers | HL7-Ready LIS RIS',
      description: 'MYCURE provides the best tool to create, finalize, and release diagnostic test results. Best alternative to laboratory and radiology information systems.',
      socialBanner: require('~/assets/images/banners/diag-og-banner.png'),
    });
  },
  computed: {
    infoPanels () {
      return [
        {
          title: 'Easy to Integrate. Easy to Use.',
          description: 'Flawlessly incorporate MYCURE into your workflows.',
          list: [
            'Track specimen collection',
            'Produce beautiful reports',
            'Integrate with HL7 and DICOM-ready machines',
            'Send online results to patients',
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
    integrationsPanel () {
      return {
        contentAlign: 'left',
        title: 'Ready whenever you are',
        superTitle: 'Powerful Integrations',
        list: [
          {
            title: 'HL7',
            icon: 'HL7',
          },
          {
            title: 'DICOM',
            icon: 'DICOM',
          },
        ],
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-G-diagnostic-results.webp',
          imageAlt: 'Diagnostic and x-ray results in MYCURE Clinic Management System',
          customPath: 'features/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '240.05px' : (this.$isRegularScreen ? '400.06px' : '617.48px'),
        },
      };
    },
    expandPanel () {
      return {
        title: 'Expand your Reach',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
        imageBindings: {
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          customPath: 'commons/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
        contentAlign: 'right',
      };
    },
    cmsPanel () {
      return {
        title: 'Grow into a full service clinic anytime',
        superTitle: 'MYCURE Clinic Management System',
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
        title: 'Manual Routinary Tasks are Prone to Errors',
        description: 'And this can be costly! Not only do these errors contribute to your bottomline, but this also pertains to providing accurate, sensitive information to your patients.',
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
  },
  created () {
    this.loading = false;
  },
  methods: {
    getPanelBindings (key) {
      if (key % 2 === 0) {
        return {
          contentAlignLeft: true,
          colsLeft: '4',
          colsRight: '5',
          alignContentRight: 'center',
        };
      }
      return {
        contentAlignRight: true,
        colsLeft: '5',
        colsRight: '4',
        alignContentLeft: 'center',
      };
    },
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
