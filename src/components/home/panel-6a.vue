<template lang="pug">
  div
    div(v-if="!$isMobile")#products
      v-container
        v-layout(row wrap)
          v-flex(xs12 md6).px-3
            center
              div(style="width: 75%").right
                img(width="80%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
                v-card(style="margin-top: -2%" width="80%").clinic-card.text-xs-left.pa-4
                  p.pb-2.font-small {{ private_title }}
                  strong.font-small &#10003 &nbsp It's FREE!
                  br
                  span.font-small &#10003 &nbsp Unlimited Clinics
                  br
                  span.font-small &#10003 &nbsp 1 GB Data
                  br
                  span.font-small &#10003 &nbsp SOAP Charting
                  br
                  span.font-small &#10003 &nbsp Prescription Printing
                  br
                  span.font-small &#10003 &nbsp Medical Billing
                  v-layout(row wrap).py-4
                    v-btn(
                      :href="`${siginURL}/signup/private/step-1`"
                      style="background-color: #18c551; color: white; width: auto" 
                      large
                    ) 
                      strong.white--text Sign Up Now
          v-flex(xs12 md6).px-3
            div(style="width: 75%").left
              img(width="80%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
              v-card(style="margin-top: -2%" width="80%").clinic-card.text-xs-left.pa-4
                p.pb-2.font-small {{ multispecialty_title }}
                span.font-small &#10003 &nbsp Queuing &amp Registration
                br
                span.font-small &#10003 &nbsp Patient Medical Records
                br
                span.font-small &#10003 &nbsp Billing &amp Collection
                br
                span.font-small &#10003 &nbsp Laboratory &amp Imaging
                br
                span.font-small &#10003 &nbsp Materials Management
                br(style="line-height: 39px")
                v-layout(row wrap).py-3
                  v-btn(
                      :href="`${siginURL}/signup/private/step-1`"
                      style="background-color: #18c551; color: white; width: auto" 
                      large
                    )
                      strong.white--text Sign Up Now
      panel6b(style="padding-top: 100px")
      panel6c(style="padding-top: 100px")
      panel6d(style="padding-top: 100px")
</template>

<script>
  import panel6b from './panel-6b';
  import panel6c from './panel-6c';
  import panel6d from './panel-6d';

  export default {
    components: {
      panel6b,
      panel6c,
      panel6d
    },
    data () {
      return {
          private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
          multispecialty_title: 'An all-around solution for your outpatient, multi-specialty or specialized clinics that will manage your full-patient journeys with ease.',
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

