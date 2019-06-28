<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height).px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -7%")
            h1(style="font-weight: bold;").font-18.font-mc-blue MYCURE Features           
            br
            p(style="line-height: 60px;").font-48 Human-friendly features, patient-centric care.
            br
            br
            v-btn(
              id="features-signup-btn"
              @click.stop="handleFeaturesSignupBtn"
              :href="`${signInURL}/signup/choose`" 
              target="_blank"
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            ) 
              strong.font-18.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 10%")
            img(width="auto" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png" alt="Features").right
    div(v-else).white
      v-container.pt-5
        v-layout(row justify-center)
          v-flex(xs12)
            h1(style="line-height: 55px;").font-40.text-xs-center Human-friendly
              br
              | features,
              br
              | patient-centric
              br
              | care
        br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png" alt="Features").pb-5
      v-layout(row justify-center)
        v-btn(
          id="features-signup-btn" 
          @click.stop="handleFeaturesSignupBtn"
          :href="`${signInURL}/signup/choose`" 
          target="_blank"
          style="height: 75px"
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        )
          strong(style="font-size: 25px").white--text.text-none Sign Up Now
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
</style>
