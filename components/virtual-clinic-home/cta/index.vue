<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      background-image-file-extension=".webp"
      :background-image-configs="backgroundImageConfigs"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
    ).cta-content
      v-row(slot="content" align="center" v-if="!$isMobile").row-content
        v-col(
          cols="12"
          md="6"
          offset-md="3"
          :class="[{'web-content-margin': !$isMobile}]"
        ).cta-title
          h1.font-40.lh-title {{ uspTitle }}
          p.font-italic.font-18.my-4.pre-white-space {{ uspSubtitle }}
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
          picture-source(
            :image="ctaMobileImage"
            image-file-extension=".webp"
            image-width="90%"
            image-alt="Home CTA"
            :image-classes="['pt-10']"
          )
</template>

<script>
// components
import GenericBackgroundPanel from '~/components/commons/generic-background-panel';
import PictureSource from '~/components/commons/PictureSource';

export default {
  components: {
    GenericBackgroundPanel,
    PictureSource,
  },
  data () {
    this.backgroundImage = 'mycure-final-cta-background-full';
    this.backgroundImageMobile = 'mycure-final-cta-background.png';
    this.ctaMobileImage = 'mycure-final-cta-background-image-right';
    this.uspTitle = 'Start your modern clinic experience with MYCURE';
    this.uspSubtitle = 'Explore all the tools and services you need to run\nand grow your clinic online and offline.';
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
    backgroundImageMobileConfigs () {
      return {
        'background-position': 'bottom',
      };
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
    height: 80vh;
  }
}
@media screen and (max-width: 1150px) {
  .row-content {
    height: 60vh;
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
    height: 100vh;
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
    height: 100vh;
  }
  .web-content-margin {
    margin-top: -96%;
  }
  .cta-title {
    margin-bottom: -96%;
  }
}
</style>
