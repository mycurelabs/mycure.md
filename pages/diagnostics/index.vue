<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      title="Your Diagnostic Center Fortified"
      meta-title="MYCURE Diagnostic"
      description="The best tool to create, finalize, and release diagnostic test results is finally here."
      image="Diagnostics USP"
      text-col="3"
      image-col="7"
      image-col-offset="1"
      image-width="125%"
      custom-image-path="diagnostics/"
      regular-height="650px"
      wide-height="950px"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'clinic-diagnostic' }})"
    )
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Embrace the power to choose"
        description="Don’t settle for anything less. Customize your experience based on the tools you need. MYCURE is designed for diagnostic labs and imaging centers of all sizes."
        :items="features"
        icon-container-col-size="8"
        extension-exclusive
        image-dir="diagnostics/"
        panel-height="70vh"
      )
    //- 3rd to 4th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :content="info"
      :key="key"
      hide-btn
    )
      //- Check list
      template(slot="additional-content" v-if="info.list")
        template(v-for="(item, i) in info.list")
          v-row(dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col
              span(:class="descriptionClasses") {{ item }}
    //- 5th panel
    div.grey-bg
      features(
        title="Ready whenever you are"
        meta-title="POWERFUL INTEGRATIONS"
        image-dir="diagnostics/"
        image-width="50%"
        icon-container-col-size="8"
        extension-exclusive
        hide-learn-more
        :items="integrations"
        :class="panelMargins"
      )
    //- 6th panel
    generic-media-panel(
      :content="expandPanel"
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
    //- 7th panel
    generic-media-panel(:content="cmsPanel")
      div(slot="cta-button" :class="{'text-center': $isMobile}")
        mc-btn(
          rounded
          :large="$isRegularScreen"
          :x-large="$isWideScreen"
          depressed
          color="primary"
          :to="{ name: 'clinics' }"
          :class="{'font-s': !$isMobile}"
        ).text-none
          v-icon(left) mdi-information-outline
          span Learn more
    //- 8th panel
    think-long-term
    //- 9th panel
    call-to-action
    //- 10th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
    )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - constants
import { DIAGNOSTICS_PRICING } from '~/constants/pricing';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/generic/GenericMediaPanel';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    Pricing,
    ThinkLongTerm,
    Usp,
    SignupButton,
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Laboratory Information System (LIS)',
        icon: 'LIS',
        iconExtension: '.png',
      },
      {
        title: 'Booking System',
        icon: 'Booking Systems',
        iconExtension: '.png',
      },
      {
        title: 'Radiology Information System (RIS)',
        icon: 'RIS',
        iconExtension: '.png',
      },
      {
        title: 'Billing',
        icon: 'Billing',
        iconExtension: '.png',
      },
      {
        title: 'Online Results',
        icon: 'Online Results',
        iconExtension: '.png',
      },
    ];
    this.integrations = [
      {
        title: 'HL7',
        icon: 'HL7',
      },
      {
        title: 'DICOM',
        icon: 'DICOM',
      },
    ];
    this.infoPanels = [
      {
        title: 'Easy to integrate. Easy to Use',
        description: 'Flawlessly incorporate MYCURE into your workflows.',
        list: [
          'Track specimen collection',
          'Produce beautiful reports',
          'Integrate with HL7 and DICOM-ready machines',
          'Send online results to patients',
        ],
        imageBindings: {
          image: 'easy.png',
          extensionExclusive: true,
          customPath: 'diagnostics/',
        },
        contentAlign: 'left',
      },
      {
        title: 'Send Test Results Instantly',
        description: 'Give your patients quick access to their test results through the MYCURE app for patients.',
        imageBindings: {
          image: 'Fast results.png',
          extensionExclusive: true,
          customPath: 'diagnostics/',
        },
        contentAlign: 'right',
      },
    ];
    this.expandPanel = {
      title: 'Expand your Reach',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare facilities so patients can easily find and book an appointment with you anytime.',
      imageBindings: {
        image: 'Expand your reach.png',
        extensionExclusive: true,
        customPath: 'commons/',
      },
      contentAlign: 'right',
    };
    this.cmsPanel = {
      title: 'Grow into a full service clinic anytime',
      superTitle: 'MYCURE CLINIC MANAGEMENT SYSTEM',
      description: 'Cover all your patient journeys with MYCURE’s most complete clinic management system.',
      imageBindings: {
        image: 'FullService.png',
        extensionExclusive: true,
        customPath: 'diagnostics/',
      },
      contentAlign: 'left',
    };
    this.pricingDetails = DIAGNOSTICS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Diagnostics',
      description: 'MYCURE provides the best tool to create, finalize, and release diagnostic test results for diagnostic clinics. Best alternative to laboratory and radiology information systems. ',
      socialBanner: require('~/assets/images/banners/OG Diag.png'),
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
        'lh-title',
        'font-weight-medium',
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
    subHeaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
    panelMargins () {
      return { 'mt-10': this.$isMobile, 'mt-8': !this.$isMobile };
    },
  },
  mounted () {
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
.grey-bg {
  background-color: #fafafa;
}
</style>
