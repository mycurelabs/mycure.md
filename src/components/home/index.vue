<template lang="pug">
  div
    panel-1
    panel-2
    panel-3
    panel-4
    panel-5
    panel-6
    panel-7
    panel-8
    panel-9(bg="white")
    mc-footer
      
</template>

<script>
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel6 from './panel-6';
  import panel7 from './panel-7';
  import panel8 from './panel-8';
  import panel9 from './panel-9';
  import mcFooter from '../commons/mc-footer';

  export default {
    components: {
      'panel-1': panel1,
      'panel-2': panel2,
      'panel-3': panel3,
      'panel-4': panel4,
      'panel-5': panel5,
      'panel-6': panel6,
      'panel-7': panel7,
      'panel-8': panel8,
      'panel-9': panel9,
      mcFooter
    }
  }
</script>
