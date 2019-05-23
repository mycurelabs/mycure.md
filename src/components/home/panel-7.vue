<template lang="pug">
  div
    div(v-if="!$isMobile").mc-light-grey.pb-5
      v-container
        v-flex(xs12 md12)
          v-layout(column wrap justify-center).mx-5
            span.font-l.text-xs-center "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far."
            br
            br
            span.font-s.text-xs-center Dr. Gay Cadorna-Toledo
            b.font-xs.text-xs-center Pediatrician, Misamis Occidental
            span.font-xs.text-xs-center MYCURE Doctor since 2017
        v-layout(row wrap).ma-5
          v-flex(xs12 md6).px-5
            center
              div(style="width: 75%")
                img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
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
                      a(href="/electronic-medical-records")
                        strong.white--text GET MYCURE FREE
          v-flex(xs12 md6).px-5
            center 
              div(style="width: 75%")
                img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
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
                      a(href="/clinic-management-system")
                        strong.white--text LEARN MORE
    div(v-else).mc-light-grey
      v-container
        v-layout(column justify-center)
          span.font-m.text-xs-center "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far." 
          br
          br
          span.font-xs.text-xs-center Dr. Gay Cadorna-Toledo
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
          v-btn(style="background-color: #2e9fdf; color: white; width: 80%; height: 60px")
            a(href="/electronic-medical-records")
              strong.font-m.white--text GET MYCURE FREE
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
          v-btn(style="background-color: #2e9fdf; color: white; width: 80%; height: 60px")
            a(href="/clinic-management-system")
              strong.font-m.white--text LEARN MORE
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
  a:link {
    text-decoration: none;
  }

  .clinic-card {
    border-radius: 0 0 10px 10px;
  }
</style>

