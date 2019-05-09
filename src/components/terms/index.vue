<template lang="pug">
  div.white
    mcNavbarHome
    panel-1
    panel-2
    mcFooter
</template>

<script>
document.title = "MYCURE - Terms and Conditions";

import mcNavbarHome from '../commons/mc-navbar-home';
import mcFooter from '../commons/mc-footer';
import panel1 from './panel-1';
import panel2 from './panel-2';

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
