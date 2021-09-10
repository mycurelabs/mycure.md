<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      has-custom-background
      background-image="OFW Clinics Full"
      background-image-file-extension=".webp"
      title="The first and only medical software for OFW clinics"
      meta-title="MYCURE for OFW Medical Clinics"
      description="MYCURE is an easy to use, secure, cloud-based clinic management system where you can conveniently create, finalize, and release medical exam results online and offline."
      btn-text="Sign Up"
      image="OFW Clinics Mobile"
      custom-image-path="clinics/ofw/"
      parse-title
      parse-meta-title
      :parse-title-fields="['only ', 'software ']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
    )
    stakes(
      :version="3"
      :media-content="stakesContent"
      hide-btn
    )
      template(slot="title")
        h2.mc-title-set-2.font-weight-semibold Wasted Time +
        h2.mc-title-set-2.font-weight-semibold Missed Opportunities =
        h2.mc-title-set-2.font-weight-semibold Lost Income
    //- 2nd panel
    v-container
      v-row(justify="center")
        generic-panel(:row-bindings="{ justify: 'center'}")
          v-col(cols="12" lg="8").text-center
            h2(:class="headerClasses").mb-5 Create beautiful reports for your clients.
            p(:class="descriptionClasses").mb-10.font-gray.font-open-sans Provide both printed and online copies of their medical exam results without the hassle.
          v-col(cols="12").text-center
            //- TODO: Add explicit width and height
            picture-source(
              image-alt="Sample report in MYCURE Clinic Management System"
              image-file-extension=".png"
              extension-exclusive
              custom-path="clinics/ofw/"
              image="Beautiful reports"
            )
    //- h1.text-center.my-16 Design your own packages panel (placeholder)
    //- 4th panel
    generic-media-panel(
      :content="queuePanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          v-col(cols="10" md="7" lg="6" xl="7")
            div(:class="{ 'text-center': $isMobile }")
              signup-button(
                depressed
                class="rounded-pill"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
                color="success"
              ).text-none
                span.generic-button-text Sign Up
    //- 5th panel
    div.grey-bg.mx-n3
      generic-media-panel(
        :content="integrationsPanel"
        hide-btn
        align="center"
        :super-title-classes="['mc-content-set-1', 'font-open-sans', 'font-weight-semibold', 'primary--text']"
      )
        template(slot="content")
          v-row(justify="start")
            v-col(
              v-for="(item, key) in integrationsPanel.list"
              :key="key"
              cols="6"
              md="4"
            ).text-center
              picture-source(
                custom-path="diagnostics/"
                image-file-extension=".png"
                extension-exclusive
                :image="item.icon"
                :image-alt="item.title"
                :image-width="$isMobile ? '76px' : ($isRegularScreen ? '111px' : '180px' )"
                :image-height="$isMobile ? '76px' : ($isRegularScreen ? '111px' : '180px' )"
              )
              br
              h3(:class="{'font-s': $isWideScreen}").font-open-sans.font-gray {{ item.title }}
    //- 6th panel
    generic-media-panel(
      :content="directoryPanel"
      :title-classes="[...headerClasses, 'primary--text']"
    )
      template(slot="cta-button")
        v-row(:justify="$isMobile ? 'center' : 'start'")
          v-col(cols="10" sm="5" md="7" lg="6" xl="7")
            signup-button(
              depressed
              class="rounded-pill"
              :width="!$isWideScreen ? '228px' : '300'"
              :height="!$isWideScreen ? '59px' : '73.68'"
              color="success"
            ).text-none
              v-icon(left) mdi-web
              span.generic-button-text Create my website
          //- TODO: Bring back when sample website is available
          //- v-col(cols="12" md="7" lg="6" xl="5")
          //-   mc-btn(
          //-     color="success"
          //-     href="https://calendly.com/mycure/demo"
          //-     target="_blank"
          //-     rel="noopener noreferrer"
          //-     depressed
          //-     rounded
          //-     block
          //-     :large="!$isWideScreen"
          //-     :x-large="$isWideScreen"
          //-     :class="{'font-s': $isWideScreen, 'font-14': $isRegularScreen }"
          //-   ).text-none Book a full training
    care
    steps(:steps="stepsContent")
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- 7th panel
    pricing(
      title="Take the first step today."
      type="diagnostic"
    )
    //- 8th panel
    call-to-action(:version="2")
    //- 9th panel
    //- div.info.mx-n3
    //-   v-container
    //-     v-row(justify="center")
    //-       generic-panel(:row-bindings="{ justify: 'center' }")
    //-         v-col(cols="12" lg="8").white--text.text-center
    //-           h2(:class="['white--text', ...headerClasses]").mb-5 Take the first step today
    //-           p(:class="descriptionClasses").mb-5 Start now and get all your questions answered
    //-           mc-btn(
    //-             color="success"
    //-             class="rounded-pill"
    //-             :width="!$isWideScreen ? '228px' : '300'"
    //-             :height="!$isWideScreen ? '59px' : '73.68'"
    //-             depressed
    //-             :large="!$isWideScreen"
    //-             :x-large="$isWideScreen"
    //-             :class="btnClasses"
    //-           ).text-none Count me in
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - constants
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
import { getCountry } from '~/utils/axios';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    PictureSource: () => import('~/components/commons/PictureSource'),
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
  async asyncData ({ redirect }) {
    const country = await getCountry() || {};
    const code = country.country_code;

    if (!code || code !== 'PH') redirect('/');
  },
  data () {
    this.stepsContent = [
      {
        title: 'Create an Account',
        description: 'This activates your OFW Clinic Management System.',
      },
      {
        title: 'Set up your Account',
        description: 'Customize your account based on your clinic’s needs.',
      },
      {
        title: 'Serve and Save More',
        description: 'Start processing more transactions while saving time in the process.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know your clinic is serving OFWs and you have unique needs and requirements.  You know that having a custom system to address your market can increase efficiency and decrease costly human errors.',
      'The problem is it’s hard to find such a system that is easy to use and affordable.  We believe that clinics like yours should never have to deal with this. We understand that there is a need for this.',
      'That’s why we\'ve built MYCURE OFW Clinic Management System for those who are rightfully serving this market, the ‘new heroes’ of the land.',
    ];
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1'];
    this.btnClasses = ['mc-button-set-1'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for OFW Medical Clinics',
      description: 'Time to comply with the Universal Healthcare Act. MYCURE enables OFW Clinics to digitally create, finalize, and release medical exam results. Book a demo today.',
      socialBanner: require('~/assets/images/banners/MYCURE - OFW Clinic OG BANNER.png'),
    });
  },
  computed: {
    queuePanel () {
      return {
        title: 'Value everyone’s time more effectively.',
        description: 'Handle group registrations like a breeze. Your clients can now easily register themselves via kiosks. Display multiple queues through auxiliary monitors or smart TVs. Incoming doctors even get notified in their devices for every new patient in line.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'clinics/ofw/',
          image: 'Queue.png',
          mobileImage: 'Queue-mobile.png',
          imageAlt: 'Registration kiosk in MYCURE Clinic Management System',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '298.88px' : (this.$isRegularScreen ? '476.53px' : '768.94px'),
        },
      };
    },
    integrationsPanel () {
      return {
        contentAlign: 'left',
        title: 'Ready whenever you are',
        superTitle: 'Powerful Integrations',
        list: [
          {
            title: 'HL7',
            icon: 'HL7',
          },
          {
            title: 'DICOM',
            icon: 'DICOM',
          },
        ],
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-G-diagnostic-results.webp',
          imageAlt: 'Diagnostic and x-ray results in MYCURE Clinic Management System',
          customPath: 'features/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '240.05px' : (this.$isRegularScreen ? '400.06px' : '617.48px'),
        },
      };
    },
    directoryPanel () {
      return {
        title: 'Expand your Reach',
        description: 'Join MYCURE ONE, a global online directory of modern healthcare practitioners and facilities so patients can easily find and book an appointment anytime.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'commons/',
          image: 'Expand your reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
      };
    },
    stakesContent () {
      return {
        title: 'Wasted Time + Missed Opportunities  = Lost Income',
        description: 'Not automating your system means more errors and losses which can impact a lot in your bottomline.',
        contentAlign: 'right',
        imageBindings: {
          image: 'MYCURE - OFW The Stakes.png',
          mobileImage: 'MYCURE - OFW The Stakes.png',
          imageAlt: 'Doctor with hourglass and downhill chart in monitor',
          customPath: 'clinics/ofw/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '184.14px' : (this.$isRegularScreen ? '293.58px' : '473.72px'),
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
