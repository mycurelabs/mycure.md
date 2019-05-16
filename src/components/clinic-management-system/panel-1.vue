<template lang="pug">
  div.panel-1.pt-5.white
    v-container.pt-5
      v-layout(row justify-center).pt-5
        v-flex(xs12 md5)
          font.font-l A System That Simplifies Work for Multispecialty Clinics
          br
          br
          em.font-s - Integrated Medical Records
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
              strong.text-none Get Started Today
          br
          br
          v-btn(
            color="#96cfef"
          )
            v-icon(color="#2e9fdf") play_circle_filled
            strong.font-xs.px-2.black--text(style="text-decoration: underline") WATCH VIDEO
        v-flex(xs12 md7)
          img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png")

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
