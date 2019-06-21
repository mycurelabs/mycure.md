<template lang="pug">
  div#top.white
    mcToolbarHome
    usp-1
    storyflow-2(
      :introduction="introText"
      :storyflow="storyflowItems"
      :hasTitle="false"
    ).showPanel
    diagram-3.showPanel
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp1 from '@/components/solo/1-usp';
  import storyflow2 from '@/components/commons/storyflow';
  import diagram3 from '@/components/solo/3-diagram';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp1,
      storyflow2,
      diagram3
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    data () {
      return {
        introText: 'Do you ...',
        storyflowItems: [
          {
            title: '',
            text: 'Want a clinic management system without relying heavily on the internet?',
            image: 'mycure-web-banner-circles-solo-01-doctor.png'
          },
          {
            title: '',
            text: 'Have security trust issues and want to secure your patient\'s medical \nrecords?',
            image: 'mycure-web-banner-circles-solo-02-privacy.png'
          },
          {
            title: '',
            text: 'Want to experience a clinic management system without spending?',
            image: 'mycure-web-banner-circles-solo-03-free.png'
          }
        ]
      };
    }
  };
</script>

