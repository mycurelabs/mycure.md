<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
      :customPath="customPath"
      :class="{'mt-5': $isMobile}"
    )
      v-row(slot="content" :align="$isMobile ? 'start' : 'center'" :class="rowContentClass")
        v-col(cols="12" md="5" xl="4")
          p(:class="[centerText]").font-18.mx-1 {{ metaTitle }}
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          v-btn(
            v-if="!$isMobile"
            color="accent"
            large
            @click="onWatch"
          ).text-none.font-weight-bold.font-18.mt-5
            v-icon(left) mdi-play-circle
            | Watch Walkthrough
    template(v-if="$isMobile")
      v-btn(
        block
        color="accent"
        large
        @click="onWatch"
      ).text-none.font-weight-bold.font-18
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
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-usp-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-usp-cover-mobile.png';
    this.panelTitle = 'User-friendly and time-efficient features for a more patient-centric care';
    this.metaTitle = 'MYCURE Features';
    this.customPath = 'features/';
    return {
      videoDialog: false,
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
  },
  methods: {
    onWatch () {
      this.videoDialog = true;
    },
  },
};
</script>

<style scoped>
.web-row-content {
  height: 70vh;
}
.mobile-row-content {
  min-height: 100vh;
}
</style>
