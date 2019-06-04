<template lang="pug"> 
  div.mt-5
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
              span.font-xs Dr. Gay Cadorna-Toledo 
              br
              span.font-xs Pediatrician, 
                | Misamis Occidental
                br
                | MYCURE Doctor since 2017
            slide(data-index="2").text-xs-center
              span.font-s {{ testimonial2 }}
              br
              br
              span.font-xs Atty. Ivy D. Patdu, M.D
              br
              span.font-xs  Deputy Privacy Commissioner, NPC
            slide(data-index="3").text-xs-center
              span.font-small {{ testimonial3 }}
              br
              br
              span.font-xs Dr. Nelson S. Abelardo
                br
                | Cardiologist, Manila Doctors Hospital
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
        testimonial1: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far... It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial2: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.”', 
        testimonial3: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are.”'
      };
    }
  };
</script>


<style scoped>
  

  a {
    text-decoration: none;
  }
</style>
