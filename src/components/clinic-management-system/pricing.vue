<template lang="pug">
  div
    div(v-if="!$isMobile").pt-4#panel5transparent
      v-container
        v-layout(row justify-center)
          v-card(height="508px" flat).elevation-10.image-rounded-corner
            v-layout(row justify-center)
              v-flex(xs5)
                img(width="100%" height="508vh" src="../../assets/images/mycure-web-banner-pricing-panel-multispecialty.png" alt="Multispecialty Pricing")
              v-flex(xs8).text-xs-left.pa-5
                strong.font-30.pb-2 For Multispecialty Clinics
                br
                br
                font.font-18 An all-around solution for your outpatient, 
                  br
                  | multispecialty or specialized clinics that will 
                  br
                  | manage your full-patient journeys with ease.
                br
                br
                div(v-for="(feature,index) in multiFeatures" :key="index")
                  span.font-18 &#10003 &nbsp {{ feature }}
                  br
                v-layout(row wrap).py-4
                  v-btn(
                    id="cms-signup-btn"
                    @click.stop="handleCmsSignupBtn"
                    :href="`${signInURL}/signup/multi-specialty/step-1`"
                    target="_blank"
                    color="#18c551" 
                    large
                  ).text-none
                    strong.font-18.white--text Get Started Today
    div(v-else).pt-5
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png" alt="Multispecialty banner")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        v-layout(row wrap)
          span.font-18 {{ multiSpecialty_desc }}
        br
        div(v-for="(feature,index) in multiFeatures" :key="feature")
          span.font-18.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
      v-layout(row justify-center)
        v-btn(
          id="cms-signup-btn"
          @click.stop="handleCmsSignupBtn"
          :href="`${signInURL}/signup/multi-specialty/step-1`"
          target="_blank"
          color="#18c551"
          large
        ).cta-btn
          strong.font-18.white--text.text-none Get Started Today
</template>

<script>
  export default {
    components: {
      // 
    },
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        multiSpecialty_desc: 'An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.',
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
  .price-card{
    border-radius: 0 10px 10px 0;
  }
  .image-rounded-corner {
    border-radius: 10px !important;
  }
</style>

