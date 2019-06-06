<template lang="pug">
  div.pt-5
    v-container
      span.font-l.lh-title What makes MYCURE so different?
      br
      br
      span.font-s {{ different }}
      br
      br
      //- img(src="../../assets/images/mycure-homepage-syncbase-animated.gif" width="100%")
      v-card.elevation-5
        a
          img(v-if="!videoDialog" @click.stop="videoDialog=!videoDialog" width="100%" src="../../assets/images/mycure-web-video-cover-syncbase-online-offline.png")
          iframe(
            v-else
            align="middle"
            id="ytplayer" 
            type="text/html" width="100%" height="200"
            src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
            frameborder="0"
            allowfullscreen
          )
</template>

<script>
  export default {
    data () {
      return {
        different: "In Southeast Asian regions where internet coverage is limited, MYCURE made it possible for clinics to use a cloud-based system in their local network even if the internet goes down.",
        videoDialog: false
      };
    }
  };
</script>

<style scoped>

</style>