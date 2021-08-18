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
          width="228px"
          height="59px"
        ).text-none
          span.generic-button-text Book a demo today
    //- 2nd panel
    div.grey-bg.mx-n3
      features(
        title="Easy to implement. Easy to maintain."
        description="MYCURE designed specialized solutions for skin and aesthetic clinics."
        image-dir="clinics/skin/"
        title-col-size="10"
        extension-exclusive
        primary-title
        :items="features"
      )
    //- 3rd panel
    generic-media-panel(:content="thirdPanel" align="center")
      template(slot="content")
        h2(:class="headerClasses" text-align) Beautiful user experience!
        br
        h2(:class="subHeaderClasses") You won't feel like you are at work.
      template(slot="cta-button")
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            width="228px"
            height="59px"
            color="success"
          ).text-none.font-s
            span.generic-button-text Get Started

    //- 4th panel
    generic-media-panel(
      hide-btn
      :content="fourthPanel"
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in fourthPanel.list")
          v-row(dense)
            v-col(cols="2" sm="1" md="1"  :class="$isWideScreen ? 'pt-3' : 'pt-2'").pr-2
              img(
                src="~/assets/images/mycure-check.png"
                alt="Check icon"
                :width="$isWideScreen ? '30' : '20'"
                :height="$isWideScreen ? '30' : '20'"
              )
            v-col(cols="10" sm="11" md="11")
              span(:class="descriptionClasses") {{ item }}
        div.mb-10
        div(:class="{ 'text-center': $isMobile }")
          signup-button(
            depressed
            rounded
            width="228px"
            height="59px"
            color="success"
          ).text-none
            v-icon(left) mdi-web
            span.generic-button-text Create my website

    //- 5th panel
    generic-media-panel(
      align="center"
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
            width="228px"
            height="59px"
          ).text-none
            span.generic-button-text Get Started

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
    call-to-action(:version="3" not-free)
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
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
    this.pricingDetails = CLINICS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.subHeaderClasses = ['mc-content-set-1', 'lh-title', 'font-weight-semibold', 'secondary--text'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'primary--text', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
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
    thirdPanel () {
      return {
        contentAlign: 'left',
        imageBindings: {
          image: 'Beautiful User experience.png',
          mobileImage: 'Beautiful User experience mobile.png',
          imageAlt: 'Body diagram in a tablet',
          customPath: 'clinics/skin/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '305.91px' : (this.$isRegularScreen ? '508.96px' : '785.58px'),
        },
      };
    },
    fourthPanel () {
      return {
        title: 'Get more eyes on your brand',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities where people anywhere can book appointments at any time.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'commons/',
          image: 'Expand your reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '404.79px' : '624.8px'),
        },
        list: [
          'Acquire patients beyond your reach',
          'Hassle-free from booking to billing',
          'Covers virtual to physical accommodation',
        ],
      };
    },
    fifthPanel () {
      return {
        title: 'One view for multiple locations',
        description: 'All you need is one clean dashboard to see how your clinics are faring. Critical data from your multiple branches are beautifully compiled to show you a comprehensive summary of patient encounters, transactions, sales, expenses and even staff performance.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'clinics/skin/',
          image: 'Multiple locations.png',
          mobileImage: 'Multiple locations mobile.png',
          extensionExclusive: true,
          imageAlt: 'Charts and graphs',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '156.16px' : (this.$isRegularScreen ? '260.08px' : '401.41px'),
        },
      };
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
