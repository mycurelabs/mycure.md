<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5.health-suites
      health-suites-web
    div(v-else).pt-5.health-suites
      health-suites-mobile
      
</template>

<script>
import HealthSuitesWeb from './web';
import HealthSuitesMobile from './mobile';
export default {
  components: {
    HealthSuitesWeb,
    HealthSuitesMobile
  }
};
</script>

<style scoped>
.health-suites {
  background-color: #075b76;
}
</style>