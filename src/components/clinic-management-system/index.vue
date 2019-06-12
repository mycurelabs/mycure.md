<template lang="pug">
  div.white#top
    mc-toolbar-home
    panel1
    panel2
    panel3
    panel4
    panel5(v-if="!$isMobile").showPanel
    panel5mobile(v-if="$isMobile").showPanel
    panel6(v-if="$isMobile").showPanel
    filler(v-if="$isMobile").showPanel.pt-5
      span(slot="multiFiller" style="font-size: 30px") Does your clinic have more than 3 branches? 
      span(slot="chatWindow" @click="toggleChat" style="font-size: 30px").pointer.font-mc-blue Talk to us for custom pricing.
    panel7(v-if="$isMobile").showPanel
    mc-footer
</template>

<script>
  import mcToolbarHome from '../commons/mc-toolbar-home';
  import mcFooter from '../commons/mc-footer';
  import panel1 from './panel-1';
  import panel2 from './panel-2';
  import panel3 from './panel-3';
  import panel4 from './panel-4';
  import panel5 from './panel-5';
  import panel5mobile from './panel-5-mobile';
  import panel6 from './panel-6';
  import panel7 from './panel-7';
  import filler from '../commons/filler';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
        //
      };
    }, 
    components: {
      mcToolbarHome,
      mcFooter,
      panel1,
      panel2,
      panel3,
      panel4,
      panel5,
      panel5mobile,
      panel6,
      panel7,
      filler
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      }
    },
    mounted () {
      VueScrollTo.scrollTo(`#top`, 500, { easing: 'ease' } );
    }
  };
</script>

<style scoped>
  .pointer:hover {
    cursor: pointer;
  }
</style>
