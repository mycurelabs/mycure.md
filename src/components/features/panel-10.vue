<template lang="pug">
  div
    div(v-if="!$isMobile")
      panelBeforeFooter
        img(slot="img" src="../../assets/images/mycure-web-banner-last-panel-features-embrace-habit.png" alt="Embrace service").banner
        span(slot="txt").font-48.lh-title Embrace a new habit.
        span(slot="sub-txt").font-18 Let your patients experience top-of-the-line service through your streamlined clinic operations with the help of MYCURE.
        v-btn(
          slot="sign-up-button"
          :to="{ name: 'signup-choose' }"
          color="#18c551"
          right
        ).cta-btn
          strong.text-none.white--text.font-18 Sign Up Now
      v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
    div(v-else).transparent
      v-container.pa-5
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-features-embrace-habit.png" alt="Embrace service")
        br 
        p.font-25.text-xs-center Embrace a new habit.
        p.font-18.text-xs-center Let your patients experience top-of-the-line service through your streamlined clinic operations with the help of MYCURE.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="features-signup-btn"
            @click.stop="handleFeaturesSignupBtn"
            :to="{ name: 'signup-choose' }"
            color="#18c551"
          ).cta-btn
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

<style scoped>
  .banner {
    max-width: 90%;
  }
</style>
