<template lang="pug">
  div#syncbase 
    div(v-if="!$isMobile")
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            span.font-medium What makes MYCURE so different?
            br
            br
            span.font-small.text-xs-center In Southeast Asia where internet coverage is limited, 
              |  MYCURE made it possible for clinics to use a cloud-based system in their local network even
              |  if the internet goes down.
              br
              br
            v-btn(
              @click.stop="dialog= true"
              color="#2e9fdf"
              small
              right
              large
            )
              strong.text-none.white--text.font-small &#9658; &nbsp; Watch Video
            v-dialog(v-model="dialog" max-width="50%") 
              v-card(height="30%").elevation-10
                a
                  img(
                    v-if="!videoDialog"
                    @click.stop="videoDialog=!videoDialog" 
                    width="100%" 
                    src="../../assets/images/mycure-web-video-cover-syncbase-online-offline.png"
                    alt="MYCURE Syncbase video thumbnail"
                  )
                  iframe(
                    v-else
                    align="middle"
                    id="ytplayer" 
                    type="text/html" width="100%" height="400"
                    src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
                    frameborder="0"
                    allowfullscreen
                    )

          v-flex(xs6 align-self-center).px-3
            img(src="../../assets/images/mycure-homepage-syncbase-animated.gif" width="100%" alt="MYCURE Syncbase")
    div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        videoDialog: false
      };
    }
  };
</script>