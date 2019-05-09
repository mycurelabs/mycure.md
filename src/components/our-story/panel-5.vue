<template lang="pug">
  div
    v-container
     v-layout(row wrap)
        v-flex(xs12 md12)
          v-layout(row wrap align-center justify-center)
            v-flex(xs12 md12).text-xs-center
              div.hr-blue
              br
              h1.font-xl Caring the Extra Mile
              br
              br
              br
          iframe(
            align="center"
            id="ytplayer" 
            type="text/html" width="100%" height="450"
            src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&controls=0&loop=1&showinfo=0"
            frameborder="0"
          )
</template>

<script>
export default {
    
};
</script>


