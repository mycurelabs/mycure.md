<template lang="pug">
  div
    div(v-if="!$isMobile")
      panelBeforeFooter
        img(slot="img" style="max-width: 90%" src="../../assets/images/mycure-web-banner-last-panel-features-embrace-habit.png" alt="Embrace service")
        span(slot="txt").font-48.lh-title Embrace a new habit.
        span(slot="sub-txt").font-18 Let your patients experience top-of-the-line service through your streamlined clinic operations with the help of MYCURE.
        v-btn(
          slot="sign-up-button"
          :href="`${signInURL}/signup/choose`" 
          target="_blank"
          color="#18c551" 
          style="padding: 25px 30px 25px 30px"
          right
        )
          strong.text-none.white--text.font-18 Sign Up Now
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else).transparent.pt-5
      v-container
        v-layout(row justify-center)
          img(style="max-width: 80%" src="../../assets/images/mycure-web-banner-last-panel-features-embrace-habit.png" alt="Embrace service")
        br 
        p(style="font-size: 200%").text-xs-center Embrace a new habit.
        p.font-18.text-xs-center Let your patients experience top-of-the-line service through your streamlined clinic operations with the help of MYCURE.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="features-signup-btn"
            @click.stop="handleFeaturesSignupBtn"
            :href="`${signInURL}/signup/choose`"
            target="_blank"
            style="background-color: #18c551; width: 80%; height: 60px"
          )  
            strong.font-18.white--text.text-none Sign Up Now  
      v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community-mobile.png" alt="Health community")
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
      handleFeaturesSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-features-signup-btn',
          eventLabel: 'features-signup-btn'
        });
      }
    }
  };
</script>
