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
      parse-title="regular"
      parse-meta-title="regular"
      btn-text="Get Started"
      btn-color="success"
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
    syncbase(version-two)
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
      div(slot="additional-content").mt-10
        signup-button(
          depressed
          rounded
          color="success"
          event-label="signup"
          :block="$isMobile"
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
        :class="panelMargins"
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
        div(slot="additional-content").mt-10
          mc-btn(
            depressed
            rounded
            color="white"
            :block="$isMobile"
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
      type="clinic"
      title="Take the first step today"
      description="Choose the best plan for your clinic. Only pay for what you need."
      :pricing-details="pricingDetails"
    ).mb-n3
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
// import MultipleBranches from '~/components/enterprise/multiple-branches';
import MycureCsi from '~/components/commons/panels/MycureCsi';
import Pricing from '~/components/commons/panels/Pricing';
import Syncbase from '~/components/commons/panels/Syncbase';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import Workflow from '~/components/outpatient-clinics/Workflow';
import SignupButton from '~/components/commons/SignupButton';
// - constants
import { CLINICS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction,
    GenericMediaPanel,
    Features,
    // MultipleBranches,
    MycureCsi,
    Pricing,
    Syncbase,
    ThinkLongTerm,
    Usp,
    Workflow,
    SignupButton,
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
    this.fifthPanel = {
      title: 'Expand your Reach',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
      imageBindings: {
        image: 'Expand your reach.webp',
        customPath: 'commons/',
      },
      contentAlign: 'left',
    };
    this.practicingSoloPanel = {
      title: 'Practicing solo?',
      imageBindings: {
        image: 'Practicing Solo Ipad.webp',
        imageWidth: '90%',
        customPath: 'clinics/',
      },
      contentAlign: 'left',
    };
    this.pricingDetails = CLINICS_PRICING;
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
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
          wide: ['font-xl'],
        }),
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
    panelMargins () {
      return { 'mt-10': this.$isMobile, 'mt-5': !this.$isMobile };
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
