<template lang="pug">
  v-container(v-if="!loading" fluid).white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        extension-exclusive
        background-image="clinics-landing-page"
        background-image-file-extension=".png"
        title="Simplified Workflows, Faster Results, Better Performance."
        meta-title="MYCURE CLINICS"
        description="Keep your outpatient clinic running smoothly all day long with the MYCURE Clinics app. We’ve designed a platform that benefits large and small operations."
        parse-title
        btn-text="Start Free Today"
        image="clinics-usp"
        :image-width="$isMobile ? '100%' : '90%'"
        custom-image-path="clinics/"
        :parse-title-fields="['Workflows, ', 'Results, ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="stakesContent"
          :title-classes="headerClasses"
          :content-classes="descriptionClasses"
          hide-btn
        )
          template(slot="content")
            v-col(cols="12")
              v-row(v-for="(item, key) in stakesContent.itemList" :key="key" align="center")
                v-icon(color="red" small) {{ mdiClose }}
                v-col.pa-0.mb-1
                  p.mc-list-b3.mb-0.ml-2 {{ item }}
    v-container.py-16
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel
            v-col(cols="12").text-center
              h2.mc-h2.mb-5 Stay in Control
              v-row(justify="center")
                v-col(cols="12" sm="10")
                  p.mc-b2 MYCURE Clinics is an end-to-end solution that eliminates the old challenges of processing paperwork manually. If you’re not using the technologies available today for electronic health records, you’re missing out on more than you might think. MYCURE Clinics’ information system was designed with the patient journey in mind, meaning you can book appointments, upload medical records, and accept payment all on one app. Reduce the time spent on manual recordkeeping and filing paperwork all thanks to MYCURE’s Clinic Management System (CMS).
                  signup-button(
                    depressed
                    color="primary"
                    event-label="signup"
                    class="rounded-lg"
                    :width="!$isWideScreen ? '228px' : '300'"
                    :height="!$isWideScreen ? '59px' : '73.68'"
                  ).text-none
                    span.generic-button-text Start for Free
    lazy-hydrate(when-visible)
      generic-blue-bg.white--text
        generic-video-panel(:content="doctorVideo")
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        workflow
    lazy-hydrate(when-visible)
      think-long-term
    lazy-hydrate(when-visible)
      mycure-csi
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="eighthPanel"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
    lazy-hydrate(when-visible)
      syncbase(:version="2" title="Online or Off, MYCURE Clinics Is Here for You")
    //- help your patients find you
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="ninthPanel"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
        div(slot="additional-content" :class="{'text-center': $isMobile}").mt-10
          //- signup-button(
          //-   depressed
          //-   color="primary"
          //-   event-label="signup"
          //-   class="rounded-lg"
          //-   :width="!$isWideScreen ? '228px' : '300'"
          //-   :height="!$isWideScreen ? '59px' : '73.68'"
          //- ).text-none
          //-   span.mc-btn1 Create my website
          nuxt-link(to="/signup/health-facilities?type=clinic" :class="{'d-flex': !$isMobile}").button
            span.mc-hyp1 Create my website
            v-icon(left color="primary" :small="!$isWideScreen" style="margin-top: 2px;") {{ mdiArrowRight }}
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        features(
          title="Customized for You"
          description="MYCURE has built-in workflows across a range of specialties."
          :items="features"
          :class="{ 'mt-10': $isMobile, 'mt-5': !$isMobile }"
          :icon-column-bindings="{ cols: '6', md: '3' }"
          icon-container-col-size="10"
          image-dir="clinics/"
          panel-height="70vh"
        )
    lazy-hydrate(when-visible)
      storybrand(
        title="Invaluable Clinic Management System at an Affordable Price"
        :content="storybrandContent"
      )
    lazy-hydrate(when-visible)
      scroller(title="The MYCURE Clinic Advantage" :items="carouselItems")
    lazy-hydrate(when-idle)
      care(:metrics-data="metricsData")
    client-only
      lazy-hydrate(when-idle)
        pricing(
          has-trial-option
          type="clinic"
          title="Take the first step"
          description="Choose the best plan for your clinic. Only pay for what you need."
        ).mb-n3
    lazy-hydrate(when-visible)
      steps(
        :steps="stepsContent"
        title="Get Started Today!"
        description="Joining MYCURE is simple"
        not-free
      )
    lazy-hydrate(when-visible)
      call-to-action(:version="1").mt-16
