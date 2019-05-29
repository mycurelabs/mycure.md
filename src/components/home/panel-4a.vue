<template lang="pug">
  a(@click.stop="videoDialog=!videoDialog")
    center
      img(style="max-width: 60%; overflow: hidden" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
      //- img(style="padding-top: 20%" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
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

</style>
