<template lang="pug">
  div#top.white
    mcToolbarHome
    panel1
    panel2.panelPadding
    panel3.panelPadding
    panel4
    panel5
    panel6
    panel7
    panel8
    panel9
    mcFooter
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/features/panel-1';
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
      panel1,
      panel2,
      panel3,
      panel4,
      panel5,
      panel6,
      panel7,
      panel8,
      panel9
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>

.panelPadding {
  padding: 120px 0 0px 0;
}
</style>
