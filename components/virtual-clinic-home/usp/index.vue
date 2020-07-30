<template lang="pug">
  fragment
    v-container(
      fluid
      :class="[backgroundClasses, backgroundImages]"
    )
      v-row(align="start" justify="center")
        v-col(cols="11" :class="{ 'pt-12 mt-4': $isMobile, 'pl-5 usp-content': !$isMobile }").text-center
          h3(:class="titleHeaderClasses").font-poppins.lh-title For Modern Doctors:
          h1(:class="titleClasses").font-poppins.lh-title Virtual is the new normal.
          p(:class="[centerText, subtitleClasses]").font-italic Build your virtual clinic today.
          div(v-if="!$isMobile").text-field-container.mr-3
            v-text-field(
              background-color="white"
              v-model="email"
              placeholder="myname@email.com"
              height="50"
              outlined
              dense
            ).text-field-input
          v-btn(
            v-if="!$isMobile"
            color="primary"
            width="160"
            height="50"
            large
            @click="onGetStarted"
          ).text-none.font-16 Get Started
          img(v-if="!$isMobile" src="~/assets/images/virtual-clinic-home/mycure-web-usp-telehealth-robocop-consult.png" width="100%").pt-5
    template(v-if="$isMobile")
      v-container(fluid).mobile-form
        v-row.px-6
          v-text-field(
            background-color="white"
            v-model="email"
            outlined
            placeholder="myname@email.com"
          ).text-field-input
        v-row.px-6.pt-3
          v-btn(
            block
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-16 Get Started
</template>

<script>
// utils
import canUseWebp from '~/utils/can-use-webp';
export default {
  data () {
    return {
      email: '',
      canUseWebp: false,
    };
  },
  computed: {
    centerText () {
      return { 'text-center': this.$isMobile };
    },
    titleHeaderClasses () {
      return this.$isMobile
        ? [this.centerText, 'font-30']
        : ['pre-white-space', 'font-36'];
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
  background-image: url('../../../assets/images/virtual-clinic-home/MYCURE-virtual-clinic-healthcare-practice-online-homepage-usp-cover-mobile.png');
  background-position: 0 275px;
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
}
.usp-content {
  margin-top: 100px;
}
.text-field-container {
  height: 50px;
  border-radius: 2px;
  display: inline-block;
}
.text-field-container .text-field-input {
  top: 1px;
  width: 295px;
  opacity: 0.9;
}
.mobile-form {
  margin-top: -125px;
}
.mobile-form .text-field-input {
  height: 56px;
}
.mobile-form .text-field-input >>> input {
  text-align: center
}
</style>
