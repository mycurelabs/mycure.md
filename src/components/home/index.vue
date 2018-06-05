<template lang="pug">
  div
    panel-1
    panel-2
    panel-3
      
</template>

<script>
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  export default {
    components: {
      'panel-1': panel1,
      'panel-2': panel2,
      'panel-3': panel3
    }
  }
</script>
