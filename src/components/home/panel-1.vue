<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md7 align-self-center style="margin-top: -10%")
            h1(style="line-height: 65px;").font-large We help organize & secure your clinic’s medical records.
            br
            br
            v-btn(
              :href="`${siginURL}/signup/choose`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            ) 
              strong.font-small.text-none.white--text Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 5%")
            img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner")
    div(v-else).white
      v-container.pt-5
        v-layout(row justify-center)
          v-flex(xs12 md5)
            h1.lh-title.font-l.text-xs-center We help organize & secure your clinic’s medical records.
            br 
            br
        v-flex(xs12)
          img(width="100%" src="../../assets/images/mycure-web-banner-first-panel-doctor-clinic-patients.png" alt="Clinic home banner").pb-5
      div(style="height: 75px").mc-green
        v-layout(row justify-center)
          a(:href="`${siginURL}/signup/choose`" style="padding: 20px 0; text-decoration: none")
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
  };
</script>

<style scoped>
  h1 {
    font-weight: normal
  }
</style>
