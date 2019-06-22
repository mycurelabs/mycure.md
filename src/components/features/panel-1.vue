<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -7%")
            h1(style="font-weight: bold;").font-small.font-mc-blue MYCURE Features           
            br
            p(style="line-height: 60px;").font-medium Human-friendly features, patient-centric care.
            br
            br
            v-btn(
              id="features-signup-btn"
              @click.stop="handleFeaturesSignupBtn"
              :href="`${siginURL}/signup/choose`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            ) 
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="80%" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png" alt="Features")
    div(v-else).white
      v-container.pt-5
        v-layout(row justify-center)
          v-flex(xs12)
            h1(style="line-height: 55px;").font-l.text-xs-center Human-friendly
              br
              | features,
              br
              | patient-centric
              br
              | care
        br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png" alt="Features").pb-5
      div(style="height: 75px; margin-top: -10%").mc-green
        v-layout(row justify-center)
          a(
            id="features-signup-btn" 
            @click.stop="handleFeaturesSignupBtn"
            :href="`${siginURL}/signup/choose`" 
            style="padding: 20px 0; text-decoration: none"
          )
            strong(style="font-size: 25px").white--text Sign Up Now
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
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
