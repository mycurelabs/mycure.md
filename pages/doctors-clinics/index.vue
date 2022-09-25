<template lang="pug">
  v-container(v-if="!loading" fluid).white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        extension-exclusive
        background-image="Doctor-Landing-Page"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="Save Your Practice from Clutter & Inefficiency"
        meta-title="MYCURE DOCTORS"
        :description="uspDescription"
        parse-title
        btn-text="Start For Free"
        image="Doc-USP"
        :image-width="$isMobile ? '100%' : '90%'"
        custom-image-path="doctors-clinics/"
        :parse-title-fields="['Practice ', 'Clutter ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      ).mb-16
    div.grey-bg
      v-container.py-16
        v-row(justify="center")
          lazy-hydrate(when-visible)
            generic-panel
              v-col(cols="12")
                v-row(justify="center")
                  v-col(cols="12" sm="8" :class="{'text-center': !$isMobile}")
                    h2.mc-h2.mb-5 Being Disorganized Doesn’t Just Cost You Time, It Costs You Money
                    v-row(justify="center")
                      v-col(cols="12" md="10")
                        p.mc-b2 As a doctor, you don’t want your ability to provide care for your patients be affected by any behind the scenes inefficiencies. Frustrated providers and patients can leave your staff dealing with any mess left behind. MYCURE Doctors has a solution for that.
    lazy-hydrate(when-visible)
      generic-blue-bg.white--text.mb-16
        generic-media-panel(
          :content="secondPanelContents"
          :title-classes="headerClasses"
          :content-classes="secondPanelContents.descriptionClasses"
          hide-btn
        )
          template(slot="additional-content")
            div(:class="{'text-center': $isMobile}")
              signup-button(
                depressed
                class="rounded-md"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
                color="success"
              ).text-none
                span.mc-btn1.white--text Get Started Free
    template(v-for="content in contents")
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="content"
          :title-classes="headerClasses"
          :content-classes="descriptionClasses"
          hide-btn
        )
    lazy-hydrate(when-visible)
      mycure-csi(page="Doctors")
    lazy-hydrate(when-visible)
      features(
        title="Healthcare Providers Trust MYCURE Doctors"
        :title-col-size="11"
        :content-col-size="9"
        :description="featuresDescription"
        :items="features"
        image-dir="doctors-clinics/"
      ).my-16
    div
      lazy-hydrate(when-visible)
        generic-media-panel(
          :content="fullFeaturePanel"
          hide-btn
        )
          template(slot="additional-content")
            div(:class="{'text-center': $isMobile}")
              get-email-button
    lazy-hydrate(when-visible)
      scroller(title="Benefits of Using MYCURE in Your Practice" :items="carouselItems")
    lazy-hydrate(when-visible)
      generic-blue-bg.white--text
        generic-video-panel(:content="doctorVideo" hide-btn)
    client-only
      lazy-hydrate(when-idle)
        pricing(
          center-items
          type="doctor"
          title="Enjoy Our Pay as You Grow Pricing"
          description="Choose the best plan for your clinic. Only pay for what you need."
          :column-bindings="{ cols: '12', md: '4', xl: '3'}"
        )
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" title="Start Your MYCURE Journey Today for Free")
    lazy-hydrate(when-visible)
      testimonials(title="See What Healthcare Providers Like You Have to Say About MYCURE Doctors")
    lazy-hydrate(when-visible)
      call-to-action(:fluid="!$isMobile")
</template>

