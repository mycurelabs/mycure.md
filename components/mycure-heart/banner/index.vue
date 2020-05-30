<template lang="pug">
  div
    div(v-if="!isMobile").vid-container.pt-5
      v-container.padding300
        v-row(align="center" justify="center")
          div.maleDoctor
            img(:src="require('~/assets/images/mycure-web-video-cover-decor-doctor-left.png')" alt="Male doctor")
          div.vidPosition
            v-container.white.banner-container
              v-row(justify="center" align="center").text-center
                v-col(cols="10")
                  img(:src="require('~/assets/images/mycure-header-logo.png')" alt="MYCURE logo" width="140")
                  h1.font-40 {{ bannerTitle }}
                  p.font-21.pt-5 {{ bannerDescription }}
          div.femaleDoctor
            img(:src="require('~/assets/images/mycure-web-video-cover-decor-doctor-right.png')" alt="Female doctor")
    div(v-else)
      img(v-lazy="require('~/assets/images/mycure-home-web-video-green-background-mobile.png')" alt="Video green background" width="100%")
      v-container.banner-mobile-container.white.margin-2
        v-row(justify="center" align="center").text-center
          v-col(cols="10").pt-5
            img(:src="require('~/assets/images/mycure-header-logo.png')" alt="MYCURE logo" width="140")
            h1.font-30.lh-title {{ bannerTitle }}
            p.pt-5.font-21 {{ bannerDescription }}
</template>

<script>
export default {
  data () {
    this.bannerTitle = 'Fight COVID-19';
    this.bannerDescription = 'Together let’s help flatten the curve and make a more proactive, health-first world.';
    return {
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
    handleMostCompleteVideo () {
      this.$ga.event({
        eventCategory: 'video',
        eventAction: 'play-home-most-complete-vid-btn',
        eventLabel: 'home-most-complete-vid-btn',
      });
    },
  },
};
</script>

<style scoped>
.vid-container {
  height: 900px;
  width: 100vw;
  background-image: url('../../../assets/images/mycure-home-web-video-green-background.png');
  background-position: center center;
  background-size: 100% 100%;
}
.margin-2 {
  margin: -2% 0 -2% 0;
}
.padding300 {
  padding-top: 300px;
}
.banner-container {
  width: 652px;
  height: 379px;
  padding-top: 65px;
}
.banner-mobile-container {
  height: 300px;
  width: 100%;
  border: 1px solid black !important;
}
</style>
