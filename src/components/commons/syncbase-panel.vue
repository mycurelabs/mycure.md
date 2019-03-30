<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 3.1
    div.panel-3.pt-5.pb-5
      b-container
        b-row.align-items-center
          b-col(xs="12" md="12").text-center
            b-row.wrap.align-items-center.justify-content-md-center
              b-col(xs="12" md="8" )
                br
                br
                br
                center
                  div.hr-blue
                br
                h1 Syncs Online, Works Offline.
                span(style="color: #acadae") 
                  b
                    i Enjoy the best of both worlds — reliability of an in-house server and affordability of the cloud.
                br
                br
                p MYCURE finally uncovers the holy grail of combining online and offline technology.
                  br
                  | Using our proprietary tech called 
                  b MYCURE Syncbase
                  |, you can digitally process your medical records in your local network using multiple devices, even if the internet goes down!
                  br
                  | Then once back online, it automatically synchronizes data back in the cloud.
                p Like magic, but scientifically-blended. 😉
                b-button(variant="primary" size="sm" href="" @click="toggleChat").shadow-5 Ask Us Now
                br
                br
                div.media(v-b-modal="'syncbaseVid'")
                  div.media-body
                    img(width="20" src="../../assets/images/v4/mycure-play-btn.png").media-object
                    label(style="margin-top:3px; margin-left:10px; font-size: 14px; font-weight: bold;") Watch Video
                br
                br
                b-col(xs="12" md="12").pb-5
                  img(width="100%" src="../../assets/images/v4/mycure-homepage-syncbase-offline-online-clinic-management-system-animated.gif")
                // b-col(xs="12" md="12" v-if="showVideoButton")
                  center
                    b-button(variant="primary" size="sm" v-b-modal="'syncbaseVid'" style="text-align:center;") WATCH VIDEO
    b-modal(
      size="lg"
      hide-footer 
      hide-header 
      centered 
      @shown="showVid = true"
      @hidden="showVid = false"
    )#syncbaseVid
      iframe(
        v-if="showVid"
        id="ytplayer" 
        type="text/html" width="100%" height="450"
        src="https://www.youtube.com/embed/siFBgZMt26k?rel=0&showinfo=0"
        frameborder="0"
      )
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  export default {
    props: {
      showVideoButton: Boolean
    },
    components: {
      mcNavbarHome
    },
    data() {
      return {
        videoId: 'siFBgZMt26k',
        showVid: true
      }
    },
    methods: {
      goto(page) {
        this.$router.push({name: page});
      },
      addVid() {
        this.videoId = 'siFBgZMt26k';
      },
      removeVid() {
        this.videoId = null;
      },
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
      }
    }
  }
</script>

<style scoped>
  .panel-3 {
    /* margin-top: 80px; */
    background-color: #eeecec;
    /*background-image: url('../../assets/images/v4/mycure-home-second-panel-top.png');*/
    background-repeat: repeat-x;
    background-position: top;
  }

</style>
              div.media
                div.media-body
                  img(width="20" src="../../assets/images/v4/mycure-play-btn.png").media-object
                  label(style="margin-top:3px; margin-left:10px; font-size: 14px; font-weight: bold;") Watch Video



            br
            div(v-b-modal="'homeVid'").mb-5.custom-play-button
              div.media
                div.media-left
                  img(width="20" src="../../assets/images/v4/mycure-play-btn.png").media-object
                div.media-body
                  label(style="margin-top:3px; margin-left:10px; font-size: 14px; font-weight: bold;") Watch Video