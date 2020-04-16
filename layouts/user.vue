<template lang="pug">
  v-app
    v-content
      div(
        :style="styleConfig"
        :class="[dayOrNight === 'night' ? 'night-sky' : 'day-bg']"
      ).bg-positions.pt-5.px-3#top
        nuxt
      div(:class="[dayOrNight === 'night' ? 'night-sky' : 'day-bg', 'fixed-footer']")
        v-img(:src="require(`../assets/images/mycure-onboarding-background${dayOrNight === 'night' ? '-dark-mode' : ''}.png`)" alt="Sign up background")
</template>

<script>
// - utils
import VueScrollTo from 'vue-scrollto';
import dayOrNight from '../utils/day-or-night';

export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {};
  },
  computed: {
    styleConfig () {
      const style = {
        'background-image': `url(${require('../assets/images/MYCURE-Sign-Up-background-left-corner.png')}), url(${require('../assets/images/MYCURE-Sign-Up-background-right-corner.png')})`,
      };
      return this.$isMobile ? {} : style;
    },
    page () {
      return this.$route.name;
    },
  },
  mounted () {
    VueScrollTo.scrollTo('#top', 500, { easing: 'ease' });
    this.$vuetify.theme.dark = this.dayOrNight === 'night';
  },
};
</script>

<style scoped>
.day-bg {
  background-color: #fafafa;
}

.bg-positions {
  background-position: left center, right center;
}

.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}

.fixed-footer {
  position: relative;
  bottom: 0;
}
</style>
