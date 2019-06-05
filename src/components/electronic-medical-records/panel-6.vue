<template lang="pug">
  div
    div(style="padding-top: 150px" v-if="!$isMobile").transparent#panel6
      v-container#emrproduct
        v-flex(xs12 md12)
          v-layout(row justify-center)
            span.font-medium.lh-title Engineered for solo practice doctors
          br
          br
          v-layout(row justify-center)
            div(style="height: 508px" ).image-rounded-corner.elevation-10
              img(width="100%" src="../../assets/images/mycure-web-banner-pricing-panel-private.png")
            div
            v-card(height="508px" flat).price-card.text-xs-left.pa-5.elevation-10
              strong(style="font-size: 30px").pb-2 For Private Practice
              br
              br
              span.font-small Get a powerful combination of features 
                br
                | designed for physicians who are practicing 
                br
                | solo or in groups.
              br
              br
              div(v-for="(feature,index) in privateFeatures" :key="index")
                b(v-if="index === 0").font-small &#10003 &nbsp {{ feature }}
                span(v-else).font-small &#10003 &nbsp {{ feature }}
                br
              v-layout(row wrap).py-4
                v-btn(:href="`${siginURL}/signup/private/step-1`" style="background-color: #18c551; color: white; width: auto" large).text-none
                  strong Sign Up Now
      panel6a(style="padding-top: 150px")
    div(v-else).pt-3
      img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
      v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
        p.pb-2.font-s {{ private_title }}
        div(v-for="(feature,index) in privateFeatures" :key="index")
          b(v-if="index === 0").font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
          span(v-else).font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
      v-layout(row justify-center)
        v-btn(style="background-color: #18c551; width: 80%; height: 60px")
          a(:href="`${siginURL}/signup/private/step-1`")
            strong.font-m.white--text.text-none Sign Up Now
</template>

<script>
  import panel6a from './panel-6a';

  export default {
    components: {
      panel6a
    },
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        privateFeatures: [
          'It\'s FREE!',
          'Unlimited Clinics',
          '1 GB Data',
          'SOAP Charting',
          'Prescription Printing',
          'Medical Billing'
        ]
      };
    }
  };
</script>

<style scoped>
  #panel6 {
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
    border-radius: 10px 0px 0px 10px;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>