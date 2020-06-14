<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :customPath="customPath"
      :class="{'pt-12': $isMobile}"
    )
      v-row(slot="content").row-content
        v-col(cols="12" md="5" :class="[{'web-content-margin': !$isMobile}]" v-if="!$isMobile")
          p.font-18.px-1.usp-subtitle {{ uspPreSubtitle }}
          h1(:class="titleClasses").font-poppins.font-40.lh-title.usp-title {{ panelTitle }}
          p.font-18.px-1.pt-5.usp-subtitle {{ uspPostSubtitle }}
          div(v-if="!$isMobile").text-field-container
            v-text-field(
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              outlined
            ).input-field
            v-btn(
              v-if="!$isMobile"
              color="accent"
              @click="onGetStarted"
              height="55"
              width="160"
            ).text-none.font-16.p-7.btn-book Book A Demo
        v-col(cols="12" md="5" v-if="$isMobile" one-line).text-center
          p.font-18.font-weight-light.px-1 {{ uspPreSubtitle }}
          h1.font-poppins.font-30.lh-title {{ panelTitleMobile }}
          div(v-if="$isMobile").text-center
            v-btn(text).align-center
              v-icon(large) mdi-arrow-down
    template(v-if="$isMobile").row-content
      div.text-field-container-mobile.white
        v-text-field(
          v-model="email"
          outlined
          placeholder="myname@email.com"
        )
      v-btn(
        color="accent"
        @click="onGetStarted"
        large
        block
      ).text-none.font-weight-bold.font-18.mt-n8 Get Started
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover-mobile.png';
    this.uspPreSubtitle = 'For Medical Enterprise';
    this.panelTitle = 'Take your healthcare\nenterprise to a\nbroader audience';
    this.panelTitleMobile = 'Taking your\nentire clinic\nenterprise online\nis possible with\nMYCURE';
    this.uspPostSubtitle = 'Build and online brand for your health facility and MYCURE will do the rest.';
    this.uspAgreement = 'By entering your email, you agree to receive marketing emails from MYCURE.';
    this.customPath = 'enterprise/';
    return {
      email: '',
    };
  },
  computed: {
    backgroundImageMobileConfigs () {
      return {
        'background-size': '100%',
        'background-position': '0px 200px',
      };
    },
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText]
        : ['pre-white-space'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitle
        : parseTextWithNewLine(this.panelTitle, ['']);
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
.row-content {
  height: 100vh;
  margin-top: -5%;
}
/* iphone 5SE */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .text-field-container-mobile {
    margin-top: -38%;
  }
}
/* iphone 6/7/8 */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .text-field-container-mobile {
    margin-top: -45%;
  }
}
/* iphone 6/7/8 PLUS */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {
  .text-field-container-mobile {
    margin-top: -48%;
  }
}
/* iphone X */
@media only screen
  and (device-width: 375px)
  and (-webkit-min-device-pixel-ratio: 3) {
  .text-field-container-mobile {
    margin-top: -85%;
  }
}
/* Pixel XL */
@media only screen
  and (device-width: 411px)
  and (device-height: 823px)
  and (-webkit-min-device-pixel-ratio: 3) {
  .text-field-container-mobile {
    margin-top: -70%;
  }
}
@media screen and (device-width: 768px) {
  .row-content {
  margin-top: -10%;
  }
}
@media screen and (device-width: 1024px) {
  .row-content {
    margin-top: -20%;
  }
  .btn-book {
    margin-left: 5px;
  }
}
@media screen and (device-width: 1440px) {
  .row-content {
    height: 85vh;
  }
}
@media screen and (device-width: 1680px) {
  .row-content {
    height: 80vh;
  }
}
@media screen and (device-width: 1920px) {
  .row-content {
    height: 95vh;
  }
  .usp-title {
    font-size: 300% !important;
  }
  .usp-subtitle {
    font-size: 150% !important;
  }
  .btn-book {
    width: 30% !important;
    font-size: 150% !important;
  }
}
@media screen and (device-width: 2304px) {
  .row-content {
    height: 105vh;
  }
  .usp-title {
    font-size: 350% !important;
  }
  .usp-subtitle {
    font-size: 175% !important;
  }
  .btn-book {
    width: 30% !important;
    font-size: 150% !important;
  }
}
@media screen and (device-width: 2560px) {
  .row-content {
    height: 95vh;
  }
  .usp-title {
    font-size: 400% !important;
  }
  .usp-subtitle {
    font-size: 200% !important;
  }
  .btn-book {
    width: 35% !important;
    font-size: 160% !important;
  }
}
</style>
