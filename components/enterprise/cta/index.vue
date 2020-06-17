<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      background-image-file-extension=".webp"
      background-image-file-extension-exclusive
      :background-image-configs="backgroundImageConfigs"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
    ).cta-content
      v-row(slot="content" align="center").row-content
        v-col(
          v-if="!$isMobile"
          cols="12"
          md="6"
          offset-md="3"
          :class="[{'web-content-margin': !$isMobile}]"
        ).cta-title.text-center
          h1.font-40.lh-title {{ ctaTitle }}
          v-row(justify="center").mt-5
            v-col(cols="12" md="9")
              v-text-field(
                elevation="2"
                v-model="email"
                background-color="white"
                outlined
                dense
                height="52"
                placeholder="myname@email.com"
              )
            v-col(cols="12" md="3" align-self="start")
              v-btn(
                color="accent"
                @click="onGetStarted"
                height="52"
              ).text-none.font-16.cta-btn Book A Demo
            v-col(cols="10")
              p.font-16.grey--text {{ ctaAgreementText }}
        v-col(
          v-if="$isMobile"
          cols="12"
        ).text-center.mobile-content
          h1.font-40.lh-title.px-5.cta-title {{ ctaTitle }}
          v-row(justify="center")
            v-col(cols="10")
              v-text-field(
                elevation="2"
                v-model="email"
                background-color="white"
                outlined
                dense
                height="52"
                placeholder="myname@email.com"
              )
            v-col(cols="10")
              v-btn(
                color="accent"
                large
                @click="onGetStarted"
              ).text-none.font-16.cta-btn Book A Demo
            v-col(cols="10")
              p.font-16.grey--text {{ ctaAgreementText }}
          img(
            v-lazy="panelImageSrc"
            alt="Enterprise CTA"
            width="90%"
          ).pt-10
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'mycure-final-cta-background-full';
    this.backgroundImageMobile = 'mycure-final-cta-background.webp';
    this.ctaTitle = 'Book A Demo Today.';
    this.ctaAgreementText = 'By entering your email, you agree to receive marketing emails from MYCURE.';
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
    backgroundImageMobileConfigs () {
      return {
        'background-position': 'bottom',
      };
    },
    panelImageSrc () {
      return require('~/assets/images/mycure-final-cta-background-image-right.webp');
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
.web-content-margin {
  margin-top: -15%;
}
.row-content {
  height: 100vh;
  text-align: center;
  margin-top: 5vh;
}
.mobile-content {
  text-align: center;
}
@media screen and (max-width: 360px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
  .cta-btn {
    margin-left: 16px;
  }
  .row-content {
    height: 70vh;
  }
}
@media screen and (max-width: 414px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
  .cta-btn {
    margin-left: 16px;
  }
  .row-content {
    height: 70vh;
    margin-bottom: -5vh;
  }
}
@media screen and (max-width: 1020px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
  .cta-btn {
    margin-left: 16px;
  }
  .row-content {
    height: 120vh;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .cta-content {
    position: relative;
    margin-top: -15%;
    z-index: 1;
  }
  .cta-btn{
    margin-top: 0 !important;
  }
  .row-content {
    height: 50vh;
    margin-bottom: -20%;
  }
}
@media screen and (device-width: 1366px) and (orientation: landscape) {
  .row-content {
    height: 49vh;
  }
}
</style>
