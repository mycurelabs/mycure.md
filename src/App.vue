<template lang="pug">
  v-app(data-server-rendered="true")#app
    mc-toolbar-home
    v-content
      router-view
    mc-footer
</template>

<script>

import McToolbarHome from '@/components/commons/mc-toolbar-home';
import McFooter from '@/components/commons/mc-footer'; 

export default {
  name: 'App',
  components: {
    McToolbarHome,
    McFooter
  },
  data () {
    return {
      //
    };
  }
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Poppins');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans');
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  #app {
    max-width: 100% !important;
    overflow-x: hidden !important;
    font-family: 'Poppins', sans-serif !important;
  };

  .mc-blue {
    background-color: #2e9fdf
  }

  .mc-dark-grey {
    background-color: #343a40
  }

  .mc-grey {
    background-color: #616161
  }

  .mc-light-grey {
    background-color: #f5f5f5
  }

  .mc-yellow {
    background-color: #ffff33
  }

  .mc-green {
    background-color: #18c551
  }

  .font-work-sans {
    font-family: 'Work Sans', 'Poppins', sans-serif !important;
  }
  
  .font-mc-blue {
    color: #2e9fdf
  }
  
  .font-mc-dark-grey{
    /* color: #343a40 */
    color: #2b2d3a 
  }

  .font-mc-grey {
    color: #616161;
  }

  .font-mc-light-grey {
    color: #f6f6f6
  }

  .font-mc-white {
    color: #ffffff
  }
  
  .font-60 {
    font-size: 60px !important
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

  .padding-top-100 {
    padding-top: 100px;
  }

  .margin-top-100 {
    padding-top: 100px;
  }

  .lh-title {
    line-height: 1.25em !important
  }

  .pre-white-space {
    white-space: pre;
  }

  .hr-blue {
    height: 2px;
    width: 150px;
    background-color: #0099cc;
    padding: 1px;
    margin: 0 auto;
  }

  .bullet {
    height: 25px; 
    width: 25px; 
    background-color: #2e9fdf; 
    border-radius: 50%; 
    display: inline-block; 
    padding: 1px 
  }
  /* This class lets the panel avoid being covered by the web sky background */
  .showPanel {
    position: relative; 
    z-index: 1;
  }
  .cta-btn {
    padding: 25px 30px 25px 30px;
  }
  .lh-60 {
    line-height: 60px;
  }
  .skyBg {
    background-image: url('./assets/images/mycure-home-web-sky-background.png');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .width100 {
    width: 100%;
  }
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
</style>