<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
      :background-image-mobile="backgroundImageMobile"
      :background-image-mobile-configs="backgroundImageMobileConfigs"
    ).cta-content
      v-row(slot="content" align="center").row-content
        v-col(
          v-if="!$isMobile"
          cols="12"
          md="6"
          offset-md="3"
          :class="[{'web-content-margin': !$isMobile}]"
        ).cta-title.text-center
          h1.font-40.lh-title {{ ctaTitle }}
          p.font-italic.font-18.my-4 {{ ctaSubtitle }}
          v-row(justify="center")
            v-col(cols="12" md="7")
              v-text-field(
                elevation="2"
                v-model="email"
                background-color="white"
                outlined
                dense
                height="52"
                placeholder="myname@email.com"
              )
            v-col(cols="12" md="3" align-self="start")
              v-btn(
                color="accent"
                large
                @click="onGetStarted"
              ).text-none.font-16.cta-btn Get Started
        v-col(
          v-if="$isMobile"
          cols="12"
        ).text-center.mobile-content
          h1.font-40.lh-title.px-5.cta-title {{ ctaTitle }}
          p.font-italic.font-18.px-5.my-2.cta-subtitle {{ ctaSubtitle }}
          v-row(justify="center")
            v-col(cols="10")
              v-text-field(
                elevation="2"
                v-model="email"
                background-color="white"
                outlined
                dense
                height="52"
                placeholder="myname@email.com"
              )
            v-col(cols="10")
              v-btn(
                color="accent"
                large
                @click="onGetStarted"
              ).text-none.font-16.cta-btn Get Started
          img(
            v-lazy="panelImageSrc"
            alt="Features CTA"
            width="90%"
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
    this.backgroundImageMobile = 'mycure-final-cta-background.webp';
    this.ctaTitle = 'Embrace a new habit.';
    this.ctaSubtitle = 'Let your patients experience top-of-the-line services with the help of MYCURE.';
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
    panelImageSrc () {
      return require('~/assets/images/mycure-final-cta-background-image-right.webp');
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
.web-content-margin {
  margin-top: -15%;
}
.row-content {
  height: 100vh;
  text-align: center;
  margin-top: 5vh;
}
.mobile-content {
  text-align: center;
}
@media screen and (max-width: 360px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
  .cta-btn {
    margin-left: 16px;
  }
  .row-content {
    height: 70vh;
  }
}
@media screen and (max-width: 414px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
  .cta-btn {
    margin-left: 16px;
  }
  .row-content {
    height: 70vh;
    margin-bottom: -5vh;
  }
}
@media screen and (max-width: 1020px) {
  .cta-content {
    width: 110%;
    margin-left: -5%;
  }
  .cta-btn {
    margin-left: 16px;
  }
  .row-content {
    height: 120vh;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .cta-content {
    position: relative;
    margin-top: -20%;
    z-index: 1;
  }
  .cta-btn{
    margin-top: 0 !important;
  }
  .row-content {
    height: 60vh;
  }
}
@media screen and (device-width: 1366px) and (orientation: landscape) {
  .row-content {
    height: 49vh;
  }
}
</style>
