<template lang="pug">
  div.mc-light-grey.pb-5
    v-container
      v-layout(row)
        v-flex(xs12 md5 offset-md1).mx-5
          center
            img(src="../../assets/images/mycure-icon-testimonial.png")
            br
            br
            font.font-s {{ testimonial1 }}
            br
            br
            strong.font-xs Dr. Jean Rivera
            br
            em.font-xs.font-mc-blue General Physician
        v-flex(xs12 md5).mx-5
            center
              img(src="../../assets/images/mycure-icon-testimonial.png")
              br
              br
              font.font-s {{ testimonial2 }}
              br
              br
              strong.font-xs Dr. Carly Mae Siamson
              br
              em.font-xs.font-mc-blue General Physician
      br
      br
      br
      v-flex(xs12 md12)
        v-layout(row justify-center)
          div(style="width: 27%;")
            v-img(:src="require('../../assets/images/mycure-web-banner-pricing-panel-private.png')")
          v-card(flat).price-card.text-xs-left.pa-5
            strong.pb-2.font-m For Private Practice
            br
            br
            font.font-xs Get a powerful combination of features 
              br 
              | designed for physicians who are practicing 
              br
              | solo or in groups.
            br
            br
            font &#10003 &nbsp Unlimited Clinics
            br
            font &#10003 &nbsp 1 GB Data
            br
            font &#10003 &nbsp SOAP Charting
            br
            font &#10003 &nbsp Prescription Printing
            br
            font &#10003 &nbsp Medical Billing
            v-layout(row wrap).py-4
              router-link(:to="{name: 'pricing'}").link.white--text
                v-btn(style="background-color: #2e9fdf; color: white; width: auto" large) 
                  strong ALWAYS FREE
</template>

<script>
  export default {
    data () {
      return {
        testimonial1: '“MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial2: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals.”'
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

  .shadow{
    box-shadow: 100px 0px 100px 0px
  }
</style>
