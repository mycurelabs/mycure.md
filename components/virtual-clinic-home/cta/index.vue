<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :customPath="customPath"
      :webContainerStyleConfigs="webContainerStyleConfigs"
    ).cta-content
      v-row(slot="content" align="center" v-if="!$isMobile")
        v-col(
          cols="12"
          md="5"
          offset-md="6"
          :class="[{'web-content-margin': !$isMobile}]"
        ).cta-title
          h1.font-40.lh-title {{ uspTitle }}
          p.font-italic.font-18 {{ uspSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5.cta-btn Get Started
        img(
          v-if="$isMobile"
          v-lazy="panelImageSrc"
          alt="Home CTA"
          width="100%"
        ).pt-10
      v-row(slot="content" align="center" v-if="$isMobile")
        v-col(
          cols="12"
        )
          h1.font-40.lh-title.px-5.cta-title {{ uspTitle }}
          p.font-italic.font-18.px-5.cta-subtitle {{ uspSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5.cta-btn Get Started
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-final-cta-cover.png';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-homepage-final-cta-cover-mobile.png';
    this.uspTitle = 'Start your modern clinic experience with MYCURE';
    this.uspSubtitle = 'Explore all the tools and services you need to run and grow your clinic online and offline.';
    this.customPath = 'virtual-clinic-home/';
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
    webContainerStyleConfigs () {
      return { position: 'relative' };
    },
    panelImageSrc () {
      return require(`~/assets/images/virtual-clinic-home/${this.backgroundImageMobile}`);
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
  margin-top: 190px;
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
@media screen and (device-width: 768px) {
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
@media screen and (device-width: 1024px) {
  .cta-content {
    position: absolute;
    margin-top: -80%;
    z-index: 1;
  }
}
@media screen and (device-width: 1024px) {
  .cta-title {
    margin-bottom: -245%;
  }
}
@media screen and (device-width: 1366px) {
  .cta-title {
    margin-bottom: -60%;
  }
}
</style>
