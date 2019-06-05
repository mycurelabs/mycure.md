<template lang="pug">
  div
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
      videoDialog: false
    };
  }
};
</script>

<style scoped>
  /* #panel5mobile {
    background-image: url('../../assets/images/mycure-home-web-video-green-background-mobile.png');
    background-position: center;
    background-size: cover;
    background-color: #f5f5f5;
  } */

</style>

