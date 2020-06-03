<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
    )
      v-row(slot="content").row-content
        v-col(cols="12" md="5" :class="[{'web-content-margin': !$isMobile}]" v-if="!$isMobile")
          p(:class="[centerText]").font-18.mx-1.pt-5 {{ uspSubheader }}
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-18.mx-1.pt-5 {{ uspSubtitle }}
          v-btn(
            v-if="!$isMobile"
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
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
          height="60"
        )
      v-btn(
        block
        color="accent"
        height="65"
        x-large
        @click="onGetStarted"
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover-mobile.png';
    this.uspSubheader = 'For Doctors Clinics';
    this.panelTitle = 'Everything you need\nto build your virtual practice.';
    this.uspSubtitle = 'Starting a virtual practice has never been\neasier. Give your patients the quality care\nthey deserve.';
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
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
}
@media screen and (max-width: 375px) {
  .text-field-container {
    margin-top: -72%;
  }
}
@media screen and (max-width: 360px) {
  .text-field-container {
  margin-top: -30%;
  }
}
</style>
