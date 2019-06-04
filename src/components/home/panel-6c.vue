<template lang="pug">
  div
    //- div(v-if="!$isMobile")
      v-container
        v-layout(row wrap justify-center)
          span.font-medium What makes MYCURE so different?
        br
        v-layout(row wrap justify-center)
          span.font-small.text-xs-center You can enjoy the best of both worlds — reliability of an in-house server and 
            br
            | affordability of the cloud. Digitally process your medical records in your local 
            br
            | network using multiple devices, even if the internet goes down! 
            br
            br
            br
            | Then once back online, it automatically synchronizes data back in the cloud.
        br
        br 
        v-layout(row wrap justify-center)
          v-btn(color="#96cfef")
            v-icon(color="#2e9fdf" left) play_circle_filled
            strong
              u WATCH VIDEO 
    div(v-if="!$isMobile")
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            span.font-medium What makes MYCURE so different?
            br
            br
            span.font-small.text-xs-center In Southeast Asian regions where internet coverage is limited, 
              |  MYCURE made it possible for clinics to use a cloud-based system in their local network even
              |  if the internet goes down and just syncs data when back online.
              br
              br
          v-flex(xs6 align-self-center).px-4
            v-card.elevation-10
              a
                img(v-if="!videoDialog" @click.stop="videoDialog=!videoDialog" width="100%" src="../../assets/images/mycure-web-video-cover-syncbase-online-offline.png")
                iframe(
                  v-else
                  align="middle"
                  id="ytplayer" 
                  type="text/html" width="100%" height="300"
                  src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
                  frameborder="0"
                  allowfullscreen
                  )
    div(v-else)
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

