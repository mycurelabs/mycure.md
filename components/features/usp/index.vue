<template lang="pug">
  div
    v-container(
      fluid
      style="height: 100vh"
      :class="[backgroundClasses]"
    ).bg-png
      v-container
        v-container(style="height: 100%" fluid)
          v-row(align="start" justify="center")
            v-col(cols="12" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }")
              p(:class="[centerText, subtitleClasses]") {{ metaTitle }}
              h1(:class="titleClasses").font-poppins.lh-title {{ uspTitle }}
              div(v-if="$isMobile").text-center
                v-btn(text icon @click="startNow").align-center
                  v-icon(large) {{ mdiArrowDown }}
              v-btn(
                v-if="!$isMobile"
                color="accent"
                large
                @click="onWatch"
              ).text-none.font-16.mt-5
                v-icon(left) {{ mdiPlayCircle }}
                | Watch Walkthrough
    template(v-if="$isMobile")
      v-container(fluid).mobile-form
        v-row.px-6
          v-btn(
            block
            color="accent"
            large
            @click="onWatch"
          ).text-none.font-16.p-7
            v-icon(left) {{ mdiPlayCircle }}
            | Watch Walkthrough

    //- Video
    v-dialog(v-model="videoDialog" max-width="600")
      v-card(width="600").pt-5
        v-card-text
          iframe(
            v-if="videoDialog"
            align="middle"
            width="100%"
            src="https://www.youtube.com/embed/YjymFVmKX_U"
            frameborder="0"
            allowfullscreen
            :height="!$isMobile ? '400' : '175'"
          )
</template>

<script>
// utils
import { mdiArrowDown, mdiPlayCircle } from '@mdi/js';
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    this.panelTitle = 'User-friendly and time-efficient features for a more patient-centric care';
    this.metaTitle = 'MYCURE Features';
    return {
      videoDialog: false,
      // icons
      mdiArrowDown,
      mdiPlayCircle,
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-48'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-18']
        : ['pre-white-space', 'font-24'];
    },
    uspTitle () {
      return this.$isMobile
        ? this.panelTitle
        : parseTextWithNewLine(this.panelTitle, ['and ', 'for ']);
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
  },
  methods: {
    onWatch () {
      this.videoDialog = true;
    },
    startNow () {
      this.$emit('startNow');
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
  background-image: url('../../../assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-usp-cover.png') !important;
}
.bg-mobile {
  background-image: url('../../../assets/images/features/MYCURE-virtual-clinic-healthcare-practice-online-usp-cover-mobile.png');
  background-position: 0 235px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.usp-content {
  margin-top: 150px;
}
.mobile-form {
  margin-top: -57px;
}
</style>
