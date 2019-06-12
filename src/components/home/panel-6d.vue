<template lang="pug">
  div
    panelBeforeFooter
      img(slot="home-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png")
      span(slot="home-txt" style="font-size: 36px").lh-title Join thousands of health professionals who get the best out of technology in their practice

      v-btn(
        slot="sign-up-button"
        :href="`${siginURL}/signup/choose`" 
        color="#18c551" 
        style="padding: 25px 30px 25px 30px;"
        right
      ).mt-0
        strong.font-small.text-none.white--text Sign Up Now
    v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png")
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