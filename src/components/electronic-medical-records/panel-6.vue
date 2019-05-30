<template lang="pug">
  div.transparent#panel6
    div(style="padding-top: 150px" v-if="!$isMobile")#emrproduct
      v-container
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
                v-btn(style="background-color: #2e9fdf; color: white; width: auto" large).text-none
                  strong Sign Up Now
      panel6a(style="padding-top: 150px")
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
  import panel6a from './panel-6a';

  export default {
    components: {
      panel6a
    },
    data () {
      return {
        //
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