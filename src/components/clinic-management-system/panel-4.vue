<template lang="pug">
  div
    div(v-if="!$isMobile" style="margin-top: -20%")#panel4
      //- center
      //-   a
      //-     img(@click.stop="videoDialog=!videoDialog" style="max-width: 60%; overflow: hidden; margin-top: 600px;" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
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
        br(style="line-height: 600px")
        v-layout(row wrap align-center justify-center)
          div(style="margin: 0px -20px 0px 0px; z-index: 1")
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-left.png")
          div(style="z-index: 0")
            a
              img(v-if="!videoDialog" @click.stop="videoDialog=!videoDialog" src="../../assets/images/mycure-web-video-cover.png")
              div(v-else style="border: 10px solid white; border-radius: 10px;")
                iframe(
                  align="middle"
                  id="ytplayer" 
                  type="text/html" width="652" height="380"
                  src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
                  frameborder="0"
                  allowfullscreen
                  )
          div(style="margin: 0px 0px 0px -20px; z-index: 1") 
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-right.png")
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
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    },
    data () {
      return {
        videoDialog: false
      };
    }
  };
</script>

<style scoped>
  #panel4 {
    height: 1100px;
    width: 100%;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }
  
  a {
    color: #2e9fdf
  }
</style>
