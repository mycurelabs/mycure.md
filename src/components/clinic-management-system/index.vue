<template lang="pug">
  div.white#top
    mc-navbar-home
    panel1(style="padding-top: 5%")
    panel2
    panel3
    panel4
    panel5(v-if="!$isMobile")
    panel5mobile(v-if="$isMobile")
    panel6(v-if="$isMobile")
    mc-footer
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcFooter from '../commons/mc-footer';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel5mobile from './panel-5-mobile';
  import panel6 from './panel-6';
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
      panel5mobile,
      panel6
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>

</style>
