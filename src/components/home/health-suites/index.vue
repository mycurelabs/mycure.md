<template lang="pug">
  div.pt-4
    div(v-if="!$isMobile").health-suites
      health-suites-web(
        @startFree="handleStartFreeBtn($event)"
        @learnMore="handleLearnMoreBtn($event)"
      )
    div(v-else).pt-5.health-suites
      health-suites-mobile(
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
    HealthSuitesMobile
  },
  methods: {
    handleStartFreeBtn (btn) {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: `click-${btn}`,
        eventLabel: btn
      });
    },
    handleLearnMoreBtn (btn) {
      this.$ga.event({
        eventCategory: 'link',
        eventAction: `click-${btn}`,
        eventLabel: btn
      });
    } 
  }
};
</script>

<style scoped>
.health-suites {
  background-color: white;
  padding-bottom: 100px;
}

@media screen and (min-height: 1080px) {
  .health-suites {
    padding: 100px 0px 350px 0px !important;
  }
}
</style>