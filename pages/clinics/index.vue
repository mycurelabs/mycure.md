<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="clinics-landing-page"
      :background-image-file-extension="$useWebp? '.webp' : '.png'"
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Most Complete Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-title
      parse-meta-title
      btn-text="Get Started"
      image="clinics-usp"
      :image-width="$isMobile ? '100%' : '90%'"
      custom-image-path="clinics/"
      :parse-title-fields="['workflows, ', 'results, ']"
      :parse-meta-title-fields="['System']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    stakes(
      panel-title="Your clinic system should not cause you more problems"
      sub-title="Without correctly utilizing the technologies available today, you’re actually losing opportunities more than you think."
      panel-description="MYCURE is a full featured, end-to-end solution that eliminates many of the challenges of manual processing. MYCURE’s solution encompasses the entire customer journey, from the time they book an appointment to the time they pay and leave, so no more disjointed or separate solutions for different aspects of the clinic operations. The digital solution eliminates the need for manual record keeping and the pushing paper documents to different departments."
      :version="2"
      :contents="stakesContent"
      not-free
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      workflow
    //- 3rd panel
    syncbase(:version="2")
    //- 4th panel
    //- div.grey-bg.mx-n3
    //-   mycure-csi
    //- 5th panel
    generic-media-panel(
      :content="fifthPanel"
      :title-classes="headerClasses"
      :content-classes="descriptionClasses"
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
    //- 6th panel
    div.grey-bg.mx-n3
      features(
        title="Customized for Your Specialty"
        description="MYCURE has already built-in workflows and processes for different setups."
        :items="features"
        :class="{ 'mt-10': $isMobile, 'mt-5': !$isMobile }"
        :icon-column-bindings="{ cols: '6', md: '3' }"
        image-dir="clinics/"
        panel-height="70vh"
      )
    //- 7.5
    care(:metrics-data="metricsData")
    steps(
      :steps="stepsContent"
      not-free
    )
    //- 8th panel
    think-long-term
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    v-divider.divider
    //- 10th panel
    client-only
      pricing(
        has-trial-option
        type="clinic"
        title="Take the first step today"
        description="Choose the best plan for your clinic. Only pay for what you need."
      ).mb-n3
    //- 9th panel
    call-to-action(:version="2" not-free)
    //- 7th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        align="center"
        :content="practicingSoloPanel"
        :title-classes="[...headerClasses, 'white--text']"
        hide-btn
      )
        div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
          //- SEO issue non descriptiove link
          mc-btn(
            depressed
            color="white"
            class="rounded-pill"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
            :to="{ name: 'doctors-clinics' }"
          ).text-none.primary--text
            //- v-icon(left) mdi-information-outline
            span.generic-button-text See MYCURE for Doctors
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { CLINICS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Features: () => import('~/components/commons/panels/Features'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    Workflow: () => import('~/components/outpatient-clinics/Workflow'),
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
    this.features = [
      {
        title: 'Multispecialty',
        icon: 'Multispecialty',
        iconExtension: '.webp',
      },
      {
        title: 'Skin & Aesthetics',
        icon: 'Skin',
        iconExtension: '.webp',
      },
      {
        title: 'Maternity Care',
        icon: 'maternity-care',
        iconExtension: '.webp',
      },
      {
        title: 'Pediatric Care',
        icon: 'Pedia',
        iconExtension: '.webp',
      },
      {
        title: 'Dentistry',
        icon: 'Dentistry',
        iconExtension: '.webp',
      },
      {
        title: 'Diagnostics',
        icon: 'Diagnostics',
        iconExtension: '.webp',
      },
      {
        title: 'Corporate',
        icon: 'Corporate',
        iconExtension: '.webp',
      },
    ];
    this.stakesContent = [
      'Wasted Time and Resources',
      'Cancelled Appointments',
      'Long Patient Turn-around Time',
      'Patient Dissatisfaction',
      'Overworked Staff',
      'Error Prone Reports',
      'Increased Storage Costs',
      'Lack of Compliance to Regulations',
    ];
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates your Clinic Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize your account. MYCURE offers a wide range of modules and features.',
      },
      {
        title: 'Onboarding',
        description: 'Start onboarding other users. You can also watch tutorials or book a training session with a MYCURE specialist.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of clinic that  utilizes modern tools to optimize efficiency and improve operations.  In order to be that way, you need a solution that will integrate critical processes into a simple workflow that benefits everyone.',
      'The problem is it’s hard to find an all-in-one system that is easy to use, affordable and customized to your practice, which makes you feel shortchanged in your current provider.  We believe that clinics like yours should never have to deal with this. We’ve talked to hundreds of health facilities and understand that there is a need for this.',
      'That’s why we\'ve built MYCURE as the most complete Clinic Management System that is flexible and customizable to fit your exact needs.',
    ];
    this.pricingDetails = CLINICS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE EMR and Outpatient Multispecialty Clinic Management System',
      description: 'MYCURE provides clinics with simple and customized workflows based on the specialization of the clinics',
      keywords: 'clinics, EMR, clinic, management, system',
      socialBanner: require('~/assets/images/banners/clinics-og-banner.png'),
    });
  },
  computed: {
    fifthPanel () {
      return {
        title: 'Expand your Reach',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'commons/',
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '404.79px' : '624.8px'),
        },
      };
    },
    practicingSoloPanel () {
      return {
        title: 'Practicing solo?',
        imageBindings: {
          image: 'practicing-solo-ipad.webp',
          imageAlt: 'Woman video call in Ipad tablet',
          customPath: 'clinics/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '212.58px' : (this.$isRegularScreen ? '354.6px' : '547.15px'),
        },
        contentAlign: 'left',
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

.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.blue-bg {
  background-color: #0099cc;
}
</style>
