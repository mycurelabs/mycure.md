<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -10%")
            h1(style="line-height: 65px;").font-large MYCURE SOLO used by a practitioner who wants access
            br 
            br
            v-btn(
              id="emr-signup-btn"
              @click.stop="handleEmrSignupBtn"
              :href="`${siginURL}/signup/private/step-1`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            )
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="100%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients.png" alt="Individual doctor")
    div(v-else).white
      v-container.pt-5
        v-layout(row justify-center)
          v-flex(xs12 md5)
            h1.font-l.text-xs-center MYCURE SOLO used by a practitioner who wants access
            br
            br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients.png" alt="Individual doctor").pb-5
      div(style="height: 75px; margin-top: -1%").mc-green
        v-layout(row justify-center)
          a(id="emr-signup-btn" @click.stop="handleEmrSignupBtn" :href="`${siginURL}/signup/private/step-1`" style="padding: 20px 0; text-decoration: none")
            strong(style="font-size: 25px").white--text Sign Up Now
</template>

<script>
  export default {
    data () {
      return {
        showVid: false,
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    handleEmrSignupBtn () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-emr-signup-btn',
        eventLabel: 'emr-signup-btn'
      });
    }
  };
</script>

<style scoped>
  h1 {
    font-weight: normal
  }
</style>
