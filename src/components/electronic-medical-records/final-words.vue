<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      panelBeforeFooter.pt-5
        img(slot="emr-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
        span(slot="emr-txt").font-48.lh-title Be your best version everyday.
        span(slot="cms-sub-txt").font-18 Experience what you can do more with MYCURE technology by your side.
        v-btn(
          id="emr-signup-btn"
          @click.stop="handleEmrSignupBtn"
          slot="sign-up-button"
          :href="`${signInURL}/signup/private/step-1`" 
          target="_blank"
          color="#18c551" 
          style="padding: 25px 30px 25px 30px"
          right
        )
          strong.text-none.white--text.font-18 Sign Up Now
    div(v-else).pa-5
      v-container
        v-layout(row justify-center)
          img(style="width: 100%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
        br 
        p(style="font-size: 200%").text-xs-center Be your best version everyday.
        p.font-18.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="emr-signup-btn"
            @click.stop="handleEmrSignupBtn"
            :href="`${signInURL}/signup/private/step-1`"
            target="_blank"
            style="background-color: #18c551; width: 80%; height: 60px")  
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

</style>
