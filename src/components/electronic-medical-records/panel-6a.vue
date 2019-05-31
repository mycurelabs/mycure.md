<template lang="pug">
  div
    panelBeforeFooter
      img(slot="emr-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png")
      span(slot="emr-txt").font-medium Because you can always perform at your best everyday.
      span(slot="emr-sub-txt").font-small Experience what you can do more with MYCURE technology by your side.
      v-btn(slot="sign-up-button" color="#18c551" large) 
        strong.text-none.white--text Sign Up Now
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
