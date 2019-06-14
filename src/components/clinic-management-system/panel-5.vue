<template lang="pug">
  div(style="padding-top: 100px").transparent#panel5
    v-layout(row wrap justify-center)
      font.font-medium.lh-title.text-xs-center Designed for clinics of all shapes and sizes.
    br
    div.pt-5
      center
        img(width="75%" src="../../assets/images/mycure-home-web-complete-for-clinics-of-all-sizes-diagram.png" alt="All types of clinics").mb-3
    br
    br
    v-layout(row wrap justify-center)
      v-btn(
        :href="`${siginURL}/signup/choose`"
        color="#18c551" 
        large
      )
        strong.text-none.white--text.font-small Sign Up Now
    br
    v-layout(row wrap justify-center)
      em.font-small Have a question? 
        a.font-mc-blue 
          strong(@click="toggleChat") Start a quick chat
    panel5a(style="padding-top: 150px")
    filler(style="padding-top:150px")
      span(slot="multiFiller").font-l Does your clinic have more than 3 branches? 
      span(slot="chatWindow" @click="toggleChat").pointer.font-l.font-mc-blue Talk to us for custom pricing.
    panel5b(style="padding-top: 150px")

</template>

<script>
  import panel5a from './panel-5a';
  import panel5b from './panel-5b';
  import filler from '../commons/filler';

  export default {
    components: {
      panel5a,
      panel5b,
      filler
      
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      }
    }
  };
</script>

<style scoped>
  #panel5 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  .pointer:hover {
    cursor: pointer;
  }
</style>
