<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5
      center
        v-container(style="width: 65% !important")
          v-layout(justify-center)
            v-icon(size="100px") keyboard_arrow_left
            div    
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
                slide(data-index="1")
                  h2.white--text {{ testimonial1 }}
                  br
                  br
                  span.font-small.white--text Dr. Gay Cadorna-Toledo
                  br
                  span.font-small.white--text Pediatrician,
                    | 
                  span.font-small.white--text Misamis Occidental
                    br
                    | MYCURE Doctor since 2017
                slide(data-index="2")
                  h2.white--text {{ testimonial2 }}
                  br
                  br
                  span.font-small.white--text Atty. Ivy D. Patdu, M.D 
                  br
                  span.font-small.white--text Deputy Privacy Commissioner,
                    | 
                  span.font-small.white--text NPC
                    
                slide(data-index="3")
                  h2.white--text {{ testimonial3 }}
                  br
                  br
                  span.font-small.white--text Dr. Nelson S. Abelardo
                  br
                  span.font-small.white--text Cardiologist,
                    | 
                  span.font-small.white--text Manila Doctors Hospital
            v-icon(size="100px") keyboard_arrow_right
      br
    div(v-else)
      center 
        iframe(
          align="middle"
          id="ytplayer" 
          type="text/html" width="100%" height="200"
          src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
          frameborder="0")
</template>

<script>
  export default {
    data () {
      return {
        testimonial1: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far... It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial2: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.” ', 
        testimonial3: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are.”'
      };
    } 
  };
</script>

<style scoped>

  #panel5 {
    background-color: #43ab5f
  }

</style>
