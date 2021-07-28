<template lang="pug">
  div(v-if="!loading").white
    //- 1st panel
    usp(
      title="Simply plug and play"
      meta-title="MYCURE CSI"
      has-custom-background
      background="primary"
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
      generic-media-panel(
        header="Set the bar high"
        :descriptions="['MYCURE as your partner helps your facility to comply with international standards when it comes to digital information processing. Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information.']"
        :center-media="!$isMobile"
        :content-align-left="$isMobile"
        :header-classes="headerClasses"
        :description-classes="descriptionClasses"
        :dense="$isMobile"
        dummy
      )
    div.grey-bg.mx-n3
      features(
        :items="barFeatures"
        image-dir="csi/"
        image-width="150px"
        image-height="150px"
        :icon-column-bindings="iconBindings"
        extension-exclusive
        primary-title
        title="Set the bar high."
        content-col-size="10"
      )
        template(slot="description")
          p(:class="descriptionClasses") MYCURE as your partner helps your facility to comply with international standards when it comes to digital information processing. Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information.

    //- 3rd panel
    div.mx-n3.grey-bg
      features(
        title="Secure cloud-based software with the benefits of an on-premise system"
        title-col-size="10"
        image-dir="syncbase/"
        hide-learn-more
        :items="features"
      )
    //- 4th panel
    generic-media-panel(
      :content="fourthPanel"
      :content-classes="descriptionClasses"
      :title-classes="[...headerClasses, 'primary--text']"
      align="center"
      hide-btn
    )
      template(slot="additional-content")
        v-row.mt-10
          v-row(:justify="$isMobile ? 'center' : 'start'")
            v-col(cols="10" sm="5" md="7" lg="6" xl="5")
              div(:class="{'text-center': $isMobile}")
                signup-button(
                  event-label="signup"
                  color="success"
                  depressed
                  rounded
                  :large="!$isWideScreen"
                  :x-large="$isWideScreen"
                  :class="buttonClasses"
                ).text-none Sign up
    //- 5th panel
    syncbase(:version="4" content-left)
    //- 6th panel
    generic-media-panel(
      :content="ctaPanel"
      :content-classes="descriptionClasses"
      :title-classes="[...headerClasses, 'primary--text']"
      align="center"
      hide-btn
    )
      template(slot="additional-content")
        v-row.mt-10
          v-row(:justify="$isMobile ? 'center' : 'start'")
            v-col(cols="10" sm="5" md="7" lg="6" xl="5")
              div(:class="{'text-center': $isMobile}")
                signup-button(
                  event-label="signup"
                  color="success"
                  depressed
                  rounded
                  :large="!$isWideScreen"
                  :x-large="$isWideScreen"
                  :class="buttonClasses"
                ).text-none Talk to us
</template>

<script>
// - utils
import headMeta from '~/utils/head-meta';
// - components
import Features from '~/components/commons/panels/Features';
import Usp from '~/components/commons/panels/SevenWondersUsp';
import SignupButton from '~/components/commons/SignupButton';

export default {
  components: {
    Features,
    GenericMediaPanel: () => import('~/components/generic/GenericMediaPanel'),
    Syncbase: () => import('~/components/commons/panels/Syncbase'),
    CallToAction: () => import('~/components/commons/panels/CallToAction'),
    Usp,
    SignupButton,
  },
  data () {
    // - TODO: Update info
    this.features = [
      {
        title: 'Grade A+ SSL',
        icon: 'Grade A+ SSL',
        iconExtension: '.webp',
      },
      {
        title: 'Data Encryption',
        icon: 'Data Encryption',
        iconExtension: '.webp',
      },
      {
        title: 'User Designated Access',
        icon: 'User Designated Access',
        iconExtension: '.webp',
      },
      {
        title: 'Secure Cloud Hosting',
        icon: 'Secure Cloud Hosting',
        iconExtension: '.webp',
      },
      {
        title: 'Data Privacy Standards',
        icon: 'Data Privacy standards',
        iconExtension: '.webp',
      },
    ];
    this.iconBindings = {
      cols: 8,
      md: 4,
    };
    this.barFeatures = [
      {
        title: 'Quick Calls and Chats',
        icon: 'cookie',
        iconExtension: '.png',
      },
      {
        title: 'Appointment Schedule',
        icon: 'cookie',
        iconExtension: '.png',
      },
      {
        title: 'SMS and In-app Reminders',
        icon: 'cookie',
        iconExtension: '.png',
      },
    ];
    this.headerClasses = ['mc-title-set-1', 'lh-title', 'font-weight-semibold'];
    this.descriptionClasses = ['mc-content-set-1', 'font-open-sans', 'font-gray'];
    this.buttonClasses = ['mc-button-set-1'];
    return {
      loading: true,
    };
  },
  head () {
    // - TODO: Update
    return headMeta({
      title: 'MYCURE CSI',
      description: 'MYCURE helps you bring in more patients using a powerful healthcare service booking and management software. It’s free, secure, and easy to use.',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    fourthPanel () {
      return {
        title: 'Choose from a wide array of MYCURE modules to add in your system',
        description: 'MYCURE follows global standards and has open APIs that allow you to integrate or fortify your other systems with MYCURE.',
        contentAlign: 'right',
        centerPanelTitle: 'Integration and Interoperability',
        imageBindings: {
          image: 'cookie.png',
          imageAlt: 'cookie',
          customPath: 'csi/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          extensionExclusive: true,
        },
      };
    },
    ctaPanel () {
      return {
        title: 'Time to call for CSI',
        description: 'Partner with MYCURE today and see progress in no time.',
        contentAlign: 'right',
        imageBindings: {
          image: 'Let us do the work.webp',
          imageAlt: 'Hospital and smartphone artwork',
          customPath: 'commons/',
          width: this.$isMobile ? '276px' : (this.$isRegularScreen ? '460px' : '710px'),
          height: this.$isMobile ? '181.8px' : (this.$isRegularScreen ? '303px' : '467.65px'),
        },
      };
    },
  },
  mounted () {
    this.loading = false;
  },
};
</script>
