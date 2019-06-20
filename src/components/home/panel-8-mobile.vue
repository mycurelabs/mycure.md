<template lang="pug">
  div.pt-3
    div#tabs
      v-layout(row style="border-top: 1px solid #f5f5f5; border-bottom: 1px solid #f6f6f6; height: 100px")
        div(style="height: 100px; width: 50%; border-right: 1px solid #f5f5f5;")
          div(v-if="isPrivate" @click.stop="isPrivate=true; isMulti=false" style="height: 100px;").pl-4.py-4
            strong.font-m.font-mc-blue For Private
              br
              | Practice
            div(style="margin-top: 9px")
              img(style="color: #f6f6f6" src="../../assets/images/mycure-mobile-icon-triangle-up-white.png" alt="Triangle icon")
          div(v-else @click.stop="isPrivate=true; isMulti=false" style="height: 100px;").white.pl-4.py-4
            span.font-m.font-mc-grey For Private
              br
              | Practice
        div(style="height: 100px; width: 50%")
          div(v-if="isMulti" @click.stop="isPrivate=false; isMulti=true" style="height: 100px;").mc-blue.pl-4.py-4
            strong.font-m.font-mc-blue For Multispecialty
              br
              | Clinics
            div(style="margin-top: 9px")
              img(style="color: #f6f6f6" src="../../assets/images/mycure-mobile-icon-triangle-up-white.png" alt="Triangle icon")
          div(v-else @click.stop="isPrivate=false; isMulti=true" style="height: 100px;").white.pl-4.py-4
            span.font-m.font-mc-grey For Multispecialty
              br
              | Clinics
    div(v-if="isPrivate" style="background-color: #f6f6f6")#content
      v-layout(column wrap).pa-5
        p.pb-2.font-s {{ private_title }}
        div(v-for="(feature,index) in privateFeatures")
          b(v-if="index === 0").font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
          span(v-else).font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }}
      v-layout(row justify-center).pb-5
        v-btn(
          id="home-emr-signup-btn"
          @click.stop="handleHomeEmrSignupBtn"
          :href="`${siginURL}/signup/private/step-1`"
          style="background-color: #18c551; width: 80%; height: 60px")
          strong.font-m.white--text.text-none Sign Up Now
    div(v-if="isMulti" style="background-color: #f6f6f6")#content 
      v-layout(column wrap).pa-5
        p.pb-2.font-s {{ multispecialty_title }}
        div(v-for="feature in multiFeatures")
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; {{ feature }} 
      v-layout(row justify-center).pb-5
        v-btn(
          id="home-cms-signup-btn"
          @click.stop="handleHomeCmsSignupBtn"
          :href="`${siginURL}/signup/multi-specialty/step-1`"
          style="background-color: #18c551; width: 80%; height: 60px")  
          strong.font-m.white--text.text-none Sign Up Now  
</template>

<script>
  export default {
    data () {
      return {
        isPrivate: true,
        isMulti: false,
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        multispecialty_title: 'An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.',          
        privateFeatures: [
          'It\'s FREE!',
          'Unlimited Clinics',
          'SOAP Charting',
          'Prescription Printing',
          'Medical Billing'
        ],
        multiFeatures: [
          'Queuing & Registration',
          'Patient Medical Records',
          'Billing & Collection',
          'Laboratory & Imaging',
          'Materials Management'
        ]
      };
    },
    methods: {
      handleHomeEmrSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-emr-signup-btn',
          eventLabel: 'toolbar-home-emr-signup-btn'
        });
      },
      handleHomeCmsSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-cms-signup-btn',
          eventLabel: 'toolbar-home-cms-signup-btn'
        });
      }
    }
  };
</script>
