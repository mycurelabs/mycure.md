<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(justify-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -10%") 
            h1(style="line-height: 65px;").font-60 A system that simplifies work for multispecialty clinics.
            br 
            br
            v-btn(
              id="cms-signup-btn"
              @click.stop="handleCmsSignupBtn"
              :href="`${signInURL}/signup/multi-specialty/step-1`" 
              target="_blank"
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            )  
              strong.font-18.white--text.text-none Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic management system banner")
    div(v-else).white
      v-container.pt-5
        v-layout(row justify-center)
          v-flex(xs12 md5)
            p.font-40.text-xs-center A system that simplifies work for 
              br
              | multi-specialty clinics.
            br
            br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic management system banner").pb-5
      div(style="height: 75px; margin-top: -1%").mc-green
        v-layout(row justify-center)
          a(id="cms-signup-btn" @click.stop="handleCmsSignupBtn" :href="`${signInURL}/signup/multi-specialty/step-1`" style="padding: 20px 0; text-decoration: none")
            strong(style="font-size: 25px").white--text Sign Up Now

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
