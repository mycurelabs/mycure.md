<template lang="pug">
  v-app(data-server-rendered="true")#app
    v-content
      router-view
</template>


<script>

export default {
  name: 'App',
  data () {
    return {
      //
    };
  }
};
</script>

<style>

  @import url('https://fonts.googleapis.com/css?family=Poppins');

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

  .font-40 {
    font-size: 40px !important
  }

  .font-18 {
    font-size: 18px !important
  }
  
  .font-16 {
    font-size: 16px !important
  }

  .font-12 {
    font-size: 12px !important
  }

  .lh-title {
    line-height: 1.25em !important
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

  .panel-1{
      height: 100vh !important;
    }

  /* This class lets the panel avoid being covered by the web sky background */
  .showPanel {
    position: relative; 
    z-index: 1;
  }
</style>
