<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background-image="Telehealth Landing Page"
      :background-image-file-extension="$useWebp? '.webp' : '.png'"
      title="Everything you need to build your virtual practice"
      meta-title="MYCURE Telehealth"
      description="Starting a virtual practice has never been easier. Give your patients the quality care they deserve."
      btn-text="Get Started Free"
      image="Telehealth Mobile USP"
      image-width="90%"
      image-align="right"
      custom-image-path="telehealth/"
      parse-title
      parse-meta-title
      :parse-title-fields="['you ', 'your ']"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'doctor-telehealth' }})"
    )
      //- remove when telehealth is available
      template(slot="cta-button")
        mc-btn(
          depressed
          class="rounded-pill"
          :width="!$isWideScreen ? '228px' : '300'"
          :height="!$isWideScreen ? '59px' : '73.68'"
          color="success"
          @click="btnClicked = true"
        ).text-none
          span.generic-button-text Get Started Free
    //- 2nd panel
    virtual-clinic
    //- 3rd panel
    telehealth-video
      //- remove when telehealth is available
      template(slot="cta-button")
        br
        mc-btn(
          depressed
          class="rounded-pill"
          :width="!$isWideScreen ? '228px' : '300'"
          :height="!$isWideScreen ? '59px' : '73.68'"
          color="primary"
          @click="btnClicked = true"
        ).text-none
          span.generic-button-text Get Started Free
    //- 4th panel
    generic-media-panel(
      :content="fourthPanel"
      hide-btn
    )
    v-divider(v-if="$isMobile").divider
    //-5th panel
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
    storybrand(
      title="Using Modern Tools to Boost Your Practice"
      :content="storybrandContent"
    )
    //- 6th panel
    //- pricing(
    //-   title="Start free and only pay as you grow."
    //-   type="doctor"
    //-   :column-bindings="{ cols: '12', md: '3', xl: '3'}"
    //- )
    //- 7th panel
    call-to-action
      //- remove when telehealth is available
      template(slot="cta-button")
        v-col
          v-row(:justify="$isMobile ? 'center' : 'start'")
            v-col(:align="$isMobile ? 'center' : 'start'")
              mc-btn(
                depressed
                class="rounded-pill"
                :width="!$isWideScreen ? '228px' : '300'"
                :height="!$isWideScreen ? '59px' : '73.68'"
                color="success"
                @click="btnClicked = true"
              ).text-none
                span.generic-button-text Get Started Free
    v-dialog(v-model="btnClicked" width="unset")
      script(type='text/javascript'
        src='https://app.getresponse.com/view_webform_v2.js?u=MQETv&webforms_id=hUJKB'
        data-webform-id='hUJKB'
      )
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Usp from '~/components/commons/panels/SevenWondersUsp';
// - constants
import { DOCTORS_PRICING } from '~/constants/pricing';

export default {
  components: {
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Features: () => import('~/components/commons/panels/Features'),
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Pricing: () => import('~/components/commons/panels/Pricing'),
    TelehealthVideo: () => import('~/components/telehealth/TelehealthVideo'),
    Usp,
    VirtualClinic: () => import('~/components/telehealth/VirtualClinic'),
    Storybrand: () => import('~/components/commons/panels/Storybrand'),
  },
  data () {
    this.pricingDetails = DOCTORS_PRICING;
    this.storybrandContent = [
      'At MYCURE, we know the many challenges in choosing the right healthcare management solution. Some are good but costly. Some are affordable but lack the needed features and reports. Many are poorly designed and difficult to use. Very few work both online and offline. A lot has closed systems and lacks interoperability.',
      'In order to make an easy decision, you need a solution that has all the benefits and functionalities required without compromising ease of use and affordability. The problem is in finding such a system which makes you feel frustrated. We believe that health providers should never have to deal with this.',
      'That’s why we’ve built MYCURE Healthcare Management Solutions, designed to be robust, easy to use, interoperable and affordable.',
    ];
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
      btnClicked: false,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE Telehealth',
      description: 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve wherever they are.',
      socialBanner: require('~/assets/images/banners/OG Telehealth.png'),
    });
  },
  computed: {
    fourthPanel () {
      return {
        title: 'Safekeep your important medical data',
        description: 'Your patient\'s medical records are both accessible and secure in our system that complies with international data privacy standards. We make it our business to make sure your electronic health records are kept safe so you can focus on what you do best-taking care of your patients.',
        imageBindings: {
          image: 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-B-secure-data.webp',
          imageAlt: 'Securing of medical records',
          customPath: 'telehealth/',
          width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '440px' : '710px'),
          height: this.$isMobile ? '197.52px' : (this.$isRegularScreen ? '339.47px' : '547.78px'),
        },
        contentAlign: 'right',
      };
    },
    fifthPanel () {
      return {
        title: 'Works for group practice',
        description: 'Easily coordinate with other physicians in your group practice and centralize your medical records in one comprehensive workspace.',
        list: [
          'Conference Calls',
          'Collated Medical Records',
          'Optimized Patient Queuing',
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
        contentAlign: 'left',
      };
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.divider {
  margin-right: 30% !important;
  margin-left: 30% !important;
}
</style>
