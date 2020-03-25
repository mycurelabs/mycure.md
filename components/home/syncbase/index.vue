<template lang="pug">
  div
    //- WEB
    div(v-if="!$isMobile").py-4
      v-container
        v-row(justify="center")
          v-col(cols="6" align-self="center").px-3
            h1.panelTitle.font-40.font-work-sans.lh-title {{ webTitle }}
            br
            br
            p.font-18 {{ panelContent }}
            p.font-18 This feature is available for multispecialty and enterprise clinic setup.
            br
            v-btn(
              color="primary"
              dark
              large
              right
              :id="btnData.id"
              @click.stop="handleVideoBtn"
            ).text-none.font-s.font-weight-bold.video-button
              v-icon mdi-play-circle-outline
              span &nbsp;{{ btnData.text }}
          v-col(cols="6" align-self="center").px-3.text-center
            img(:src="require(`~/assets/images/${panelImage}.gif`)" width="100%" alt="MYCURE Syncbase")
    //- MOBILE
    div(v-else).pt-10.mt-10
      v-container.text-center
        h1.font-35.lh-title.text-center.font-work-sans {{ panelTitle }}
        br
        p.font-18.text-center {{ panelContent }}
        p.font-18 This feature is available for multispecialty and enterprise clinic setup.
        br
        br
        a(@click.stop="handleVideoBtn")
          img(
            v-if="!videoPlay"
            @click.stop="videoPlay=!videoPlay"
            width="100%"
            src="~/assets/images/mycure-web-video-cover-syncbase-online-offline.png"
            alt="MYCURE Syncbase video thumbnail"
          )
          iframe(
            v-else
            align="middle"
            id="ytplayer"
            type="text/html" width="100%" height="200"
            src="https://www.youtube.com/embed/siFBgZMt26k?autoplay=1&loop=1&showinfo=0&rel=0"
            frameborder="0"
            allowfullscreen
          )
    v-dialog(v-model="videoDialog" max-width="600px")
      v-row(justify="center")
        v-card(width="600")
          v-card-text
            a
              img(
                v-if="!videoPlay"
                @click.stop="videoPlay=!videoPlay"
                width="100%"
                src="~/assets/images/mycure-web-video-cover-syncbase-online-offline.png"
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
</template>

<script>
import { parseTextWithNewLine } from '~/utils/newline';
export default {
  data () {
    return {
      panelTitle: 'MYCURE Health Suites work online and offline',
      panelContent: 'Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.',
      panelImage: 'mycure-syncbase-animate-small',
      btnData: {
        id: 'home-syncbase-video-btn',
        text: 'Watch How It Works',
      },
      videoDialog: false,
      videoPlay: false,
    };
  },
  computed: {
    webTitle () {
      return parseTextWithNewLine(this.panelTitle, ['Health ', 'online ']);
    },
  },
  methods: {
    handleVideoBtn () {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: `play-${this.btnData.id}`,
        eventLabel: this.btnData.id,
      });
      if (!this.$isMobile) {
        this.videoDialog = true;
      }
    },
  },
};
</script>

<style scoped>
.panelTitle {
  white-space: pre;
}
.video-button {
  letter-spacing: normal;
}
</style>
