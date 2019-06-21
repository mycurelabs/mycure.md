<template lang="pug">
  div(style="padding-top: 100px").transparent#panel5.pt-4
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
        id="cms-signup-btn"
        @click.stop="handleCmsSignupBtn"
        color="#18c551"
        :href="`${siginURL}/signup/multi-specialty/step-1`"
        style="height: 60px; width: 250px"
      ).mt-3
        strong.font-small.white--text.text-none Get Started Today
    br
    v-layout(row wrap justify-center)
      em.font-small Have a question? 
        a.font-mc-blue 
          strong(@click="toggleChat") Start a quick chat
</template>

<script>
  export default {
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
      },
      handleCmsSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-cms-signup-btn',
          eventLabel: 'cms-signup-btn'
        });
      }
    }
  };
</script>

<style scoped>
  .pointer:hover {
    cursor: pointer;
  }
</style>
