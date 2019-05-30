<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5.white
      v-container.px-5
        v-layout(row justify-center)
          v-flex(xs12 md5)
            font.font-large A Clinic System That Helps Physicians Do Greater Things
            br
            br
            em.font-small - Secure Medical Records
              br
              | - Make Data-driven Decisions
              br 
              | - Save Time and Costs
            br 
            br
            v-btn(
              color="info" 
              large
              id="showVid"
              @click="showVid = true") 
                strong.text-none Register Now
          v-flex(xs12 md7)
            img(width="100%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients.png")
    div(v-else).white
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md5)
            font.font-large A Clinic System That Helps Physicians Do Greater Things
            br
            br
            em
              strong.font-small - Secure Medical Records
              br
              | 
              strong.font-small - Minimized Costs
              br 
              | 
              strong.font-small - Lesser Paperwork
            br 
            br
      v-flex(xs12)
        img(width="100%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients-mobile.png")
        div(style="height: 50px; background-color: #96cfef; margin-top: -1%")
        div(style="height: 75px").mc-blue
          v-layout(row justify-center)
            a(style="padding: 20px 0")
              strong(style="font-size: 25px").white--text Register Now
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
  
</style>
