<template lang="pug">
  div#top.white
    mcToolbarHome
    panel1
    highlights(
      :introduction="introText"
      :highlights="highlightItems"
      :hasTitle="false"
    )
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import highlights from '@/components/commons/highlights';
  import panel1 from '@/components/solo/panel-1';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      highlights,
      panel1,
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    data () {
      return {
        introText: 'Do you ...',
        highlightItems: [
          {
            title: '',
            text: 'Live in a remote area with poor connection or no internet at all?',
            image: 'mycure-web-banner-last-panel-home-doctors.png'
          },
          {
            title: '',
            text: 'Have security trust issues and want to secure your patient\'s medical records?',
            image: 'mycure-web-banner-last-panel-home-doctors.png'
          },
          {
            title: '',
            text: 'Not have enough funds but want a complete clinic system for your personal use?',
            image: 'mycure-web-banner-last-panel-home-doctors.png'
          }
        ]
      };
    }
  };
</script>

