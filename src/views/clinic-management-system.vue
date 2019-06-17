<template lang="pug">
  div.white#top
    mc-toolbar-home
    panel1
    panel2
    panel3(v-if="!$isMobile")
    panel3mobile(v-if="$isMobile").showPanel
    panel4
    panel5(v-if="!$isMobile").showPanel
    panel5a(v-if="!$isMobile").showPanel
    panel6(v-if="$isMobile").showPanel
    filler(v-if="$isMobile").showPanel.pt-5
      span(slot="multiFiller" style="font-size: 30px") Does your clinic have more than 3 branches? 
      span(slot="chatWindow" @click="toggleChat" style="font-size: 30px").pointer.font-mc-blue Talk to us for custom pricing.
    panel7(v-if="$isMobile").showPanel
    mc-footer
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/clinic-management-system/panel-1';
  import panel2 from '@/components/clinic-management-system/panel-2';
  import panel3 from '@/components/clinic-management-system/panel-3';
  import panel3mobile from '@/components/clinic-management-system/panel-3-mobile';
  import panel4 from '@/components/clinic-management-system/panel-4';
  import panel5 from '@/components/clinic-management-system/panel-5';
  import panel5a from '@/components/clinic-management-system/panel-5a';
  import panel6 from '@/components/clinic-management-system/panel-6';
  import panel7 from '@/components/clinic-management-system/panel-7';
  import filler from '@/components/commons/filler';
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
      panel3mobile,
      panel4,
      panel5,
      panel5a,
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
