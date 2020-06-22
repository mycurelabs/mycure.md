<template lang="pug">
  fragment
    v-layout(
      fluid
      fill-height
      style="height: 100vh"
      :class="[backgroundClasses]"
    )
      //- generic-background-panel(
      //-   :background-image="backgroundImage"
      //-   background-image-file-extension=".png"
      //-   background-image-file-extension-exclusive
      //-   :background-image-mobile="backgroundImageMobile"
      //-   :background-image-mobile-configs="backgroundImageMobileConfigs"
      //-   :customPath="customPath"
      //-   :class="{'pt-12': $isMobile}"
      //- )
      v-container
        v-layout(style="height: 100%" fluid)
          v-row(:align="!$isMobile ? 'center' : 'start'" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5': !$isMobile }")
              p(:class="[centerText]").font-18.px-1.usp-subtitle {{ uspPreSubtitle }}
              h1(:class="titleClasses").font-poppins.lh-title {{ uspTitle }}
              p(v-show="!$isMobile").pre-white-space.font-18.px-1.pt-5.usp-subtitle {{ uspSubtitle }}
              div(v-if="$isMobile").text-center
                v-btn(text).align-center
                  v-icon(large) mdi-arrow-down
              div(v-if="!$isMobile").text-field-container.mr-3
                v-text-field(
                  background-color="white"
                  v-model="email"
                  placeholder="myname@email.com"
                  outlined
                  dense
                  height="50"
                ).text-field-input
              v-btn(
                v-if="!$isMobile"
                color="accent"
                @click="onGetStarted"
                height="50"
                width="160"
              ).text-none.font-16.p-7 Book A Demo
            //- v-col(cols="12" md="5" v-if="$isMobile" one-line).text-center
            //-   p.font-18.font-weight-light.px-1 {{ uspPreSubtitle }}
            //-   h1.font-poppins.font-30.lh-title {{ panelTitleMobile }}
            //-   div(v-if="$isMobile").text-center
            //-     v-btn(text).align-center
            //-       v-icon(large) mdi-arrow-down
    template(v-if="$isMobile")
      div.white
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover-mobile.png';
    this.uspPreSubtitle = 'For Medical Enterprise';
    this.panelTitle = 'Take your healthcare enterprise to a broader audience';
    this.panelTitleMobile = 'Taking your\nentire clinic\nenterprise online\nis possible with\nMYCURE';
    this.panelSubtitle = 'Build an online brand for your health facility and MYCURE will do the rest.';
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
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-48'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitleMobile
        : parseTextWithNewLine(this.panelTitle, ['healthcare ', 'to a ']);
    },
    uspSubtitle () {
      return this.$isMobile
        ? this.panelSubtitle
        : parseTextWithNewLine(this.panelSubtitle, ['health ']);
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
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
.bg {
  background-image: url('../../../assets/images/enterprise/MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover.png');
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-mobile {
  background-image: url('../../../assets/images/enterprise/MYCURE-virtual-clinic-healthcare-practice-online-enterprise-usp-cover-mobile.png');
  background-position: 0 275px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.text-field-container {
  height: 50px;
  border-radius: 2px;
  display: inline-block;
}
.text-field-container .text-field-input{
  top: 1px;
  width: 295px;
  opacity: 0.9;
}
.input-field {
  width: 50%;
  height: 58px;
  border-radius: 5px;
}
/* .btn-book {
  margin-left: 8px;
} */
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
    height: 85vh;
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
  /* .btn-book {
    width: 30% !important;
    font-size: 150% !important;
  } */
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
  /* .btn-book {
    width: 30% !important;
    font-size: 150% !important;
  } */
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
  /* .btn-book {
    width: 35% !important;
    font-size: 160% !important;
  } */
}
</style>
