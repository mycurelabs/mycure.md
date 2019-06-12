<template lang="pug">
  div#top.white
    mcToolbarHome
    panel1
    panel2
    panel3
    panel4
    panel5(style="margin-top: -2px")
    panel6
    panel6mobile(v-if="$isMobile")
    panel7mobile(v-if="$isMobile")
    panel8mobile(v-if="$isMobile").showPanel
    panel9mobile(v-if="$isMobile").showPanel
    panel10mobile(v-if="$isMobile").showPanel
    panel11mobile(v-if="$isMobile").showPanel
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/home/panel-1';
  import panel2 from '@/components/home/panel-2';
  import panel3 from '@/components/home/panel-3';
  import panel4 from '@/components/home/panel-4';
  import panel5 from '@/components/home/panel-5';
  import panel6 from '@/components/home/panel-6';
  import panel6mobile from '@/components/home/panel-6-mobile';
  import panel7mobile from '@/components/home/panel-7-mobile';
  import panel8mobile from '@/components/home/panel-8-mobile';
  import panel9mobile from '@/components/home/panel-9-mobile';
  import panel10mobile from '@/components/home/panel-10-mobile';
  import panel11mobile from '@/components/home/panel-11-mobile';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
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

<style>
  /* TODO: compare with the css in App.vue
  * Global styles must be in the App.vue
  */
  /* .mc-blue {
    background-color: #2e9fdf
  }

  .mc-dark-grey {
    background-color: #343a40
  }

  .mc-grey {
    background-color: #616161
  }

  .mc-light-grey {
    background-color: #f6f6f6
  }

  .mc-yellow {
    background-color: #ffff33
  }

  .font-mc-blue {
    color: #2e9fdf
  }
  
  .font-mc-dark-grey{
    color: #343a40
  }

  .font-mc-dark-grey{
    color: #2b2d3a 
  }

  .font-mc-light-grey {
    color: #f6f6f6
  }

  .font-mc-white {
    color: #ffffff
  }

  .font-xl {
    font-size: 60px
  }

  .font-large {
    font-size: 40px
  }

  .font-medium {
    font-size: 18px
  }

  .font-small {
    font-size: 16px;
  }

  .font-xs {
    font-size: 12px
  } */

</style>

