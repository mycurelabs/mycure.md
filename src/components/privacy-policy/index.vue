<template lang="pug">
  div#top
    mc-navbar-home
    panel-1
    panel-2
    mc-footer
</template>


<script>
document.title = "MYCURE - Privacy Policy";

import mcNavbarHome from '../commons/mc-navbar-home';
import mcFooter from '../commons/mc-footer';
import panel1 from './panel-1';
import panel2 from './panel-2';
import VueScrollTo from 'vue-scrollto';

export default {
  data () {
    return {
    };
  }, 
  components: {
    mcNavbarHome,
    mcFooter,
    panel1,
    panel2
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>

<style scoped>

  p {
    /* font-size: 16px; */
    text-align: justify;
  }

  ul li {
    font-size: 15px;
  }
  
</style>