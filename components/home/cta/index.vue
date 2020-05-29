<template lang="pug">
  div.white
    generic-background-panel(
      :background-image="backgroundImage"
      :background-image-configs="backgroundImageConfigs"
    )
      v-row(slot="content" align="center").row-content
        v-col(
          cols="12"
          md="5"
          offset-md="6"
          class="[{'web-content-margin': !isMobile}]"
        )
          h1.font-40.lh-title {{ uspTitle }}
          p.font-italic.font-18 {{ uspSubtitle }}
          v-btn(
            color="accent"
            large
            @click="onGetStarted"
          ).text-none.font-weight-bold.font-18.mt-5 Get Started
          img(
            v-if="isMobile"
            v-lazy="require(`~/assets/images/${backgroundImageMobile}`)"
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
    return {
      email: '',
      isMobile: true,
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
  },
  watch: {
    $isMobile (val) {
      this.isMobile = val;
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    onGetStarted () {
      this.$emit('getStarted');
    },
  },
};
</script>

<style scoped>
.text-field-container {
  height: 52px;
}
.web-content-margin {
  margin-top: 80px;
}
.row-content {
  min-height: 100vh;
}
</style>
