<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -7%")
            h1(style="font-weight: bold;").font-18.font-18c-blue MYCURE Complete Clinic Management System
            br
            p(style="line-height: 60px;").font-48 A modern technology platform that helps organize and secure patients' medical records.
            br
            v-btn(
              :href="`${signInURL}/signup/choose`" 
              target="_blank"
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
              id="home-signup-btn"
              @click.stop="handleHomeSignupBtn"
            ) 
              strong.font-18.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="80%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner").right
    div(v-else).white
      v-container.pt-4
        v-layout(column justify-center).pb-4
          h1(style="font-weight: bold;").font-18.font-18c-blue.text-xs-center.pb-2 MYCURE Complete Clinic Management System
          br            
          p.lh-title.font-40.text-xs-center A modern technology platform that helps organize and secure patients' medical records.
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner")
      v-layout(row justify-center)
        v-btn(
          id="home-signup-btn" 
          @click.stop="handleHomeSignupBtn" 
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
        showVid: false,
        signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handleHomeSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-signup-btn',
          eventLabel: 'home-signup-btn'
        });
      },
    }
  };
</script>

<style scoped>
  h1 {
    font-weight: normal
  }
</style>
