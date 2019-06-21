<template lang="pug"> 
  div#panel6mobile
    v-container.pt-5
      v-layout(justify-center).px-3
        div.white--text
          //- https://ssense.github.io/vue-carousel/
          carousel(
            :per-page="1" 
            :autoplay="false"
            :loop="true"
            :navigationEnabled="true"
            :adjustableHeight="true"
            paginationActiveColor="white"
            paginationColor="grey"
            :navigationClickTargetSize="50"
            navigationNextLabel=" "
            navigationPrevLabel=" "
          )
            slide(v-for="(testimonial,index) in testimonials" :key="index" :data-index="index+1").text-xs-center
              h2.white--text {{ testimonial.message }}
              br
              br
              span.font-small.white--text {{ testimonial.name }}
                br
                span {{ testimonial.position }}
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
        multispecialty_title: 'An all-around solution for your outpatient, multispecialty or specialized clinics that will manage your full-patient journeys with ease.',
        siginURL: process.env.VUE_APP_SIGNIN_URL,
        testimonials: [
          {
            name: 'Dr. Gay Cadorna-Toledo',
            position: 'Pediatrician',
            message: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far... It is very convenient to use, simple, adaptable and user friendly even to my secretary.”'
          },
          {
            name: 'Atty. Ivy D. Patdu, M.D',
            position: 'Deputy Privacy Commissioner, NPC',
            message: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.”'
          },
          {
            name: 'Dr. Nelson S. Abelardo',
            position: 'Cardiologist',
            message: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are.”'
          }
        ]
      };
    }
  };
</script>


<style scoped>
  #panel6mobile {
    background-color: #43ab5f
  }

  a {
    text-decoration: none;
  }
</style>
