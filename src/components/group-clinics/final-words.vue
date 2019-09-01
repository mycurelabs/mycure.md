<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      panelBeforeFooter.pt-5
        img(slot="emr-img" src="../../assets/images/mycure-web-banner-last-panel-group-of-doctors.png" alt="Doctor best version").banner
        span(slot="emr-txt").font-48.lh-title It's always better when we work together.
        span(slot="cms-sub-txt").font-18 Experience what you can do more with MYCURE technology by your side.
        v-btn(
          id="group-signup-btn"
          href="https://mycurecreatives.typeform.com/to/DiZQQY"
          slot="sign-up-button"
          target="_blank"
          color="#18c551" 
          right
          large
        )
          strong.text-none.white--text.font-18 Sign Up Now
    div(v-else).pa-5
      v-container
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-group-of-doctors.png" alt="Doctor best version")
        br 
        p.font-25.text-xs-center It's always better when we work together.
        p.font-18.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="group-signup-btn"
            href="https://mycurecreatives.typeform.com/to/DiZQQY"
            target="_blank"
            color="#18c551"
            large
          )
            strong.font-18.white--text.text-none Sign Up Now  
</template>

<script>
  import panelBeforeFooter from '../commons/panel-before-footer';

  export default {
    components: {
      panelBeforeFooter
    },
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handleGroupSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-group-signup-btn',
          eventLabel: 'group-signup-btn'
        });
      },
      toggleChat () {
        let message = `Hi, I would like to sign up for MYCURE's Group Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
    }
  };
</script>

<style scoped>
  .banner {
    max-width: 90%;
  }
</style>
