<template lang="pug">
  div#top
    mc-toolbar-home
    panel-1
    panel-2.showPanel
    mc-footer(:webSky="false")
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/privacy-policy/panel-1';
  import panel2 from '@/components/privacy-policy/panel-2';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
      };
    }, 
    components: {
      mcToolbarHome,
      mcFooter,
      panel1,
      panel2
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>
  p {
    text-align: justify;
  }

  ul li {
    font-size: 15px;
  }
</style>