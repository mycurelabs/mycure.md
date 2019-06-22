<template lang="pug">
  div
    div(v-if="!$isMobile").pt-4#panel5
      v-container
        v-layout(row justify-center)
          v-card(height="508px" flat).elevation-10.image-rounded-corner
            v-layout(row justify-center)
              v-flex(xs5)
                img(width="100%" height="508vh" src="../../assets/images/mycure-web-banner-pricing-panel-multispecialty.png" alt="Multispecialty Pricing")
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
                  v-btn(
                    id="cms-signup-btn"
                    @click.stop="handleCmsSignupBtn"
                    :href="`${siginURL}/signup/multi-specialty/step-1`"
                    color="#18c551" 
                    style="width: auto" large
                  ).text-none
                    strong.font-small.white--text Get Started Today
      finalwords
      filler
    div(v-else)
      div
        img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png" alt="Multispecialty banner")
        v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
          v-layout(row wrap)
            span.font-small {{ multiSpecialty_desc }}
          br
          div(v-for="(feature,index) in multiFeatures" :key="feature")
            span.font-small.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
        v-layout(row justify-center)
          v-btn(
            id="cms-signup-btn"
            @click.stop="handleCmsSignupBtn"
            :href="`${siginURL}/signup/multi-specialty/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")
              strong.font-m.white--text.text-none Get Started Today
      finalwords
      //- filler
</template>

<script>
  import finalwords from '@/components/clinic-management-system/6-finalwords';
  import filler from '@/components/clinic-management-system/7-filler';

  export default {
    components: {
      finalwords,
      filler
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
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
  #panel5 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
</style>

