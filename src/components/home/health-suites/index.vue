<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5.health-suites
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
  background-color: #075b76;
}
</style>