<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md8 align-self-center).uspLeft
            h1.font-weight-bold.font-18.font-mc-blue SOLO by MYCURE           
            br
            p.lh-title.font-45 A free standalone clinic management system.
            br
            v-btn(
              href="https://solo.health"
              target="_blank"
              color="#18c551" 
              id="solo-signup-btn"
              @click.stop="handleSoloSignUpBtn(); toggleChat()"
            ).cta-btn
              strong.font-18.text-none.white--text Get Early Access
          v-flex(xs12 md6 align-self-center).uspRight
            img(width="90%" src="@/assets/images/mycure-emr-web-banner-first-panel-solo-page.png" alt="Solo doctor").right
    div(v-else).white
      v-container.pt-5
        v-layout(column align-center justify-center)
            h1.font-weight-bold.font-18.font-mc-blue.text-xs-center.pb-2 SOLO by MYCURE 
            br
            p.font-40.text-xs-center A free standalone clinic management system.
        v-flex(xs12)
          img(width="100%" src="@/assets/images/mycure-emr-web-banner-first-panel-solo-page.png" alt="Solo doctor").pb-5
      v-layout(row justify-center)
        v-btn(
          id="solo-signup-btn" 
          href="https://solo.health"
          @click.stop="handleSoloSignupBtn(); toggleChat()" 
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        ).uspBtn
          strong.font-25.white--text.text-none Get Early Access
</template>

<script>
  export default {
    data () {
      return {
        showVid: false,
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handleSoloSignUpBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-solo-signup-btn',
          eventLabel: 'solo-signup-btn'
        });
      },
      toggleChat () {
        let message = `Hi! I want to get early access to MYCURE Solo.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },

    }
  };
</script>

<style scoped>
  h1 {
    font-weight: normal
  }

  .uspBtn {
    height: 75px;
  }
</style>
