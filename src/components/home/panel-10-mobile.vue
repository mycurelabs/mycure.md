<template lang="pug">
  div.pt-5
    v-container
      p.font-40.lh-title.text-xs-center What makes MYCURE so different?
      br
      p.font-18.text-xs-center {{ different }}
      br
      v-card.elevation-5
        a(id="home-syncbase-vid-btn" @click.stop="handleHomeSyncbaseVid")
          img(v-if="!videoDialog" @click.stop="videoDialog=!videoDialog" width="100%" src="../../assets/images/mycure-web-video-cover-syncbase-online-offline.png" alt="MYCURE Syncbase video thumbnail")
          iframe(
            v-else
            align="middle"
            id="ytplayer" 
            type="text/html" width="100%" height="200"
            src="https://www.youtube.com/embed/siFBgZMt26k?autoplay=1&loop=1&showinfo=0&rel=0"
            frameborder="0"
            allowfullscreen
          )
</template>

<script>
  export default {
    data () {
      return {
        different: "MYCURE works online and offline! Using our proprietary tech called Syncbase, you can digitally process your medical records locally using multiple devices even if the internet is down! Once online, it automatically synchronizes your data back into the cloud.",
        videoDialog: false
      };
    },
    methods: {
      handleHomeSyncbaseVid () {
        this.$ga.event({
          eventCategory: 'video',
          eventAction: 'play-home-syncbase-vid-btn',
          eventLabel: 'home-syncbase-vid-btn'
        });
      }
    }
  };
</script>