<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Easy to setup, affordable"
      meta-title="MYCURE for Dental Clinics"
      description="Start going digital without spending anything."
      btn-text="Start Free"
    )
    //- 2nd panel
    features(
      title="From your first sale to full scale"
      description="MYCURE is designed to help you grow your practice."
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
    //- 5th panel
    generic-media-panel(
      :center-media="!$isMobile"
      :content-align-left="$isMobile"
      :header="studentPanel.header"
      :header-classes="headerClasses"
      :descriptions="studentPanel.descriptions"
      :descriptionClasses="descriptionClasses"
      :dense="$isMobile"
    )
    //- 6th panel
    generic-media-panel(
      content-align-right
      cols-left="6"
      cols-right="6"
      :header="directoryPanel.header"
      :header-classes="headerClasses"
      :descriptions="directoryPanel.descriptions"
      :description-classes="descriptionClasses"
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in directoryPanel.list")
          v-row(dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col
              span(:class="descriptionClasses") {{ item }}
    //- 7th panel
    multiple-branches
    //- 8th panel
    syncbase
    //- 9th panel
    think-long-term(extended)
    //- 10th panel
    pricing(
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
    )
    //- 11th panel
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
        title: 'Smart Dental Charting',
      },
      {
        title: 'Easy Billing and POS',
      },
      {
        title: 'Inventory Management',
      },
      {
        title: 'Works offline',
      },
      {
        title: 'Appointment Booking and Alerts',
      },
    ];
    this.studentPanel = {
      header: 'Still a student?',
      descriptions: [
        'Join the next free webinar series for dentistry students',
      ],
    };
    this.directoryPanel = {
      header: 'Get more eyes on the brand',
      descriptions: [
        'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
      ],
      list: [
        'Acquire patients beyond your reach',
        'Hassle-free from booking to billing',
        'Covers virtual to physical accommodation',
      ],
    };
    this.infoPanels = [
      {
        header: 'Always accessible dental charts',
        descriptions: [
          'Never miss an appointment. Never miss a tooth.',
        ],
      },
      {
        header: 'Straightforward and simple.',
        descriptions: [
          'Accurately track baseline and updated dental charts, proposed procedures, and the actual work done.',
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
      title: 'MYCURE for Dental Clinics',
      description: 'Experience the most versatile software for dental clinics that seamlessly manages dental charts, inventory, and billing.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
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
