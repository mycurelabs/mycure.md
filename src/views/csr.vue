<template lang="pug">
  div.white#top
    mc-toolbar-home
    usp
    div.skyBg
      pillars
      filler
    mc-footer
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
    methods: {
      // toggleChat () {
      //   let message = `Hi, I would like to know more about  Group Practice.`;
      //   window.$crisp.push(['do', 'chat:toggle']);
      //   window.$crisp.push(['do', 'message:send', ['text', message]]);
      // }
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
</style>

