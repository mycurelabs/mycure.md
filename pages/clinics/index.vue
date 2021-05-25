<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      title="Simplified workflows, faster results, better performance."
      meta-title="MYCURE Clinic Management System"
      description="Designed for modern clinics with complex operations. Large or small, MYCURE enables clinics to be much more efficient, increase in revenue, and build more patient loyalty."
      parse-title="regular"
      btn-text="Get Started"
      btn-color="success"
      image="Clinics USP"
      image-width="90%"
      custom-image-path="clinics/"
      :parse-title-fields="['workflows, ', 'results, ']"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      workflow
    //- 3rd panel
    mycure-csi
    //- 4th panel
    syncbase(version-two)
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
          color="primary"
          event-label="signup"
          :block="$isMobile"
          :large="$isRegularScreen"
          :x-large="$isWideScreen"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-web
          span Create my website
    //- 6th panel
    div.grey-bg.mx-n3
      features(
        title="Customized for Your Specialty"
        description="MYCURE has already built in workflows and processes for different setups."
        :items="features"
        :class="panelMargins"
        image-dir="clinics/"
        icon-container-col-size="10"
        icon-col-size="3"
        extension-exclusive
        panel-height="70vh"
      )
        template(slot="additional-content")
          v-row(justify="center").my-10
            v-col(cols="12" sm="6" md="5" xl="3")
              mc-btn(
                color="success"
                block
                depressed
                rounded
                :large="$isRegularScreen"
                :x-large="$isWideScreen"
                :to="{ name: 'doctors-clinics' }"
                :class="{'font-s': $isWideScreen, 'font-xs': $isRegularScreen }"
              ).text-none Practicing solo? Click here.
    //- 7th panel
    think-long-term
    v-divider.divider
    //- 8th panel
    call-to-action(:version="2")
    //- 9th panel
    pricing(
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
        iconExtension: '.png',
      },
      {
        title: 'Skin & Aesthetics',
        icon: 'Skin',
        iconExtension: '.png',
      },
      {
        title: 'Maternity Care',
        icon: 'Maternity Care',
        iconExtension: '.png',
      },
      {
        title: 'Pediatric Care',
        icon: 'Pedia',
        iconExtension: '.png',
      },
      {
        title: 'Dentistry',
        icon: 'Dentistry',
        iconExtension: '.png',
      },
      {
        title: 'Diagnostics',
        icon: 'Diagnostics',
        iconExtension: '.png',
      },
      {
        title: 'Corporate',
        icon: 'Corporate',
        iconExtension: '.png',
      },
    ];
    this.fifthPanel = {
      title: 'Expand your Reach',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
      imageBindings: {
        image: 'Expand your reach.png',
        extensionExclusive: true,
        customPath: 'commons/',
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
          mobile: ['font-m', 'text-center'],
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
</style>
