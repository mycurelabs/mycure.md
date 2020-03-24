<template lang="pug">
  div#top.white
    //- final panel
    mc-cta-bottom(
      parse-text
      :parseIndicators="['for']"
      :ctaContent="ctaContent"
      @btnClick="getStarted"
    )
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
// - components
import McCtaBottom from '~/components/commons/mc-cta-bottom';

export default {
  components: {
    McCtaBottom,
  },
  data () {
    this.ctaContent = {
      text: 'Find the best solution for your health facility',
      btnText: 'Get Started',
      image: 'mycure-web-footer',
    };
    return {};
  },
  // mounted () {
  //   this.$nuxt.$route.params.scrollHealthSuites ? this.getStarted()
  //     : VueScrollTo.scrollTo('#top', 500, { easing: 'ease' });
  // },
  methods: {
    getStarted () {
      VueScrollTo.scrollTo('#health-suites', 500, { easing: 'ease' });
    },
  },
};
</script>

<style scoped>
hr {
  border: 1px solid #2e9fdf;
  margin: auto;
  width: 10%;
}
</style>
