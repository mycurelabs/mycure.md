<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :customPath="customPath"
      :class="{'pt-12': $isMobile}"
    ).enterprise-cta-content
      v-row(slot="content" v-if="!$isMobile").row-content
        v-col(cols="12" md="5" :class="[{'web-content-margin': !$isMobile}]").pt-12
          h1(:class="titleClasses" white--text).font-poppins.font-40.py-10.white--text {{ panelTitle }}
          div(v-if="!$isMobile").text-field-container
            v-text-field(
              background-color="white"
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
          ).text-none.font-weight-bold.font-18.mt-3 Get Started
          p.font-16.font-weight-light.px-1.pt-1.text-center.white--text {{ ctaAgreement }}
      v-row(slot="content" v-if="$isMobile").row-content
        v-col(cols="12" md="5" one-line).text-field-container-mobile
          h1.font-poppins.font-30.lh-title {{ panelTitle }}
          div.mt-5
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
          ).text-none.font-weight-medium.font-18 Get Started
          p.font-16.font-weight-light.px-1.pt-1.one-line {{ ctaAgreement }}
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
    backgroundImageMobileConfigs () {
      return {
        'background-size': '100%',
        'background-position': '0px 350px',
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
  /* border: 1px solid black; */
  border-radius: 2px;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
}
@media screen and (device-width: 360px) {
   .enterprise-cta-content {
     margin-bottom: -90px;
   }
}
@media screen and (device-width: 375px) {
  .enterprise-cta-content {
    margin-bottom: -67%;
  }
}
</style>
