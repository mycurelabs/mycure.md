<template lang="pug">
  div
    mcNavbarHome
    panel-1
    panel-2
    panel-3
    panel-4
    panel-5
    panel-6
    panel-7
    panel-8
    panel-9
    mcFooter
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import panel9 from './panel-9';
  
  export default {
    components: {
      mcNavbarHome,
      mcFooter,
      panel1,
      panel2,
      panel3,
      panel4,
      panel5,
      panel6,
      panel7,
      panel8,
      panel9
    }
  };
</script>

<style>


</style>
