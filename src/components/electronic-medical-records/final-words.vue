<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5
      panelBeforeFooter.pt-5
        img(slot="group-img" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version").banner
        span(slot="group-txt").font-48.lh-title It's always better when we work together.
        span(slot="group-sub-txt").font-18 Experience what you can do more with MYCURE technology by your side.
        v-btn(
          id="grop-signup-btn"
          @click.stop="handleGroupSignUpBtn"
          slot="sign-up-button"
          :to="{ name: 'signup-individual' }"
          color="#18c551" 
          right
        ).cta-btn
          strong.text-none.white--text.font-18 Sign Up Now
    div(v-else).pa-5
      v-container
        v-layout(row justify-center)
          img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
        br 
        p.font-25.text-xs-center It's always better when we work together.
        p.font-18.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          //- TODO: href to where?
          v-btn(
            id="group-signup-btn"
            @click.stop="handleGroupSignUpBtn"
            target="_blank"
            color="#18c551"
            large
          )
            strong.font-18.white--text.text-none Sign Up Now  
</template>

<script>
  import panelBeforeFooter from '../commons/panel-before-footer';

  export default {
    components: {
      panelBeforeFooter
    },
    methods: {
      handleGroupSignUpBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-group-signup-btn',
          eventLabel: 'group-signup-btn'
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
