<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Skin Clinics Full Illu"
      background-image-file-extension=".webp"
      title="The #1 Software for Skin and Aesthetic Clinics"
      meta-title="MYCURE for Skin Clinics"
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
          :class="btnClasses"
        ).text-none Book a demo today
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Easy to implement. Easy to maintain."
        description="MYCURE designed specialized solutions for skin and aesthetic clinics."
        image-dir="clinics/skin/"
        title-col-size="10"
        icon-container-col-size="8"
        extension-exclusive
        primary-title
        :items="features"
      )
    //- 3rd panel
    generic-media-panel(:content="thirdPanel" align="center")
      template(slot="content")
        h2(:class="headerClasses" text-align) Beautiful user experience!
        br
        h2(:class="headerClasses").secondary--text You won't feel like you are at work.
      template(slot="cta-button")
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            :class="btnClasses"
            depressed
            rounded
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            color="success"
          ).text-none.font-s
            span Get Started

    //- 4th panel
    generic-media-panel(
      hide-btn
      :content="fourthPanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      //- Check list
      template(slot="additional-content")
        div.mb-10
          v-row(
            v-for="(item, i) in fourthPanel.list"
            :key="item"
            dense
          )
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="10" sm="11" md="11")
              span(:class="descriptionClasses") {{ item }}
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            :class="btnClasses"
            depressed
            rounded
            block
            :x-large="$isWideScreen"
            :large="!$isWideScreen"
            color="success"
          ).text-none.font-s.mb-3
            span Create my website

    //- 5th panel
    generic-media-panel(
      :content="fifthPanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        div(:class="{'text-center': $isMobile}")
          mc-btn(
            color="success"
            href="https://calendly.com/mycure/demo"
            target="_blank"
            rel="noopener noreferrer"
            depressed
            rounded
            :large="!$isWideScreen"
            :x-large="$isWideScreen"
            :class="btnClasses"
          ).text-none.font-s Get Started

    //- 6th panel
    syncbase(:version="3")
    //- 7th panel
    think-long-term(extended)
    //- 8th panel
    pricing(
      type="clinic"
      title="Take the first step today."
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
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
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
    this.thirdPanel = {
      contentAlign: 'left',
      imageBindings: {
        image: 'Beautiful User experience.png',
        mobileImage: 'Beautiful User experience mobile.png',
        imageAlt: 'Body diagram in a tablet',
        customPath: 'clinics/skin/',
        extensionExclusive: true,
        imageWidth: '70%',
      },
    };
    this.fourthPanel = {
      title: 'Get more eyes on your brand',
      description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
      contentAlign: 'right',
      imageBindings: {
        customPath: 'commons/',
        image: 'Expand your reach.webp',
        imageAlt: 'Man browsing a clinic website',
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
        image: 'Multiple locations.png',
        mobileImage: 'Multiple locations mobile.png',
        extensionExclusive: true,
        imageAlt: 'Charts and graphs',
      },
    };
    this.pricingDetails = CLINICS_PRICING;
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for Skin Clinics',
      description: 'Experience the #1 Software for Skin and Aesthetic clinics. MYCURE is easy to set up and maintain. Get started today.',
      socialBanner: require('~/assets/images/banners/MYCURE - Skin Clinic OG BANNER.png'),
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
        'font-weight-semibold',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
    btnClasses () {
      const btnClasses = [
        classBinder(this, {
          mobile: ['font-xs', 'text-center'],
          regular: ['font-xs'],
          wide: ['font-s'],
        }),
        'font-weight-thin',
      ];
      return btnClasses;
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
