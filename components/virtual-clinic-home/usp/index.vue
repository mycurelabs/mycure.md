<template lang="pug">
  v-container(
    fluid
    :class="[backgroundClasses, backgroundImages]"
  )
    v-row(align="start" justify="center")
      v-col(cols="12" md="10" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }").text-center
        h3(:class="titleHeaderClasses").font-poppins.lh-title For Modern Doctors: Virtual is the new normal.
        //- h1(:class="titleClasses").font-poppins.lh-title Virtual is the new normal.
        p(:class="[centerText, titleHeaderClasses]").font-italic The first and only Telehealth-Focused&nbsp;
          br(v-if="!$isMobile")
          | Practice Management System
        div(v-if="!$isMobile").text-field-container.mr-3
          v-text-field(
            v-model="email"
            background-color="white"
            placeholder="myname@email.com"
            height="50"
            outlined
            dense
            :error-messages="emailErrorMessage"
          ).text-field-input
        v-btn(
          v-if="!$isMobile"
          color="primary"
          width="160"
          height="50"
          large
          @click="onGetStarted"
        ).text-none.font-16 Get Started
        img(v-if="!$isMobile" src="~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png" width="100%").robocop-image.mt-8
    v-row(v-if="$isMobile" justify="center" align="center").mobile-form.px-2.mt-n6
      v-col(cols="12")
        v-text-field(
          v-model="email"
          background-color="white"
          placeholder="myname@email.com"
          outlined
          :error-messages="emailErrorMessage"
        ).mb-6.text-field-input
        v-btn(
          color="primary"
          block
          large
          @click="onGetStarted"
        ).text-none.font-16 Get Started
    v-row(v-if="$isMobile" justify="center" align="end" no-gutters).ml-n3.mt-5
      v-col(cols="12")
        img(v-if="$isMobile" src="~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png" style="width: 100vw").robocop-image
</template>

<script>
// utils
import canUseWebp from '~/utils/can-use-webp';
export default {
  data () {
    return {
      email: '',
      canUseWebp: false,
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
        : ['pre-white-space', 'font-30'];
    },
    titleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-50']
        : ['pre-white-space', 'font-60'];
    },
    subtitleClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-21']
        : ['pre-white-space', 'font-24'];
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
  background-image: url('../../../assets/images/virtual-clinic-home/mycure-web-usp-cover-background-blur.webp');
}
.bg-png {
  background-image: url('../../../assets/images/virtual-clinic-home/mycure-web-usp-cover-background-blur.png');
}
.bg-mobile {
  background-image: url('../../../assets/images/virtual-clinic-home/mycure-web-usp-cover-background-blur.png');
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100%;
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
