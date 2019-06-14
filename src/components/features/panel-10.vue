<template lang="pug">
  div
    div(v-if="!$isMobile")
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
    div(v-else).transparent
      center
        v-layout(column justify-center style="width: 90%").pt-5
          img(style="max-width: 80%" src="../../assets/images/mycure-web-banner-last-panel-features-embrace-habit.png")
          br 
          span(style="font-size: 200%").text-xs-center.lh-title Embrace new habit.
          br
          br
          span.font-s.text-xs-center Experience what you can do more with MYCURE technology by your side.
          br
          br
          v-layout(row justify-center)
            v-btn(
              :href="`${siginURL}/signup/choose`"
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
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>
