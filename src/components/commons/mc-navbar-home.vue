<template lang="pug">
  div#home-nav.nav-box-shadow
    v-toolbar(flat).white
      v-layout(row wrap).pl-5
        v-flex(xs12 md2)
          img(src="../../assets/images/mycure-header-logo.png").logo-img
        v-spacer
        v-flex(xs12 md7).justify-content-right
          v-btn(flat)
            b FOR INDIVIDUAL DOCTORS
          v-btn(flat)
            b FOR MULTI-SPECIALTY CLINICS
          v-btn(flat)
            b LOG IN?
          v-btn(
            color="info"
            )
            b SIGN UP
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

  .nav-box-shadow {
    -webkit-box-shadow: 0px 0px 16px 0px rgba(148,148,148,1);
    -moz-box-shadow: 0px 0px 16px 0px rgba(148,148,148,1);
    box-shadow: 0px 0px 16px 0px rgba(148,148,148,1);
  }

  .logo-img {
    
  }


</style>
