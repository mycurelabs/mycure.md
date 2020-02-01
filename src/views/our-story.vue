<template lang="pug">
  div#top
    panel1
    panel2
    panel3
    ProblemToSolve
    panel4
    panel5
    panel6.skyBg
    //- panel7
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/our-story/panel-1';
  import panel2 from '@/components/our-story/panel-2';
  import panel3 from '@/components/our-story/panel-3';
  import panel4 from '@/components/our-story/panel-4';
  import panel5 from '@/components/our-story/panel-5';
  import panel6 from '@/components/our-story/panel-6';
  import panel7 from '@/components/our-story/panel-7';
  import ProblemToSolve from '@/components/our-story/ProblemToSolve';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
        //
      };
    }, 
    components: {
      mcToolbarHome,
      mcFooter,
      panel1,
      panel2,
      panel3,
      panel4,
      panel5,
      panel6,
      panel7,
      ProblemToSolve
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>
