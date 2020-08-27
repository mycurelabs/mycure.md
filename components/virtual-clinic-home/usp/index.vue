<template lang="pug">
  v-container(
    fluid
    :class="[backgroundClasses, backgroundImages]"
  )
    v-row(align="start" justify="center")
      v-col(cols="12" md="10" :class="{ 'pt-12 mt-4': $isMobile, 'usp-content': !$isMobile }").text-center
        h3(:class="titleHeaderClasses").font-poppins.lh-title For Modern Doctors: Virtual is the new normal.
        p(:class="[centerText, subtitleClasses]") The first and only Telehealth-Focused Practice Management System
        div(v-if="!$isMobile").text-field-container.mr-3
          v-text-field(
            v-model="email"
            background-color="white"
            placeholder="johndoe@gmail.com"
            height="50"
            outlined
            dense
            :error-messages="emailErrorMessage"
          ).text-field-input
        v-btn(
          v-if="!$isMobile"
          color="primary"
          height="50"
          large
          @click="onGetStarted"
        ).text-none.font-16 Request an Invite
        v-hover.mt-8
          template(v-slot:default="{ hover }")
            v-card(flat)
              v-card-text.pa-0
                img(
                  hover
                  v-show="!$isMobile && isImageLoaded"
                  v-lazy="require(`~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png`)"
                  width="100%"
                  alt="Robocop Consult"
                  @load="loadedImage"
                ).robocop-image
              v-fade-transition
                v-overlay(
                  v-if="hover"
                  absolute
                  opacity="0.8"
                )
                  h2.mb-4 Try it Now
                  p.body-1 Take a sneak peek of how a MYCURE Virtual Consult looks like inside. No sign up needed!
                  v-btn(
                    x-large
                    color="success"
                    style="min-width: 150px"
                    :disabled="loadingVirtualConsult"
                    :loading="loadingVirtualConsult"
                    @click="createVirtualConsult"
                  ).text-none #[b Go!]
        div(v-show="!$isMobile && !isImageLoaded").white.empty-image-container
    v-row(v-if="$isMobile" justify="center" align="center").mobile-form.px-2.mt-n6
      v-col(cols="12")
        v-text-field(
          v-model="email"
          background-color="white"
          placeholder="johndoe@gmail.com"
          outlined
          :error-messages="emailErrorMessage"
        ).mb-6.text-field-input
        v-btn(
          color="primary"
          block
          large
          @click="onGetStarted"
        ).text-none.font-16 Request an Invite
    v-row(v-if="$isMobile" justify="center" align="end" no-gutters).ml-n3.mt-5
      v-col(cols="12")
        img(v-if="$isMobile" v-lazy="require(`~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png`)" style="width: 100vw" alt="Robocop Consult").robocop-image
</template>

<script>
// utils
import { v4 as uuidv4 } from 'uuid';
import canUseWebp from '~/utils/can-use-webp';

export default {
  data () {
    return {
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
    createVirtualConsult () {
      try {
        this.loadingVirtualConsult = true;
        setTimeout(() => {
          this.loadingVirtualConsult = false;
          const uid = uuidv4();
          const startAt = Date.now();
          const url = `${process.env.CMS_URL_BASE}/virtual-consult-experience/${uid}?startAt=${startAt}`;
          window.open(url, '_blank', 'noopener, noreferrer');
          alert();
        }, 1500);
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
