<template lang="pug"> 
  div
    v-container
      v-layout(justify-center).px-3
        div
          //- https://ssense.github.io/vue-carousel/
          carousel(
            :per-page="1" 
            :autoplay="false"
            :loop="true"
            :navigationEnabled="true"
            :adjustableHeight="true"
            paginationActiveColor="grey"
            paginationColor="lightgrey"
            :navigationClickTargetSize="50"
            navigationNextLabel=" "
            navigationPrevLabel=" "
          )
            slide(data-index="1").text-xs-center
              span.font-s {{ testimonial1 }}
              br
              br
              span.font-xs Atty. Ivy D. Patdu, M.D
              br
              strong.font-xs Deputy Privacy Commissioner,
                | 
              span.font-small NPC
            slide(data-index="2").text-xs-center
              span.font-s {{ testimonial2 }}
              br
              br
              span.font-xs Dr. Gay Cadorna-Toledo
              br
              br
              strong.font-xs Pediatrician,
                | 
              span.font-xs Misamis Occidental
                br
                | MYCURE Doctor since 2017
            slide(data-index="3").text-xs-center
              span.font-small {{ testimonial3 }}
              br
              br
              span.font-xs Dr. Nelson S. Abelardo
              br
              strong.font-xs Cardiologist,
                | 
              span.font-xs Manila Doctors Hospital
</template>

<script scoped>
  export default {
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    },
    data () {
      return {
        private_title: 'Get a powerful combination of features designed for physicians who are practicing solo or in groups.',
        multispecialty_title: 'An all-around solution for your outpatient, multi-specialty or specialized clinics that will manage your full-patient journeys with ease.',
        siginURL: process.env.VUE_APP_SIGNIN_URL,

        testimonial1: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.”', 
        testimonial2: '“MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial3: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals.”',

      };
    }
  };
</script>


<style scoped>
  

  a {
    text-decoration: none;
  }
</style>
