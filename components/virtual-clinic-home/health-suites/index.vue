<template lang="pug">
  div.pt-4
    div(v-if="isMobile").mobile.health-suites
      health-suites-mobile(
        @startFree="handleStartFreeBtn($event)"
        @learnMore="handleLearnMoreBtn($event)"
      )
    div(v-else).health-suites
      health-suites-web(
        @startFree="handleStartFreeBtn($event)"
        @learnMore="handleLearnMoreBtn($event)"
      )
</template>

<script>
import HealthSuitesWeb from './web';
import HealthSuitesMobile from './mobile';
export default {
  components: {
    HealthSuitesWeb,
    HealthSuitesMobile,
  },
  data () {
    return {
      isMobile: true,
    };
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
  },
  methods: {
    handleStartFreeBtn (btn) {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${btn}`,
        eventLabel: btn,
      });
    },
    handleLearnMoreBtn (btn) {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: `click-${btn}`,
        eventLabel: btn,
      });
    },
  },
};
</script>

<style scoped>
.health-suites {
  background-color: white;
  padding-bottom: 50px;
}
.mobile {
  margin-top: 10vh;
}

@media screen and (min-height: 1080px) {
  .health-suites {
    padding: 100px 0px 300px 0px !important;
  }
}
</style>
