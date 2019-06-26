<template lang="pug">
  div#panel3.pt-5.transparent
    center
      v-layout(column justify-center style="width: 90%").pt-5
        img(style="max-width: 80%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare professionals")
        br 
        span(style="font-size: 200%").text-xs-center.lh-title Join thousands of healthcare professionals who get the best out of technology in their practice.
      br
      br
      v-layout(row justify-center)
        v-btn(
          id="pricing-signup-btn"
          @click.stop="handlePricingSignupBtn"
          :href="`${signInURL}/signup/choose`"
          target="_blank"
          style="background-color: #18c551; width: 80%; height: 60px")  
          strong.font-m.white--text.text-none Sign Up Now  
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
