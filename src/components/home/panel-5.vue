<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5
      center
        v-container(style="width: 65% !important")
          v-layout(justify-center)
            //- TODO: Update to MDI 
            v-icon(size="100px").white--text mdi-chevron-left
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
                    | Pediatrician
                slide(data-index="2")
                  h2.white--text {{ testimonial2 }}
                  br
                  br
                  span.font-small.white--text Atty. Ivy D. Patdu, M.D 
                    br
                    | Deputy Privacy Commissioner, NPC
                    
                slide(data-index="3")
                  h2.white--text {{ testimonial3 }}
                  br
                  br
                  span.font-small.white--text Dr. Nelson S. Abelardo
                    br
                    | Cardiologist
            v-icon(size="100px").white--text mdi-chevron-right
      br
    div(v-else style="margin-top: -15%")
      div(style="background-color: #f5f5f5")
        img(src="../../assets/images/mycure-home-web-video-green-background-mobile.png" width="100%")
        a
          img(
            v-if="!videoDialog" 
            @click.stop="videoDialog=!videoDialog"
            src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system-mobile.png" 
            width="100%"
            style="margin: -2% 0 -2% 0;"
          )
          iframe(
            v-else
            style="margin: -2% 0 -2% 0;"
            align="middle"
            id="ytplayer" 
            type="text/html" width="375" height="250"
            src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
            frameborder="0"
            allowfullscreen
          )
</template>

<script>
  export default {
    data () {
      return {
        testimonial1: '“It\'s a great experience using MYCURE app in our rural setup. I\'ve been through many EMR apps, but this one is the best so far... It is very convenient to use, simple, adaptable and user friendly even to my secretary.”',
        testimonial2: '“We should harness the power of technology. We should incorporate in system designs means to obtain information while remaining true to our obligations for data protection.” ', 
        testimonial3: '“MYCURE fulfills a long time need of physicians for accurate records of patients which they can carry with them wherever they are.”',
        videoDialog: false
      };
    } 
  };
</script>

<style scoped>

  #panel5 {
    background-color: #43ab5f
  }

</style>
