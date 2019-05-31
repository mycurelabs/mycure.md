<template lang="pug">
  div
    div(style="padding-top: 150px" v-if="!$isMobile").transparent#panel6
      v-container#emrproduct
        v-flex(xs12 md12)
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
              span.font-small &#10003 &nbsp Unlimited Clinics
              br
              span.font-small &#10003 &nbsp 1 GB data
              br
              span.font-small &#10003 &nbsp SOAP Charting
              br
              span.font-small &#10003 &nbsp Prescription Printing
              br
              span.font-small &#10003 &nbsp Medical Billing
              v-layout(row wrap).py-4
                //- a(href="https://calendly.com/mycure" target="_blank")
                v-btn(style="background-color: #18c551; color: white; width: auto" large).text-none
                  strong Sign Up Now
      panel6a(style="padding-top: 150px")
    div(v-else)
      v-container
        v-flex(xs12)
          center
            img(src="../../assets/images/mycure-icon-testimonial.png")
            br
            br
            span.font-s {{ testimonial1 }}
            br
            br
            strong.font-xs Dr. Jean Rivera
            br
            em.font-xs.font-mc-blue General Physician
        br
        br
        v-flex(xs12)
            center
              img(src="../../assets/images/mycure-icon-testimonial.png")
              br
              br
              span.font-s {{ testimonial2 }}
              br
              br
              strong.font-xs Dr. Carly Mae Siamson
              br
              em.font-xs.font-mc-blue General Physician
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
        v-btn(style="background-color: #18c551; width: 80%; height: 60px")
          a(href="/electronic-medical-records")
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
        testimonial1: '“MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial2: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals.”'
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