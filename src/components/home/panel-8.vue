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
          :href="`${siginURL}/signup/choose`" 
          color="#18c551" 
          style="padding: 25px 30px 25px 30px;"
          right
        ).mt-0
          strong.font-small.text-none.white--text Sign Up Now
    div(v-else)
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
