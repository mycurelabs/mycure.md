<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(justify-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center style="margin-top: -10%") 
            h1(style="line-height: 65px;").font-large A system that simplifies for multi-specialty clinics.
            br 
            br
            v-btn(
              :href="`${siginURL}/signup/private/step-1`" 
              color="#18c551" 
              style="padding: 25px 30px 25px 30px"
            )  
              strong.font-small.white--text.text-none Sign Up Now
          v-flex(xs12 md7 align-self-center style="margin-top: 10%")
            img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients.png")
    div(v-else).white
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md5)
            span.font-l A system that simplifies for multi-specialty clinics.
            br
            br
      v-flex(xs12)
        img(width="100%" src="../../assets/images/mycure-cms-web-banner-first-panel-doctor-clinic-patients-mobile.png")
        div(style="height: 75px; margin-top: -1%").mc-green
          v-layout(row justify-center)
            a(:href="`${siginURL}/signup/private/step-1`" style="padding: 20px 0; text-decoration: none")
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
