<template lang="pug">
  div.panel-1.pt-5.white
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
