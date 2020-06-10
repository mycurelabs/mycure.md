<template lang="pug">
  div
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :webContainerStyleConfigs="webContainerStyleConfigs"
      :customPath="customPath"
      :class="{'mt-10': $isMobile}"
    )
      v-row(slot="content" :align="$isMobile ? 'start' : 'center'" :class="rowContentClass").usp-content
        v-col(cols="12" md="6" xl="4" :class="{'pt-10': $isMobile, 'mt-n10': !$isMobile}")
          h3(:class="titleClasses").font-poppins.font-36.lh-title {{ panelTitleSub }}
          h1(:class="titleClasses").font-poppins.font-60.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18.mx-1 {{ uspSubtitle }}
          div(v-if="!$isMobile").text-field-container.mr-3
            v-text-field(
              elevation="2"
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              outlined
              dense
              height="52"
            ).text-field-input
          v-btn(
            elevation="2"
            v-if="!$isMobile"
            color="accent"
            large
            width="160"
            height="50"
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.py-4.text-field-btn Get Started
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover.webp';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover-mobile.png';
    this.panelTitleSub = 'For Modern Doctors:';
    this.panelTitleMain = 'Virtual is the new normal.';
    this.uspSubtitle = 'Build your virtual clinic today.';
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
    webContainerStyleConfigs () {
      return {
        position: 'absolute',
        top: '0',
        height: '500px',
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
        ? this.panelTitleMain
        : parseTextWithNewLine(this.panelTitleMain, ['the ']);
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
  height: 52px;
  border-radius: 2px;
  display: inline-block;
}
.text-field-container .text-field-input{
  width: 295px;
  opacity: 0.9;
}
.web-row-content {
  height: 90vh;
}
.mobile-row-content {
  min-height: 100vh;
}
@media screen and (device-width: 375px) {
  .text-field-container {
    margin-top: -45%;
  }
}
@media screen and (device-width: 360px) {
  .text-field-container {
    margin-top: -50px;
  }
}
@media screen and (device-width: 1024px) {
  .usp-content {
    margin-top: -25vh;
  }
  .text-field-container {
    display: inline-block !important;
  }
}
@media screen and (max-width: 1038px) {
  .text-field-container {
    display: unset;
  }
}
@media screen and (max-width: 1264px) {
  .text-field-container .text-field-input{
    width: 254px;
  }
}
@media screen and (device-width: 1366px) {
  .usp-content {
    margin-top: -10%;
  }
}
</style>
