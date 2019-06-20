<template lang="pug">
  div#panel2
    div(v-if="!$isMobile" style="margin-top: -5%")
      v-container(style="padding-top: 450px;")
        v-layout(row align-center justify-center)
          div(style="margin: 0px -20px 0px 0px; z-index: 1")
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-left.png" alt="Male doctor")
          div(style="z-index: 0")
            a(id="home-most-complete-vid-btn" @click.stop="handleMostCompleteVideo")
              img(v-if="!videoDialog" @click.stop="videoDialog=!videoDialog" src="../../assets/images/mycure-web-video-cover.png" alt="MYCURE Introduction video thumbnail")
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
            img(src="../../assets/images/mycure-web-video-cover-decor-doctor-right.png" alt="Female doctor")
    div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        videoDialog: false
      };
    },
    methods: {
      handleMostCompleteVideo () {
        this.$ga.event({
          eventCategory: 'video',
          eventAction: 'play-home-most-complete-vid-btn',
          eventLabel: 'home-most-complete-vid-btn'
        });
      },
    },
  };
</script>

<style scoped>
  #panel2 {
    height: 900px;
    width: 100vw;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }
</style>
