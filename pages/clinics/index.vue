<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Clinics Landing Page"
      background-image-file-extension=".webp"
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-title
      parse-meta-title
      btn-text="Get Started"
      image="Clinics USP"
      :image-width="$isMobile ? '100%' : '90%'"
      custom-image-path="clinics/"
      :parse-title-fields="['workflows, ', 'results, ']"
      :parse-meta-title-fields="['System']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      workflow
    //- 3rd panel
    syncbase(:version="2")
    //- 4th panel
    div.grey-bg.mx-n3
      mycure-csi
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
          rounded
          color="success"
          event-label="signup"
          :large="!$isWideScreen"
          :x-large="$isWideScreen"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-web
          span Create my website
    //- 6th panel
    div.grey-bg.mx-n3
      features(
        title="Customized for Your Specialty"
        description="MYCURE has already built-in workflows and processes for different setups."
        :items="features"
        :class="{ 'mt-10': $isMobile, 'mt-5': !$isMobile }"
        :icon-column-bindings="{ cols: 6, md: 3 }"
        image-dir="clinics/"
        icon-container-col-size="10"
        panel-height="70vh"
      )
    //- 7th panel
    div.blue-bg.mx-n3
      generic-media-panel(
        align="center"
        :content="practicingSoloPanel"
        :title-classes="[...headerClasses, 'white--text']"
        hide-btn
        disable-parent-padding
      )
        div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
          mc-btn(
            depressed
            rounded
            color="white"
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="{'font-s': !$isMobile}"
            :to="{ name: 'doctors-clinics' }"
          ).text-none.primary--text
            v-icon(left) mdi-information-outline
            span Learn More
    //- 8th panel
    think-long-term
    v-divider.divider
    //- 9th panel
    call-to-action(:version="2")
    //- 10th panel
    pricing(
      has-trial-option
      type="clinic"
      title="Take the first step today"
      description="Choose the best plan for your clinic. Only pay for what you need."
      :pricing-details="pricingDetails"
    ).mb-n3
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
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
        icon: 'Maternity Care',
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
    this.pricingDetails = CLINICS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Clinic Management System',
      description: 'MYCURE enables clinics with complex operations to have simplified workflows to be much more efficient, increase in revenue, and build.',
      socialBanner: require('~/assets/images/banners/OG Clinics.png'),
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
          image: 'Expand your reach.webp',
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
          image: 'Practicing Solo Ipad.webp',
          imageAlt: 'Woman video call in Ipad tablet',
          customPath: 'clinics/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '212.58px' : (this.$isRegularScreen ? '354.6px' : '547.15px'),
        },
        contentAlign: 'left',
      };
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

.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.blue-bg {
  background-color: #0099cc;
}
</style>
