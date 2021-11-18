<template lang="pug">
  div.white
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="skin-clinics-full-illu"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="Skin and Aesthetic Clinic Management System for a Flawless Experience"
        meta-title="MYCURE for Skin Clinics"
        description="Easy appointment, inventory management and secure client records and relationship management with analytics and reporting."
        btn-text="Get Started"
        image="skin-clinics-usp-mobile"
        custom-image-path="clinics/skin/"
        parse-title
        parse-meta-title
        :parse-title-fields="['Aesthetic ', 'Management ', 'a ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
        //- template(slot="cta-button")
        //-   mc-btn(
        //-     color="success"
        //-     href="https://calendly.com/mycure/demo"
        //-     target="_blank"
        //-     rel="noopener noreferrer"
        //-     depressed
        //-     class="rounded-pill"
        //-     :width="!$isWideScreen ? '228px' : '300'"
        //-     :height="!$isWideScreen ? '59px' : '73.68'"
        //-   ).text-none
        //-     span.generic-button-text Book a demo today
    lazy-hydrate(when-visible)
      stakes(
        :version="3"
        :media-content="stakesContent"
        hide-btn
      )
    //- 2nd panel
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
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
    lazy-hydrate(when-visible)
      generic-media-panel(:content="thirdPanel" align="center")
        template(slot="content")
          h2(:class="headerClasses" text-align) Beautiful user experience
          br
          div(:class="{'text-center': $isMobile}")
            span.font-open-sans.font-gray.mc-title-set-2 You won't feel like you are at work.
        template(slot="cta-button")
          div(:class="{ 'text-center': $isMobile }")
            signup-button(
              depressed
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              color="success"
            ).text-none.font-s
              span.generic-button-text Get Started

    //- 4th panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        hide-btn
        :content="fourthPanel"
        :title-classes="listHeaderClasses"
        :content-classes="listContentClasses"
      )
        //- Check list
        template(slot="additional-content")
          template(v-for="(item, i) in fourthPanel.list")
            v-row(dense align="center").my-2
              img(
                src="~/assets/images/mycure-check.png"
                alt="Check icon"
                :width="$isWideScreen ? '30' : '20'"
                :height="$isWideScreen ? '30' : '20'"
              )
              span(:class="[descriptionClasses, ($isMobile ? 'ml-2' : ($isRegularScreen ? 'ml-3' : 'ml-4'))]") {{ item }}
          div.mb-10
          div(:class="{ 'text-center': $isMobile }")
            signup-button(
              depressed
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              color="success"
            ).text-none
              v-icon(left) {{ mdiWeb }}
              span.generic-button-text Create my website

    //- 5th panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="fifthPanel"
        :title-classes="[...headerClasses, 'primary--text']"
        align="center"
      )
        template(slot="cta-button")
          div(:class="{'text-center': $isMobile}")
            signup-button(
              depressed
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              color="success"
            ).text-none
              span.generic-button-text Get Started
            //- mc-btn(
            //-   color="success"
            //-   href="https://calendly.com/mycure/demo"
            //-   target="_blank"
            //-   rel="noopener noreferrer"
            //-   depressed
            //-   class="rounded-pill"
            //-   :width="!$isWideScreen ? '228px' : '300'"
            //-   :height="!$isWideScreen ? '59px' : '73.68'"
            //- ).text-none
            //-   span.generic-button-text Get Started

    //- 6th panel
    lazy-hydrate(when-visible)
      syncbase(:version="3")
    //- 6.5
    lazy-hydrate(when-idle)
      care(:metrics-data="metricsData")
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free)
    //- 7th panel
    lazy-hydrate(when-visible)
      think-long-term(extended)
    lazy-hydrate(when-visible)
      storybrand(
        title="Using Modern Tools to Boost Your Practice"
        :content="storybrandContent"
      )
    //- 8th panel
    client-only
      lazy-hydrate(when-idle)
        pricing(
          type="clinic"
          title="Take the first step today."
          :pricing-details="pricingDetails"
        )
    //- 9th panel
    lazy-hydrate(when-visible)
      call-to-action(:version="3" not-free)
</template>

<script>
// - utils
import { mdiWeb } from '@mdi/js';
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - constants
import { CLINICS_PRICING } from '~/constants/pricing';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    Care: () => import('~/components/home/Care'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  async asyncData (context) {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    this.features = [
      {
        title: 'Digital Medical Records',
        icon: 'digital-records',
        iconExtension: '.png',
      },
      {
        title: 'Smart Attachments',
        icon: 'smart-attachments',
        iconExtension: '.png',
      },
      {
        title: 'Point-of-Sales',
        icon: 'point-of-sales',
        iconExtension: '.png',
      },
      {
        title: 'Inventory Management',
        icon: 'inventory-management',
        iconExtension: '.png',
      },
      {
        title: 'Works Offline',
        icon: 'works-offline',
        iconExtension: '.png',
      },
    ];
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates your Skin Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize your account based on your clinic’s needs.',
      },
      {
        title: 'Share',
        description: 'Share your beautiful, free website so your patients can start booking.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of skin clinic that gives utmost importance to its clients. Providing the highest quality is non-negotiable both in the services provided and the tools you use. In order to be that way, you need a solution that also puts quality at its core.',
      'The problem is it’s hard to find a provider that looks at its system not just as a service but as an experience. We believe that aesthetic clinics like yours should never have this choice. ',
      'That’s why we\'ve built MYCURE Skin and Aesthetics Clinic Management System for those who value a flawless experience in their clinics like yours.',
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
      mdiWeb,
    };
  },
  head () {
    return headMeta({
      title: 'Best Skin and Aesthetic Clinic Management System | MYCURE',
      description: 'MYCURE offers a management system that helps skin clinics manage their operations. It has modules for patient management, appointments, and reporting. See more.',
      socialBanner: require('~/assets/images/banners/skin-clinic-og-banner.png'),
    });
  },
  computed: {
    thirdPanel () {
      return {
        contentAlign: 'left',
        imageBindings: {
          image: 'beautiful-user-experience.png',
          imageAlt: 'Body diagram in a tablet',
          extensionExclusive: true,
          customPath: 'clinics/skin/',
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
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
        list: [
          'Acquire patients beyond your reach',
          'Hassle-free from booking to billing',
          'Virtual to physical accommodation',
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
          image: 'multiple-locations.png',
          mobileImage: 'multiple-locations-mobile.png',
          extensionExclusive: true,
          imageAlt: 'Charts and graphs',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '156.05px' : (this.$isRegularScreen ? '260.08px' : '401.41px'),
        },
      };
    },
    stakesContent () {
      return {
        title: 'Is Status and Quality Important to Your Clinic?',
        description: 'Don’t give a reason to lose to your competition. Complement your top notch skin services with a modern, robust and complete system.',
        contentAlign: 'right',
        imageBindings: {
          image: 'skin-the-stakes.png',
          mobileImage: 'skin-the-stakes.png',
          imageAlt: 'Doctor listening to patient feedback',
          customPath: 'clinics/skin/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '206.56px' : (this.$isRegularScreen ? '329.3px' : '531.38px'),
        },
      };
    },
  },
  created () {
    this.loading = false;
  },
};
</script>

<style scoped>
.grey-bg {
  background-color: #fafafa;
}
</style>
