<template lang="pug">
  div#top
    mcNavbarHome
    panel1
    panel2
    panel3
    panel4
    panel5
    panel6(v-if="!$isMobile")
    panel6mobile(v-else)
    panel7
    panel8
    panelBeforeFooter
    mcFooter
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';
  import panelBeforeFooter from '../commons/panel-before-footer';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import panel6mobile from './panel-6-mobile';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import VueScrollTo from 'vue-scrollto';

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
      panel6mobile,
      panel7,
      panel8,
      panelBeforeFooter
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>

</style>
