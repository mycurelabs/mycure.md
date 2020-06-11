<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :customPath="customPath"
      :class="{'pt-12': $isMobile}"
    )
      v-row(slot="content" align="center").row-content
        v-col(v-if="!$isMobile" cols="12" md="5")
          h1(:class="titleClasses").font-poppins.font-40.lh-title {{ uspTitle }}
          p(:class="[centerText]").font-italic.font-18.px-1 {{ uspSubtitle }}
          div(v-if="!$isMobile").text-field-container.white
            v-text-field(
              v-model="email"
              outlined
              placeholder="myname@email.com"
            )
          v-btn(
            v-if="!$isMobile"
            block
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
        v-col(cols="12" md="5" v-if="$isMobile" one-line)
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
          ).text-none.font-weight-bold.font-18.mt-5 Get Started Today
          img(
            v-lazy="require(`~/assets/images/features/${backgroundImageMobile}`)"
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
    this.backgroundImage = 'MYCURE-virtual-clinic-healthcare-practice-online-features-I-final-cta-cover.webp';
    this.backgroundImageMobile = 'MYCURE-virtual-clinic-healthcare-practice-online-features-I-final-cta-cover-mobile.png';
    this.uspTitle = 'Embrace a new habit.';
    this.uspSubtitle = 'Let your patients experience top-of-the-line services with the help of MYCURE.';
    this.customPath = 'features/webp/';
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
  height: 58px;
  border: 1px solid black;
  border-radius: 2px;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  height: 100vh;
}

@media screen and (max-width: 1448px) {
  .row-content {
    height: 90vh;
  }
}
@media screen and (max-width: 1300px) {
  .row-content {
    height: 72vh;
  }
}
@media screen and (device-width: 768px) and (orientation: portrait) {
  .row-content {
    height: 84vh;
  }
}
@media screen and (device-height: 768px) and (orientation: landscape) {
  .row-content {
    height: 73vh;
  }
}
@media screen and (device-width: 1024px) and (orientation: portrait) {
  .row-content {
    height: 41vh;
  }
}
@media screen and (device-height: 1024px) and (orientation: landscape) {
  .row-content {
    height: 74vh;
  }
}
</style>
