<template lang="pug">
  div#panel8
    div(v-if="!$isMobile")
      panelBeforeFooter
        img(slot="img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare professionals")
        span(slot="txt" style="font-size: 36px").lh-title Join thousands of healthcare professionals who get the best out of technology in their practice
        v-btn(
          id="home-signup-btn"
          @click.stop="handleHomeSignupBtn"
          slot="sign-up-button"
          :href="`${signInURL}/signup/choose`"
          target="_blank" 
          color="#18c551" 
          style="padding: 25px 30px 25px 30px;"
          right
        ).mt-0
          strong.font-small.text-none.white--text Sign Up Now
    div(v-else).pt-4
      v-container
        v-layout(column justify-center)
          v-layout(row justify-center).pb-4
            img(style="height: 90vw" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare professionals")
          v-layout(row justify-center).pb-4
            span(style="font-size: 200%").text-xs-center.lh-title Join thousands of healthcare professionals who get the best out of technology in their practice.
          v-layout(row justify-center)
            v-btn(
              id="home-signup-btn"
              @click.stop="handleHomeSignupBtn"
              :href="`${signInURL}/signup/choose`"
              target="_blank"
              style="background-color: #18c551; width: 80%; height: 60px")  
              strong.font-m.white--text.text-none Sign Up Now  
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
