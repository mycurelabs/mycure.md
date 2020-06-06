<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :customPath="customPath"
      :class="{'mt-10': $isMobile}"
    )
      v-row(slot="content" :align="$isMobile ? 'start' : 'center'" :class="rowContentClass")
        v-col(cols="12" md="5" xl="4" :class="{'pt-10': $isMobile}")
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18.mx-1 {{ uspSubtitle }}
          div(v-if="!$isMobile").text-field-container
            v-text-field(
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              outlined
            )
          v-btn(
            v-if="!$isMobile"
            block
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
    template(v-if="$isMobile")
      div.text-field-container
        v-text-field(
          background-color="white"
          v-model="email"
          outlined
          placeholder="myname@email.com"
        )
      v-btn(
        block
        color="accent"
        large
        @click="onGetStarted"
      ).text-none.font-weight-bold.font-18.mt-n1 Get Started
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover-mobile.png';
    this.panelTitle = 'Build your virtual clinic today.';
    this.uspSubtitle = 'For Modern Doctors, Virtual is the new normal.';
    this.customPath = 'virtual-clinic-home/';
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
        : parseTextWithNewLine(this.panelTitle, ['virtual ']);
    },
    rowContentClass () {
      return this.$isMobile
        ? ['mobile-row-content']
        : ['web-row-content'];
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
  border-radius: 2px;
}
.web-row-content {
  height: 100vh;
}
.mobile-row-content {
  min-height: 100vh;
}
@media screen and (max-width: 375px) {
  .text-field-container {
    margin-top: -45%;
  }
}
@media screen and (max-width: 360px) {
  .text-field-container {
    margin-top: -50px;
  }
}
</style>
