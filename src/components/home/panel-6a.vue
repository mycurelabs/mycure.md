<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container
        v-layout(row wrap)
          v-flex(xs12 md6)
            div(style="width: 75%").right
              center
                img(width="80%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png" alt="Private Clinic")
                v-card(style="margin-top: -2%" width="80%").clinic-card.text-xs-left.pa-4
                  p.pb-2.font-small {{ private_title }}
                  strong.font-small &#10003 &nbsp It's FREE!
                  br
                  span.font-small &#10003 &nbsp Unlimited Clinics
                  br
                  span.font-small &#10003 &nbsp SOAP Charting
                  br
                  span.font-small &#10003 &nbsp Prescription Printing
                  br
                  span.font-small &#10003 &nbsp Medical Billing
                  v-layout(row wrap).pt-5.pb-4
                    v-btn(
                      :href="`${signInURL}/signup/private/step-1`"
                      target="_blank"
                      style="background-color: #18c551; color: white; width: auto" 
                      large
                      id="home-emr-signup-btn"
                      @click.stop="handleHomeEmrSignupBtn"
                    ) 
                      strong.white--text Sign Up Now
          v-flex(xs12 md6)
            div(style="width: 75%")
              center
                img(width="80%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png" alt="Multispecialty Clinic")
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
                  v-layout(row wrap).py-4
                    v-btn(
                        :href="`${signInURL}/signup/multi-specialty/step-1`"
                        target="_blank"
                        style="background-color: #18c551; color: white; width: auto" 
                        large
                        id="home-cms-signup-btn"
                        @click.stop="handleHomeCmsSignupBtn"
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
          multispecialty_title: 'An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.',
          signInURL: process.env.VUE_APP_SIGNIN_URL
      };
    },
    methods: {
      handleHomeEmrSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-emr-signup-btn',
          eventLabel: 'toolbar-home-emr-signup-btn'
        });
      },
      handleHomeCmsSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-cms-signup-btn',
          eventLabel: 'toolbar-home-cms-signup-btn'
        });
      }
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

