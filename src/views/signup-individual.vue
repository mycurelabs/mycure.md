<template lang="pug">
  v-app(:dark="dayOrNight === 'night'")
    v-content
      v-container(
        fluid fill-height
        :class="dayOrNight === 'day' ? 'white' : ''"
        :style="{ 'background-image': dayOrNight === 'day' ? `url(${require('../assets/images/mycure-onboarding-background.png')})` : `url(${require('../assets/images/mycure-onboarding-background-dark-mode.png')})` }"
      ).bg
        router-view
</template>

<script>
import dayOrNight from '../utils/day-or-night';
export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {};
  }
};
</script>

<style scoped>
.bg {
  /* background-image: url('../assets/images/mycure-signup-062618-footer-BG.png'); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;
  /* background-size: 250px, contain; */
  /* background-position: bottom right 50px, bottom; */
}
</style>