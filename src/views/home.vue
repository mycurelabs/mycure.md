<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    mcToolbarHome
    usp
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introText"
      :featuresButton="true"
    ).showPanel
    vid
    product
    unique
    security
    table
    tableMobile(v-if="$isMobile").showPanel
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/home/usp';
  import vid from '@/components/home/vid';
  import product from '@/components/home/product';
  import unique from '@/components/home/unique';
  import security from '@/components/home/security';
  import table from '@/components/home/table';
  import tableMobile from '@/components/home/table-mobile';
  import storyflow from '@/components/commons/storyflow';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      vid,
      product,
      unique,
      security,
      table,
      tableMobile,
      storyflow
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    data () {
      return {
        introText: 'A Technology with a Powerful Mission',
        storyflowItems: [
          {
            title: 'Built for Medical Practitioners',
            text: 'To the unsung heroes who inspire us everyday, you deserve access to a more reliable clinic management system that will help ease your mission to save lives.',
            image: 'mycure-web-banner-circles-home-01-doctors-league.png'
          },
          {
            title: 'Solving Everyday Challenges',
            text: 'Data privacy issues, duplicate or missing patient charts, billing & collection discrepancies, cutting down unnecessary costs, and having unreliable internet connection should be the least of your worries.',
            image: 'mycure-web-banner-circles-home-02-challenges.png'
          },
          {
            title: 'Secure, Integrated Medical Records',
            text: 'Our goal at MYCURE is to build an accessible, integrated, and complete clinic management system that simplifies work, helps direct the flow in every health facility, while securely storing and retrieving medical records.',
            image: 'mycure-web-banner-circles-home-03-mycure-plan.png'
          }
        ]
      };
    }
  };
</script>

