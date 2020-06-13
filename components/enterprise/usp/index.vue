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
          p.font-18.px-1 {{ uspPreSubtitle }}
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ panelTitle }}
          p.font-18.px-1.pt-5 {{ uspPostSubtitle }}
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
@media screen and (device-width: 360px) {
  .text-field-container-mobile {
  margin-top: -45%;
  }
}
@media screen and (device-width: 375px) {
  .text-field-container-mobile {
    margin-top: -85%;
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
  .text-field-container {
    flex-direction: column;
  }
  .input-field {
    width: 100%;
  }
  .btn-book {
    margin-left: 0px;
    margin-top: 2%;
  }
}
@media screen and (device-width: 2304px) {
  .row-content {
    margin-top: 10%;
    height: 80vh;
  }
}
</style>
