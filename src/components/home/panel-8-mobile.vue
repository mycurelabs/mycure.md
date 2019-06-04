<template lang="pug">
  div.mt-5
    div
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        p.pb-2.font-s {{ private_title }}
        div(v-for="(feature,index) in privateFeatures")
          b(v-if="index === 0").font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
          span(v-else).font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
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
        div(v-for="feature in multiFeatures")
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
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
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        multispecialty_title: 'An all-around solution for your outpatient, multi-specialty or specialized clinics that will manage your full-patient journeys with ease.',          
        privateFeatures: [
          'It\'s FREE!',
          'Unlimited Clinics',
          '1 GB Data',
          'SOAP Charting',
          'Prescription Printing',
          'Medical Billing'
        ],
        multiFeatures: [
          'Queuing & Registration',
          'Patient Medical Records',
          'Billing & Collection',
          'Laboratory & Imaging',
          'Materials Management'
        ]
      };
    }
  };
</script>

<style scoped>

</style>
