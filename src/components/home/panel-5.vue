<template lang="pug">
  //- TODO: ask help from joff about this youtube div
  div
    center 
      iframe(
        align="middle"
        id="ytplayer" 
        type="text/html" width="100%" height="680"
        src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&controls=0&loop=1&showinfo=0"
        frameborder="0"
        allowfullscreen)
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
