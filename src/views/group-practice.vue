<template lang="pug">
  div.white#top
    mc-toolbar-home
    usp
    div.skyBg
      problems
      product
      demo
      finalWords
      filler
    mc-footer
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/group-practice/usp';
  import problems from '@/components/group-practice/problems';
  import product from '@/components/group-practice/product';
  import demo from '@/components/group-practice/demo';
  import finalWords from '@/components/group-practice/final-words';
  import filler from '@/components/commons/filler';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
        introText: 'How It Works',
        storyflowItems: [
          {
            title: 'Manage on the Go',
            text: 'Review your charts while on the way to your clinic, while doing your rounds, or while you’re at home because MYCURE is cloud-based.',
            image: 'mycure-web-banner-circles-private-01-on-the-go.png'
          },
          {
            title: 'Oversee Security',
            text: 'Personally secure and control access to your records. MYCURE adheres to the international data privacy standards.',
            image: 'mycure-web-banner-circles-private-02-security.png'
          },
          {
            title: 'Online Profile',
            text: 'New and regular patients may reach you easily by activating your own personal website that comes free with your clinic management system.',
            image: 'mycure-web-banner-circles-private-03-online-profile.png'
          }
        ]
      };
    }, 
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
        let message = `Hi, I would like to know more about  Group Practice.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      }
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

