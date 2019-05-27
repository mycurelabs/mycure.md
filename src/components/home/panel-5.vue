<template lang="pug">
  div
    div(v-if="!$isMobile")
      center 
        iframe(
          align="middle"
          id="ytplayer" 
          type="text/html" width="100%" height="680"
          src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
          frameborder="0"
          allowfullscreen)
    div(v-else)
      center 
        iframe(
          align="middle"
          id="ytplayer" 
          type="text/html" width="100%" height="200"
          src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
          frameborder="0")
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }  
  };
</script>

<style scoped>

</style>
