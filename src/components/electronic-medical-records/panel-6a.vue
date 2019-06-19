<template lang="pug">
  div
    panelBeforeFooter
      img(slot="emr-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
      span(slot="emr-txt").font-medium.lh-title Be your best version everyday.
      span(slot="emr-sub-txt").font-small Experience what you can do more with MYCURE technology by your side.
      v-btn(
        id="emr-signup-btn"
        slot="sign-up-button"
        :href="`${siginURL}/signup/private/step-1`" 
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
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>