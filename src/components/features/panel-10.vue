<template lang="pug">
  div
    panelBeforeFooter
      img(slot="emr-img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-features-embrace-habit.png")
      span(slot="emr-txt").font-medium.lh-title Embrace a new habit.
      span(slot="emr-sub-txt").font-small Let your patients experience top-of-the-line service through your streamlined clinic operations with the help of MYCURE.
      v-btn(
        slot="sign-up-button"
        :href="`${siginURL}/signup/choose`" 
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
      panelBeforeFooter
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>
