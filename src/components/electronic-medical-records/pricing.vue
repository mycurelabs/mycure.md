<template lang="pug">
div
  v-container
    v-layout(column justify-center)
      h2.font-48.text-xs-center For Individual Practice
      p.font-18.text-xs-center Designed for private practitioners who run their clinic alone or with a trusty secretary.
    v-layout(row justify-center).margin-top-100
      v-flex(xs12 md5 v-for="n in 2" :key="n").px-2
        v-card(height="1600").px-5.pt-2.flexcard
          v-card-text.grow
            div.pricing-card-1
              h2(v-if="n === 1").font-20.font-mc-blue.font-weight-black FREE
              h2(v-else).font-20.font-mc-blue.font-weight-black PREMIUM              
              strong.font-26 $
                |
                strong(v-if="n === 1").font-40 0
                strong(v-else).font-40 18
              br
              p.font-22.line-height-5 per month
              span(v-if="n !== 1").font-18.font-italic (if billed annually, $22 if per month) 
            div(v-if="n === 1").pricing-card-2-left
              p.font-20.font-mc-grey We have included everything you need to serve your patients more efficiently for FREE!
            div(v-if="n !== 1").pricing-card-2-right            
              p.font-20.font-mc-grey Everything in FREE plus boosters to help you with business management and patient loyalty.
            div.pricing-card-3
              div.pb-4
                p.font-22.pb-2 CORE
                p(v-if="n === 1" v-for="(item, i) in coreFree").font-16.line-height-10 {{ item }}
                p(v-if="n !== 1" v-for="(item, i) in coreFree.slice(0,4)").font-16.line-height-10 {{ item }}
                p(v-if="n !== 1").font-16.line-height-10 ✓ Up to 10GB Storage
              div.pb-4
                p.font-22.pb-2 MEDICAL RECORDS
                p(v-for="(item, i) in medicalRecordsFree").font-16.line-height-10 {{ item }}
              div.pb-4
                p.font-22.pb-2 QUEUING &amp; APPOINTMENTS
                p(v-for="(item, i) in queueingFree").font-16.line-height-10 {{ item }}
              div.pb-4
                p.font-22.pb-2 SECURITY
                p(v-for="(item, i) in securityFree").font-16.line-height-10 {{ item }}
              div(v-if="n !== 1").pb-4
                p.font-22.pb-2 BUSINESS MANAGEMENT
                p(v-for="(item, i) in businessManagementPremium").font-16.line-height-10 {{ item }}
              div(v-if="n !== 1").pb-4
                p.font-22.pb-2 ACCESSIBILITY
                p(v-for="(item, i) in accessibilityPremimum").font-16.line-height-10 {{ item }}
          v-card-actions.pb-5
            v-layout(row justify-center)
              v-btn(
                v-if="n === 1"
                color="#18c551"
                :href="`${signInURL}/signup/private/step-1`"
                target="_blank"
              ).cta-btn-size
                strong.font-16.white--text SIGN UP FREE
              v-btn(
                v-if="n !== 1"
                color="#18c551"
                :href="`${signInURL}/signup/private/step-1`"
                target="_blank"
              ).cta-btn-size
                strong.font-16.white--text START MY TRIAL 
  //-TODO: Confirm if we are reverting back to the old product card
  //- div#emrproduct
  //-   div(v-if="!$isMobile").transparent
  //-     v-container
  //-       v-layout(row justify-center align-center)
  //-         v-flex(xs12)
  //-           br
  //-           v-layout(row justify-center)
  //-             v-card(height="508px" width="80%" flat).elevation-10.image-rounded-corner
  //-               v-layout(row justify-center)
  //-                 v-flex(xs5)
  //-                   img(width="100%" height="508vh" src="../../assets/images/mycure-web-banner-pricing-panel-private.png" alt="Private clinic pricing")
  //-                 v-flex(xs8).text-xs-left.pa-5
  //-                   strong.font-30.pb-2 For Private Practice
  //-                   br
  //-                   br
  //-                   span.font-18 {{ private_title }}
  //-                   br
  //-                   br
  //-                   v-layout(row v-for="(feature,index) in privateFeatures" :key="index")
  //-                     span.font-18 &#10003 &nbsp 
  //-                     span.font-18 {{ feature }}
  //-                     br
  //-                   v-layout(row wrap).py-4
  //-                     v-btn(
  //-                       :href="`${signInURL}/signup/choose`" 
  //-                       target="_blank"
  //-                       color="#18c551"
  //-                       large
  //-                     ).text-none
  //-                       strong.font-18.white--text Sign Up Now
  //-   div(v-else).py-3.transparent
  //-     img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png" alt="Private clinic pricing")
  //-     v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
  //-       p.pb-2.font-18 {{ private_title }}
  //-       v-layout(row v-for="(feature,index) in privateFeatures" :key="index")
  //-         span.font-18.pb-2 &#10003; &nbsp; 
  //-         span.font-18 {{ feature }}
  //-     v-layout(row justify-center)
  //-       v-btn(
  //-         color="#18c551"
  //-         :href="`${signInURL}/signup/choose`"
  //-         target="_blank"
  //-       ).cta-btn
  //-         strong.font-18.white--text.text-none Sign Up Now
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        signInURL: process.env.VUE_APP_SIGNIN_URL,
        coreFree: [
          '✓ Unlimited patients',
          '✓ Unlimited virtual clinics',
          '✓ Multiple device access',
          '✓ Secretary accounts',
          '✓ Up to 1GB Storage'
        ],
        medicalRecordsFree: [
          '✓ SOAP Charting',
          '✓ Prescription Encoding',
          '✓ Lab & Imaging Orders',
          '✓ Customizable Forms',
          '✓ Printing',
          '✓ Bulk Patient Upload',
          '✓ ICD-10 Catalog',
          '✓ PNF Drug Catalog'
        ],
        queueingFree: [
          '✓ Smart Patient Queuing',
          '✓ Queue Monitor',
          '✓ Patient Kiosk',
          '✓ Appointments Calendar'
        ],
        securityFree: [
          '✓ Multi-Factor Authentication',
          '✓ Activity Logs',
          '✓ DPA Registration Guide'
        ],
        businessManagementPremium: [
          '✓ Medical Billing',
          '✓ Invoicing and Payments',
          '✓ Reports & Analytics',
          '✓ HMO Claims Management',
          '✓ SMS Reminders for Patients'
        ],
        accessibilityPremimum: [
          '✓ Offline mode',
          '✓ Ad free'
        ]
      };
    }
  };
</script>

<style scoped>
.line-height-5{
  line-height: 5px;
}
.line-height-10{
  line-height: 10px;
}
.pricing-card-2-left{
  margin-top: 75px;
  margin-bottom: 50px;
}
.pricing-card-2-right{
  margin-top: 30px;
  margin-bottom: 35px;
}
.cta-btn-size{
  width: 300px;
  height: 50px;
}
.margin-top-left-cta{
  margin-top: 355px;
}
.flexcard {
  display: flex;
  flex-direction: column;
}
</style>