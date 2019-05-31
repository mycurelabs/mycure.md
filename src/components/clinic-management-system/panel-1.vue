<template lang="pug">
  div
    div(v-if="!$isMobile").pt-5.panel-1.white
      v-container.px-5
        v-layout(row justify-center)
          v-flex(xs12 md5)
            span(style="line-height: 65px;").font-large A System That Simplifies for Multispecialty Clinics
            br
            br
            em.font-small - Integrated Medical Records
              br
              | - User-friendly Features
              br 
              | - Real-time Reports
            br 
            br
            v-btn(color="#2e9fdf" style="padding: 10px 40px 40px 40px")
              strong.font-small.white--text.text-none Sign Up Now
          v-flex(xs12 md7)
            img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png")
    div(v-else).white
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md5)
            span.font-l A System That Simplifies Work for Multispecialty Clinics
            br
            br
            em
              strong.font-s - Integrated Medical Records
              br
              | 
              strong.font-s - User-friendly Features
              br 
              | 
              strong.font-s - Real-time Reports
            br 
            br
      v-flex(xs12)
        img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients-mobile.png")
        div(style="height: 75px; margin-top: -1%").mc-blue
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
  .panel-1{
    height: auto;
  }
</style>
