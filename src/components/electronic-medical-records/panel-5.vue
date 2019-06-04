<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5
      //- center
      //-   a
      //-     img(@click.stop="videoDialog=!videoDialog" style="max-width: 60%; overflow: hidden; margin-top: 500px;" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
      //-     //- img(style="padding-top: 20%" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
      //-     v-dialog(
      //-       v-model="videoDialog"
      //-       max-width=1000
      //-     )
      //-       v-card
      //-         iframe(
      //-           align="middle"
      //-           id="ytplayer" 
      //-           type="text/html" width="100%" height="500"
      //-           src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
      //-           frameborder="0"
      //-           allowfullscreen
      //-         )
      v-container
        br(style="line-height: 500px")
        v-layout(row wrap align-center justify-center)
          div(style="margin: 0px -20px 0px 0px; z-index: 1")
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-left.png")
          div(style="z-index: 0")
            //- v-card(flat)
            a
              img(v-if="!videoDialog" @click.stop="videoDialog=!videoDialog" src="../../assets/images/mycure-web-video-cover.png")
              iframe(
                v-else
                align="middle"
                id="ytplayer" 
                type="text/html" width="672" height="393"
                src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
                frameborder="0"
                allowfullscreen
                )
          div(style="margin: 0px 0px 0px -20px; z-index: 1") 
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-right.png")
    div(v-else).py-5
</template>

<script>
  export default {
    data () {
      return {
        videoDialog: false
      };
    }
  };
</script>

<style scoped>
  #panel5{
    height: 1000px;
    width: 100%;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }
  
  a {
    text-decoration-color: #2e9fdf;
  }
</style>
