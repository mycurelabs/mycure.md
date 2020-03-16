<template lang="pug">
  div.white#top
    usp    
    div.skyBg
      problems
      product
      demo
      finalWords
      filler
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/group-clinics/usp';
  import problems from '@/components/group-clinics/problems';
  import product from '@/components/group-clinics/product';
  import demo from '@/components/group-clinics/demo';
  import finalWords from '@/components/group-clinics/final-words';
  import filler from '@/components/commons/filler';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      problems,
      product,
      demo,
      finalWords,
      filler
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about  Group Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
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

