<template lang="pug">
  div.white.py-5
    div
      v-container
        v-layout(justify-center).px-3.red
          div
            //- https://ssense.github.io/vue-carousel/
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              :navigationEnabled="true"
              :adjustableHeight="true"
              paginationActiveColor="blue"
              paginationColor="grey"
              :navigationClickTargetSize="50"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(data-index="1").text-xs-center
                span.font-small {{ testimonial1 }}
                br
                br
                span.font-s Atty. Ivy D. Patdu, M.D
                br
                strong.font-s Deputy Privacy Commissioner,
                  | 
                span.font-small NPC
              slide(data-index="2").text-xs-center.blue.px-5
                span.font-small {{ testimonial2 }}
                br
                br
                span.font-s Dr. Gay Cadorna-Toledo
                br
                br
                strong.font-s Pediatrician,
                  | 
                span.font-s Misamis Occidental
                  br
                  | MYCURE Doctor since 2017
              slide(data-index="3").text-xs-center
                span.font-small {{ testimonial3 }}
                br
                br
                span.font-s Dr. Nelson S. Abelardo
                br
                strong.font-s Cardiologist,
                  | 
                span.font-s Manila Doctors Hospital
      div
        img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-private-clinic.png")
        v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
          p.pb-2.font-s {{ private_title }}
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Unlimited Clinics
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; 1 GB Data
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; SOAP Charting
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Prescription Printing
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Medical Billing
        v-layout(row justify-center)
          v-btn(
            :href="`${siginURL}/signup/private/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")
            strong.font-m.white--text.text-none Sign Up Now
      br
      br
      div
        img(width="100%" src="../../assets/images/mycure-web-banner-fifth-panel-multi-specialty-clinics.png")
        v-layout(column wrap).pt-4.pb-5.pr-5.pl-5
          p.pb-2.font-s {{ private_title }}
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Queuing &amp Registration
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Patient Medical Records
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Billing &amp Collection
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Laboratory &amp Imaging
          span.font-s.pb-2 &#10003; &nbsp; &nbsp; Laboratory &amp Imaging
        v-layout(row justify-center)
          v-btn(
            :href="`${siginURL}/signup/private/step-1`"
            style="background-color: #18c551; width: 80%; height: 60px")
            strong.font-m.white--text.text-none Sign Up Now
</template>

<script scoped>
  export default {
    data () {
      return {
        private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        multispecialty_title: 'An all-around solution for your outpatient, multi-specialty or specialized clinics that will manage your full-patient journeys with ease.',
        siginURL: process.env.VUE_APP_SIGNIN_URL,

        testimonial1: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.”', 
        testimonial2: '“MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial3: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals.”'
      };
    }
  };
</script>

<style scoped>
  a:link {
    text-decoration: none;
  }

  .clinic-card {
    border-radius: 0 0 10px 10px;
  }
</style>

