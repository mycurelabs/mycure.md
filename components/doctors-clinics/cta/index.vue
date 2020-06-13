<template lang="pug">
  div.white.cta-panel
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :webContainerStyleConfigs="webContainerStyleConfigs"
      :customPath="customPath"
    ).cta-content
      v-row(slot="content")
        v-col(
          cols="12"
          md="5"
          justify-self="center"
          v-if="!$isMobile"
          :class="[{'web-content-margin': !$isMobile}]"
        ).cta-title
          h1.font-40.lh-title.panel-title {{ panelTitle }}
          p.font-italic.mt-6.font-18.cta-subtitle {{ ctaSubtitle }}
          div(v-if="!$isMobile").py-5.text-field-container
            v-text-field(
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              outlined
            ).input-field
            v-btn(
              height="54"
              width="160"
              v-if="!$isMobile"
              color="accent"
              @click="onGetStarted"
            ).text-none.font-16.p-7.btn-book Get Started
          p.mt-3.font-18.white--text.cta-agreement {{ ctaAgreement }}
        v-col(cols="12" v-if="$isMobile")
          h1.font-40.lh-title.panel-title {{ panelTitle }}
          p.font-italic.mt-3.font-18.cta-subtitle {{ ctaSubtitle }}
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
          p.mt-2.cta-agreement {{ ctaAgreement }}
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-final-cta-cover.webp';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-final-cta-cover-mobile.webp';
    this.panelTitle = 'Build your virtual clinic today.';
    this.ctaSubtitle = 'For Modern Doctors, Virtual is the new normal.';
    this.ctaAgreement = 'By entering your email, you agree to receive marketing emails from MYCURE.';
    this.customPath = 'doctors-clinics/';
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
      return require(`@/assets/images/doctors-clinics/${this.backgroundImageMobile}`);
    },
  },
  methods: {
    onGetStarted () {
      if (!this.email) {
        return;
      }
      this.$emit('getStarted', this.email);
    },
  },
};
</script>

<style scoped>
.text-field-container {
  display: flex;
}
.input-field {
  width: 50%;
  height: 58px;
  border-radius: 5px;
}
.btn-book {
  margin-left: 8px;
}
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
  .panel-title{
    font-size: 30px !important;
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
    margin-top: 5%;
    z-index: 1;
  }
  .cta-title {
    margin-bottom: 7%;
  }
  .panel-title {
    font-size: 30px !important;
  }
  .cta-agreement {
    font-size: 16px !important;
  }
  .text-field-container {
    margin-top: -35px !important;
  }
  .cta-subtitle {
    font-size: 16px !important;
  }
}
@media screen and (device-width: 1366px) {
  .cta-panel {
    padding-top: 15%;
    margin-bottom: 2%;
  }
  .cta-title {
    padding-bottom: 10%;
  }
}
@media screen and (device-width: 1920px) {
  .cta-panel {
    margin-top: 15%;
  }
  .cta-title {
    margin-bottom: 15%;
  }
}
@media screen and (device-width: 2560px) {
  .cta-panel {
    margin-top: 15%;
  }
  .cta-title {
    margin-bottom: 25%;
  }
}
</style>
