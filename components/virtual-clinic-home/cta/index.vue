<template lang="pug">
  div.white
    generic-background-panel(
      background-image-file-extension=".webp"
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
    ).cta-content
      v-row(v-if="!$isMobile" slot="content" align="center").row-content
        v-col(
          cols="12"
          md="6"
          offset-md="3"
          align="center"
          align-self="start"
        )
          h1.font-40.lh-title {{ ctaTitle }}
          p.font-italic.font-18.my-4.pre-white-space {{ ctaSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-16.p-7.mt-5 Request an Invite
        img(
          v-if="$isMobile"
          v-lazy="panelImageSrc"
          alt="Home CTA"
          width="100%"
        ).pt-10
      v-row(slot="content" align="center" v-if="$isMobile")
        v-col(cols="12" align="center")
          h1.font-40.lh-title.px-5 {{ ctaTitle }}
          p.font-italic.font-18.px-5.my-2 {{ ctaSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-16.p-7.mt-3 Request an Invite
          picture-source(
            image-file-extension=".webp"
            image-width="90%"
            image-alt="Home CTA"
            :image="ctaMobileImage"
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
    this.ctaTitle = 'Start your modern clinic experience with MYCURE';
    this.ctaSubtitle = 'Explore all the tools and services you need to run\nand grow your clinic online and offline.';
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
.row-content {
  height: 80vh;
  text-align: center;
}
@media screen and (device-width: 360px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
}
@media screen and (device-width: 375px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
}
/* PAGE RESPONSIVENESS SPECIFIC FOR IPAD PRO SCREEN ONLY */
/* IPAD PRO ORIENTATION : PORTRAIT */
@media screen and (device-width: 1024px) and (device-height: 1366px) {
  .row-content {
    height: 50vh;
  }
}
/* IPAD PRO ORIENTATION : LANDSCAPE */
@media screen and (device-width: 1366px) and (device-height: 1024px) {
  .row-content {
    height: 50vh;
  }
}
</style>
