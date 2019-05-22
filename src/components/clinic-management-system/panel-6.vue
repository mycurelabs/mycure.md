<template lang="pug">
  div
    v-container
      v-flex(xs12 md12)
      v-layout(column wrap justify-center).mx-5
        font(style="width: auto;").font-l.text-xs-center.mx-5 "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far."
        br
        br
        font.font-xs.text-xs-center Dr. Gay Cadorna-Toledo
        b.font-xs.text-xs-center Pediatrician, Misamis Occidental
        font.font-xs.text-xs-center MYCURE Doctor since 2017
        br
        br
        br
      v-flex(xs12 md12)
        v-layout(row justify-center)
          div(style="width: 27%;")
            v-img(:src="require('../../assets/images/mycure-web-banner-pricing-panel-multispecialty.png')")
          div(style="diplay: inline-block;")
          v-card(flat).price-card.text-xs-left.pa-5
            strong.pb-2.font-m For Multispecialty Clinics
            br
            br
            font.font-xs An all-around solution for your outpatient, 
              br
              | multispecialty or specialized clinics that will 
              br
              | manage your full-patient journeys with ease.
            br
            br
            font &#10003 &nbsp Queuing &amp Registration
            br
            font &#10003 &nbsp Patient Medical Records
            br
            font &#10003 &nbsp Billing &amp Collection
            br
            font &#10003 &nbsp Laboratory &amp Imaging
            br
            font &#10003 &nbsp Materials Management
            v-layout(row wrap).py-4
              router-link(:to="{name: 'pricing'}").link.white--text
                v-btn(style="background-color: #2e9fdf; color: white; width: auto" large) 
                  strong BOOK A DEMO
</template>

<script>
  export default {
    data () {
      return {
        //
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
</style>