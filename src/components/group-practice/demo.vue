<template lang="pug">
  div
    div(v-if="!$isMobile").px-5
      v-container.px-5
        v-layout(column justify-center).text-xs-center
          p.font-45.text-xs-center.pt-5 For Group clinics
          p.font-18.text-xs-center Designed for the doctors who practice in groups and are 
            br
            | assisted by one or more secretaries.
        v-layout(row justify-center).margin-top-50
          v-flex(xs12 md5 offset-xs2)
            div.pb-4
              p.font-22.pb-2 CORE
              p(v-for="(item, i) in coreFeatures").font-16.line-height-10 {{ item }}
            div.pb-4
              p.font-22.pb-2 MEDICAL RECORDS
              p(v-for="(item, i) in recordsFeatures").font-16.line-height-10 {{ item }}
          v-flex(xs12 md5)
            div.pb-4
              p.font-22.pb-2 QUEUEING &amp; APPOINTMENTS
              p(v-for="(item, i) in queueingFeatures").font-16.line-height-10 {{ item }}
            div.pb-4
              p.font-22.pb-2 SECURITY
              p(v-for="(item, i) in securityFeatures").font-16.line-height-10 {{ item }}
            div.pb-4
              p.font-22.pb-2 BUSINESS MANAGEMENT
              p(v-for="(item, i) in businessFeatures").font-16.line-height-10 {{ item }}
        br
        v-layout(row wrap justify-center)
          v-btn(
            id="emr-signup-btn"
            @click.stop="handleEmrSignupBtn"
            color="#18c551"
            :href="`${signInURL}/signup/private/step-1`"
            target="_blank"
          ).mt-3.cta-btn
            strong.font-18.white--text.text-none Schedule a Demo
    div(v-else).pt-5
      v-container
        v-layout(row justify-center)
          span.font-40.text-xs-center Why should doctors practicing in groups use 
            br 
            | MYCURE in their clinics?
      v-container
        v-layout(column justify-center)
          div.pb-4.pl-4
            p.font-22.pb-2 CORE
            p(v-for="(item, i) in coreFeatures").font-16.line-height-10 {{ item }}
          div.pb-4.pl-4
              p.font-22.pb-2 MEDICAL RECORDS
              p(v-for="(item, i) in recordsFeatures").font-16.line-height-10 {{ item }}
          div.pb-4.pl-4
            p.font-22.pb-2 QUEUEING &amp; APPOINTMENTS
            p(v-for="(item, i) in queueingFeatures").font-16.line-height-10 {{ item }}
          div.pb-4.pl-4
            p.font-22.pb-2 SECURITY
            p(v-for="(item, i) in securityFeatures").font-16.line-height-10 {{ item }}
          div.pb-4.pl-4
            p.font-22.pb-2 BUSINESS MANAGEMENT
            p(v-for="(item, i) in businessFeatures").font-16.line-height-10 {{ item }}
        v-layout(row wrap justify-center)
          //- TODO: href to where?
          v-btn(
            id="group-demo-btn"
            @click.stop="handleDemoBtn"
            target="_blank"
            color="#18c551" large).mt-5 
            strong.font-16.text-none.white--text Schedule a Demo
</template>

<script>
  export default {
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        coreFeatures: [
          '✓ Shared patients in one clinic',
          '✓ Unlimited patient charts',
          '✓ Unlimited secretary accounts',
          '✓ Multiple device access',
          '✓ Offlne Mode',
          '✓ Up to 10GB storage'
        ],
        recordsFeatures: [
          '✓ SOAP Charting',
          '✓ Prescription Encoding',
          '✓ Lab & Imaging Orders',
          '✓ Customizable Forms',
          '✓ Printing',
          '✓ Bulk Patient Upload',
          '✓ ICD-10 Catalog',
          '✓ PNF Drug Catalog'
        ],
        queueingFeatures: [
          '✓ Smart Patient Queueing',
          '✓ Queue Monitor',
          '✓ Patient Kiosk',
          '✓ Appointments Calendar'
        ],
        securityFeatures: [
          '✓ Multi-factor Authentication',
          '✓ Activity Logs',
          '✓ DPA Registration Guide'
        ],
        businessFeatures: [
          '✓ Medical Billing',
          '✓ Invoicing and Payments',
          '✓ Reports & Analytics',
          '✓ HMO Claims Management',
          '✓ SMS Reminders for Patients'
        ]
      };
    },
    methods: {
      handleDemoBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-demo-signup-btn',
          eventLabel: 'demo-signup-btn'
        });
      }
    },
  };
</script>

<style scoped>
ul {
  list-style-type: none;
}
.check-list {
  background-color: #f6f6f6;
}
.line-height-10{
  line-height: 10px;
}
.margin-top-50{
  margin-top: 50px;
}
</style>

