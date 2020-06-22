<template lang="pug">
  fragment
    v-layout(
      fluid
      fill-height
      style="height: 100vh"
      :class="[backgroundClasses, backgroundImages]"
    )
      //- generic-background-panel(
      //-   :background-image="backgroundImage"
      //-   background-image-file-extension=".webp"
      //-   :background-image-mobile="backgroundImageMobile"
      //-   :background-image-mobile-configs="backgroundImageMobileConfigs"
      //-   :custom-path="customPath"
      //- ).usp-content
      v-container
        v-layout(style="height: 100%" fluid)
          v-row(:align="!$isMobile ? 'center' : 'start'" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5': !$isMobile }")
              p(:class="[centerText]").font-18.mx-1.usp-subtitle {{ uspSubheader }}
              h1(:class="titleClasses").font-poppins.lh-title.usp-title {{ uspTitle }}
              p(:class="subtitleClasses").mx-1.pt-5 {{ uspSubtitle }}
              div(v-show="$isMobile").text-center
                v-btn(text).align-center
                  v-icon(large) mdi-arrow-down
              v-btn(
                height="54"
                width="160"
                v-if="!$isMobile"
                color="accent"
                @click="onGetStarted"
              ).text-none.font-16.p-7 Get Started
            //- v-col(cols="12" md="5" :class="[{'web-content-margin': !$isMobile}]" v-if="$isMobile" one-line)
            //-   p(:class="[centerText]").font-18 {{ uspSubheader }}
            //-   h1(:class="titleClasses").font-poppins.font-30.lh-title {{ uspTitle }}
            //-   p(:class="[centerText]").font-18.font-weight-light.px-1.pt-1 {{ uspSubtitle }}
            //-   div(v-if="$isMobile").text-center
            //-     v-btn(text).align-center
            //-       v-icon(large) mdi-arrow-down
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
      ).text-none.font-16 Get Started
</template>

<script>
// utils
import { parseTextWithNewLine } from '~/utils/newline';
import canUseWebp from '~/utils/can-use-webp';
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover-mobile.png';
    this.uspSubheader = 'For Doctors Clinics';
    this.panelTitle = 'Everything you need to build your virtual practice.';
    this.panelSubtitle = 'Starting a virtual practice has never been easier. Give your patients the quality care they deserve.';
    this.customPath = 'doctors-clinics/';
    return {
      email: '',
      canUseWebp: false,
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
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-40'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-18']
        : ['pre-white-space', 'font-24'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitle
        : parseTextWithNewLine(this.panelTitle, ['need ', 'virtual ']);
    },
    uspSubtitle () {
      return this.$isMobile
        ? this.panelSubtitle
        : parseTextWithNewLine(this.panelSubtitle, ['never ', 'the ']);
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
    backgroundImages () {
      return this.canUseWebp ? 'bg-webp' : 'bg-png';
    },
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    canUseWebp().then((result) => {
      this.canUseWebp = result;
    });
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.bg {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-webp {
  background-image: url('../../../assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover.webp');
}
.bg-png {
  background-image: url('../../../assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover.png');
}
.bg-mobile {
  background-image: url('../../../assets/images/doctors-clinics/MYCURE-virtual-clinic-healthcare-practice-online-doctors-clinic-usp-cover-mobile.png');
  background-position: 0 275px;
  background-repeat: no-repeat;
  background-size: 100%;
}
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
/* galaxy S5 */
@media screen and (device-width: 320px) {
  .text-field-container {
    margin-top: -16%;
  }
}
@media screen and (device-width: 360px) {
  .text-field-container {
    margin-top: -28%;
  }
}
/* iphone 6/7/8 */
@media only screen
  and (min-device-width: 375px)
  and (max-device-width: 667px)
  and (-webkit-min-device-pixel-ratio: 2) {
  .text-field-container {
    margin-top: -27%;
  }
}
/* iphone 6/7/8 PLUS */
@media only screen
  and (min-device-width: 414px)
  and (max-device-width: 736px)
  and (-webkit-min-device-pixel-ratio: 3) {
  .text-field-container {
    margin-top: -28%;
  }
}
/* iphone X */
@media only screen
  and (device-width: 375px)
  and (-webkit-min-device-pixel-ratio: 3) {
  .text-field-container {
    margin-top: -63%;
  }
}
/* Pixel */
@media screen
  and (device-width: 360px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 3) {
  .text-field-container {
    margin-top: -28%;
  }
}
@media screen and (device-width: 1024px) {
  .row-content {
    margin-top: -20%;
  }
}
@media screen and (device-width: 1440px) {
  .row-content {
    height: 80vh;
  }
}
@media screen and (device-width: 1680px) {
  .row-content {
    height: 80vh;
  }
}
@media screen and (device-width: 1920px) {
  .row-content {
    height: 90vh;
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
    height: 80vh;
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
    height: 90vh;
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
