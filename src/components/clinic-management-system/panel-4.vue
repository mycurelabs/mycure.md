<template lang="pug">
  div
    div(v-if="!$isMobile" style="margin-top: -20%")#panel4
      center
        a
          img(@click.stop="videoDialog=!videoDialog" style="max-width: 60%; overflow: hidden; margin-top: 600px;" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
          v-dialog(
            v-model="videoDialog"
            max-width=1000
          )
            v-card
              iframe(
                align="middle"
                id="ytplayer" 
                type="text/html" width="100%" height="500"
                src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
                frameborder="0"
                allowfullscreen
              )
    div(v-else)
      div.py-5
        v-layout(row wrap justify-center)
          strong(style="font-size: 25px").text-xs-center Does your clinic have more than 3 branches? 
            a
              span(@click="toggleChat") Talk to us for custom pricing.
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
