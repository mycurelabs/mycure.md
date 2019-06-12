<template lang="pug">
  div.transparent#cmsproduct
    div(v-if="!$isMobile")
      v-container
        v-flex(xs12 md12)
          v-layout(row justify-center)
            v-card(height="508px" flat).elevation-10.image-rounded-corner
              v-layout(row justify-center)
                v-flex(xs5)
                  img(width="100%" height="508vh" src="../../assets/images/mycure-web-banner-pricing-panel-multispecialty.png")
                v-flex(xs8).text-xs-left.pa-5
                  strong(style="font-size: 30px").pb-2 For Multispecialty Clinics
                  br
                  br
                  font.font-small An all-around solution for your outpatient, 
                    br
                    | multispecialty or specialized clinics that will 
                    br
                    | manage your full-patient journeys with ease.
                  br
                  br
                  div(v-for="(feature,index) in multiFeatures" :key="index")
                    span.font-small &#10003 &nbsp {{ feature }}
                    br
                  v-layout(row wrap).py-4
                    //- a(href="https://calendly.com/mycure" target="_blank")
                    v-btn(
                      :href="`${siginURL}/signup/choose`"
                      color="#18c551" 
                      style="width: auto" large
                    ).text-none
                      strong.white--text Sign Up Now
    div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,

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
  a:link {
    text-decoration: none
  }

  .price-card{
    border-radius: 0 10px 10px 0;
  }

  .image-rounded-corner {
    border-radius: 10px !important ;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>