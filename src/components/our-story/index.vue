<template lang="pug">
  div#top
    panel-1
    panel-2
    panel-3
    panel-4
    panel-5
    panel-6
    join-us(bg="white")
    //- panel-9
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import joinUs from '../home/panel-9';
  // import panel9 from './panel-9';
  import mcFooter from '../commons/mc-footer';
  import VueScrollTo from 'vue-scrollto';

  export default {
    mounted() {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    components: {
      'panel-1': panel1,
      'panel-2': panel2,
      'panel-3': panel3,
      'panel-4': panel4,
      'panel-5': panel5,
      'panel-6': panel6,
      joinUs,
      // 'panel-9': panel9,
      mcFooter
    }
  }
</script>
