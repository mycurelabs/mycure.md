<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -7%")
            h1(style="font-weight: bold;").font-18.font-mc-blue MYCURE Solo           
            br
            p(style="line-height: 60px;").font-48 A free and standalone clinic management system.
            br
            br
            br
            br
            v-btn(
              color="#18c551" 
              style="padding: 10px 30px 40px 30px"
              id="solo-signup-btn"
              @click.stop="handleSoloSignUpBtn(); toggleChat()"
            ) 
              strong.font-18.text-none.white--text Get Early Access
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="80%" src="@/assets/images/mycure-emr-web-banner-first-panel-solo-page.png" alt="Solo doctor").right
    div(v-else).white
      v-container.pt-5
        v-layout(column align-center justify-center)
            h1(style="font-weight: bold;").font-18.font-mc-blue.text-xs-center.pb-2 MYCURE Solo 
            br
            p.font-40.text-xs-center A free and standalone clinic management system.
        v-flex(xs12)
          img(width="100%" src="@/assets/images/mycure-emr-web-banner-first-panel-solo-page.png" alt="Solo doctor").pb-5
      v-layout(row justify-center)
        v-btn(
          id="solo-signup-btn" 
          @click.stop="handleSoloSignupBtn(); toggleChat()" 
          style="height: 75px" 
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        )
          strong(style="font-size: 25px").white--text.text-none Get Early Access
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
</style>
