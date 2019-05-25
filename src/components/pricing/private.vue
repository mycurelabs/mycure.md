<template lang="pug">
  div.white
    div(v-if="!$isMobile").py-3
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).px-3
            strong.font-l.font-mc-blue MYCURE for 
              br
              | Private Practice
            br
            br
            font.font-mc-grey A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
            br
            br
            v-btn(color="info" large) 
              strong USE MYCURE FREE
          v-flex(xs12 md6).px-3
            img(width="100%" src="../../assets/images/mycure-pricing-emr-private-clinic.png")
        br
        br
        br
        v-layout(row)
          v-flex(xs12 md4) 
            font.font-mc-grey 
              strong FEATURES INCLUDED
        br
        v-layout(row justify-center)
          v-flex(xs12 md4)
            v-list
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  span.font-m Unlimited clinics
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  span.font-m Unlimited devices
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  span.font-m 50 patients per month
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  span.font-m Secretary account
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  span.font-m Queuing System
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  span.font-m Medical Billing
          v-flex(xs12 md4)
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m SOAP Charting
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Prescription
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Lab &amp Imaging orders
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Custom medical forms
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Print functions
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Bulk patient upload
          v-flex(xs12 md4)
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m SMS Feature
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Patient tagging
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Reports &amp Analytics
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m PNF Drug Catalog
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m ICD-10 List
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m DPA Registration Guide
    div(v-else)
      div.pa-3
        img(width="100%" src="../../assets/images/mycure-pricing-emr-private-clinic.png")
        br
        br
        p.font-s.text-xs-center A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
        br
      div.pa-3
        v-list
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Unlimited clinics
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Unlimited devices
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s 50 patients per month
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Secretary account
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Queuing System
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Medical Billing
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s SOAP Charting
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Prescription
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Lab &amp Imaging orders
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Custom medical forms
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Print functions
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Bulk patient upload
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s SMS Feature
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Patient tagging
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s Reports &amp Analytics
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s PNF Drug Catalog
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s ICD-10 List
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-icon-check.png")
            v-list-tile-content
              span.font-s DPA Registration Guide
      div.py-3
        v-layout(justify-center)
          v-btn(color="info" large) 
            strong USE MYCURE FREE
        

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
  br{
    line-height: 150%;
  }
</style>
