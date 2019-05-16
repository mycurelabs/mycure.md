<template lang="pug">
  div.mc-light-grey.pb-5
    v-container
      v-flex(xs12 md12)
        v-layout(column wrap justify-center).mx-5
          font.font-l.text-xs-center "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far."
          br
          br
          font.font-xs.text-xs-center Dr. Gay Cadorna-Toledo
          b.font-xs.text-xs-center Pediatrician, Misamis Occidental
          font.font-xs.text-xs-center MYCURE Doctor since 2017
      v-layout(row wrap).ma-5
        v-flex(xs12 md6).px-5
          center
            div(style="width: 75%")
              v-img(:src="require('../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png')")
              v-card.clinic-card.text-xs-left.pa-3 
                p.pb-2.font-xs {{ private_title }}
                font &#10003 &nbsp Unlimited Clinics
                br
                font &#10003 &nbsp 1 GB Data
                br
                font &#10003 &nbsp SOAP Charting
                br
                font &#10003 &nbsp Prescription Printing
                br
                font &#10003 &nbsp Medical Billing
                v-layout(row wrap justify-center).pa-3
                  v-btn(style="background-color: #2e9fdf; color: white; width: auto" large round) 
                    strong GET MYCURE FREE
        v-flex(xs12 md6).px-5
          center 
            div(style="width: 75%")
              v-img(:src="require('../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png')")
              v-card.clinic-card.text-xs-left.pa-3 
                p.pb-2.font-xs {{ multispecialty_title }}
                font &#10003 &nbsp Queuing &amp Registration
                br
                font &#10003 &nbsp Patient Medical Records
                br
                font &#10003 &nbsp Billing &amp Collection
                br
                font &#10003 &nbsp Laboratory &amp Imaging
                br
                font &#10003 &nbsp Materials Management
                v-layout(row wrap justify-center).pa-3
                  v-btn(style="background-color: #2e9fdf; color: white; width: auto" large round) 
                    strong LEARN MORE
</template>

<script scoped>
export default {
  data () {
    return {
        private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        multispecialty_title: 'An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.'
    };
  }
};
</script>

<style scoped>

.clinic-card {
  border-radius: 0 0 10px 10px;
}


</style>

