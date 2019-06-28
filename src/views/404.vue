<template lang="pug">
  div#top
    mcToolbarHome
    panel1
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/404/panel-1';
  
  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      panel1
    },
    data () {
      return {
        //
      };
    }  
  };
</script>

<style scoped>

</style>
