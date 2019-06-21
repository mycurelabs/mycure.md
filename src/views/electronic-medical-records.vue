<template lang="pug">
  div.white#top
    mc-toolbar-home
    panel1
    //- panel2
    panel3
    panel4
    storyflow(:storyflow="storyflowItems")
    //- panel5
    panel6.showPanel
    panel7mobile(v-if="$isMobile").showPanel
    filler(v-if="$isMobile").showPanel.pt-5
      span(slot="privateFiller" style="font-size: 30px") Are you part of a group clinic?
      span(slot="chatWindow" @click="toggleChat" style="font-size: 30px").pointer.font-mc-blue Ask us how it works.
    mc-footer
</template>

<script>
  import mcToolbarHome from '@/components/commons/mc-toolbar-home';
  import mcFooter from '@/components/commons/mc-footer';
  import panel1 from '@/components/electronic-medical-records/panel-1';
  import panel2 from '@/components/electronic-medical-records/panel-2';
  import panel3 from '@/components/electronic-medical-records/panel-3';
  import panel4 from '@/components/electronic-medical-records/panel-4';
  import storyflow from '@/components/commons/storyflow';
  import panel5 from '@/components/electronic-medical-records/panel-5';
  import panel6 from '@/components/electronic-medical-records/panel-6';
  import panel7mobile from '@/components/electronic-medical-records/panel-7-mobile';
  import filler from '@/components/commons/filler';
  import VueScrollTo from 'vue-scrollto';

  export default {
    data () {
      return {
        storyflowItems: [
          {
            title: 'Manage on the Go',
            text: 'View your charts while you are traveling, having coffee or simply relaxing at home.',
            image: 'mycure-web-banner-circles-private-01-on-the-go.png'
          },
          {
            title: 'Oversee Security',
            text: 'Personally secure your records and control access to it via the admin status.',
            image: 'mycure-web-banner-circles-private-02-security.png'
          },
          {
            title: 'Online Profile',
            text: 'Maximize your online presence by using the online profile feature of MYCURE so that patients can reach you easily',
            image: 'mycure-web-banner-circles-private-03-online-profile.png'
          }
        ]
      };
    }, 
    components: {
      mcToolbarHome,
      mcFooter,
      panel1,
      panel2,
      panel3,
      panel4,
      storyflow,
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