<script>
// utils
import LazyHydrate from 'vue-lazy-hydration';
import { mdiArrowRight, mdiCheckboxMarkedCircle } from '@mdi/js';
import headMeta from '~/utils/head-meta';
// constants
import { DOCTORS_PRICING } from '~/constants/pricing';
// components
import Usp from '~/components/commons/panels/SevenWondersUsp';
import GetEmailButton from '~/components/commons/get-email-button';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericPanel: () => import('~/components/generic/GenericPanel'),
    MycureCsi: () => import('~/components/commons/panels/MycureCsi'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    ThinkLongTerm: () => import('~/components/commons/panels/ThinkLongTerm'),
    Usp,
    GetEmailButton,
    GenericBlueBg: () => import('~/components/generic/GenericBlueBg.vue'),
    GenericVideoPanel: () => import('~/components/generic/GenericVideoPanel.vue'),
    SignupButton: () => import('~/components/commons/SignupButton'),
    Steps: () => import('~/components/commons/panels/Steps'),
    Testimonials: () => import('~/components/doctors-clinics/Testimonials'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
    Scroller: () => import('~/components/commons/panels/Scroller'),
  },
  data () {
    // Panel content
    this.uspDescription = 'A modern health information system for modern doctors, MYCURE Doctors is designed to help you keep your practice operating smoothly.';
    this.featuresDescription = 'MYCURE Doctors is the latest generation in electronic medical records and patient records management. Its intuitive interface makes it easy to use for everyone on your team– from the providers to the administrative staff. Your team will be able to pull up your patients’ medical records in a snap without wading through mountains of paperwork.';
    this.features = [
      {
        title: 'Digital Records',
        icon: 'Digital-Records',
        iconExtension: '.webp',
      },
      {
        title: 'Telehealth',
        icon: 'Telehealth',
        iconExtension: '.webp',
      },
      {
        title: 'Daily Reports',
        icon: 'Daily-Reports',
        iconExtension: '.webp',
      },
      {
        title: 'Professional Website',
        icon: 'Professional-Website',
        iconExtension: '.webp',
      },
      {
        title: 'Appointment Booking',
        icon: 'Appointment-Booking',
        iconExtension: '.webp',
      },
    ];
    this.csiItems = [
      {
        title: 'Compliance',
        icon: 'Compliance',
        iconExtension: '.webp',
        route: 'csi',
      },
      {
        title: 'Security',
        icon: 'Security',
        iconExtension: '.webp',
        route: 'csi',
      },
      {
        title: 'Interoperability',
        icon: 'Interoperability',
        iconExtension: '.webp',
        route: 'csi',
      },
    ];
    this.stepsContent = [
      {
        title: 'Create your Free MYCURE Account',
        description: 'MYCURE is easy to sign up and easy to set up.',
      },
      {
        title: 'Complete your Professional Profile',
        description: 'Introduce yourself to your patients in a modern way.',
      },
      {
        title: 'Start Filing Electronic Medical Records',
        description: 'Make every day work more convenient.',
      },
    ];
    this.storybrandContent = [
      'At MYCURE, we know you are the kind of doctor who wants to be efficient, organized and prefers to use modern tools. In order to be that way, you need a solution that will make it easier for you to securely organize and secure patients’ records while allowing them to conveniently book an appointment with you.',
      'The problem is it’s hard to find such a system that is easy to use, affordable and customized to your practice, which makes you feel frustrated.  We believe that health providers should never have to deal with this. We’ve talked to hundreds of doctors and understand that there is a need for this. ',
      'That’s why we’ve been continuously building MYCURE EMR Practice Management System designed for modern doctors like you so you can focus on what you do best - taking care of your patients, while MYCURE takes care of the rest.',
    ];
    this.pricingDetails = DOCTORS_PRICING;
    this.headerClasses = ['mc-h2', 'lh-title'];
    this.descriptionClasses = ['mc-b2'];
    this.eightPanelContentClasses = ['mc-list-b3'];
    this.listHeaderClasses = ['mc-h3', 'lh-title'];
    this.listContentClasses = ['mc-list-b3'];
    return {
      loading: true,
      // icons
      mdiArrowRight,
      mdiCheckboxMarkedCircle,
    };
  },
  head () {
    return headMeta({
      title: 'EMR Practice Management System for Doctors - Start Free | MYCURE',
      description: 'Find how a digital practice management system helps you focus on your patients. MYCURE helps digitize everything from prescriptions to medical records. Sign Up.',
      socialBanner: require('~/assets/images/banners/doc-og-banner.png'),
    });
  },
  computed: {
    secondPanelContents () {
      return {
        title: 'MYCURE Doctors is No Ordinary EMR App',
        description: 'It’s a platform built for the specialized ecosystem of healthcare. Connect and securely share files with other healthcare providers, labs, hospitals, and pharmacies within the MYCURE One network. ',
        contentAlign: 'left',
        descriptionClasses: ['mc-b2', 'white--text'],
        imageBindings: {
          customPath: 'features/',
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-features-C-telehealth.webp',
          imageAlt: 'Woman in a video call using MYCURE telehealth',
          width: this.$isMobile ? '289.8px' : (this.$isRegularScreen ? '462px' : '745.5px'),
          height: this.$isMobile ? '192.906px' : (this.$isRegularScreen ? '295.7955px' : '477.3195px'),
        },
      };
    },
    contents () {
      return [
        {
          title: 'Lightning-fast prescriptions',
          description: 'Create, store, and print prescriptions and other medical forms in 10 seconds or less. You and your patients get secure digital copies of records where you can access anytime, anywhere they’re needed.',
          contentAlign: 'left',
          imageBindings: {
            customPath: 'doctors-clinics/',
            image: 'Lightning-fast.webp',
            mobileImage: 'Lightning-fast-mobile.png',
            imageAlt: 'Print preview of health prescription receipt',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '210.45px' : (this.$isRegularScreen ? '324.5px' : '523.62px'),
          },
        },
        {
          title: 'Advanced Tools for a Growing Practice',
          description: 'MYCURE Doctors is designed to make managing your practice so much easier. Experience what it’s like to a full featured CMS for FREE, and you’ll only need to upgrade as your practice grows. We are here to help you make the world a healthier place.',
          contentAlign: 'right',
          imageBindings: {
            customPath: 'doctors-clinics/',
            image: 'Going-digital.webp',
            mobileImage: 'Going-digital-mobile.png',
            imageAlt: 'Growth chart showing an increasing trend',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '440px' : '710px'),
            height: this.$isMobile ? '210.45px' : (this.$isRegularScreen ? '324.5px' : '523.62px'),
          },
        },
        {
          title: 'Maintain Communication with Clinic Staff',
          description: 'MYCURE Doctors comes with its own chat feature, allowing everyone in your clinic to stay in touch on busy days. Office staff can ask questions about billing without having to interrupt while you’re with a patient, and you can quickly communicate with other doctors at your practice.',
          contentAlign: 'left',
          imageBindings: {
            customPath: 'doctors-clinics/',
            image: 'Practice.webp',
            imageAlt: 'Physicians and health workers',
            width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
            height: this.$isMobile ? '301.88px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
          },
        },
      ];
    },
    doctorVideo () {
      return {
        title: 'Experience the MYCURE Difference',
        description: 'See for yourself how MYCURE has brought together all the best features of other electronic health records platforms into one powerful, cloud-based app.',
        video: 'https://www.youtube.com/embed/r7oewF5qDz4',
        imageBindings: {
          customPath: 'doctors-clinics/',
          image: 'Doctor-Video-Preview',
          imageFileExtension: '.webp',
          imageAlt: 'Video of woman explaining MYCURE',
          width: this.$isMobile ? '300' : '560',
          height: this.$isMobile ? '168.75' : '315',
        },
      };
    },
    fullFeaturePanel () {
      return {
        title: 'A Full Featured Practice Management System At an Affordable Price',
        description: 'MYCURE Doctors offers a variety of tools that you can mix and match to optimize efficiency for your practice, without the costly fees other platforms might charge. Daily reports, digital records, and appointments can all be accessed in one app – instead of having to go through multiple apps on your office’s devices. You can even fill out prescriptions to submit to pharmacies from the app.',
        contentAlign: 'right',
        imageBindings: {
          customPath: 'home/',
          image: 'simple-and-powerful',
          imageFileExtension: '.webp',
          imageAlt: 'Health application in Macbook laptop',
          width: this.$vuetify.breakpoint.width > 1919 ? '750px' : (this.$isRegularScreen ? '485px' : '250px'),
          height: this.$vuetify.breakpoint.width > 1919 ? '414.68px' : (this.$isRegularScreen ? '268.18px' : '138.23px'),
        },
      };
    },
    carouselItems () {
      return [
        {
          title: 'Get Access to Your Patient’s Records in a Flash',
          description: 'Don’t waste time searching through musty filing cabinets just to find your patient’s medical history and lab results. Be as detailed as you need to be able to provide quality medical care for your patients. MYCURE is digital, so you don’t need to worry about having enough floor space to store all your patient records. Instead, use MYCURE Doctors to start switching to electronic medical records. You’ll be able to glance over electronic copies of complete health records – prior illnesses, vaccinations, and current medication – all in one place!',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-1',
            imageFileExtension: '.webp',
            imageAlt: 'Man searching through records',
          },
        },
        {
          title: 'Accessible Appointment Booking for Your Patients',
          description: 'Make booking appointments easy for your patients with MYCURE Booking. We’re all living busy lives these days and having an app your patients can use to see your availability is one of the best ways to maximize efficiency. If your clinic has more than one healthcare provider, your patients will also see that they can make an appointment with another doctor if you’re already booked for the day.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-2',
            imageFileExtension: '.webp',
            imageAlt: 'Doctor looking at booking appointments',
          },
        },
        {
          title: 'Reach New Patients with the MYCURE One Network',
          description: 'With your MYCURE One profile, you’ll have a clean and professional website on the MYCURE One network that allows potential patients to find a healthcare provider in their area and schedule an appointment. From primary care providers to specialists, patients will be able to find you and make an appointment with ease.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-3',
            imageFileExtension: '.webp',
            imageAlt: 'Patient looking at network',
          },
        },
        {
          title: 'We Offer a HIPAA-compliant Telehealth Platform',
          description: 'Your patients’ privacy matters to us, which is why we’ve gone the extra mile to meet the standards of the United States’ Health Insurance Portability and Accountability Act (HIPAA). You can have peace of mind that when you provide care through MYCURE Telehealth your patient’s information is safe and secure.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-4',
            imageFileExtension: '.webp',
            imageAlt: 'seal of compliance',
          },
        },
        {
          title: 'Gain New Insights into Your Practice’s Strengths and Weaknesses',
          description: 'In the day to day of running a clinic or medical practice, you might not notice details that are slipping away until they’ve turned into a major issue. Thanks to the daily reports tool on MYCURE Doctors, you’ll be able to identify problems before they result in inconveniences for your patients and staff, making it a competitive practice management system.',
          imageBindings: {
            customPath: 'commons/',
            image: 'carousel-5',
            imageFileExtension: '.webp',
            imageAlt: 'Doctor Gaining Insight',
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
  background-color: #F9FEFF;
}
.blue-bg {
  background-color: #0099cc;
}
.divider {
  margin-right: 40% !important;
  margin-left: 40% !important;
}
.button {
  text-decoration: none;
}
</style>
