<template lang="pug">
  div.white.page-container
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
    div.grey-bg.mx-n3
      lazy-hydrate(when-visible)
        stakes(
          :version="3"
          :media-content="stakesContent"
          hide-btn
        )
    v-container.py-16
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel
            v-col(cols="12").text-center
              v-row(justify="center")
                v-col(cols="12" sm="7").py-0
                  h2.mc-h2.mb-5 Introducing MYCURE Beauty – No Ordinary EMR App
              v-row(justify="center")
                v-col(cols="12" sm="9")
                  p.mc-b2 It’s a clinic management system built for the unique ecosystem of healthcare. Connect and securely share files with other providers within the MYCURE One network.
    lazy-hydrate(when-visible)
      generic-blue-bg
        features(
          title="Modern Tools to Boost Your Skin Clinic"
          description="We’re here to make managing your clinic so much easier. We offer full functionality for our free clinic information system accounts, and you only need to upgrade as your practice grows. Instead of being overwhelmed by managing your practice, you can focus on what’s important to you: your clients."
          image-dir="clinics/skin/"
          title-col-size="10"
          extension-exclusive
          primary-title
          :items="features"
          has-blue-bg
        )
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="fifthPanel"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
        hide-btn
      ).mt-16
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="sixthPanel"
        :title-classes="headerClasses"
        :content-classes="descriptionClasses"
        hide-btn
      )
    lazy-hydrate(when-visible)
      storybrand(
        title="Providers Trust MYCURE Beauty"
        :content="storybrandContent"
      )
    lazy-hydrate(when-visible)
      scroller(title="placeholder" :items="carouselItems")
    lazy-hydrate(when-visible)
      mycure-csi
    lazy-hydrate(when-visible)
      storybrand(
        title="Invaluable Clinic Management at an Affordable Price"
        :content="storybrandTwoContent"
      )
    client-only
      lazy-hydrate(when-idle)
        pricing(
          type="clinic"
          title="It's Time to Take the First Step"
          :pricing-details="pricingDetails"
        )
    lazy-hydrate(when-visible)
      storybrand(
        title="Modern Tools for Your Office"
        :content="storybrandThreeContent"
      )
    lazy-hydrate(when-visible)
      call-to-action(:version="1")
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" not-free)
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
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
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
    Scroller: () => import('~/components/commons/panels/Scroller'),
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
        title: 'Create your Free Account',
        description: 'This activates your Skin Management System.',
      },
      {
        title: 'Set up your Profile',
        description: 'Customize your profile based on your clinic’s needs.',
      },
      {
        title: 'Start reaching new clients now',
        description: 'Share your beautiful, free website so your patients can start booking.',
      },
    ];
    this.storybrandContent = [
      'MYCURE Beauty is the latest in practice managements systems for aesthetic clinics. Its intuitive interface makes is easy to use for everyone on staff – from the providers to the administrative team. Your team will be able to pull up your patients’ records in a snap without wading through mountains of paperwork.',
    ];
    this.storybrandTwoContent = [
      'MYCURE Beauty offers a variety of tools that you can mix and match to optimize efficiency for your practice, without the costly overhead other platforms might require. Daily reports, digital records, and appointments can all be accessed in one app – instead of needing to keep track of multiple platforms on your office’s devices. You can even fill out prescriptions to submit to pharmacies.',
    ];
    this.storybrandThreeContent = [
      'At MYCURE, we know your clients’ experience is of the utmost importance to you. Top quality care is non-negotiable, and you need a clinic management system solution that’s built around those same principles. But in your search for the right solution for you, you’ve probably seen too many that are focused on the product, not the experience you and your clients have with it. MYCURE is here to change the game.',
    ];
    this.pricingDetails = CLINICS_PRICING;
    this.headerClasses = ['mc-h2'];
    this.subHeaderClasses = ['mc-b2'];
    this.descriptionClasses = ['mc-b2'];
    this.btnClasses = ['mc-btn1'];
    this.listHeaderClasses = ['mc-b3'];
    this.listContentClasses = ['mc-list-b3'];
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
    fifthPanel () {
      return {
        title: 'Maintain Communication with Clinic Staff',
        description: 'MYCURE Doctors comes with its own chat feature, allowing everyone in your clinic to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re with a patient, and you can quickly communicate with other doctors at your practice.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'doctors-clinics/',
          image: 'Practice.webp',
          imageAlt: 'Physicians and health workers',
          width: this.$isMobile ? '296px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '323.75px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
        },
      };
    },
    sixthPanel () {
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
        title: 'Wasted Time + Missed Opportunities = Income Lost',
        description: 'At your dermatology or aesthetic clinic, your ability to keep your office organized affects the level of care you can provide your clients. Disorganization behind the scenes can result in frustrated clinicians, frustrated patients, and a mess to deal with for the office staff. But instead of continuing to suffer, there’s hope.',
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
    carouselItems () {
      return [
        {
          title: 'Easy to Access Electronic Records',
          description: 'Keeping meticulous records is vital to providing quality derma clinic care. But as your practice thrives, your file cabinets will grow and grow, and you and your office staff will run the risk of misplacing important paperwork. Instead, use MYCURE Beauty’s clinic information system to digitize your patients’ records. You’ll be able to glance over electronic copies of complete health records – prior illnesses, vaccinations, and current medications – all in one place!',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-1.png',
            extensionExclusive: true,
            imageAlt: 'Man searching through records',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '305.02px' : this.$isRegularScreen ? '199.37px' : '182.9px',
          },
        },
        {
          title: 'Book Appointments With Ease',
          description: 'Make booking appointments easy with MYCURE Booking. We’re all living busy lives these days and having an app your clients can use is one of the best ways to maximize convenience. If your practice has more than one dermatologist, your clients will also see that they can make an appointment with another provider if you’re already booked for the day.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-2.png',
            extensionExclusive: true,
            imageAlt: 'Doctor looking at booking appointments',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '291.02px' : this.$isRegularScreen ? '190.22px' : '173.91px',
          },
        },
        {
          title: 'Reach New Clients on the MYCURE One Network',
          description: 'With your MYCURE profile, you’ll have a clean and professional website on the MYCURE One network that allows potential clients to find a provider in their area and schedule an appointment.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-3.png',
            extensionExclusive: true,
            imageAlt: 'Patient looking at network',
            width: this.$isWideScreen ? '401.64px' : this.$isRegularScreen ? '262.5px' : '240px',
            height: this.$isWideScreen ? '294.77' : this.$isRegularScreen ? '192.65px' : '176.14px',
          },
        },
        {
          title: 'Gain Insight Into Your Practice’s Strengths and Weaknesses',
          description: 'In the day to day of running an aesthetics or skin clinic, you’ve probably discovered that details that slip away often turn into major issues. Thanks to the daily reports tool on MYCURE Beauty, you’ll be able to identify problems before they result in stress for your clients and staff.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-5.png',
            extensionExclusive: true,
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
</style>
