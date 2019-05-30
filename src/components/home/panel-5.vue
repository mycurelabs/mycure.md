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
                span.font-l.white--text "It's a great experience using MYCURE app
                  br
                  | in our rural setup. I've been through mandatory
                  br
                  | EMR apps, but this one is the best so far."
                br
                br
                span.font-s.white--text Dr. Gay Cadorna-Toledo
                br
                br
                strong.font-s.white--text Pediatrician,
                  | 
                span.font-s.white--text Misamis Occidental
                  br
                  | MYCURE Doctor since 2017
              slide(data-index="2")
                span.font-l.white--text "MYCURE provides a well organized patient
                  br
                  | data profiling with customized options 
                  br
                  | for personalized encoding and with integration  
                  br
                  | of lab tests, immunizations as well as growth
                  br
                  | charts that are very important for us as 
                  br
                  | pediatricians for growth monitoring of our 
                  br
                  | little ones. It is very convenient to use, simple, 
                  br
                  | adaptable and user friendly even to my secretary."  
                br
                br
                span.font-s.white--text Dr. Gay Cadorna-Toledo
                br
                br
                strong.font-s.white--text Pediatrician,
                  | 
                span.font-s.white--text Misamis Occidental
                  br
                  | MYCURE Doctor since 2017
              slide(data-index="3")
                span.font-l.white--text "MYCURE fulfills a long time need of physicians 
                  br
                  | for accurate records of patients which they 
                  br
                  | can carry with them wherever they are. It enables 
                  br
                  | them also to prescribe and countercheck 
                  br
                  | their prescriptions, issue medical certificate, 
                  br
                  | communicate with other doctors for referrals."
                br
                br
                span.font-s.white--text Dr. Nelson S. Abelardo
                br
                strong.font-s.white--text Cardiologist,
                  | 
                span.font-s.white--text Manila Doctors Hospital
          v-icon(size="100px") keyboard_arrow_right
    br
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

  #panel5 {
    background-color: #43ab5f
  }

</style>
