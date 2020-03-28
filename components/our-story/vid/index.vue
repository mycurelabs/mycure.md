<template lang="pug">
  div.white
    client-only
      div(v-if="!isMobile").video-container
        v-container
          v-row(align="center" justify="center").padding-container
            div.maleDoctor
              img(src="~/assets/images/mycure-web-video-cover-decor-doctor-left.png" alt="Male doctor")
            div.vidPosition
              a(id="our-story-care-the-extra-mile-vid-btn" @click.stop="handleOurStoryCareTheExtraMile()")
                img(
                  v-if="!videoDialog"
                  @click.stop="videoDialog=!videoDialog"
                  v-lazy="require('~/assets/images/our-story/mycure-web-video-cover-our-story-care-the-extra-mile.png')"
                  alt="MYCURE Our Story video thumbnail"
                  width="620"
                )
                iframe(
                  v-else
                  align="middle"
                  id="ytplayer"
                  type="text/html" width="620" height="393"
                  src="https://www.youtube.com/embed/zvM3LIvq-6k?autoplay=1&loop=1&showinfo=0&rel=0"
                  frameborder="0"
                  allowfullscreen
                  )
            div.femaleDoctor
              img(src="~/assets/images/mycure-web-video-cover-decor-doctor-right.png" alt="Female doctor")
      div(v-else).white
        v-container
          v-col(cols="11").text-center
            v-row(align="center" justify="center")
              h1.font-36 Caring the Extra Mile
            br
            div(id="our-story-care-the-extra-mile-vid-btn" @click.stop="handleOurStoryCareTheExtraMile()")
              iframe(
                align="middle"
                id="ytplayer"
                type="text/html" width="100%" height="200"
                src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=0&loop=1&showinfo=0&rel=0"
                frameborder="0"
              )
</template>

<script>
export default {
  props: {
    isMobile: {
      type: Boolean,
      default: true,
    },
  },
  data () {
    return {
      videoDialog: false,
    };
  },
  methods: {
    handleOurStoryCareTheExtraMile () {
      this.$ga.event({
        eventCategory: 'button',
        eventAction: 'click-our-story-care-the-extra-mile-vid-btn',
        eventLabel: 'our-story-care-the-extra-mile-vid-btn',
      });
    },
  },
};
</script>

<style scoped>
.video-container {
  height: 1000px;
  width: 100%;
  background-image: url('../../../assets/images/mycure-home-web-video-green-background.png');
  background-position: center center;
  background-size: 100% 100%;
}

.padding-container {
  padding-top: 330px;
}
</style>
