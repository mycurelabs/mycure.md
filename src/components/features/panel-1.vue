<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -10%")
            h1(style="line-height: 65px;").font-large Human-Friendly,
              br
              | Features,
              br
              | Patient-Centric
              br
              | Care.
            br
            br
            v-btn(
              :href="`${siginURL}/signup/choose`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            ) 
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-features.png")
    div(v-else).panel1.mb-5
      v-container  
        v-layout(row wrap justify-center style="height: 100%")
          v-flex(xs12 md12 align-self-center).my-5
            h1.font-l.text-xs-center Human-friendly features,
              br
              | patient-centric care.
              p(style="font-weight: normal; padding-top: 40px").font-m.text-xs-center Focus on your patients and let MYCURE handle the rest.
                br
                | We made it very easy to learn and use.
      div(style="height: 75px; margin-top: -1%").mc-green
          v-layout(row justify-center)
            a(:href="`${siginURL}/signup/choose`" style="padding: 20px 0; text-decoration: none")
              strong(style="font-size: 25px").white--text Sign Up Now
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
  
  h1 {
    font-weight: normal
  }
</style>
