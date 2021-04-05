<template lang="pug">
  div
    //- WEB
    div(v-if="!isMobile").py-4
      v-container
        v-row(justify="center")
          v-col(cols="6" align-self="center").px-3.text-center
            video(:width="wXL ? '1400' : '975'" playsinline autoplay muted loop).syncbase-animate
              source(src="~/assets/videos/mycure-syncbase-diagram-animate.webm" type="video/webm")
              source(src="~/assets/videos/mycure-syncbase-diagram-animate.mp4" type="video/mp4")
              | Your browser does not support the video tag.
          v-col(cols="6" align-self="center").px-3.content
            h1.panelTitle.font-40.lh-title {{ panelTitle }}
            br
            br
            p.font-22 {{ panelContent }}
            p.font-italic.font-18.grey--text {{ disclaimer }}
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
    //- MOBILE
    div(v-else).pt-10.mt-10
      v-container.text-center
        h1.font-35.lh-title.text-center {{ panelTitle }}
        br
        p.font-18.text-center {{ panelContent }}
        p.font-italic.font-18.grey--text {{ disclaimer }}
        br
        br
        a(@click.stop="handleVideoBtn")
          img(
            v-if="!videoPlay"
            @click.stop="videoPlay=!videoPlay"
            width="100%"
            v-lazy="require('~/assets/images/mycure-web-video-cover-syncbase-online-offline.png')"
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
    v-dialog(v-model="videoDialog" max-width="600")
      v-card(width="600").pt-5
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
export default {
  data () {
    this.panelTitle = 'It can work offline too!';
    this.panelContent = 'Work as if you have an in-house server, with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.';
    this.disclaimer = '*Available in premium plans only. This is NOT included in the free MYCURE Heart Package and requires on-premise server setup.';
    this.panelImage = 'mycure-syncbase-animate-small';
    this.btnData = {
      id: 'home-syncbase-video-btn',
      text: 'Watch How It Works',
    };
    return {
      videoDialog: false,
      videoPlay: false,
      isMobile: true,
    };
  },
  watch: {
    $isMobile: {
      handler (val) {
        this.isMobile = val;
      },
    },
  },
  mounted () {
    this.isMobile = this.$isMobile;
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
.content {
  z-index: 1;
}
.syncbase-animate {
  margin-left: -275px;
}
</style>
