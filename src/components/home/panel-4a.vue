<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container
        br
        br
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
                  type="text/html" width="652" height="379"
                  src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
                  frameborder="0"
                  allowfullscreen
                  )
          div(style="margin: 0px 0px 0px -20px; z-index: 1") 
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-right.png")
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