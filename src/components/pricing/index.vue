<template lang="pug">
  div#top
    panel1
    panel2
    panel3
</template>

<script>
import panel1 from './panel-1';
import panel2  from './panel-2';
import panel3 from './panel-3';
import private_prac from './private';
import multispecialty from './multispecialty';
import VueScrollTo from 'vue-scrollto';


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
  },
  mounted () {
    VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
  }
};
</script>

<style scoped>

</style>
