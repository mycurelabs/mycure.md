<template lang="pug">
  div(v-if="!$isMobile")
    div.panel-1.white.pa-5
      v-container.pa-5
        v-layout(row justify-center)
          v-flex(xs12 md5 align-self-center)
            span.font-large Tools to Manage &amp; 
              br
              | Secure Your Clinic's
              br
              | Records
            br
            br
            br
            v-btn(
              color="info" 
              large
            ) 
              strong.text-none Sign Up Now
          v-flex(xs12 md7 align-self-center)
            img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png")
  div(v-else).white
    v-container
      v-layout(row justify-center)
        v-flex(xs12 md5)
          font.font-mobile-large Technology 
            br
            | to Help You 
            br
            | Run Your 
            br
            | Clinic Better
          br
          br
          em
            strong.font-mobile-small - Secure Medical Records
            br
            | 
            strong.font-mobile-small - Minimized Costs
            br 
            | 
            strong.font-mobile-small - Lesser Paperwork
          br 
          br
    v-flex(xs12)
      img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients-mobile.png")
      div(style="height: 75px").mc-blue
        v-layout(row justify-center)
          a(style="padding: 20px 0")
            strong.font-mobile-medium.white--text Get Started Today    
</template>

<script>
  export default {
    data () {
        return {
          showVid: false
        };
      },
  };
</script>

<style scoped>
  .panel-1{
    height: auto;
  }
</style>
