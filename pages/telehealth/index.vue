<template lang="pug">
  v-container(v-if="!loading" fluid).white.page-container
    //- 1st panel
    lazy-hydrate(when-idle)
      usp(
        has-custom-background
        background-image="Telehealth-Landing-Page"
        :background-image-file-extension="$useWebp? '.webp' : '.png'"
        title="Everything You Need to Build Your Telemedicine Practice"
        meta-title="MYCURE TELEHEALTH"
        description="Give your patients the quality telehealth care they deserve, without having to visit in-person."
        btn-text="Get Started Free"
        image="Telehealth-Mobile-USP"
        image-width="90%"
        image-align="right"
        custom-image-path="telehealth/"
        parse-title
        parse-meta-title
        :parse-title-fields="['to ', 'Your ']"
        :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
        :content-column-bindings="{ cols: 12, md: 5 }"
      )
        //- GET RESPONSE
        template(slot="cta-button")
          mc-btn(
            depressed
            class="rounded-md"
            :width="!$isWideScreen ? '228px' : '300'"
            :height="!$isWideScreen ? '59px' : '73.68'"
            color="primary"
            @click="getResponseDialog = true"
          ).text-none
            span.mc-btn1 Get Started Free
    v-container.py-16.px-0.grey-bg
      v-row(justify="center")
        lazy-hydrate(when-visible)
          generic-panel
            v-col(cols="12" :class="{'text-center': !$isMobile}")
              h2.mc-h2.mb-5 Disorganization Doesn’t Just Cost You Time, It Costs Money
              v-row(justify="center")
                v-col(cols="12")
                  p.mc-b2 As a healthcare provider, your ability to keep your virtual practice organized affects the level of care you can provide your patients. Inefficiency with telemedicine and online appointment booking behind the scenes can result in frustrated providers, frustrated patients, and a mess to deal with afterwards. But instead of continuing to suffer, there’s hope.
    lazy-hydrate(when-visible)
      virtual-clinic
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="fourthPanel"
        hide-btn
      )
    lazy-hydrate(when-visible)
      generic-media-panel(
        :content="fifthPanel"
        hide-btn
        :title-classes="listHeaderClasses"
        :content-classes="listContentClasses"
      )
        //- Check list
        template(slot="additional-content")
          template(v-for="(item, i) in fifthPanel.list")
            v-row(dense align="center").my-2
              img(
                src="~/assets/images/mycure-check.png"
                alt="Check icon"
                :width="$isWideScreen ? '30' : '20'"
                :height="$isWideScreen ? '30' : '20'"
              )
              span(:class="[...descriptionClasses, ($isMobile ? 'ml-2' : ($isRegularScreen ? 'ml-3' : 'ml-4'))]") {{ item }}
    lazy-hydrate(when-visible)
      generic-video-panel(:content="telehealthVideo" not-white)
    client-only
      lazy-hydrate(when-idle)
        pricing(
          title="Enjoy Our Pay as You Grow Pricing"
          description="Choose the best plan for your mobile lab. Only pay for what you need."
          type="doctor"
          :column-bindings="{ cols: '12', md: '3', xl: '3'}"
        )
    lazy-hydrate(when-visible)
      steps(:steps="stepsContent" title="Start Your MYCURE Telehealth Journey Today for Free")
    lazy-hydrate(when-visible)
      storybrand(
        title="Let Us Do the Work for You"
        :content="['Worrying about the shift to digital records? We’ve got you covered. We know it’s daunting to move your entire operations to a new system. Our lean implementation process ensures you get what you need: customized forms, optimized workflows, and well-trained staff. Our experts are here to guide you every step of the way.']"
      )
    lazy-hydrate(when-visible)
      call-to-action(:fluid="!$isMobile")

    //- GET RESPONSE DIALOG
    v-dialog(v-model="getResponseDialog" width="unset")
      script(type='text/javascript'
        src='https://app.getresponse.com/view_webform_v2.js?u=MQETv&webforms_id=hUJKB'
        data-webform-id='hUJKB'
      )
</template>

<script>
// - utils
import LazyHydrate from 'vue-lazy-hydration';
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { DOCTORS_PRICING } from '~/constants/pricing';

export default {
  components: {
    LazyHydrate,
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    GenericVideoPanel: () => import('~/components/generic/GenericVideoPanel.vue'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    TelehealthVideo: () => import('~/components/telehealth/TelehealthVideo'),
    Usp,
    Steps: () => import('~/components/commons/panels/Steps'),
    VirtualClinic: () => import('~/components/telehealth/VirtualClinic'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  data () {
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
    this.pricingDetails = DOCTORS_PRICING;
    this.storybrandContent = [
      'At MYCURE, we know the many challenges in choosing the right healthcare management solution. Some are good but costly. Some are affordable but lack the needed features and reports. Many are poorly designed and difficult to use. Very few work both online and offline. A lot has closed systems and lacks interoperability.',
      'In order to make an easy decision, you need a solution that has all the benefits and functionalities required without compromising ease of use and affordability. The problem is in finding such a system which makes you feel frustrated. We believe that health providers should never have to deal with this.',
      'That’s why we’ve built MYCURE Healthcare Management Solutions, designed to be robust, easy to use, interoperable and affordable.',
    ];
    this.headerClasses = ['mc-h2'];
    this.descriptionClasses = ['mc-b2'];
    this.listHeaderClasses = ['mc-h2'];
    this.listContentClasses = ['mc-list-b3'];
    return {
      loading: true,
      getResponseDialog: false,
    };
  },
  head () {
    return headMeta({
      title: 'Start Your Virtual Practice | MYCURE Telehealth',
      description: 'MYCURE\'s telehealth platform allows patients to connect with doctors online. Build your virtual practice & grow your revenue. Learn more about it on our website',
      socialBanner: require('~/assets/images/banners/telehealth-og-banner.png'),
    });
  },
  computed: {
    fourthPanel () {
      return {
        title: 'Safekeep Important Medical Information',
        description: 'Your patients\' medical records are securely stored and easy to retrieve in our system. We’ve taken the extra step of complying with international data privacy regulations to make sure your records on your online practice management system are kept safe.',
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.webp',
          imageAlt: 'Securing of medical records',
          customPath: 'telehealth/',
          width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '197.52px' : (this.$isRegularScreen ? '339.47px' : '547.78px'),
        },
        contentAlign: 'left',
      };
    },
    fifthPanel () {
      return {
        title: 'Works for group practice',
        description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
        list: [
          'Conference Calls',
          'Tabulated Cumulative Results',
          'Quick Appointment Booking',
          'Booking Website',
        ],
        imageBindings: {
          image: 'Practice.png',
          imageAlt: 'Physicians and medical workers',
          customPath: 'doctors-clinics/',
          extensionExclusive: true,
          width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '280px' : (this.$isRegularScreen ? '503.13px' : '776.56px'),
        },
        contentAlign: 'right',
      };
    },
    telehealthVideo () {
      return {
        title: 'Healthcare Providers Trust MYCURE',
        description: 'MYCURE Telehealth is the latest generation in online practice management systems. Its intuitive interface makes is easy to use for everyone on staff – from the providers to the administrative team. Your team will be able to pull up your telemedicine patients’ medical records in a snap without wading through mountains of paperwork. ',
        video: 'https://www.youtube.com/embed/9gxJX_eokC0',
        imageBindings: {
          customPath: 'telehealth/',
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
.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
.grey-bg {
  background-color: #F9FEFF;
}
</style>
