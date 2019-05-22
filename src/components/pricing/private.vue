<template lang="pug">
  div.py-5
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
          v-btn(color="success" large) 
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
      v-layout(row align-center)
        v-flex(xs12 md3 offset-md1 align-self-center)
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Unlimited clinics
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Unlimited devices
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp 50 patients per month
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Secretary account
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Queuing System
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Medical Billing
        v-flex(xs12 md3 offset-md1)
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp SOAP Charting
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Prescription
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Lab &amp Imaging orders
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Custom medical forms
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Print functions
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Bulk patient upload
        v-flex(xs12 md3 offset-md1)
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp SMS Feature
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Patient tagging
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp Reports &amp Analytics
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp PNF Drug Catalog
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp ICD-10 List
          v-layout(row).pb-2
            img(width="7%" src="../../assets/images/mycure-icon-check.png").pt-2
            font.font-m &nbsp &nbsp DPA Registration Guide
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
