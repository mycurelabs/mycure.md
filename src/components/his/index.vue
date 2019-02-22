<template lang="pug">
  div#top
    panel-1
    //- panel-8
    //- panel-7
    experience-mycure
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import experienceMycure from '../commons/experience-mycure';
  import mcFooter from '../commons/mc-footer';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      'panel-1': panel1,
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
