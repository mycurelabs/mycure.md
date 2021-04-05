<template lang="pug">
  v-container(
    fluid
    :class="[backgroundClasses, backgroundImages]"
  )
    v-row(align="start" justify="center")
      v-col(cols="12" md="10" :class="{ 'pt-12 mt-4': $isMobile, 'usp-content': !$isMobile }").text-center
        h3(:class="titleHeaderClasses").font-poppins.lh-title For Modern Doctors: Virtual is the new normal.
        p(:class="[centerText, subtitleClasses]") The first and only Telehealth-Focused Practice Management System
        v-btn(
          v-if="!$isMobile"
          color="primary"
          width="190"
          height="50"
          large
          :disabled="loadingVirtualConsult"
          :loading="loadingVirtualConsult"
          @click="createVirtualConsult"
        ).text-none.font-16 #[b Try Virtual Clinic]
        v-btn(
          v-if="!$isMobile"
          color="primary"
          width="190"
          height="50"
          outlined
          large
          @click="videoDialog = true"
        ).text-none.font-16.ml-3 Watch Video
        img(
          hover
          v-show="!$isMobile && isImageLoaded"
          v-lazy="require(`~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png`)"
          width="100%"
          alt="Robocop Consult"
          @load="loadedImage"
        ).mt-8.robocop-image
    v-row(v-if="$isMobile" justify="center" align="center").mobile-form.px-2.mt-n6
      v-col(cols="12")
        v-btn(
          color="primary"
          block
          large
          @click="createVirtualConsult"
        ).text-none.font-16.font-weight-bold.mb-6 Try Virtual Clinic
        v-btn(
          color="white"
          block
          large
          @click="videoDialog = true"
        ).text-none.font-16.primary--text Watch Video
    v-row(v-if="$isMobile" justify="center" align="end" no-gutters).ml-n3.mt-5
      v-col(cols="12")
        img(v-if="$isMobile" v-lazy="require(`~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png`)" style="width: 100vw" alt="Robocop Consult").robocop-image
    v-dialog(v-model="videoDialog" max-width="700")
      v-card(width="700").pt-5
        v-card-text
          iframe(
            v-if="videoDialog"
            align="middle"
            width="100%"
            src="https://www.youtube.com/embed/0XO_1sbyPc8"
            frameborder="0"
            allowfullscreen
            :height="!$isMobile ? '400' : '175'"
          )
</template>

<script>
// utils
import { v4 as uuidv4 } from 'uuid';
import canUseWebp from '~/utils/can-use-webp';

export default {
  data () {
    return {
      videoDialog: false,
      email: '',
      loadingVirtualConsult: false,
      canUseWebp: false,
      isImageLoaded: false,
      emailErrorMessage: '',
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleHeaderClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-30']
        : ['font-30'];
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-50']
        : ['pre-white-space', 'font-60'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-21']
        : ['font-20'];
    },
    backgroundClasses () {
      return !this.$isMobile ? 'bg' : 'bg-mobile';
    },
    backgroundImages () {
      return this.canUseWebp ? 'bg-webp' : 'bg-png';
    },
  },
  async mounted () {
    this.canUseWebp = await canUseWebp();
  },
  methods: {
    onGetStarted () {
      if (!this.email) {
        this.emailErrorMessage = 'Please enter your email';
        return;
      }
      this.$emit('getStarted', this.email);
    },
    loadedImage () {
      this.isImageLoaded = true;
    },
    isChrome () {
      return !!window.chrome;
    },
    createVirtualConsult () {
      try {
        const uuid = uuidv4();
        const startAt = Date.now();
        const url = `${process.env.CMS_URL_BASE}/virtual-consult-experience/${uuid}?startAt=${startAt}`;
        if (!this.isChrome()) {
          window.$amplitude.logEvent('ACQ001 Btn > Try Virtual Clinic');
          window.open(url, '_blank', 'noopener, noreferrer');
        } else {
          this.loadingVirtualConsult = true;
          setTimeout(() => {
            this.loadingVirtualConsult = false;
            window.$amplitude.logEvent('ACQ001 Btn > Try Virtual Clinic');
            window.open(url, '_blank', 'noopener, noreferrer');
          }, 1500);
        }
      } catch (e) {
        console.error(e);
      }
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
/* DO NOT DELETE THIS YET */
/* .bg-webp {
  background-image: url('../../../assets/images/virtual-clinic-home/mycure-web-usp-cover-background-blur.webp');
}
.bg-png {
  background-image: url('../../../assets/images/virtual-clinic-home/mycure-web-usp-cover-background-blur.png');
} */
.bg-mobile {
  background-image: url('../../../assets/images/virtual-clinic-home/mycure-web-usp-cover-background-blur.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}
.usp-content {
  margin-top: 90px;
}
.text-field-container {
  height: 50px;
  border-radius: 2px;
  display: inline-block;
}
.robocop-image {
  box-shadow: 5px 5px 30px 5px #999999;
}
.empty-image-container {
  height: 350px;
}
.text-field-container .text-field-input {
  top: 1px;
  width: 295px;
  opacity: 0.9;
}
.mobile-form .text-field-input {
  height: 56px;
}
.mobile-form .text-field-input >>> input {
  text-align: center
}
</style>
