<template lang="pug">
  v-app(:dark="dayOrNight === 'night'")
    v-content
      v-container(
        fluid fill-height
        :class="dayOrNight === 'day' ? 'white' : 'night-sky'"
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
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: bottom center;
  /* background-size: 250px, contain; */
  /* background-position: bottom right 50px, bottom; */
}

.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}
</style>