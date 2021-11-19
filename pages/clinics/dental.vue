<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="dental-clinics-usp-full-illu"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="The Dental Clinic Management System that makes you Smile"
        meta-title="MYCURE for Dental Clinics"
        description="It has everything your dental clinic needs from appointments, billing, inventory to smart dental charting."
        btn-text="Get Started"
        image="dental-clinics-usp-mobile-version"
        custom-image-path="clinics/dental/"
        parse-title
        parse-meta-title
        :parse-title-fields="['Dental ', 'Management ', 'that ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
    lazy-hydrate(when-visible)
      stakes(
        :version="3"
        :media-content="stakesContent"
        hide-btn
      )
    //- 2nd panel
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        problem-statement
    //- 3rd panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="thirdPanel" align="center"
      )
        template(slot="content")
          h2(:class="headerClasses") Always accessible dental charts.
          br
          h2(:class="contentClasses") Never miss an appointment.
            br
            span Never miss a tooth.
        template(slot="cta-button")
          div(:class="{ 'text-center': $isMobile }")
            signup-button(
              depressed
              color="success"
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              span.generic-button-text Get Started
    //- 4th panel
    lazy-hydrate(when-visible)
      straightforward
    //- 5th panel
    //- div.info.mx-n3
    //-   v-container
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }")
    //-         v-col(cols="12" lg="8" xl="6").white--text.text-center
    //-           h2(:class="['white--text', ...headerClasses]").mb-10 Still a student?
    //-           h3(:class="studentPanelDescriptionClasses").mb-10 Join the next free webinar series for dentistry students.
    //-           mc-btn(
    //-             color="success"
    //-             depressed
    //-             rounded
    //-             :large="!$isWideScreen"
    //-             :x-large="$isWideScreen"
    //-             :class="btnClasses"
    //-           ).text-none Count me in

    //- 6th panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="directoryPanel"
        :title-classes="listHeaderClasses"
        :content-classes="listContentClasses"
      )
        //- Check list
        template(slot="additional-content")
          template(v-for="(item, i) in directoryPanel.list")
            v-row(dense align="center").my-2
              img(
                src="~/assets/images/mycure-check.png"
                alt="Check icon"
                :width="$isWideScreen ? '30' : '20'"
                :height="$isWideScreen ? '30' : '20'"
              )
              span(:class="[descriptionClasses, ($isMobile ? 'ml-2' : ($isRegularScreen ? 'ml-3' : 'ml-4'))]").font-open-sans.font-gray {{ item }}
          div.mb-10
        template(slot="cta-button")
          div(:class="{'text-center': $isMobile}")
            signup-button(
              depressed
              color="success"
              event-label="signup"
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              v-icon(left) {{ mdiWeb }}
              span.generic-button-text Create my website

    //- 7th panel
    lazy-hydrate(when-visible)
      generic-media-panel(
        align="center"
        :content="multiplePanel"
        :title-classes="[...headerClasses, 'primary--text']"
      )
        template(slot="cta-button")
          div(:class="{'text-center': $isMobile}")
            signup-button(
              depressed
              color="success"
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
            ).text-none
              span.generic-button-text Get Started
    //- 8th panel
    lazy-hydrate(when-visible)
     syncbase(:version="3")
    lazy-hydrate(when-idle)
      care(:metrics-data="metricsData")
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free)
    //- 9th panel
    lazy-hydrate(when-visible)
      think-long-term(extended)
    //- 10th panel
    lazy-hydrate(when-visible)
      storybrand(
        title="Using Modern Tools to Boost Your Practice"
        :content="storybrandContent"
      )
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="Take the first step today."
          type="clinic"
        )
    //- 11th panel
    lazy-hydrate(when-visible)
      call-to-action(:version="3")
</template>

<script>
// - utils
import { mdiWeb } from '@mdi/js';
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ProblemStatement: () => import('~/components/dental-clinics/ProblemStatement'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Straightforward: () => import('~/components/dental-clinics/Straightforward'),
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
    this.studentPanel = {
      header: 'Still a student?',
      descriptions: [
        'Join the next free webinar series for dentistry students',
      ],
    };
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates your Dental Management System.',
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
      'At MYCURE, we know you are the kind of dental clinic that loves providing a great service to make your patients smile. You know that having a robust system to complement your practice. In order to be that way, you need a solution that is custom built to your specific processes and needs.',
      'The problem is it’s hard to find such a system that is easy to use, flexible and affordable.  We believe that dental clinics like yours should never have to deal with this. We’ve talked to dozens of dental clinics and understand that there is a need for this. ',
      'That’s why we\'ve built MYCURE Dental Clinic Management System for those who value a shiny experience that guarantees to bring smiles to your clinic and your patients.',
    ];
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1'];
    this.contentClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    this.subHeaderClasses = ['mc-subheader-set-1', 'lh-title', 'font-weight-semibold', 'secondary--text'];
    this.studentPanelDescriptionClasses = ['mc-subheader-set-2', 'font-weight-semibold'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'primary--text', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
      mdiWeb,
    };
  },
  head () {
    return headMeta({
      title: 'Dental Clinic Management System | MYCURE for Dental Clinics',
      description: 'MYCURE is a complete dental clinic management system for dentists to manage everything in their dental practice, from patient appointments to billing. Visit us.',
      socialBanner: require('~/assets/images/banners/dental-clinic-og-banner.png'),
    });
  },
  computed: {
    thirdPanel () {
      return {
        contentAlign: 'left',
        imageBindings: {
          image: 'dental-charts.png',
          mobileImage: 'dental-charts-mobile.png',
          imageAlt: 'Dental charts in a tablet',
          customPath: 'clinics/dental/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '231.38px' : (this.$isRegularScreen ? '385.52px' : '595.03px'),
        },
      };
    },
    directoryPanel () {
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
    multiplePanel () {
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
          height: this.$isMobile ? '156.16px' : (this.$isRegularScreen ? '260.29px' : '401.63px'),
        },
      };
    },
    stakesContent () {
      return {
        title: 'Don\'t Get Left Behind',
        description: 'Do you still use paper charting to track history of your patient’s dental records? You may be losing to your competition.',
        contentAlign: 'right',
        imageBindings: {
          image: 'dental-the-stakes.png',
          mobileImage: 'dental-the-stakes.png',
          imageAlt: 'Doctor with tons of paper work',
          customPath: 'clinics/dental/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '139.59px' : (this.$isRegularScreen ? '222.55px' : '359.11px'),
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
.blue-bg {
  background-color: #0099cc;
}
</style>
