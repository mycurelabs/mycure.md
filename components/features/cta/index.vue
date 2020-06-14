<template lang="pug">
  div(style="margin-top: 10vh;").white
    generic-background-panel(
      :background-image="backgroundImage"
    )
      v-row(slot="content" align="center").pa-0
        v-col(v-if="!$isMobile" cols="12" md="6" offset-md="3" style="text-align: center; margin-bottom: 35vh;").pa-0
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18.px-1.mt-3 {{ uspSubtitle }}
          div(v-if="!$isMobile").text-field-container.mr-3
            v-text-field(
              elevation="2"
              v-model="email"
              background-color="white"
              outlined
              dense
              height="52"
              placeholder="myname@email.com"
            ).text-field-input
          v-btn(
            elevation="2"
            v-if="!$isMobile"
            color="accent"
            large
            width="160"
            height="50"
            @click="onGetStarted"
          ).text-none.font-16.p-7.mt-0.text-field-btn Get Started
        v-col(cols="12" v-if="$isMobile" one-line style="text-align: center;")
          h1.font-poppins.font-30.lh-title {{ uspTitle }}
          p.font-italic.font-18.font-weight-light.px-1.pt-1 {{ uspSubtitle }}
          div.text-field-container.white
            v-text-field(
              v-model="email"
              outlined
              placeholder="myname@email.com"
            )
            v-btn(
              color="accent"
              large
              @click="onGetStarted"
            ).text-none.font-16 Get Started Today
          img(
            v-lazy="require(`~/assets/images/${backgroundImageMobile}`)"
            alt="Features CTA"
            width="100%"
          ).pt-10
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
export default {
  components: {
    GenericBackgroundPanel,
  },
  data () {
    this.backgroundImage = 'mycure-final-cta-background-full.webp';
    this.backgroundImageMobile = 'mycure-final-cta-background-full.webp';
    this.uspTitle = 'Embrace a new habit.';
    this.uspSubtitle = 'Let your patients experience top-of-the-line services with the help of MYCURE.';
    return {
      email: '',
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
.text-field-container {
  height: 52px;
  border-radius: 2px;
  display: inline-block;
}
.text-field-container .text-field-input{
  width: 295px;
  opacity: 0.9;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
}
@media screen and (max-width: 1800px) {
  .col-content{
    margin-top: -300px;
  }
}
@media screen and (max-width: 1448px) {
  .col-content{
    margin-top: -268px;
  }
}
@media screen and (max-width: 1300px) {
  .col-content{
    margin-top: -160px;
  }
}
@media screen and (max-width: 1264px) {
  .text-field-container .text-field-input{
    width: 254px;
  }
}
@media screen and (max-width: 1038px) {
  .text-field-container {
    display: unset;
  }
}
@media screen and (device-height: 768px) and (orientation: landscape) {
  .text-field-container {
    display: inline-block !important;
  }
  .col-content{
    margin-top: -210px;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .text-field-container {
    display: inline-block !important;
  }
  .col-content{
    margin-top: -210px;
  }
}
@media screen and (device-height: 1024px) and (orientation: landscape) {
  .col-content{
    margin-top: -290px;
  }
}
</style>
