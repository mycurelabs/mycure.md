<template lang="pug">
  div.white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="ofw-clinics-full"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="The first and only medical software for OFW clinics"
        meta-title="MYCURE OFW CLINICS"
        description="MYCURE Clinics is an easy to use, secure, cloud-based clinic management system where you can create, finalize, and release medical exam results online and off."
        btn-text="Start Free Today"
        image="ofw-clinics-mobile"
        custom-image-path="clinics/ofw/"
        parse-title
        parse-meta-title
        :parse-title-fields="['only ', 'software ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
        @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'diagnostic' }})"
      )
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="stakesContent"
          :title-classes="headerClasses"
          :content-classes="descriptionClasses"
          hide-btn
        )
          template(slot="title")
            h2.mc-h2 Wasted Time +
            h2.mc-h2 Missed Opportunities
            h2.mc-h2 = Lost Income
          template(slot="content")
            v-col(cols="12")
              v-row(v-for="(item, key) in stakesContent.itemList" :key="key" align="center")
                v-icon(color="red" small) {{ mdiClose }}
                v-col.pa-0.mb-1
                  p.mc-list-b3.mb-0.ml-2 {{ item }}

    lazy-hydrate(when-visible)
      storybrand(
        title="Placeholder"
        :content="['As the worldwide leader in exported labor, it’s vital to have run an efficient medical clinic for overseas Filipino workers (OFW), so as not to delay patients when they need to travel to their new job. Not automating your system means continued errors and losses which will impact your clinic’s bottom line. MYCURE Clinics is an end-to-end clinic information system that eliminates the old challenges of processing paperwork manually. If you’re not using the technologies available today, you’re missing out on more than you might think. MYCURE Clinics’ practice management system was designed with the patient experience in mind, meaning you can book appointments, upload medical records, and accept payment all on one app. Reduce the time spent on manual recordkeeping and filing paperwork all thanks to MYCURE’s clinic management system. ']"
        is-center
      )
    lazy-hydrate(when-visible)
      generic-blue-bg.white--text
        generic-video-panel(:content="ofwVideo")
          template(slot="description")
            p(v-if="ofwVideo.description").mc-b2.white--text {{ ofwVideo.description }}
            v-col(cols="12").mb-5
              v-row(v-for="(item, key) in ofwVideo.itemList" :key="key" align="center")
                v-icon(color="white" small) {{ mdiCheckCircle }}
                v-col.pa-0.mb-1
                  p.mc-list-b3.mb-0.ml-2.white--text {{ item }}
    v-container.mt-16
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel(:row-bindings="{ justify: 'center'}")
            v-col(cols="12").text-center
              //- TODO: Add explicit width and height
              picture-source(
                image-alt="Sample report in MYCURE Clinic Management System"
                image-file-extension=".png"
                extension-exclusive
                custom-path="clinics/ofw/"
                image="beautiful-reports"
              )
            v-col(cols="12" sm="11").text-center
              h2(:class="headerClasses").mb-5 Create Beautiful Reports for Your OFW Clinic Clients
              p(:class="descriptionClasses").mb-10.font-gray.font-open-sans Provide printed and digital copies of medical exam results without the hassle. MYCURE Clinics designs clear and easy to read reports, which will make the paperwork process that much easier for your patients getting ready to travel.
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="queuePanel"
        :title-classes="headerClasses"
        hide-btn
      ).mb-16
    lazy-hydrate(when-visible)
      mycure-csi
    lazy-hydrate(when-visible)
      generic-media-panel(
        align="center"
        hide-btn
        :content="fifthPanel"
        :title-classes="headerClasses"
      ).mt-16
    lazy-hydrate(when-visible)
      syncbase(:version="2" title="Online or Off, MYCURE Clinics Is Here for You")
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="directoryPanel"
        :title-classes="headerClasses"
      )
        template(slot="cta-button")
          div(:class="{'text-center ml-4': $isMobile}")
            nuxt-link(to="/signup/health-facilities?type=diagnostic" :class="{'d-flex': !$isMobile}").text-none
              span.mc-hyp1.primary--text Join Today
              v-icon(left color="primary" :large="$isWideScreen") {{ mdiChevronRight }}
    lazy-hydrate(when-visible)
      storybrand(
        title="Invaluable Clinic Management System"
        :content="['MYCURE Clinics offers a variety of tools that you can mix and match to maximize efficiency for your practice, without the costly overhead other platforms might require. Daily reports, digital records, and appointments can all be accessed in one app – instead of needing to keep track of multiple platforms on your office’s devices. You can even fill out prescriptions to submit to pharmacies.']"
      )
    //- scroller
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="integrationsPanel"
          hide-btn
          align="center"
          super-title-classes="mc-h7"
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
                h3.b4.font-open-sans.font-gray {{ item.title }}
    lazy-hydrate(when-idle)
      care(:metrics-data="metricsData")
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="Take the first step today."
          type="diagnostic"
        )
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free title="Joining MYCURE is simple")
    lazy-hydrate(when-visible)
      call-to-action(:version="1" not-free).mt-16
