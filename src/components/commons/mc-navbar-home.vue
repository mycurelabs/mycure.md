<template lang="pug">
  div#home-nav
    v-toolbar(flat).my-3.white
      v-layout(row wrap justify-center).pl-5
        v-flex(xs12 md2).pt-3
          img(src="../../assets/images/mycure-header-logo.png").logo-img
        v-spacer
        v-flex(xs12 md7).justify-content-right.pl-4.pt-2
          v-btn(flat)
            strong.font-xs.tab FOR INDIVIDUAL DOCTORS
          v-btn(flat)
            strong.font-xs.tab FOR MULTI-SPECIALTY CLINICS
          v-btn(flat)
            strong.font-xs.tab LOGIN
          v-btn(
            color="info"
            )
            strong.font-xs.tab SIGN UP
</template>

<script>
export default {
  
};
</script>

<style scoped>
  #home-nav {
    /* padding-left: 0px;
    padding-right: 0px;
    padding-top: 5px; */
    position: fixed;
    width: 100vw;
    background-color: white !important;
    z-index: 999999;
  }

  .logo-img {
    height: 60%;
  }

  .tab {
    letter-spacing: 0.5px
  }

</style>
