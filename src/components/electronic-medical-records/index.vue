<template lang="pug">
  div.white#top
    mc-toolbar-home
    panel1
    panel2
    panel3
    panel4
    panel5(style="margin-top: -20%")
    panel6.showPanel
    filler(v-if="$isMobile").showPanel.pt-5
      span(slot="privateFiller" style="font-size: 30px") Are you part of a group clinic?
      span(slot="chatWindow" @click="toggleChat" style="font-size: 30px").pointer.font-mc-blue Ask us how it works.
    panel7mobile(v-if="$isMobile").showPanel
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
  import panel6 from './panel-6';
  import panel7mobile from './panel-7-mobile';
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
      panel6,
      panel7mobile,
      filler
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Electronic Medical Records for Private Practice.`;
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

