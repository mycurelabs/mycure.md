<template lang="pug">
  div#top
    mc-navbar-home
    panel1
    panel2
    panel3
    panel4
    panel5
    panel6
    panel7
    mc-footer
</template>

<script>
  document.title = "MYCURE Our Story - Caring the Extra Mile";

  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import panel7 from './panel-7';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
        //
      };
    }, 
    components: {
      mcNavbarHome,
      mcFooter,
      panel1,
      panel2,
      panel3,
      panel4,
      panel5,
      panel6,
      panel7
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>

</style>
