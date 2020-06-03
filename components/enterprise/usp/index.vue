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
          p.font-18.px-1 {{ uspSubtitle }}
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          div(v-if="!$isMobile").text-field-container.white.py-5
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
          ).text-none.font-weight-bold.font-18.mt-6 Sign Up via Email
        v-col(cols="12" md="5" v-if="$isMobile" one-line).text-center
          p.font-18.font-weight-light.px-1 {{ uspSubtitle }}
          h1.font-poppins.font-30.lh-title {{ uspTitle }}
          div(v-if="$isMobile").text-center
            v-btn(text).align-center
              v-icon(large) mdi-arrow-down
    template(v-if="$isMobile")
      div.text-field-container.white
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
      ).text-none.font-weight-bold.font-18 Get Started
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
    this.panelTitle = 'Taking your entire clinic\nenterprise online is\npossible with MYCURE.';
    this.uspSubtitle = 'For Medical Enterprise';
    this.uspAgreement = 'By entering your email, you agree to receive marketing emails from MYCURE.';
    this.customPath = 'enterprise/';
    return {
      email: '',
      isMobile: true,
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
      return { 'text-center': this.isMobile };
    },
    titleClasses () {
      return this.isMobile
        ? [this.centerText]
        : ['pre-white-space'];
    },
    uspTitle () {
      return this.isMobile
        ? this.panelTitle
        : parseTextWithNewLine(this.panelTitle, ['virtual ']);
    },
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
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
  .text-field-container {
    margin-top: -90%;
  }
}
@media screen and (max-width: 360px) {
  .text-field-container {
  margin-top: -50%;
  }
}
</style>
