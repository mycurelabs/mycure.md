<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Skin Clinics Full Illu"
      background-image-file-extension=".webp"
      title="The #1 Software for Skin and Aesthetic Clinics"
      meta-title="MYCURE for Skin Clinics"
      btn-text="Book a Demo Today"
      image="Skin Clinics USP Mobile"
      custom-image-path="clinics/skin/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
      template(slot="cta-button")
        mc-btn(
          color="success"
          href="https://calendly.com/mycure/demo"
          target="_blank"
          rel="noopener noreferrer"
          depressed
          rounded
          :large="!$isWideScreen"
          :x-large="$isWideScreen"
          :class="uspBtnClasses"
        ).text-none Book a demo today
    //- 2nd panel
    features(
      title="Easy to implement. Easy to maintain"
      description="MYCURE designed specialized solutions for skin and aesthetic clinics."
      :items="features"
    )
    //- 3rd to 4th panel
    //- generic-media-panel(
    //-   v-for="(info, key) in infoPanels"
    //-   :key="key"
    //-   content-align-right
    //-   cols-left="6"
    //-   cols-right="6"
    //-   :header="info.header"
    //-   :header-classes="headerClasses"
    //-   :descriptions="info.descriptions"
    //-   :description-classes="descriptionClasses"
    //- )
    //-   //- Check list
    //-   template(slot="additional-content" v-if="info.list")
    //-     template(v-for="(item, i) in info.list")
    //-       v-row(dense)
    //-         v-col(cols="1").pr-2.pt-2
    //-           img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
    //-         v-col
    //-           span(:class="descriptionClasses") {{ item }}
    //- 6th panel
    syncbase(:version="3")
    //- 7th panel
    think-long-term(extended)
    //- 8th panel
    pricing(
      type="clinic"
      title="Take the first step today"
      description="Start free and only pay as you grow."
      :pricing-details="pricingDetails"
    )
    //- 9th panel
    call-to-action(:version="3")
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
import classBinder from '~/utils/class-binder';
// - constants
import { CLINICS_PRICING } from '~/constants/pricing';
// - components
// import GenericMediaPanel from '~/components/commons/generic-media-panel';
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    // GenericMediaPanel,
    Pricing: () => import('~/components/commons/panels/Pricing'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
  },
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
    this.pricingDetails = CLINICS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE for Skin Clinics',
      description: 'Experience the #1 Software for Skin and Aesthetic clinics. MYCURE is easy to set up and maintain. Get started today.',
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
    uspBtnClasses () {
      return [
        classBinder(this, {
          mobile: ['text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
      ];
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
