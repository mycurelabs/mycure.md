<template lang="pug">
  div#top.white
    mcNavbarHome
    panel1
    panel2
    panel3
    panel4
    panel5(style="margin-top: -2px")
    panel6
    panel6mobile(v-if="$isMobile")
    panel7mobile(v-if="$isMobile")
    panel8mobile(v-if="$isMobile")
    panel9mobile(v-if="$isMobile").showPanel
    panel10mobile(v-if="$isMobile").showPanel
    panel11mobile(v-if="$isMobile").showPanel
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
  import panel6mobile from './panel-6-mobile';
  import panel7mobile from './panel-7-mobile';
  import panel8mobile from './panel-8-mobile';
  import panel9mobile from './panel-9-mobile';
  import panel10mobile from './panel-10-mobile';
  import panel11mobile from './panel-11-mobile';
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
      panel7mobile,
      panel8mobile,
      panel9mobile,
      panel10mobile,
      panel11mobile
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>

</style>
