<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(align-center fill-height style="padding-top: 70px").px-5.panel-1
        v-layout(row justify-center)
          v-flex(xs12 md6 align-self-center style="margin-top: -10%")
            h1(style="line-height: 70px;").font-large MYCURE cares 
              br
              | for people who 
              br
              | care for people.
            br
            br
            p.font-small Doctors, nurses, and clinic professionals have a lot of work and we want to make that work easier.
            br
            v-btn(
              v-if="!$isMobile"
              color="info" 
              large
              id="showVid"
              @click="showVid = true") 
                strong.font-small.text-none Watch video
            center(v-else)
              v-btn(
                color="info" 
                large
                id="showVid"
                @click="showVid = true") 
                  strong WATCH VIDEO
          v-flex(v-if="!$isMobile" xs12 md6 align-self-center style="margin-top: 5%")
            img(width="100%" src="../../assets/images/mycure-homepage-doctor-kid-pediatrician-drawing.png")
      v-dialog(v-model="showVid" max-width="700px")
        iframe(
          align="center"
          v-if="showVid"
          id="ytplayer" 
          type="text/html" width="100%" height="450"
          src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
          frameborder="0")
    div(v-else)
      v-container
        v-flex(xs12 align-self-center)
          h1(style="font-weight: bold").font-l MYCURE cares for people who care for people.
        br
        v-flex(xs12 align-self-center)
          span.font-s Doctors, nurses, and clinic professionals have a lot of work and we want to make that work easier.
        v-layout(row justify-center)
        br
        br
        br
        div.hr-blue
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
  .panel1{
    height: auto;
  }

  h1 {
    font-weight: normal
  }
</style>
