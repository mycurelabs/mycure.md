<template lang="pug">
  div#top
    mcNavbarHome
    panel1
    panel2
    mcFooter
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';
  import panel1 from './panel-1';
  import panel2  from './panel-2';
  import private_prac from './private';
  import multispecialty from './multispecialty';
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
      private_prac,
      multispecialty
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>

</style>
