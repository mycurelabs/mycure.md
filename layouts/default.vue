<template lang="pug">
  v-app#app
    mc-navbar
    v-content
      nuxt
    mc-footer
</template>

<script>
// - components
import McNavbar from '~/components/commons/mc-navbar';
import McFooter from '~/components/commons/mc-footer';

export default {
  components: {
    McNavbar,
    McFooter,
  },
  mounted () {
    this.$vuetify.theme.dark = false;
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:400,700,900');
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700');

#app {
  max-width: 100%;
  overflow-x: hidden;
  font-family: 'Source Sans Pro', sans-serif;
};

h1 {
  font-family: 'Work Sans', 'Source Sans Pro', sans-serif;
}

/* --FONT CSS-- */

/* Font Styles */
.font-work-sans {
  font-family: 'Work Sans', 'Source Sans Pro', sans-serif !important;
}
.font-source-sans {
  font-family: 'Source Sans Pro', 'Source Sans Pro', sans-serif !important;
/* Font Sizes */
}
.font-xl {
  font-size: 50px !important;
}
.font-l {
  font-size: 30px !important;
}
.font-m {
  font-size: 24px !important;
}
.font-s {
  font-size: 21px !important;
}
.font-60 {
  font-size: 60px !important;
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

/* --OTHER CSS-- */
.lh-title {
  line-height: 1.25em !important
}
.pre-white-space {
  white-space: pre;
}
/* This class lets the panel avoid being covered by the web sky background */
.showPanel {
  position: relative;
  z-index: 1;
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
</style>
