<template lang="pug">
  div
    //- v-card(style="width: 70%")
    //-   v-card-text
    panel1
    private_prac
    panel3
</template>

<script>
import panel1 from './panel-1';
import panel2  from './panel-2';
import panel3 from './panel-3';
import private_prac from './private';
import multispecialty from './multispecialty';

export default {
  data () {
    return {
    };
  }, 

  components: {
    panel1,
    panel2,
    panel3,
    private_prac,
    multispecialty
  }
};
</script>

<style scoped>

</style>
