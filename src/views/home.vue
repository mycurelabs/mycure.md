<template lang="pug">
  div#top.white
    mcToolbarHome
    panel1
    storyflow(:storyflow="storyflowItems")
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
        storyflowItems: [
          {
            title: 'Doctors',
            text: 'MYCURE | Complete Clinic \nManagement System wants to ease \nthe mission of Medical Practitioners: \nOur unsung Heroes.',
            image: 'mycure-web-banner-circles-home-01-doctors-league.png'
          },
          {
            title: 'Challenges',
            text: ' -Data privacy issues? \n-Unnecessary costs? \n-Unreliable internet connection? \n-Duplicate or missing patient charts? \n-Billing & collection discrepancies? \n-Crappy System?',
            image: 'mycure-web-banner-circles-home-02-challenges.png'
          },
          {
            title: 'Plans',
            text: 'The plan was to create a complete\n integrated, accessible, clinic \nmanagement system to help direct \n the flow in the facility, process, store, \nand secure data.',
            image: 'mycure-web-banner-circles-home-03-mycure-plan.png'
          }
        ]
      };
    }
  };
</script>

