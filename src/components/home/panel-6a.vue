<template lang="pug">
  div
    div(v-if="!$isMobile")#products
      v-container
        v-layout(row wrap).ma-5
          v-flex(xs12 md6).px-3
            center
              div(style="width: 75%").right
                img(width="80%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
                v-card(style="margin-top: -2%" width="80%").clinic-card.text-xs-left.pa-4
                  p.pb-2.font-s {{ private_title }}
                  strong.font-s &#10003 &nbsp It's FREE!
                  br
                  span.font-s &#10003 &nbsp Unlimited Clinics
                  br
                  span.font-s &#10003 &nbsp 1 GB Data
                  br
                  span.font-s &#10003 &nbsp SOAP Charting
                  br
                  span.font-s &#10003 &nbsp Prescription Printing
                  br
                  span.font-s &#10003 &nbsp Medical Billing
                  v-layout(row wrap).py-4
                    v-btn(style="background-color: #2e9fdf; color: white; width: auto" large) 
                      a(href="/electronic-medical-records")
                        strong.white--text Sign Up Now
          v-flex(xs12 md6).px-3
            div(style="width: 75%").left
              img(width="80%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
              v-card(style="margin-top: -2%" width="80%").clinic-card.text-xs-left.pa-4
                p.pb-2.font-s {{ multispecialty_title }}
                span.font-s &#10003 &nbsp Queuing &amp Registration
                br
                span.font-s &#10003 &nbsp Patient Medical Records
                br
                span.font-s &#10003 &nbsp Billing &amp Collection
                br
                span.font-s &#10003 &nbsp Laboratory &amp Imaging
                br
                span.font-s &#10003 &nbsp Materials Management
                br(style="line-height: 39px")
                v-layout(row wrap).py-3
                  v-btn(style="background-color: #2e9fdf; color: white; width: auto" large) 
                    a(href="/clinic-management-system")
                      strong.white--text Sign Up Now
      panel6b
      panel6c.pt-5
</template>

<script>
  import panel6b from './panel-6b';
  import panel6c from './panel-6c';

  export default {
    components: {
      panel6b,
      panel6c
    },
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

