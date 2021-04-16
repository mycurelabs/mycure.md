<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Everything you need to build your virtual practice"
      meta-title="MYCURE Telehealth"
      description="Starting a virtual practice has never been easier. Give your patients the quality care they deserve."
      btn-text="Get Started Free"
    )
    //- 2nd panel
    features(
      title="Your New Virtual Clinic"
      description="Use the tools that work best for you. Everything you need is here. It’s FREE."

    )
    //- 3rd to 6th panel
    generic-media-panel(
      v-for="(info, key) in infoPanels"
      :key="key"
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="info.header"
      :descriptions="info.descriptions"
      :header-classes="headerClasses"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
      dummy
    )
      //- Check list
      template(slot="additional-content" v-if="info.list")
        template(v-for="(item, i) in info.list")
          v-row(dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col
              span(:class="descriptionClasses") {{ item }}
    //- 7th panel
    pricing(
      title="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
    )
    //- 8th panel
    call-to-action
</template>

<script>
// - utils
import classBinder from '~/utils/class-binder';
import headMeta from '~/utils/head-meta';
// - components
import CallToAction from '~/components/commons/panels/CallToAction';
import Features from '~/components/commons/panels/Features';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Pricing from '~/components/commons/panels/Pricing';
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { DOCTORS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    Pricing,
    Usp,
  },
  data () {
    this.features = [
      {
        title: 'Built-In EME',
      },
      {
        title: 'Video Calls',
      },
      {
        title: 'Chat Function',
      },
      {
        title: 'Screen Sharing',
      },
      {
        title: 'Smart Queuing',
      },
      {
        title: 'Online Payments',
      },
    ];
    this.infoPanels = [
      {
        header: 'Increase your revenue',
        descriptions: [
          'Treat more patients and reduce no-shows and cancellations with online consultations via secure video and voice calls.',
        ],
      },
      {
        header: 'Build your clientele',
        descriptions: [
          'Build patient loyalty and accommodate patients outside of your physical work hours. It\'s easy for your old and new patients to set appointments with you.',
        ],
      },
      {
        header: 'Safekeep your important medical data',
        descriptions: [
          'Your patient\'s medical records are both accessible and secure in our system that complies with international data privacy standards. We make it our business to make sure your electronic health records are kept safe so you can focus on what you do best-taking care of your patients.',
        ],
      },
      {
        header: 'Works for group practice',
        descriptions: [
          'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
        ],
        list: [
          'Conference Calls',
          'Collated Medical Records',
          'Optimized Patient Queuing',
          'Booking Website',
        ],
      },
    ];
    this.pricingDetails = DOCTORS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE Telehealth',
      description: 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve wherever they are.',
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
  },
  mounted () {
    this.loading = false;
  },
};
</script>
