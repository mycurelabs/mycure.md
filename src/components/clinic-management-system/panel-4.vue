<template lang="pug">
  div#panel4
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
  #panel4 {
    height: 1100px;
    width: 100%;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }
</style>
