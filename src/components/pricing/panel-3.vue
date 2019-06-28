<template lang="pug">
  div.pt-5
    v-container.pa-5
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare proffesionals")
      br 
      p(style="font-size: 200%").text-xs-center.lh-title Join thousands of healthcare professionals who get the best out of technology in their practice.
      v-layout(row justify-center)
        v-btn(
          id="pricing-signup-btn"
          @click.stop="handlePricingSignupBtn"
          :href="`${signInURL}/signup/choose`"
          target="_blank"
          style="background-color: #18c551; width: 80%; height: 60px")  
          strong.font-18.white--text.text-none Sign Up Now
    v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")  
</template>

<script>
  export default {
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handlePricingSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-pricing-signup-btn',
          eventLabel: 'pricing-signup-btn'
        });
      }
    }
  };
</script>

<style scoped>

</style>
