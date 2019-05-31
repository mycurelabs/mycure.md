<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5
      center
        a
          img(@click.stop="videoDialog=!videoDialog" style="max-width: 60%; overflow: hidden; margin-top: 500px;" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
          //- img(style="padding-top: 20%" src="../../assets/images/mycure-home-web-video-cover-most-complete-clinic-management-system.png")
          v-dialog(
            v-model="videoDialog"
            max-width=1000
          )
            v-card
              iframe(
                align="middle"
                id="ytplayer" 
                type="text/html" width="100%" height="500"
                src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
                frameborder="0"
                allowfullscreen
              )
    div(v-else).py-5
      v-container
        v-layout(row)
          v-flex(xs12 md12)
            font.font-l Protect your patients' medical records with confidence
            br
            br
            br
            font.font-s.mt-3 With MYCURE you'll never have to worry much about data privacy concerns. Keeping them secure is our #1  priority
            br
            br
            br
            a(href="http://blog.mycure.md/2018/04/26/data-privacy-for-physicians/" target="_blank")
              strong.font-mc-blue Continue Reading...
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
  #panel5{
    height: 1000px;
    width: 100%;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }
  
  a {
    text-decoration-color: #2e9fdf;
  }
</style>
