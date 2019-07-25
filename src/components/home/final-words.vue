<template lang="pug">
  div#panel8
    div(v-if="!$isMobile")
      panelBeforeFooter
        img(slot="img" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare professionals").banner
        span(slot="txt").font-40.lh-title Join thousands of medical practitioners who optimize their practice with the use of efficient technology.
        v-btn(
          id="home-signup-btn"
          @click.stop="handleHomeSignupBtn"
          slot="sign-up-button"
          :href="`${signInURL}/signup/choose`"
          target="_blank" 
          color="#18c551"
          right
        ).cta-btn.mt-0
          strong.font-18.text-none.white--text Sign Up Now
    div(v-else).pa-5
      v-container
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare proffesionals")
        br 
        p.font-25.text-xs-center.lh-title Join thousands of medical practitioners who optimize their practice with the use of efficient technology.
        v-layout(row justify-center)
          v-btn(
            id="emr-signup-btn"
            @click.stop="handleEmrSignupBtn"
            :href="`${signInURL}/signup/private/step-1`"
            target="_blank"
            color="#18c551"
          ).cta-btn
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
      handleHomeSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-signup-btn',
          eventLabel: 'home-signup-btn'
        });
      },
    }
  };
</script>

<style scoped>
  .banner {
    max-width: 90%;
  }
</style>