</template>

<script>
// - utils
import LazyHydrate from 'vue-lazy-hydration';
import { mdiWeb, mdiCheckCircle, mdiClose, mdiChevronRight } from '@mdi/js';
import headMeta from '~/utils/head-meta';
// - constants
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// import { getCountry, fetchWebsiteMetrics } from '~/utils/axios';
import { fetchWebsiteMetrics } from '~/utils/axios';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    PictureSource: () => import('~/components/commons/PictureSource'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    GenericBlueBg: () => import('~/components/generic/GenericBlueBg.vue'),
    GenericVideoPanel: () => import('~/components/generic/GenericVideoPanel.vue'),
    Care: () => import('~/components/home/Care'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Stakes: () => import('~/components/commons/panels/Stakes'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  // async asyncData ({ error }) {
  //   const country = await getCountry() || {};
  //   const code = country.country_code || 'PH';
  //   const metricsData = await fetchWebsiteMetrics();

  //   if (!code || code !== 'PH') error({ statusCode: 404, message: 'Page unavailable in your country' });
  //   return { metricsData };
  // },
  async asyncData () {
    const metricsData = await fetchWebsiteMetrics();
    return { metricsData };
  },
  data () {
    this.stepsContent = [
      {
        title: 'Create your Free Account',
        description: 'You’ll have your own clinic management system ready for you',
      },
      {
        title: 'Customize your profile',
        description: 'You can utilize our range of modules and features',
      },
      {
        title: 'Start filing electronic medical records',
        description: 'Take advantage of our tutorials and training videos or book a virtual session with one of our specialists.',
      },
    ];
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.btnClasses = ['mc-btn1'];
    return {
      loading: true,
      mdiWeb,
      mdiCheckCircle,
      mdiClose,
      mdiChevronRight,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE for OFW Medical Clinics',
      description: 'Time to comply with the Universal Healthcare Act. MYCURE enables OFW Clinics to digitally create, finalize, and release medical exam results. Book a demo today.',
      socialBanner: require('~/assets/images/banners/ofw-clinic-og-banner.png'),
    });
  },
  computed: {
    queuePanel () {
      return {
        title: 'Improved Time Management',
        description: 'Handle group registrations with ease. Your clients can register themselves via our kiosks, and you can utilize auxiliary monitors to display multiple queues. And every provider can receive notifications on their smart devices of their incoming patients.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'clinics/ofw/',
          image: 'Queue.png',
          mobileImage: 'Queue.png',
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
        title: 'Ready whenever you are.',
        superTitle: 'POWERFUL INTEGRATIONS',
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
        title: 'Help Your Patients Find You',
        description: 'Join MYCURE ONE, a global directory of healthcare providers, so patients can easily find and book appointments',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'commons/',
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '387.19px' : '624.8px'),
        },
      };
    },
    stakesContent () {
      return {
        description: 'Not automating your system means more errors and losses which can impact a lot in your bottomline.',
        itemList: [
          'Wasted time and resources',
          'Long wait times',
          'Overworked staff',
          'Cancelled appointments',
          'Frustrated patients',
          'Error-prone reports',
          'Compliance issues',
        ],
        contentAlign: 'right',
        imageBindings: {
          image: 'mycure-ofw-the-stakes.png',
          mobileImage: 'mycure-ofw-the-stakes.png',
          imageAlt: 'Doctor with hourglass and downhill chart in monitor',
          customPath: 'clinics/ofw/',
          extensionExclusive: true,
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '184.14px' : (this.$isRegularScreen ? '293.58px' : '473.72px'),
        },
      };
    },
    fifthPanel () {
      return {
        title: 'Maintain Communication with Clinic Staff',
        description: 'MYCURE Clinics comes with its own chat feature, allowing everyone in your OFW clinic to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re with a patient, and you can communicate with other doctors at your practice quickly.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'doctors-clinics/',
          image: 'Practice.webp',
          imageAlt: 'Physicians and health workers',
          width: this.$isMobile ? '296px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '323.75px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
        },
      };
    },
    ofwVideo () {
      return {
        title: 'Design your own packages.',
        description: 'Easily create and customize pre-employment packages based on your client requirements.',
        video: 'https://www.youtube.com/embed/YjymFVmKX_U',
        itemList: [
          'Laboratory',
          'Imaging',
          'Ancillary',
          'Dental',
          'Physical Exam',
        ],
        imageBindings: {
          customPath: 'clinics/',
          image: 'video-preview',
          imageFileExtension: '.png',
          extensionExclusive: true,
          imageAlt: 'Woman in explaining MYCURE',
          width: this.$isMobile ? '300' : '560',
          height: this.$isMobile ? '168.75' : '315',
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
