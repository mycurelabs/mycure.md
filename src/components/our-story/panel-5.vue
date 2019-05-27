<template lang="pug">
  div
    v-container
      div.hr-blue
      br
      v-flex(xs12 md12).text-xs-center
        v-layout(row wrap align-center justify-center)
            h1.font-l Caring the Extra Mile
    br
    br
    div(v-if="!$isMobile")
      iframe(
        align="middle"
        id="ytplayer" 
        type="text/html" width="100%" height="680"
        src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
        frameborder="0")
    div(v-else)
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


