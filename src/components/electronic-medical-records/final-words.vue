<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      panelBeforeFooter.pt-5
        img(slot="emr-img" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version").banner
        span(slot="emr-txt").font-48.lh-title Be your best version everyday.
        span(slot="cms-sub-txt").font-18 Experience what you can do more with MYCURE technology by your side.
        v-btn(
          id="emr-signup-btn"
          @click.stop="handleEmrSignupBtn"
          slot="sign-up-button"
          :href="`${signInURL}/signup/private/step-1`" 
          target="_blank"
          color="#18c551" 
          right
        ).cta-btn
          strong.text-none.white--text.font-18 Sign Up Now
    div(v-else).pa-5
      v-container
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
        br 
        p.font-25.text-xs-center Be your best version everyday.
        p.font-18.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="emr-signup-btn"
            @click.stop="handleEmrSignupBtn"
            :href="`${signInURL}/signup/private/step-1`"
            target="_blank"
            color="#18c551"
            large
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
      handleEmrSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-emr-signup-btn',
          eventLabel: 'emr-signup-btn'
        });
      }
    }
  };
</script>

<style scoped>
  .banner {
    max-width: 90%;
  }
</style>
