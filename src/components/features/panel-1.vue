<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).uspLeft
            h1.font-weight-bold.font-18.font-mc-blue MYCURE Features           
            br
            p.lh-title.font-45 User-friendly and time efficient features for a more patient-centric care
            br
            br
            v-btn(
              id="features-signup-btn"
              @click.stop="handleFeaturesSignupBtn"
              :href="`${signInURL}/signup/choose`" 
              target="_blank"
              color="#18c551" 
            ).cta-btn
              strong.font-18.text-none.white--text Sign Up Now
          v-flex(xs12 md6 align-self-center).uspRight
            img(width="90%" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png" alt="Features").right
    div(v-else).white
      v-container.pt-5
        v-layout(row justify-center)
          v-flex(xs12)
            h1.font-40.text-xs-center Patient-centric,
              br
              | efficient,
              br
              | and state-of-the-art 
              br
              | features
        br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png" alt="Features").pb-5
      v-layout(row justify-center)
        v-btn(
          id="features-signup-btn" 
          @click.stop="handleFeaturesSignupBtn"
          :href="`${signInURL}/signup/choose`" 
          target="_blank"
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        ).uspBtn
          strong.font-25.white--text.text-none Sign Up Now
</template>

<script>
  export default {
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

<style scoped>
  .panel1 {
    background-image: url('../../assets/images/mycure-web-features-cover-banner.png');
    background-position: center center;
    background-size: cover;
  }

  .panel-1-row {
    height: 420px;
  }
  
  h1 {
    font-weight: normal
  }

  .uspBtn {
    height: 75px;
  }
</style>
