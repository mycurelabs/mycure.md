<template lang="pug">
  div#top.white
    mcToolbarHome
    usp
    storyflow(
      :introduction="introText"
      :storyflow="storyflowItems"
      :hasTitle="true"
    ).showPanel
    diagram.showPanel
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/solo/usp';
  import storyflow from '@/components/commons/storyflow';
  import diagram from '@/components/solo/diagram';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      storyflow,
      diagram
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    data () {
      return {
        introText: 'Why use MYCURE Solo?',
        storyflowItems: [
          {
            title: 'Connectivity',
            text: 'You need a clinic management system without relying heavily on the internet.',
            image: 'mycure-web-banner-circles-solo-01-doctor.png'
          },
          {
            title: 'Security',
            text: 'You have security trust issues and want to personally secure your medical record database.',
            image: 'mycure-web-banner-circles-solo-02-privacy.png'
          },
          {
            title: 'It’s FREE',
            text: 'You want to experience using a clinic management system without spending.',
            image: 'mycure-web-banner-circles-solo-03-free.png'
          }
        ]
      };
    }
  };
</script>

