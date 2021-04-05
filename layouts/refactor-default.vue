<template lang="pug">
  v-app#app
    mc-navbar(v-if="!loading")
    nuxt
    mc-footer(v-if="!loading")
</template>

<script>
// - components
import McNavbar from '~/components/home/AppNavbar';
import McFooter from '~/components/home/AppFooter';

export default {
  components: {
    McNavbar,
    McFooter,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    this.$vuetify.theme.dark = false;
    this.loading = false;
  },
};
</script>

<style>
#app {
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif, 'Arial';
};

/* --FONT CSS-- */

/* Font Styles */
.font-poppins {
  font-family: 'Poppins', 'sans-serif' !important;
}
.font-open-sans {
  font-family: 'Open Sans', 'sans-serif' !important;
}
/* Font Sizes */
.font-xl {
  font-size: 64px !important;
}
.font-l {
  font-size: 48px !important;
}
.font-m {
  font-size: 32px !important;
}
.font-s {
  font-size: 24px !important;
}
.font-xs {
  font-size: 18px !important;
}
.font-60 {
  font-size: 60px !important;
}
.font-50 {
  font-size: 50px !important;
}
.font-48 {
  font-size: 48px !important;
}
.font-45 {
  font-size: 45px !important
}
.font-40 {
  font-size: 40px !important
}
.font-36 {
  font-size: 36px !important
}
.font-35 {
  font-size: 35px !important
}
.font-30 {
  font-size: 30px !important
}
.font-25 {
  font-size: 25px !important
}
.font-24 {
  font-size: 24px !important
}
.font-22 {
  font-size: 22px !important
}
.font-21 {
  font-size: 21px !important
}
.font-18 {
  font-size: 18px !important
}
.font-16 {
  font-size: 16px !important
}
.font-14 {
  font-size: 14px !important
}
.font-12 {
  font-size: 12px !important
}
/* Font Color */
.font-gray {
  color: rgba(0,0,0,0.5);
}

/* --OTHER CSS-- */
.edge-divider{
  margin: 0% 11% !important;
}
.lh-title {
  line-height: 1.25em !important
}
.pre-white-space {
  white-space: pre;
}
.cta-btn {
  padding: 25px 30px 25px 30px;
}
/* TODO: Transfer to our-story/panel-5 and home/vid components then remove*/
.maleDoctor {
  margin: 0px -20px 0px 0px;
  z-index: 1;
}
.femaleDoctor {
  margin: 0px 0px 0px -20px;
  z-index: 1;
}
.vidPosition {
  z-index: 0;
}
/* TODO: Replace the elements that use these classes with the corresponding class
  then remove them after */

/* primary--text */
.font-mc-blue {
  color: #2e9fdf
}
/* white--text */
.font-mc-white {
  color: #ffffff
}
/* secondary */
.mc-grey {
  background-color: #616161 !important;
}
.header-gray {
  color: #4D4D4D;
}
.subtitle-gray{
  color: #777777;
}
</style>
