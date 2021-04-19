<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Your Diagnostic Center Fortified"
      meta-title="MYCURE Diagnostic"
      description="The best tool to create, finalize, and release diagnostic test results is finally here."
    )
    //- 2nd panel
    features(
      title="Embrace the power to choose"
      description="Don’t settle for anything less.Customize your experience based on the tools you need. MYCURE is designed for diagnostic labs and imaging centers of all sizes."
      :items="features"
    )
    //- 3rd to 4th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="info.header"
      :header-classes="headerClasses"
      :descriptions="info.descriptions"
      :description-classes="descriptionClasses"
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
      hide-learn-more
    )
    //- 6th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      header="Expand Your Reach"
      :descriptions="['Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.']"
      :header-classes="headerClasses"
      :description-classes="descriptionClasses"
    )
    //- 7th panel
    generic-media-panel(
      header="Grow into a full service clinic anytime"
      sub-header="MYCURE CLINIC MANAGEMENT SYSTEM"
      with-subheader
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :dense="$isMobile"
      :descriptions="['Cover all your patient journeys with MYCURE’s most complete clinic management system.']"
      :header-classes="headerClasses"
      :sub-headerClasses="subHeaderClasses"
      :description-classes="descriptionClasses"
    )
    //- 8th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      header="Grow into a full service anytime."
      sub-header="MYCURE CLINIC MANAGEMENT SYSTEM"
      with-subheader
      :descriptions="['Cover all your patient journeys with MYCURE’s most complete clinic management system.']"
      :header-classes="headerClasses"
      :sub-header-classes="subHeaderClasses"
      :description-classes="descriptionClasses"
    )
    //- 9th panel
    think-long-term(extended)
    //- 10th panel
    call-to-action
    //- 11th panel
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
      },
      {
        title: 'Laboratory Information System (LIS)',
      },
      {
        title: 'Radiology Information System (RIS)',
      },
      {
        title: 'Billing',
      },
      {
        title: 'Online Results',
      },
    ];
    this.integrations = [
      {
        title: 'HL7',
      },
      {
        title: 'DICOM',
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
      },
      {
        header: 'Send Test Results Instantly',
        descriptions: [
          'Give your patients quick access to their test results through the MYCURE app for patients.',
        ],
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
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-weight-bold',
        'primary--text',
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
