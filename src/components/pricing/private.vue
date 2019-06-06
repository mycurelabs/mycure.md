<template lang="pug">
  div.white
    div(v-if="!$isMobile").py-3
      v-container
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center).px-3
            strong.font-medium.font-mc-blue MYCURE for 
              br
              | Private Practice
            br
            br
            span.font-small.font-mc-grey A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
            br
            br
            div.pl-1
              v-btn(:href="`${siginURL}/signup/private/step-1`" color="#18c551" large right)
                strong.white--text.text-none Sign Up Now
          v-flex(xs12 md6).px-3
            img(width="100%" src="../../assets/images/mycure-pricing-emr-private-clinic.png")
        br
        br
        br
        v-layout(row)
          v-flex(xs12 md4) 
            span.font-small.font-mc-grey 
              strong FEATURES INCLUDED
        br
        v-layout(row justify-center)
          v-flex(xs12 md4)
            v-list
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Unlimited clinics
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Unlimited devices
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small 50 patients per month
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Secretary account
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Queuing System
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Medical Billing
          v-flex(xs12 md4)
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small SOAP Charting
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Prescription
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Lab &amp Imaging orders
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Custom medical forms
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Print functions
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Bulk patient upload
          v-flex(xs12 md4)
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small SMS Feature
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Patient tagging
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small Reports &amp Analytics
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small PNF Drug Catalog
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small ICD-10 List
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-small DPA Registration Guide
    div(v-else)
      div.pt-3.px-3
        img(width="100%" src="../../assets/images/mycure-pricing-emr-private-clinic.png")
        br
        br
        p.font-small.text-xs-center A powerful combination of EMR, queuing, and billing features designed for physicians who are practicing solo or in groups.
      div.px-3
        v-list
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Unlimited clinics
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Unlimited devices
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small 50 patients per month
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Secretary account
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Queuing System
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Medical Billing
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small SOAP Charting
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Prescription
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Lab &amp Imaging orders
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Custom medical forms
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Print functions
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Bulk patient upload
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small SMS Feature
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Patient tagging
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small Reports &amp Analytics
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small PNF Drug Catalog
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small ICD-10 List
          v-list-tile
            v-list-tile-action
              img(src="../../assets/images/mycure-web-bullet-check.png")
            v-list-tile-content
              span.font-small DPA Registration Guide
      div.py-3
        v-layout(justify-center)
          v-btn(:href="`${siginURL}/signup/private/step-1`" color="info" large) 
            strong.text-none Sign Up Now
        

</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  br{
    line-height: 150%;
  }
</style>
