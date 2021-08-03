<template lang="pug">
  v-container(v-if="!loading" fluid).white
    //- 1st panel
    usp(
      has-custom-background
      background="primary"
      title="Build lasting connections with your patients"
      meta-title="MYCURE Patient Relationship Management"
      btn-text="Book a Demo"
      background-image="cookie"
      background-image-file-extension=".png"
      image="cookie"
      extension-exclusive
      image-width="90%"
      image-align="right"
      custom-image-path="prm/"
      :media-column-bindings="{ cols: 12, md: 6, offsetMd: 1, xl: 6}"
      :content-column-bindings="{ cols: 12, md: 5 }"
      @click="$nuxt.$router.push({ name: 'signup-health-facilities', query: { type: 'doctor-telehealth' }})"
    )
    //- 2nd panel
    features(
      primary-title
      title="Let them know you are there"
      description="Reinforce continuity of care in an effective and timely way using this medical CRM"
      :items="features"
      image-dir="prm/"
    )
    //- 3rd panel
    generic-media-panel(
      :content="thirdPanel"
      :title-classes="['primary--text', ...headerClasses]"
      hide-btn
      dummy
    )
    //- 4th panel
    div.info.mx-n3
      v-container
        v-row(justify="center")
          generic-panel(:row-bindings="{ justify: 'center' }")
            v-col(cols="12").white--text.text-center
              h2(:class="['white--text', ...headerClasses]").mb-5 Don't have an EMR yet?
              signup-button(
                depressed
                rounded
                :x-large="$isWideScreen"
                :large="!$isWideScreen"
                :class="btnClasses"
                color="success"
              ).text-none
                span Get Started Free
    //-5th panel
    generic-media-panel(
      :content="fifthPanel"
      hide-btn
      :title-classes="listHeaderClasses"
      :content-classes="listContentClasses"
      dummy
    )
      //- Check list
      template(slot="additional-content")
        template(v-for="(item, i) in fifthPanel.list")
          v-row(dense)
            v-col(cols="2" sm="1" md="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="10" sm="5" md="7")
              span(:class="descriptionClasses") {{ item }}
    //- 6th panel
    call-to-action(:version="3")
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
    Usp,
    SignupButton: () => import('~/components/commons/SignupButton'),
  },
  data () {
    this.features = [
      {
        title: 'Quick Calls and Chats',
        icon: 'Quick Calls and Chats',
        iconExtension: '.webp',
      },
      {
        title: 'Appointment Schedule',
        icon: 'Appointment Schedule',
        iconExtension: '.webp',
      },
      {
        title: 'SMS and In-app Reminders',
        icon: 'SMS and In-app Reminders',
        iconExtension: '.webp',
      },
      {
        title: 'Promotions and Packages',
        icon: 'Promotions and Packages',
        iconExtension: '.webp',
      },
      {
        title: 'Feedback Forms',
        icon: 'Feedback Forms',
        iconExtension: '.webp',
      },
    ];
    this.pricingDetails = DOCTORS_PRICING;
    this.headerClasses = ['mc-title-set-1', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.btnClasses = ['mc-button-set-1'];
    this.listHeaderClasses = ['mc-list-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.listContentClasses = ['mc-list-content-set-1', 'font-open-sans', 'font-gray'];
    return {
      loading: true,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE PRM',
      description: 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve wherever they are.',
      socialBanner: require('~/assets/images/banners/OG Telehealth.png'),
    });
  },
  computed: {
    thirdPanel () {
      return {
        title: 'Connect with your EMR',
        description: 'MYCURE allows API integrations with other EMR software.',
        imageBindings: {
          image: 'cookie.png',
          imageAlt: 'cookie',
          customPath: 'prm/',
          width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '460px' : '710px'),
          extensionExclusive: true,
        },
        contentAlign: 'left',
      };
    },
    fifthPanel () {
      return {
        title: 'One tool to rule them all',
        description: 'Why use multiple apps when you can get all features in one account?',
        list: [
          'Designed for medical care',
          'API Integrations available',
          'Easy to set up',
        ],
        imageBindings: {
          image: 'cookie.png',
          imageAlt: 'cookie',
          customPath: 'prm/',
          extensionExclusive: true,
          width: this.$isMobile ? '256px' : (this.$isRegularScreen ? '460px' : '710px'),
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
