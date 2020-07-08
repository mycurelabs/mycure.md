<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      background-image-file-extension=".webp"
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
          h1.font-40.lh-title.pre-white-space {{ ctaWebTitle }}
          p.font-italic.font-18.my-4 {{ ctaSubtitle }}
          v-row(justify="center")
            v-col(cols="12" md="7")
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
              ).text-none.font-16.cta-btn Get Started
            v-col(cols="10").mt-n8
              p.font-16.grey--text.pre-white-space {{ ctaAgreementText }}
        v-col(
          v-if="$isMobile"
          cols="12"
        ).text-center.mobile-content
          h1.font-40.lh-title.px-5.cta-title {{ ctaTitle }}
          p.font-italic.font-18.px-5.my-2.cta-subtitle {{ ctaSubtitle }}
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
              ).text-none.font-16.cta-btn Get Started
            v-col(cols="10")
              p.mt-3.font-16.grey--text {{ ctaAgreementText }}
          picture-source(
            :image="ctaMobileImage"
            image-file-extension=".webp"
            image-width="90%"
            image-alt="Doctors CTA"
            :image-classes="['pt-10']"
          )
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
import PictureSource from '~/components/commons/PictureSource';
// utils
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  components: {
    GenericBackgroundPanel,
    PictureSource,
  },
  data () {
    this.backgroundImage = 'mycure-final-cta-background-full';
    this.backgroundImageMobile = 'mycure-final-cta-background.png';
    this.ctaMobileImage = 'mycure-final-cta-background-image-right';
    this.ctaTitle = 'Build your virtual clinic today.';
    this.ctaSubtitle = 'For Modern Doctors, Virtual is the new normal.';
    this.ctaAgreementText = 'By entering your email, you agree to receive\nmarketing emails from MYCURE.';
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
    ctaWebTitle () {
      return parseTextWithNewLine(this.ctaTitle, ['virtual']);
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
  position: absolute;
  bottom: 0;
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
    margin-top: 30vh;
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
    margin-bottom: 10vh;
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
</style>
