<template lang="pug">
  div#top
    mc-navbar-home
    panel-1
    panel-2
    mc-footer
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import mcFooter from '../commons/mc-footer';
  import VueScrollTo from 'vue-scrollto';
  
  export default {
    components: {
      mcNavbarHome,
      'panel-1': panel1,
      'panel-2': panel2,
      mcFooter
    },
    mounted() {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  }
</script>

<style scoped>
  h4 {
    color: #0099cc;
  }

  p {
    /* font-size: 16px; */
    text-align: justify;
  }

  h6 {
    color: #0099cc;
    font-style: bold;
  }

  strong {
    font-size: 15px;
    color: #0099cc;
  }

  ul li {
    font-size: 15px;
  }
</style>