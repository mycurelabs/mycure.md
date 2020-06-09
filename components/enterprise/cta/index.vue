<template lang="pug">
  div.white.pt-12
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :webContainerStyleConfigs="webContainerStyleConfigs"
      :customPath="customPath"
    ).cta-content
      v-row(slot="content" align="center" v-if="!$isMobile")
        v-col(
          cols="12"
          md="5"
          :class="[{'web-content-margin': !$isMobile}]"
        ).pt-5.cta-title
          h1.font-40.lh-title.white--text.panel-title {{ panelTitle }}
          div(v-if="!$isMobile").pt-5.text-field-container
            v-text-field(
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              outlined
            )
          v-btn(
            @click="onGetStarted"
            color="accent"
            block
            large
          ).mt-n3.text-none.font-weight-bold.font-18.cta-btn Get Started
          p.mt-3.font-18.text-center.white--text.cta-agreement {{ ctaAgreement }}
        img(
          v-if="$isMobile"
          v-lazy="panelImageSrc"
          alt="Home CTA"
          width="100%"
        ).pt-10
      v-row(slot="content" align="center" v-if="$isMobile")
        v-col(
          cols="12"
        )
          h1.font-40.lh-title.cta-title {{ panelTitle }}
          div.mt-5.text-field-container
            v-text-field(
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              outlined
            )
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-n3.cta-btn Get Started
          p.mt-2 {{ ctaAgreement }}
          img(
            v-lazy="panelImageSrc"
            alt="Home CTA"
            width="100%"
          ).pt-10.image-mobile
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-final-cta.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-final-cta-cover-mobile.png';
    this.panelTitle = 'Book A Demo Today.';
    this.ctaAgreement = 'By entering your email, you agree to receive marketing emails from MYCURE.';
    this.customPath = 'enterprise/';
    return {
      email: '',
    };
  },
  computed: {
    backgroundImageConfigs () {
      return {
        width: '100%',
        position: 'absolute',
        left: '0',
        bottom: '0',
      };
    },
    webContainerStyleConfigs () {
      return { position: 'relative' };
    },
    panelImageSrc () {
      return require(`~/assets/images/enterprise/${this.backgroundImageMobile}`);
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.web-content-margin {
  margin-top: 80px;
}
@media screen and (device-width: 360px) {
  .cta-content {
    margin-bottom: -10%;
  }
  .image-mobile {
    margin-left: -5%;
    width: 110%;
  }
}
@media screen and (device-width: 375px) {
  .cta-content {
    margin-bottom: -10%;
  }
  .image-mobile {
    margin-left: -5%;
    width: 110%;
  }
}
@media screen and (device-width: 768px) {
  .image-mobile {
    margin-left: -5%;
    width: 110%;
  }
}
@media screen and (device-width: 1024px) {
  .cta-content {
    position: absolute;
    margin-top: -80%;
    z-index: 1;
  }
  .cta-title {
    margin-bottom: -245%;
  }
  .panel-title {
    font-size: 30px !important;
  }
  .cta-agreement {
    font-size: 16px !important;
  }
}
</style>
