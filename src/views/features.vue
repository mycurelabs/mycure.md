<template lang="pug">
  div#top.white
    //- panel1
    usp(:uspContents="uspContents")
    panel2
    panel3
    panel4
    panel5
    panel6
    panel7
    panel8
    panel9
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import usp from '@/components/commons/usp';
  import panel2 from '@/components/features/panel-2';
  import panel3 from '@/components/features/panel-3';
  import panel4 from '@/components/features/panel-4';
  import panel5 from '@/components/features/panel-5';
  import panel6 from '@/components/features/panel-6';
  import panel7 from '@/components/features/panel-7';
  import panel8 from '@/components/features/panel-8';
  import panel9 from '@/components/features/panel-9';
  import VueScrollTo from 'vue-scrollto';

  export default {
    components: {
      mcToolbarHome,
      mcFooter,
      usp,
      panel2,
      panel3,
      panel4,
      panel5,
      panel6,
      panel7,
      panel8,
      panel9
    },
    data () {
      return {
        // FOR USP PANEL
        uspContents: {
          metaTitle: 'MYCURE Features',
          title: 'User-friendly and time \nefficient features for a \nmore patient-centric \ncare.',
          btn: `/choose`,
          btnId: 'features-usp-signup-btn',
          btnText: 'Sign Up Now',
          img: 'mycure-cms-web-banner-first-panel-features',
        },
      };
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>