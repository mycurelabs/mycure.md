<template lang="pug">
  div.py-5.white
    div(v-if="!$isMobile")
      v-container
        v-flex(xs12 md12)
        v-layout(column wrap justify-center).mx-5
          font(style="width: auto;").font-large.text-xs-center.mx-5 "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far."
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
            div(style="width: 27%;").image-rounded-corner.one-edge-shadow
              v-img(:src="require('../../assets/images/mycure-web-banner-pricing-panel-multispecialty.png')")
            div(style="diplay: inline-block;")
            v-card(flat).price-card.text-xs-left.pa-5.one-edge-shadow
              strong.pb-2.font-medium For Multispecialty Clinics
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
                a(href="https://calendly.com/mycure" target="_blank")
                  v-btn(style="background-color: #2e9fdf; color: white; width: auto" large) 
                    strong BOOK A DEMO
    div(v-else)
      v-container
        v-layout(column justify-center)
          span.font-medium.text-xs-center "It's a great experience using MYCURE app in our rural setup. I've been through many EMR apps, but this one is the best so far." 
          br
          br
          span.font-small.text-xs-center Dr. Gay Cadorna-Toledo
          b.font-xs.text-xs-center Pediatrician, Misamis Occidental
          span.font-xs.text-xs-center MYCURE Doctor since 2017
      br
      div
        img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
        v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
          p.pb-2.font-small {{ private_title }}
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; Queuing &amp Registration
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; Patient Medical Records
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; Billing &amp Collection
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; Laboratory &amp Imaging
          span.font-small.pb-2 &#10003; &nbsp; &nbsp; Materials &amp Management
        v-layout(row justify-center)
          v-btn(style="background-color: #2e9fdf; color: white; width: 80%; height: 60px")
            a(href="https://calendly.com/mycure" target="_blank")
              strong.font-medium.white--text BOOK A DEMO
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

  .image-rounded-corner {
    border-radius: 10px 0px 0px 10px;
  }

  .one-edge-shadow {
    -webkit-box-shadow: 0 8px 6px -8px black;
    -moz-box-shadow: 0 8px 6px -8px black;
    box-shadow: 0 8px 6px -8px black;
  }
</style>