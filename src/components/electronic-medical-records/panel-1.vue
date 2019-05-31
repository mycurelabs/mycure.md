<template lang="pug">
  div
    div(v-if="!$isMobile").pt-4.pb-5.white
      v-container.px-5
        v-layout(row justify-center)
          v-flex(xs12 md5)
            span(style="line-height: 65px;").font-large A Clinic System That Helps Physicians Do Greater Things
            br
            br
            em.font-small - Secure Medical Records
              br
              | - Make Data-driven Decisions
              br 
              | - Save Time and Costs
            br 
            br
            v-btn(color="#18c551" large style="padding: 10px 40px 40px 40px")
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7)
            img(width="95%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients.png").right
      br
      br
      br
    div(v-else).white
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md5)
            font.font-l A Clinic System That Helps Physicians Do Greater Things
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
        img(width="100%" src="../../assets/images/mycure-emr-web-banner-first-panel-doctor-clinic-patients-mobile.png")
        div(style="height: 75px; margin-top: -1%").mc-green
          v-layout(row justify-center)
            a(style="padding: 20px 0")
              strong(style="font-size: 25px").white--text Sign Up Now
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
