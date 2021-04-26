<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="The #1 Software for Skin and Aesthetic clinics"
      meta-title="MYCURE for Skin Clinics"
      btn-text="Book a Demo Today"
    )
    //- 2nd panel
    features(
      title="Easy to implement. Easy to maintain"
      description="MYCURE designed specialized solutions for skin and aesthetic clinics."
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
    multiple-branches
    //- 6th panel
    syncbase
    //- 7th panel
    think-long-term(extended)
    //- 8th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
    )
    //- 9th panel
    call-to-action
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
import MultipleBranches from '~/components/enterprise/multiple-branches';
import Pricing from '~/components/commons/panels/Pricing';
import Syncbase from '~/components/commons/panels/Syncbase';
import ThinkLongTerm from '~/components/commons/panels/ThinkLongTerm';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction,
    Features,
    GenericMediaPanel,
    MultipleBranches,
    Pricing,
    Syncbase,
    ThinkLongTerm,
    Usp,
  },
  middleware: ['disable-route'],
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Digital Medical Records',
      },
      {
        title: 'Smart Attachments',
      },
      {
        title: 'Point-of-Sales',
      },
      {
        title: 'Inventory management',
      },
      {
        title: 'Works offline',
      },
    ];
    this.infoPanels = [
      {
        header: 'Beautiful user experience',
        descriptions: [
          'You won\'t feel like you\'re at work.',
        ],
      },
      {
        header: 'Get more eyes on your brand',
        descriptions: [
          'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
        ],
        list: [
          'Acquire patients beyond your reach',
          'Hassle-free from booking to billing',
          'Covers virtual to physical accommodation',
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
      title: 'MYCURE for Skin Clinics',
      description: 'Experience the #1 Software for Skin and Aesthetic clinics. MYCURE is easy to set up and maintain. Get started today.',
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