</template>

<script>
// - utils
import { mdiArrowRight, mdiClose } from '@mdi/js';
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
import { fetchWebsiteMetrics } from '~/utils/axios';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { CLINICS_PRICING } from '~/constants/pricing';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Features: () => import('~/components/commons/panels/Features'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    GenericBlueBg: () => import('~/components/generic/GenericBlueBg.vue'),
    GenericVideoPanel: () => import('~/components/generic/GenericVideoPanel.vue'),
    Workflow: () => import('~/components/outpatient-clinics/Workflow'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Care: () => import('~/components/home/Care'),
    Scroller: () => import('~/components/commons/panels/Scroller'),
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
        title: 'Multispecialty',
        icon: 'Multispecialty',
        iconExtension: '.webp',
      },
      {
        title: 'Skin & Aesthetics',
        icon: 'Skin',
        iconExtension: '.webp',
      },
      {
        title: 'Maternity Care',
        icon: 'maternity-care',
        iconExtension: '.webp',
      },
      {
        title: 'Pediatric Care',
        icon: 'Pedia',
        iconExtension: '.webp',
      },
      {
        title: 'Dentistry',
        icon: 'Dentistry',
        iconExtension: '.webp',
      },
      {
        title: 'Diagnostics',
        icon: 'Diagnostics',
        iconExtension: '.webp',
      },
      {
        title: 'Corporate',
        icon: 'Corporate',
        iconExtension: '.webp',
      },
    ];
    this.stepsContent = [
      {
        title: 'Create your Free Account',
        description: 'You’ll have your own clinic management system ready for you',
      },
      {
        title: 'Customize your Profile',
        description: 'You can utilize our range of modules and features',
      },
      {
        title: 'Get Started!',
        description: 'Take advantage of our tutorials and training videos or book a virtual session with one of our specialists.',
      },
    ];
    this.storybrandContent = [
      'MYCURE Clinic offers a variety of tools that you can mix and match to maximize efficiency for your clinic, without the costly overhead other platforms might require. Daily reports, digital records, and appointments can all be accessed in one app – instead of needing to keep track of multiple platforms on your office’s devices. You can even fill out prescriptions to submit to pharmacies.',
    ];
    this.pricingDetails = CLINICS_PRICING;
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    return {
      loading: true,
      mdiArrowRight,
      mdiClose,
    };
  },
  head () {
    return headMeta({
      title: 'Flexible Clinic Management System | MYCURE Software for Clinics',
      description: 'MYCURE Clinic is a software that helps hospitals, diagnostic centers to run their day-to-day operations. It manages patient records, appointments, & more',
      socialBanner: require('~/assets/images/banners/clinics-og-banner.png'),
    });
  },
  computed: {
    ninthPanel () {
      return {
        title: 'Help Your Patients Find You',
        description: 'Join MYCURE ONE, a global directory of healthcare providers, so patients can easily find and book appointments.',
        contentAlign: 'left',
        imageBindings: {
          customPath: 'commons/',
          image: 'expand-your-reach.webp',
          imageAlt: 'Man browsing a clinic website artwork',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '242.88px' : (this.$isRegularScreen ? '404.79px' : '624.8px'),
        },
      };
    },
    practicingSoloPanel () {
      return {
        title: 'Practicing solo?',
        imageBindings: {
          image: 'practicing-solo-ipad.webp',
          imageAlt: 'Woman video call in Ipad tablet',
          customPath: 'clinics/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '212.58px' : (this.$isRegularScreen ? '354.6px' : '547.15px'),
        },
        contentAlign: 'left',
      };
    },
    stakesContent () {
      return {
        title: 'Your clinic system should not cause you more problems',
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
    doctorVideo () {
      return {
        title: 'Experience MYCURE Clinics',
        description: 'MYCURE integrates outpatient clinic operations into a clean and simple interface, making it one of the easiest practice management systems to use.',
        video: 'https://www.youtube.com/embed/YjymFVmKX_U',
        imageBindings: {
          customPath: 'clinics/',
          image: 'video-preview',
          imageFileExtension: '.webp',
          imageAlt: 'Woman explaining MYCURE',
          width: this.$isMobile ? '300' : '560',
          height: this.$isMobile ? '168.75' : '315',
        },
      };
    },
    eighthPanel () {
      return {
        title: 'Maintain Communication with Clinic Staff',
        description: 'MYCURE Doctors comes with its own chat feature, allowing everyone in your clinic to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re with a patient, and you can quickly communicate with other doctors at your practice.',
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
    carouselItems () {
      return [
        {
          title: 'A Lifeline for Your Clinic',
          description: 'Keeping meticulous records is vital to providing quality medical care. But as your outpatient clinic grows, your file cabinets will grow and grow, and you and your office staff will run the risk of misplacing important paperwork. Instead, use MYCURE Clinics’ cloud-based system to digitize your patients’ records. You’ll be able to glance over electronic copies of complete health records – prior illnesses, vaccinations, and current medication – all in one place! ',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-1',
            imageFileExtension: '.webp',
            imageAlt: 'Man searching through records',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '305.02px' : this.$isRegularScreen ? '199.37px' : '182.9px',
          },
        },
        {
          title: 'Easy Appointment Booking for Your Patients',
          description: 'Make booking appointments easy for your patients with MYCURE Booking. We’re all living busy lives these days and having an app your patients can use to see your availability is one of the best ways to maximize efficiency. If your outpatient clinic has more than one healthcare provider, your patients will also see that they can make an appointment with another doctor if you’re already booked for the day.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-2',
            imageFileExtension: '.webp',
            imageAlt: 'Doctor looking at booking appointments',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '291.02px' : this.$isRegularScreen ? '190.22px' : '173.91px',
          },
        },
        {
          title: 'Reach New Patients With the MYCURE One Network',
          description: 'With your MYCURE One profile, you’ll have a clean and professional website on the MYCURE One network that allows potential patients to find an outpatient clinic in their area and schedule an appointment. From primary care providers to specialists, patients will find you and make an appointment with ease.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-3',
            imageFileExtension: '.webp',
            imageAlt: 'Patient looking at network',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '294.77' : this.$isRegularScreen ? '192.65px' : '176.14px',
          },
        },
        {
          title: 'We Offer a HIPAA-Compliant Telehealth Platform',
          description: 'Your patients’ privacy matters to us, which is why we’ve gone the extra mile to meet the standards of the United States’ Health Insurance Portability and Accountability Act (HIPAA). You can have peace of mind that MYCURE Telehealth is secure, so you can provide care through video chat on the same app.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-4',
            imageFileExtension: '.webp',
            imageAlt: 'seal of compliance',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '233.01px' : this.$isRegularScreen ? '152.3px' : '139.24px',
          },
        },
        {
          title: 'Gain New Insights Into Your Clinic’s Strengths and Weaknesses',
          description: 'In the day to day of running an outpatient clinic, you might not notice some details that are slipping away until they’ve turned into a major issue. Thanks to the daily reports tool on MYCURE, you’ll be able to identify problems before they result in inconveniences for your patients and staff.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-5',
            imageFileExtension: '.webp',
            imageAlt: 'Doctor Gaining Insight',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '268.41px' : this.$isRegularScreen ? '175.43px' : '160.4px',
          },
        },
      ];
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

.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.blue-bg {
  background-color: #0099cc;
}
.button {
  text-decoration: none;
}
</style>
