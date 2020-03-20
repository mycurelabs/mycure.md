<template lang="pug">
  v-app(:dark="dayOrNight === 'night'")
    v-content
      v-container(
        fluid fill-height
        :class="[dayOrNight === 'day' ? 'white' : 'night-sky', page !== 'signup-specialized-step-2' ? 'default-bg' : 'corner-bg']"
        :style="styleConfig"
      )
        router-view
</template>

<script>
import dayOrNight from '../utils/day-or-night';
export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {};
  },
  computed: {
    styleConfig () {
      const style = {
        'background-image': this.dayOrNight === 'day' && this.page !== 'signup-specialized-step-2' ? `url(${require('../assets/images/mycure-onboarding-background.png')})`
          : this.dayOrNight === 'night' && this.page !== 'signup-specialized-step-2' ? `url(${require('../assets/images/mycure-onboarding-background-dark-mode.png')})`
          : `url(${require('../assets/images/MYCURE-Sign-Up-background-left-corner.png')}), url(${require('../assets/images/MYCURE-Sign-Up-background-right-corner.png')})`
      };
      return style;
    },
    page () {
      return this.$route.name;
    }
  }
};
</script>

<style scoped>
.default-bg {
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: bottom center;
}

.corner-bg {
  background-attachment: fixed;
  background-position: left center, right center;
}

.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}
</style>