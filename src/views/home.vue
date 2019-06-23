<template lang="pug">
  //-TODO: Videos are still playing even when dialogs are closed
  div#top.white
    mcToolbarHome
    panel1
    storyflow(
      :storyflow="storyflowItems"
      :introduction="introText"
      :featuresButton="true"
    ).showPanel
    //- panel2mobile(v-if="$isMobile")
    panel2
    panel3
    panel4
    //- panel4mobile
    panel5
    panel6
    panel6mobile(v-if="$isMobile").showPanel
    //- panel7mobile(v-if="$isMobile")
    //- panel8mobile(v-if="$isMobile").showPanel
    //- panel9mobile(v-if="$isMobile").showPanel
    //- panel10mobile(v-if="$isMobile").showPanel
    //- panel11mobile(v-if="$isMobile").showPanel
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/home/panel-1';
  import panel2 from '@/components/home/panel-2';
  import panel2mobile from '@/components/home/panel-2-mobile';
  import panel3 from '@/components/home/panel-3';
  import panel4 from '@/components/home/panel-4';
  import panel4mobile from '@/components/home/panel-4-mobile';
  import panel5 from '@/components/home/panel-5';
  import panel5mobile from '@/components/home/panel-5-mobile';
  import panel6 from '@/components/home/panel-6';
  import panel7 from '@/components/home/panel-7';
  import panel8 from '@/components/home/panel-8';
  import panel9 from '@/components/home/panel-9';
  import panel6mobile from '@/components/home/panel-6-mobile';
  import panel7mobile from '@/components/home/panel-7-mobile';
  import panel8mobile from '@/components/home/panel-8-mobile';
  import panel9mobile from '@/components/home/panel-9-mobile';
  import panel10mobile from '@/components/home/panel-10-mobile';
  import panel11mobile from '@/components/home/panel-11-mobile';
  import storyflow from '@/components/commons/storyflow';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      panel1,
      panel2,
      panel2mobile,
      panel3,
      panel4,
      panel4mobile,
      panel5,
      panel5mobile,
      panel6,
      panel7,
      panel8,
      panel9,
      panel6mobile,
      panel7mobile,
      panel8mobile,
      panel9mobile,
      panel10mobile,
      panel11mobile,
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

