<template lang="pug">
  div#top.white
    usp
    product
    painPoints
    howItWorks
    //- storyflow(
    //-   :introduction="introText"
    //-   :storyflow="storyflowItems"
    //-   :hasTitle="true"
    //- ).showPanel
    //- diagram.showPanel
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/solo/usp';
  // import storyflow from '@/components/commons/storyflow';
  // import diagram from '@/components/solo/diagram';
  import product from '@/components/solo/product';
  import painPoints from '@/components/solo/pain-points';
  import howItWorks from '@/components/solo/how-it-works';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      product,
      painPoints,
      howItWorks
      // storyflow,
      // diagram
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    },
    data () {
      return {
        introText: 'Why use SOLO by MYCURE?',
        // storyflowItems: [
        //   {
        //     title: 'Connectivity',
        //     text: 'You need a clinic management system without relying heavily on the internet.',
        //     image: 'mycure-web-banner-circles-solo-01-doctor.png'
        //   },
        //   {
        //     title: 'Security',
        //     text: 'You have security trust issues and want to personally secure your medical record database.',
        //     image: 'mycure-web-banner-circles-solo-02-privacy.png'
        //   },
        //   {
        //     title: 'It’s FREE',
        //     text: 'You want to experience using a clinic management system without spending.',
        //     image: 'mycure-web-banner-circles-solo-03-free.png'
        //   }
        // ]
      };
    }
  };
</script>

