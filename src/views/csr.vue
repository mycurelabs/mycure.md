<template lang="pug">
  div.white#top
    usp
    //- div.skyBg
    pillars.last-panel-padding
    //- filler
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/corporate-social-responsibility/usp';
  import pillars from '@/components/corporate-social-responsibility/pillars';
  import filler from '@/components/commons/filler';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      pillars,
      filler
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>
.pointer:hover {
  cursor: pointer;
}
.last-panel-padding {
  padding-bottom: 100px;
}
</style>

