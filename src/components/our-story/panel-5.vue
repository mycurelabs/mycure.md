<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5 
      v-container
        v-layout(row wrap align-center justify-center style="padding-top: 500px")
          div(style="margin: 0px -20px 0px 0px; z-index: 1")
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-left.png" alt="Male doctor")
          div(style="z-index: 0")
            a(id="our-story-care-the-extra-mile-vid-btn")
              img(
                v-if="!videoDialog" 
                @click.stop="videoDialog=!videoDialog" 
                src="../../assets/images/mycure-web-video-cover-our-story-care-the-extra-mile.png"
                alt="MYCURE Our Story video thumbnail"
              )
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
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-right.png" alt="Female doctor")
    div(v-else)
      v-container
        v-flex(xs12 md12).text-xs-center
          v-layout(row wrap align-center justify-center)
              h1.font-medium Caring the Extra Mile
          br
          div(id="our-story-care-the-extra-mile-vid-btn")
            iframe(
              align="middle"
              id="ytplayer" 
              type="text/html" width="100%" height="200"
              src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
              frameborder="0"
            )        
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
  #panel5 {
    height: 1000px;
    width: 100%;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }
</style>


