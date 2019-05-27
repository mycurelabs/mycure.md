<template lang="pug">
  div.panel-1.white
    v-container
      v-layout(row wrap align-center)
        v-flex(xs12 md5)
          h1.font-l MYCURE cares for people who care for people.
          br
          br
          p.font-s Doctors, nurses, and clinic professionals have a lot of work and we want to make that work easier.
          br
          v-btn(
            v-if="!$isMobile"
            color="info" 
            large
            id="showVid"
            @click="showVid = true") 
              strong WATCH VIDEO
          center(v-else)
            v-btn(
              color="info" 
              large
              id="showVid"
              @click="showVid = true") 
                strong WATCH VIDEO
        v-flex(v-if="!$isMobile" xs12 md7).px-5
          img(width="100%" src="../../assets/images/mycure-homepage-doctor-kid-pediatrician-drawing.png")

    v-dialog(v-model="showVid" max-width="700px")
      iframe(
        align="center"
        v-if="showVid"
        id="ytplayer" 
        type="text/html" width="100%" height="450"
        src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
        frameborder="0")
</template>

<script>
  export default {
    data () {
        return {
          showVid: false
        };
      },
  };
</script>

<style scoped>
  .panel-1{
    height: auto;
  }
</style>
