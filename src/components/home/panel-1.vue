<template lang="pug">
  div(v-if="!$isMobile")
    div.panel-1.white
      v-container
        v-layout(row justify-center).pt-5
          v-flex(xs12 md5)
            font.font-l Technology 
              br
              | to Help You Run 
              br
              | Your Clinic Better
            br
            br
            em.font-s - Secure Medical Records
              br
              | - Minimized Costs
              br 
              | - Lesser Paperwork
            br 
            br
            v-btn(
              color="info" 
              large
              id="showVid"
              @click="showVid = true") 
                strong.text-none Get Started Today
          v-flex(xs12 md7)
            img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png")
  div(v-else).white
    v-container
      v-layout(row justify-center)
        v-flex(xs12 md5)
          font.font-l Technology 
            br
            | to Help You Run 
            br
            | Your Clinic Better
          br
          br
          em
            strong.font-s - Secure Medical Records
            br
            | 
            strong.font-s - Minimized Costs
            br 
            | 
            strong.font-s - Lesser Paperwork
          br 
          br
    v-flex(xs12)
      img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients-mobile.png")
      div(style="height: 75px").mc-blue
        v-layout(row justify-center)
          a(style="padding: 20px 0")
            strong(style="font-size: 25px").white--text Get Started Today    
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
