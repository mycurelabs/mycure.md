<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5.panel-1.white
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md5)
            span.font-large A System That Simplifies Work for Multispecialty Clinics
            br
            br
            em.font-small - Integrated Medical Records
              br
              | - User-friendly Features
              br 
              | - Real-time Reports
            br 
            br
            v-btn(
              color="info" 
              large
              id="showVid"
              @click="showVid = true") 
                strong.text-none Register Now
          v-flex(xs12 md7)
            img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png")
    div(v-else).white
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md5)
            span.font-large A System That Simplifies Work for Multispecialty Clinics
            br
            br
            em
              strong.font-small - Integrated Medical Records
              br
              | 
              strong.font-small - User-friendly Features
              br 
              | 
              strong.font-small - Real-time Reports
            br 
            br
      v-flex(xs12)
        img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients-mobile.png")
        div(style="height: 50px; background-color: #96cfef; margin-top: -1%")
          v-layout(row justify-center)
            a(style="padding: 12px 0")
              v-icon(color="#2e9fdf") play_circle_filled
              strong.font-small.px-2.black--text(style="text-decoration: underline").black--text WATCH VIDEO
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
