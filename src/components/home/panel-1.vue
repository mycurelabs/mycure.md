<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -7%")
            h1(style="font-weight: bold;").font-small.font-mc-blue MYCURE Complete Clinic Management System
            br
            p(style="line-height: 60px;").font-medium We provide you with a system that helps organize and secure your medical records.
            br
            v-btn(
              :href="`${siginURL}/signup/choose`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
              id="home-signup-btn"
              @click.stop="handleHomeSignupBtn"
            ) 
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="80%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner").right
    div(v-else).white
      v-container.pt-4
        v-layout(column justify-center).pb-4
          h1(style="font-weight: bold;").font-small.font-mc-blue.text-xs-center.pb-2 MYCURE Complete Clinic Management System
          br            
          p.lh-title.font-l.text-xs-center We provide you with a system that helps organize and secure your medical records.
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner")
      div(style="height: 75px").mc-green
        v-layout(row justify-center)
          a(id="home-signup-btn" @click.stop="handleHomeSignupBtn" :href="`${siginURL}/signup/choose`" style="padding: 20px 0; text-decoration: none" title="MYCURE - Sign Up")
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
