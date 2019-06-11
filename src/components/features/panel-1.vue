<template lang="pug">
  //- TODO: mobile responsiveness
  div
    div(v-if="!$isMobile").panel1.mb-5
      v-container(style="padding-top: 70px")
        v-layout(row wrap align-center).panel-1-row
          v-flex(xs12 md12 align-self-center)
            h1.font-medium.text-xs-center Human-friendly features,
              br
              | patient-centric care.
              br(style="line-height: 100px")
              p(style="font-weight: normal").font-small.text-xs-center Focus on your patients and let MYCURE handle the rest.
                br
                | We made it very easy to learn and use.
            br
            center
              v-btn(
                :href="`${siginURL}/signup/private/step-1`" 
                color="#18c551" 
                style="padding: 25px 30px 25px 30px"
              ) 
                strong.font-small.text-none.white--text Sign Up Now 
    //- div(v-else).panel1.mb-5
      v-layout(row wrap justify-center style="height: 100%")
        v-flex(xs12 md12 align-self-center).my-5
          h1.font-xl.text-xs-center Terms &amp; Conditions
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
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
</style>
