<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :custom-path="customPath"
    ).usp-content
      v-row(slot="content").row-content
        v-col(cols="12" md="5" :class="[{'web-content-margin': !$isMobile}]" v-if="!$isMobile")
          p(:class="[centerText]").font-18.mx-1 {{ uspSubheader }}
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-18.mx-1.pt-5 {{ uspSubtitle }}
          v-btn(
            height="54"
            width="160"
            v-if="!$isMobile"
            color="accent"
            @click="onGetStarted"
          ).text-none.font-16.p-7.btn-book Get Started
        v-col(cols="12" md="5" :class="[{'web-content-margin': !$isMobile}]" v-if="$isMobile" one-line)
          p(:class="[centerText]").font-18 {{ uspSubheader }}
          h1(:class="titleClasses").font-poppins.font-30.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-18.font-weight-light.px-1.pt-1 {{ uspSubtitle }}
          div(v-if="$isMobile").text-center
            v-btn(text).align-center
              v-icon(large) mdi-arrow-down
    template(v-if="$isMobile")
      div.text-field-container.white
        v-text-field(
          v-model="email"
          placeholder="myname@email.com"
          outlined
        )
      v-btn(
        @click="onGetStarted"
        color="accent"
        block
        x-large
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover.webp';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover-mobile.png';
    this.uspSubheader = 'For Doctors Clinics';
    this.panelTitle = 'Everything you need\nto build your virtual practice.';
    this.uspSubtitle = 'Starting a virtual practice has never been\neasier. Give your patients the quality care\nthey deserve.';
    this.customPath = 'doctors-clinics/';
    return {
      email: '',
    };
  },
  computed: {
    backgroundImageMobileConfigs () {
      return {
        'background-size': '100%',
        'background-position': '0px 270px',
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
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.text-field-container {
  height: 52px;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
  margin-top: -5%;
}
@media screen and (device-width: 360px) {
  .text-field-container {
  margin-top: -28%;
  }
}
@media screen and (device-width: 375px) {
  .text-field-container {
    margin-top: -62%;
  }
}
@media screen and (device-width: 1024px) {
  .row-content {
  margin-top: -20%;
  }
}
</style>
