<template lang="pug">
  div
    panelBeforeFooter
      img(slot="home-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png")
      span(slot="home-txt").font-medium Join thousands of other health professionals who enjoy the benefits of using technology in their practice
      v-btn(slot="sign-up-button" color="info" large) 
        strong.text-none Sign Up Now
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
        //
      };
    }
  };
</script>

<style scoped>
  
</style>
