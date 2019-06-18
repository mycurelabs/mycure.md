<template lang="pug">
  div.transparent#cmsproduct.pt-5
    div(v-if="!$isMobile")#panel5a
      v-container
        v-flex(xs12 md12)
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
                      :href="`${siginURL}/signup/multi-specialty/step-1`"
                      color="#18c551" 
                      style="width: auto" large
                    ).text-none
                      strong.font-small.white--text Sign Up Now
      filler(style="padding-top:150px")
        span(slot="multiFiller").font-l Does your clinic have more than 3 branches? 
        span(slot="chatWindow" @click="toggleChat").pointer.font-l.font-mc-blue Talk to us for custom pricing.
      panel5b(style="padding-top: 150px")
    div(v-else)
</template>

<script>
  import panel5b from './panel-5b';
  import filler from '../commons/filler';

  export default {
    components:{
      panel5b,
      filler
    },
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Clinic Management System for Multispecialty Clinics.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      }
    },
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
  #panel5a {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

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

  .pointer:hover {
    cursor: pointer;
  }
</style>