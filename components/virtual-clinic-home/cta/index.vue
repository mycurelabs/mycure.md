<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
    ).cta-content
      v-row(slot="content" align="center" v-if="!$isMobile").row-content
        v-col(
          cols="12"
          md="6"
          offset-md="3"
          :class="[{'web-content-margin': !$isMobile}]"
        ).cta-title
          h1.font-40.lh-title {{ uspTitle }}
          p.font-italic.font-18.my-4 {{ uspSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-16.p-7.mt-5.cta-btn Get Started
        img(
          v-if="$isMobile"
          v-lazy="panelImageSrc"
          alt="Home CTA"
          width="100%"
        ).pt-10
      v-row(slot="content" align="center" v-if="$isMobile").mobile-content
        v-col(
          cols="12"
        )
          h1.font-40.lh-title.px-5.cta-title {{ uspTitle }}
          p.font-italic.font-18.px-5.my-2.cta-subtitle {{ uspSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-16.p-7.mt-3.cta-btn Get Started
          img(
            v-lazy="panelImageSrc"
            alt="Home CTA"
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
    this.uspTitle = 'Start your modern clinic experience with MYCURE';
    this.uspSubtitle = 'Explore all the tools and services you need to run and grow your clinic online and offline.';
    return {
      email: '',
    };
  },
  computed: {
    backgroundImageConfigs () {
      return {
        width: '100%',
        position: 'absolute',
        left: '0',
        bottom: '0',
      };
    },
    panelImageSrc () {
      return require('~/assets/images/mycure-final-cta-background-full.webp');
    },
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.web-content-margin {
  margin-top: -20%;
}
.row-content {
  height: 100vh;
  text-align: center;
  margin-bottom: 10vh;
}
.mobile-content {
  text-align: center;
}
@media screen and (max-width: 1800px) {
  .row-content {
    height: 70vh;
  }
}
@media screen and (max-width: 1650px) {
  .row-content {
    height: 62vh;
  }
}
@media screen and (max-width: 1448px) {
  .row-content {
    height: 60vh;
  }
}
@media screen and (max-width: 1370px) {
  .row-content {
    height: 57vh;
  }
}
@media screen and (max-width: 1290px) {
  .row-content {
    height: 52vh;
  }
}
@media screen and (max-width: 1150px) {
  .row-content {
    height: 47vh;
  }
}
@media screen and (max-width: 1050px) {
  .row-content {
    height: 43vh;
  }
}
@media screen and (device-width: 360px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
    margin-bottom: -10%;
  }
  .cta-btn {
    margin-left: 16px;
  }
}
@media screen and (device-width: 375px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
    margin-bottom: -10%;
  }
  .cta-btn {
    margin-left: 16px;
  }
}
@media screen and (device-width: 768px) and (orientation: portrait) {
  .cta-content {
    width: 110%;
    margin-top: 10%;
    margin-left: -5%;
    margin-bottom: -10%;
  }
  .cta-title {
    margin-left: 3%;
  }
  .cta-subtitle {
    margin-left: 3%;
  }
  .cta-btn {
    margin-left: 50px;
  }
}
@media screen and (device-height: 768px) and (orientation: landscape) {
  .cta-title {
    margin-bottom: -55%;
  }
  .row-content {
    height: 48vh;
  }
  .web-content-margin {
    margin-top: -55%;
  }
  .cta-btn{
    margin-top: 0 !important;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .cta-content {
    position: relative;
    margin-top: -85%;
    z-index: 1;
  }
  .cta-title {
    margin-bottom: -214%;
  }
  .row-content {
    height: 90vh;
  }
  .web-content-margin {
    margin-top: -118%;
  }
  .cta-btn{
    margin-top: 0 !important;
  }
}
@media screen and (device-width: 1366px) and (orientation: landscape) {
  .row-content {
    height: 49vh;
  }
  .web-content-margin {
    margin-top: -96%;
  }
  .cta-title {
    margin-bottom: -96%;
  }
}
</style>
