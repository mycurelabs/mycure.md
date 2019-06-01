<template lang="pug">
  div.white.py-5
    div
      v-container
        v-layout(column justify-center)
          span.font-m.text-xs-center "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far." 
          br
          br
          span.font-s.text-xs-center Dr. Gay Cadorna-Toledo
          b.font-xs.text-xs-center Pediatrician, Misamis Occidental
          span.font-xs.text-xs-center MYCURE Doctor since 2017
      div
        img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
        v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
          p.pb-2.font-s {{ private_title }}
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Unlimited Clinics
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; 1 GB Data
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; SOAP Charting
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Prescription Printing
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Medical Billing
        v-layout(row justify-center)
          v-btn(
            :href="`${siginURL}/signup/private/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")
            strong.font-m.white--text.text-none Sign Up Now
      br
      br
      div
        img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
        v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
          p.pb-2.font-s {{ private_title }}
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

<script scoped>
  export default {
    data () {
      return {
          private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
          multispecialty_title: 'An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.',
          siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  a:link {
    text-decoration: none;
  }

  .clinic-card {
    border-radius: 0 0 10px 10px;
  }
</style>

