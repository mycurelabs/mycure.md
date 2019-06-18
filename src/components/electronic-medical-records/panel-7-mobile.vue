<template lang="pug">
  div#panel7mobile.pt-4.transparent
    center
      v-layout(column justify-center style="width: 90%").pt-5
        img(style="max-width: 80%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic-for-private-clinic.png" alt="Doctor best version")
        br 
        span(style="font-size: 200%").text-xs-center.lh-title Be your best version everyday.
        br
        br
        span.font-m.text-xs-center Experience what you can do more with MYCURE technology by your side.
        br
        br
        v-layout(row justify-center)
          v-btn(
            id="emr-signup-btn"
            :href="`${siginURL}/signup/private/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")  
            strong.font-m.white--text.text-none Sign Up Now  
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>