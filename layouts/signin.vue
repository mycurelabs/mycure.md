<template lang="pug">
  v-app
    v-content(:class="contentClasses").content-padding
      div(:class="contentClasses")
        nuxt
      div(:class="footerClasses").footer-bg
</template>

<script>
import dayOrNight from '../utils/day-or-night';
export default {
  data () {
    return {
      dayOrNight: '',
    };
  },
  computed: {
    contentClasses () {
      return [this.dayOrNight === 'night' ? 'night-sky' : 'white'];
    },
    footerClasses () {
      return [this.dayOrNight === 'night' ? 'night-sky' : 'white', this.dayOrNight === 'night' ? 'night-bg' : 'day-bg'];
    },
  },
  mounted () {
    this.dayOrNight = dayOrNight();
    this.$vuetify.theme.dark = this.dayOrNight === 'night';
  },
};
</script>

<style scoped>
.content-padding {
  padding-top: 10px;
}

.footer-bg {
  background-repeat: repeat-x;
  background-position: bottom center;
  bottom: 0;
  min-height: 300px;
}

.day-bg {
  background-image: url('../assets/images/mycure-onboarding-background.png');
}

.night-bg {
  background-image: url('../assets/images/mycure-onboarding-background-dark-mode.png');
}

.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}

@media screen and (min-height: 700px) {
  .content-padding {
    padding-top: 15vh !important;
  }
}
</style>
