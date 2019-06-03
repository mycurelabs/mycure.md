<template lang="pug">
  div.py-5.white
    v-container
      v-layout(column justify-center)
        span.font-m.text-xs-center "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far." 
        br
        br
        span.font-s.text-xs-center Dr. Gay Cadorna-Toledo
        b.font-xs.text-xs-center Pediatrician, Misamis Occidental
        span.font-xs.text-xs-center MYCURE Doctor since 2017
    br
    div
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        //- p.pb-2.font-s {{ private_title }}
        span.font-s.pb-2 &#10003; &nbsp; &nbsp; Queuing &amp Registration
        span.font-s.pb-2 &#10003; &nbsp; &nbsp; Patient Medical Records
        span.font-s.pb-2 &#10003; &nbsp; &nbsp; Billing &amp Collection
        span.font-s.pb-2 &#10003; &nbsp; &nbsp; Laboratory &amp Imaging
        span.font-s.pb-2 &#10003; &nbsp; &nbsp; Laboratory &amp Imaging
      v-layout(row justify-center)
        v-btn(
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

<style scoped>
  a:link {
    text-decoration: none
  }

  .price-card{
    border-radius: 0 10px 10px 0;
  }

  .image-rounded-corner {
    border-radius: 10px 0px 0px 10px;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>