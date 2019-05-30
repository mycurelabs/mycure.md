<template lang="pug">
  div#panel5
    center
      v-container
        v-layout(justify-center)
          v-icon(size="100px") keyboard_arrow_left
          div    
            //- https://ssense.github.io/vue-carousel/
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              :navigationEnabled="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=""
              navigationPrevLabel=""
              navigationClickTargetSize="30px"
            ) 
              slide(data-index="1")
                span.font-medium.white--text {{ testimonial1 }}
                br
                br
                span.font-small.white--text Dr. Gay Cadorna-Toledo
                br
                br
                strong.font-small.white--text Pediatrician,
                  | 
                span.font-small.white--text Misamis Occidental
                  br
                  | MYCURE Doctor since 2017
              slide(data-index="2")
                span.font-medium.white--text {{ testimonial2 }}
                br
                br
                span.font-small.white--text Dr. Gay Cadorna-Toledo
                br
                br
                strong.font-small.white--text Pediatrician,
                  | 
                span.font-small.white--text Misamis Occidental
                  br
                  | MYCURE Doctor since 2017
              slide(data-index="3")
                span.font-medium.white--text {{ testimonial3 }}
                br
                br
                span.font-small.white--text Dr. Nelson S. Abelardo
                br
                strong.font-small.white--text Cardiologist,
                  | 
                span.font-small.white--text Manila Doctors Hospital
          v-icon(size="100px") keyboard_arrow_right
    br
</template>

<script>
  export default {
    data () {
      return {
        testimonial1: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far.”', 
        testimonial2: '“MYCURE provides a well organized patient data profiling with customized options for personalized encoding and with integration of lab tests, immunizations as well as growth charts that are very important for us as pediatricians for growth monitoring of our little ones. It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial3: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are. It enables them also to prescribe and countercheck their prescriptions, issue medical certificate, communicate with other doctors for referrals.”'
      };
    } 
  };
</script>

<style scoped>

  #panel5 {
    background-color: #43ab5f
  }

</style>
