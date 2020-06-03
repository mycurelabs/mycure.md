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
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18.px-1 {{ uspSubtitle }}
          div(v-if="!$isMobile").text-field-container.white
            v-text-field(
              v-model="email"
              outlined
              placeholder="myname@email.com"
            )
          v-btn(
            v-if="!$isMobile"
            block
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
          p(:class="[centerText]").white--text.font-16.px-1.text-center.py-2 {{ uspAgreement }}
        v-col(cols="12" md="5" v-if="$isMobile" one-line).cta-form
          h1.font-poppins.font-30.lh-title {{ uspTitle }}
          p.font-italic.font-18.font-weight-light.px-1.pt-1 {{ uspSubtitle }}
          div.text-field-container.white
            v-text-field(
              v-model="email"
              outlined
              placeholder="myname@email.com"
            )
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
          p.font-16.font-weight-light.px-1.pt-1 {{ uspAgreement }}
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-final-cta-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-final-cta-cover-mobile.png';
    this.panelTitle = 'Build your virtual clinic today.';
    this.uspSubtitle = 'For Modern Doctors, Virtual is the new normal.';
    this.uspAgreement = 'By entering your email, you agree to receive marketing emails from MYCURE.';
    this.customPath = 'doctors-clinics/';
    return {
      email: '',
    };
  },
  computed: {
    backgroundImageMobileConfigs () {
      return {
        'background-size': '100%',
        'background-position': '0px 450px',
        'padding-bottom': '10%',
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
        : parseTextWithNewLine(this.panelTitle, ['virtual ']);
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
  height: 58px;
  border: 1px solid black;
  border-radius: 2px;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
}
@media screen and (max-width: 375px) {
  .cta-form {
    margin-top: 5%;
  }
}
@media screen and (max-width: 360px) {
  .cta-form {
    margin-top: 5%;
  }
}
</style>
