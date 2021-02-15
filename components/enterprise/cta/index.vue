<template lang="pug">
  div.white
    generic-background-panel(
      background-image-file-extension=".webp"
      background-image-file-extension-exclusive
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
    ).cta-content
      v-row(slot="content" align="center")
        v-col(
          v-if="!$isMobile"
          cols="12"
          md="6"
          offset-md="3"
          align="center"
          align-self="start"
        ).row-content
          h1.font-40.lh-title {{ ctaTitle }}
          p.font-18.my-4 {{ ctaSubtitle }}
          v-row(justify="center").mt-5
            //- v-col(cols="12" md="7")
              v-text-field(
                v-model="email"
                background-color="white"
                placeholder="johndoe@gmail.com"
                elevation="2"
                height="52"
                outlined
                dense
                :error-messages="emailErrorMessage"
              )
            v-col(cols="10")
              v-btn(
                color="accent"
                height="52"
                @click="onGetStarted"
              ).text-none.font-16.cta-btn Book a demo today
            v-col(cols="10").mt-n8
              p.font-16.grey--text.pre-white-space {{ ctaAgreementText }}
        v-col(
          v-if="$isMobile"
          cols="12"
          align="center"
        )
          h1.font-40.lh-title.px-5 {{ ctaTitle }}
          p.font-18.my-4 {{ ctaSubtitle }}
          v-row(justify="center")
            //- v-col(cols="10")
              v-text-field(
                v-model="email"
                background-color="white"
                placeholder="johndoe@gmail.com"
                elevation="2"
                height="52"
                outlined
                dense
                :error-messages="emailErrorMessage"
              )
            v-col(cols="10")
              v-btn(
                color="accent"
                large
                @click="onGetStarted"
              ).text-none.font-16 Book a demo today
            v-col(cols="10")
              p.font-16.grey--text {{ ctaAgreementText }}
          picture-source(
            image-file-extension=".webp"
            image-width="90%"
            image-alt="Enterprise CTA"
            :image-classes="['pt-10']"
            :image="ctaMobileImage"
          )
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: {
    GenericBackgroundPanel,
    PictureSource,
  },
  data () {
    this.backgroundImage = 'mycure-final-cta-background-full';
    this.backgroundImageMobile = 'mycure-final-cta-background.png';
    this.ctaMobileImage = 'mycure-final-cta-background-image-right';
    this.ctaTitle = 'Optimize your clinic workflows and maximize its potential';
    this.ctaSubtitle = 'Manage and monitor your daily operations and get real-time medical and business insights with MYCURE.';
    // this.ctaAgreementText = 'By entering your email, you agree to receive\nmarketing emails from MYCURE.';
    return {
      email: '',
      emailErrorMessage: '',
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
    backgroundImageMobileConfigs () {
      return {
        'background-position': 'bottom',
      };
    },
  },
  methods: {
    onGetStarted () {
      // if (!this.email) {
      //   this.emailErrorMessage = 'Please enter your email';
      //   return;
      // }
      // this.$emit('getStarted', this.email);
      window.open('https://calendly.com/mycure/demo', '_blank');
    },
  },
};
</script>

<style scoped>
.row-content {
  height: 80vh;
  text-align: center;
  margin-top: 5vh;
}
@media screen and (device-width: 360px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
}
@media screen and (device-width: 375px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
}
/* PAGE RESPONSIVENESS SPECIFIC FOR IPAD PRO SCREEN ONLY */
/* IPAD PRO ORIENTATION : PORTRAIT */
@media screen and (device-width: 1024px) and (device-height: 1366px) {
  .row-content {
    height: 50vh;
  }
}
/* IPAD PRO ORIENTATION : LANDSCAPE */
@media screen and (device-width: 1366px) and (device-height: 1024px) {
  .row-content {
    height: 50vh;
  }
}
</style>
