<template lang="pug">
  div
    panelBeforeFooter
      img(slot="home-img" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png" alt="Healthcare professionals").banner
      span(slot="home-txt").font-36 Join thousands of other healthcare professionals who enjoy the benefits of using technology in their practice.
      v-btn(
        id="our-story-signup-btn"
        @click.stop="handleOurStorySignupBtn"
        slot="sign-up-button"
        :to="{ name: 'signup-choose' }"
        color="#18c551"
      ).cta-btn
        strong.font-18.text-none.white--text Sign Up Now
    v-layout(row justify-center)
        img(width="100%" height="100%" src="../../assets/images/mycure-web-banner-last-panel-health-community.png" alt="Health community")
</template>

<script>
  import panelBeforeFooter from '../commons/panel-before-footer';

  export default {
    components: {
      panelBeforeFooter
    },
    methods: {
      handleOurStorySignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-our-story-signup-btn',
          eventLabel: 'our-story-signup-btn'
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

