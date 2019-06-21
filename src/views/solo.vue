<template lang="pug">
  div#top.white
    mcToolbarHome
    usp-1
    storyflow-2(
      :introduction="introText"
      :storyflow="storyflowItems"
      :hasTitle="false"
    )
    diagram-3
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
            text: 'Live in a remote area with poor connection or no internet at all?',
            image: 'mycure-web-banner-circles-solo-01-doctor.png'
          },
          {
            title: '',
            text: 'Have security trust issues and want to secure your patient\'s medical records?',
            image: 'mycure-web-banner-circles-solo-02-privacy.png'
          },
          {
            title: '',
            text: 'Not have enough funds but want a complete clinic system for your personal use?',
            image: 'mycure-web-banner-circles-solo-03-free.png'
          }
        ]
      };
    }
  };
</script>

