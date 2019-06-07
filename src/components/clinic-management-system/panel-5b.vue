<template lang="pug">
  div
    panelBeforeFooter
      img(slot="cms-img" style="max-width: 90%" src="../../assets/images/mycure_web_banner_last_panel_doctor.png")
      span(slot="cms-txt").font-medium.lh-title Because we believe your clinic can stand out and be its best everyday.
      span(slot="cms-sub-txt").font-small Experience what you can do more with MYCURE technology by your side.
      v-btn(
        slot="sign-up-button"
        :href="`${siginURL}/signup/private/step-1`" 
        color="#18c551" 
        style="padding: 25px 30px 25px 30px"
        right
      ) 
        strong.text-none.white--text.font-small Sign Up Now
    v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png")
</template>

<script>
  import panelBeforeFooter from '../commons/panel-before-footer';

  export default {
    components: {
      panelBeforeFooter,
      
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  
</style>
