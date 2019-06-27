<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -7%") 
            h1(style="font-weight: bold;").font-18.font-18c-blue MYCURE for Multispecialty Clinics
            br
            p(style="line-height: 60px;").font-48 A clinic management system designed specifically for multispecialty clinics.
            br
            v-btn(
              id="cms-signup-btn"
              @click.stop="handleCmsSignupBtn"
              :href="`${signInURL}/signup/multi-specialty/step-1`" 
              target="_blank"
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            )  
              strong.font-18.white--text.text-none Get Started Today
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="80%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic management system banner").right
    div(v-else).white
      v-container.pt-5
        v-layout(column justify-center)
          h1(style="font-weight: bold;").font-18.font-18c-blue.text-xs-center.pb-2 MYCURE for Multispecialty Clinics
          br
          p.font-40.text-xs-center A clinic management system designed specifically for multispecialty clinics
          br
          br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic management system banner").pb-5
      v-layout(row justify-center)
        v-btn(
          id="cms-signup-btn" 
          @click.stop="handleCmsSignupBtn" 
          :href="`${signInURL}/signup/multi-specialty/step-1`"
          target="_blank"
          style="height: 75px" 
          title="MYCURE - Sign Up"
          color="#18c551" 
          block
        )
          strong(style="font-size: 25px").white--text.text-none Get Started Today
</template>

<script>
  export default {
    data () {
      return {
        showVid: false,
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handleCmsSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-cms-signup-btn',
          eventLabel: 'cms-signup-btn'
        });
      }
    }
  };
</script>

<style scoped>
  h1 {
    font-weight: normal
  }
</style>

