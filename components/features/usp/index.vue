<template lang="pug">
  fragment
    v-layout(
      fluid
      fill-height
      style="height: 100vh"
      :class="[backgroundClasses, backgroundImages]"
    )
      v-container
        v-layout(style="height: 100%" fluid)
          v-row(align="start" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }")
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
    this.panelTitle = 'User-friendly and time-efficient features for a more patient-centric care';
    this.metaTitle = 'MYCURE Features';
    return {
      videoDialog: false,
      canUseWebp: false,
    };
  },
  computed: {
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
.usp-content{
  margin-top: 150px;
}
</style>
