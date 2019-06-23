<template lang="pug">
  div
    panelBeforeFooter
      img(slot="emr-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
      span(slot="emr-txt").font-medium.lh-title Be your best version everyday.
      span(slot="cms-sub-txt").font-small Experience what you can do more with MYCURE technology by your side.
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
        strong.text-none.white--text.font-small Sign Up Now
    
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