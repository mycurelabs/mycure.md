<template lang="pug">
  div#top
    panel-1
    panel-8
    panel-7
    panel-9
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import panel9 from './panel-9';
  import mcFooter from '../commons/mc-footer';

  export default {
    components: {
      'panel-1': panel1,
      'panel-7': panel7,
      'panel-8': panel8,
      'panel-9': panel9,
      mcFooter
    },
    mounted() {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  }
</script>
