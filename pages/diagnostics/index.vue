<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Your Diagnostic Center Fortified"
      meta-title="MYCURE Diagnostic"
      description="The best tool to create, finalize, and release diagnostic test results is finally here."
      web-height="500px"
      image="USP"
      custom-image-path="diagnostics/"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', params: { type: 'clinic-diagnostic' }})"
    )
    //- 2nd panel
    features(
      title="Embrace the power to choose"
      description="Don’t settle for anything less.Customize your experience based on the tools you need. MYCURE is designed for diagnostic labs and imaging centers of all sizes."
      :items="features"
      extension-exclusive
      image-dir="diagnostics/"
      :class="panelMargins"
      panel-height="70vh"
    )
    //- 3rd to 4th panel
    div.mt-12
      generic-media-panel(
        v-for="(info, key) in infoPanels"
        :key="key"
        offset-cols-right="1"
        :header="info.header"
        :header-classes="headerClasses"
        :descriptions="info.descriptions"
        :description-classes="descriptionClasses"
        extension-exclusive
        file-extension=".png"
        custom-image-path="diagnostics/"
        :web-image="info.image"
        v-bind="getPanelBindings(key)"
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
    features(
      title="Ready whenever you are"
      meta-title="POWERFUL INTEGRATIONS"
      :items="integrations"
      extension-exclusive
      image-dir="diagnostics/"
      hide-learn-more
      :class="panelMargins"
      image-width="50%"
    ).mb-10
    //- 6th panel
    generic-media-panel(
      content-align-left
      cols-left="4"
      cols-right="5"
      offset-cols-right="1"
      align-content-left="center"
      header="Expand Your Reach"
      :descriptions="['Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.']"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
      web-image="Expand your reach"
      extension-exclusive
      custom-image-path="commons/"
      file-extension=".png"
    )
      template(slot="additional-content")
        mc-btn(
          tile
          small
          depressed
          color="primary"
          :block="$isMobile"
          event-label="signup"
          :to="{ name: 'signup-health-facilities' }"
        ).text-none
          v-icon(small left) mdi-web
          span Create my website
        //- TODO: Bring back once demo is available
        //- v-row
        //-   mc-btn(
        //-     text
        //-     color="primary"
        //-     :block="$isMobile"
        //-   ).text-none.font-xs
        //-     span View a sample website
        //-     v-icon(right) mdi-chevron-right
    //- 7th panel
    generic-media-panel(
      header="Grow into a full service clinic anytime"
      sub-header="MYCURE CLINIC MANAGEMENT SYSTEM"
      with-subheader
      content-align-right
      cols-left="5"
      cols-right="4"
      offset-cols-right="1"
      align-content-right="center"
      :dense="$isMobile"
      :descriptions="['Cover all your patient journeys with MYCURE’s most complete clinic management system.']"
      :header-classes="headerClasses"
      :sub-header-classes="subHeaderClasses"
      :description-classes="descriptionClasses"
      web-image="workspace"
      file-extension=".png"
      extension-exclusive
      custom-image-path="diagnostics/"
    )
      template(slot="additional-content")
        mc-btn(
          tile
          small
          depressed
          color="primary"
          :block="$isMobile"
          :to="{ name: 'clinics' }"
        ).text-none
          v-icon(small left) mdi-information-outline
          span Learn more
    //- 8th panel
    think-long-term(:class="panelMargins")
    //- 9th panel
    call-to-action(:version="2" :class="panelMargins")
    //- 10th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
      :class="panelMargins"
    )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - constants
import { ENTERPRISE_PRICING } from '~/constants/pricing';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Pricing from '~/components/commons/panels/Pricing';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    Pricing,
    ThinkLongTerm,
    Usp,
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Booking System',
        icon: 'Booking Systems',
        iconExtension: '.png',
      },
      {
        title: 'Laboratory Information System (LIS)',
        icon: 'LIS',
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
        icon: 'Dicom',
      },
    ];
    this.infoPanels = [
      {
        header: 'Easy to integrate. Easy to Use',
        descriptions: [
          'Flawlessly incorporate MYCURE into your workflows.',
        ],
        list: [
          'Track specimen collection',
          'Produce beautiful reports',
          'Integrate with HL7 and DICOM-ready machines',
          'Send online results to patients',
        ],
        image: 'easy',
      },
      {
        header: 'Send Test Results Instantly',
        descriptions: [
          'Give your patients quick access to their test results through the MYCURE app for patients.',
        ],
        image: 'Fast results',
      },
    ];
    this.pricingDetails = ENTERPRISE_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Diagnostics',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph-Providers.jpg'),
    });
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    subHeaderClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-xs'],
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
