<template lang="pug">
  div#panel4
    div(v-if="!$isMobile").py-5
      v-container
        v-layout(row wrap justify center)
          v-flex(xs6 align-self-center).px-3
            h2.panelTitle.font-40 {{ title }}
            br
            br
            p.font-18 {{ panelContent }}
            //- v-btn(
            //-   id="home-syncbase-vid-btn"
            //-   @click.stop="dialog= true; handleHomeSyncbaseVid()"
            //-   color="#2e9fdf"
            //-   small
            //-   right
            //-   large
            //- )
            //-   strong.text-none.white--text.font-18 &#9658; &nbsp; Watch Video
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
                    src="https://www.youtube.com/embed/siFBgZMt26k?autoplay=1&loop=1&showinfo=0&rel=0"
                    frameborder="0"
                    allowfullscreen
                    )
          v-flex(xs6 align-self-center).px-3
            img(src="../../assets/images/mycure-homepage-syncbase-animated.gif" width="100%" alt="MYCURE Syncbase")
    div(v-else).pt-5
      v-container
        p.font-40.lh-title.text-xs-center It works online and offline!
        br
        p.font-18.text-xs-center This is what makes MYCURE different from the rest. Using our proprietary tech called 
          |
          strong Syncbase, 
          | you can digitally process your medical records locally using multiple devices even if the internet is down! Once online, it automatically synchronizes your data back into the cloud.
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
import { parseTextWithNewLine } from '@/utils';
export default {
  data () {
    return {
      dialog: false,
      videoDialog: false,
      panelTitle: 'MYCURE Health Suites work online and offline',
      panelContent: 'Work as if you have an in-house server, with the convenience of the cloud.\
       Create your medical records locally using multiple devices even if the internet is down!\
       Once back online, it instantly syncs your data into the cloud.',
      panelImage: 'mycure-homepage-syncbase'
    };
  },
  computed: {
    title () {
      return parseTextWithNewLine(this.panelTitle, ['Health ', 'online ']);
    }
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

<style scoped>
.panelTitle {
  font-family: 'Work Sans', 'Poppins', sans-serif !important;
  white-space: pre;
}
</style>

