<template lang="pug">
  div#top
    panel-1
    panel-2
    syncbase-panel(:showVideoButton="true")
    flip
    panel-4
    panel-5
    panel-6
    //- panel-8
    //- panel-7
    experience-mycure(bg="white")
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import syncbasePanel from '../commons/syncbase-panel';
  import flip from './flip';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import experienceMycure from '../commons/experience-mycure';
  import mcFooter from '../commons/mc-footer';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      'panel-1': panel1,
      'panel-2': panel2,
      syncbasePanel,
      flip,
      'panel-4': panel4,
      'panel-5': panel5,
      'panel-6': panel6,
      'panel-7': panel7,
      'panel-8': panel8,
      experienceMycure,
      mcFooter
    },
    mounted() {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  }
</script>
