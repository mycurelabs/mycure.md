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
    div.grey-bg.mx-n3
      features(
        title="Easy to implement. Easy to maintain"
        description="MYCURE designed specialized solutions for skin and aesthetic clinics."
        image-dir="clinics/skin/"
        icon-container-col-size="8"
        extension-exclusive
        :items="features"
      )
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
    this.features = [
      {
        title: 'Digital Medical Records',
        icon: 'Digital Records',
        iconExtension: '.png',
      },
      {
        title: 'Smart Attachments',
        icon: 'Smart Attachments',
        iconExtension: '.png',
      },
      {
        title: 'Point-of-Sales',
        icon: 'Point of Sales',
        iconExtension: '.png',
      },
      {
        title: 'Inventory Management',
        icon: 'Inventory Management',
        iconExtension: '.png',
      },
      {
        title: 'Works Offline',
        icon: 'Works Offline',
        iconExtension: '.png',
      },
    ];
    this.fourthPanel = {
      title: 'Get more eyes on your brand',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
      contentAlign: 'right',
      imageBindings: {
        customPath: 'clinics/skin/',
        image: 'Lightning fast.webp',
        mobileImage: 'Lightning fast mobile.png',
        imageAlt: 'Print preview of health prescription receipt',
      },
      list: [
        'Acquire patients beyond your reach',
        'Hassle-free from booking to billing',
        'Covers virtual to physical accommodation',
      ],
    };
    this.fifthPanel = {
      title: 'One view for multiple locations',
      description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
      contentAlign: 'left',
      imageBindings: {
        customPath: 'clinics/skin/',
        image: 'Going digital.webp',
        mobileImage: 'Going digital mobile.png',
        imageAlt: 'Growth chart showing an increasing trend',
      },
    };
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

<style scoped>
.grey-bg {
  background-color: #fafafa;
}
</style>
