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
      //-   :customPath="customPath"
      //-   :class="{'mt-5': $isMobile}"
      //- )
      v-container
        v-layout(style="height: 100%" fluid)
          v-row(:align="!$isMobile ? 'center' : 'start'" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5': !$isMobile }")
              p(:class="[centerText]").font-18.mx-1 {{ metaTitle }}
              h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
              div(v-if="$isMobile").text-center
                v-icon mdi-arrow-down
              v-btn(
                v-if="!$isMobile"
                color="accent"
                large
                @click="onWatch"
              ).text-none.font-16.mt-5.p-7
                v-icon(left) mdi-play-circle
                | Watch Walkthrough
    template(v-if="$isMobile")
      v-btn(
        block
        color="accent"
        large
        @click="onWatch"
      ).text-none.font-16.p-7
        v-icon(left) mdi-play-circle
        | Watch Walkthrough

    //- Video
    v-dialog(v-model="videoDialog" max-width="600")
      v-card(width="600").pt-5
        v-card-text
          iframe(
            align="middle"
            :height="!$isMobile ? '400' : '175'"
            width="100%"
            src="https://www.youtube.com/embed/YjymFVmKX_U"
            frameborder="0"
            allowfullscreen
          )
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-usp-cover';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-usp-cover-mobile.png';
    this.panelTitle = 'User-friendly and time-efficient features for a more patient-centric care';
    this.metaTitle = 'MYCURE Features';
    this.customPath = 'features/';
    return {
      videoDialog: false,
      canUseWebp: false,
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
        : parseTextWithNewLine(this.panelTitle, ['and ', 'for ']);
    },
    rowContentClass () {
      return this.$isMobile
        ? ['mobile-row-content']
        : ['web-row-content'];
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
    backgroundImages () {
      return this.canUseWebp ? 'bg-webp' : 'bg-png';
    },
  },
  mounted () {
    canUseWebp().then((result) => {
      this.canUseWebp = result;
    });
  },
  methods: {
    onWatch () {
      this.videoDialog = true;
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
  background-image: url('../../../assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-usp-cover.webp');
}
.bg-png {
  background-image: url('../../../assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-usp-cover.png');
}
.bg-mobile {
  background-image: url('../../../assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-usp-cover-mobile.png');
  background-position: 0 275px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.web-row-content {
  height: 70vh;
}
.mobile-row-content {
  min-height: 100vh;
}
@media screen and (device-width: 1280px) {
  .usp-content {
    margin-top: -10%;
  }
}
@media screen and (device-width: 1366px) {
  .usp-content {
    margin-top: -5%;
  }
}
@media screen and (device-width: 1440px) {
  .usp-content {
    margin-top: -13%;
  }
}
@media screen and (device-width: 1680px) {
  .usp-content {
    margin-top: -18%;
  }
}
@media screen and (device-width: 1920px) {
  .usp-content {
    margin-top: -14%;
  }
}
@media screen and (min-width: 2304px) {
  .usp-content {
    margin-top: -21%;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .web-row-content {
    height: 20vh;
  }
  .features-usp{
    height: 32vh;
  }
}

</style>
