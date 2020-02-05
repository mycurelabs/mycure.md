<template lang="pug">
div
  div(v-if="!$isMobile").white.whole-page
    v-container(fill-height)
      v-layout(row align-center justify-center)
        div.panel-size.usp-panel
          v-layout(row justify-center)
            v-flex(xs12 md6)
              v-layout(column align-start)
                h1.font-weight-bold.font-18.font-mc-blue.pb-3.uspMetaTitle MYCURE | Our Story
                h2.title-line-height.font-xl.font-work-sans.font-weight-regular.pb-4 MYCURE starts and ends with real people.
                v-btn(
                  @click.stop="popUpVideo"
                  :color="$mcColors.mcAltGreen"
                  target="_blank"
                  large
                ).text-none.white--text.mt-4.btnHeight
                  strong.font-18 Watch Video
                v-dialog(v-model="videoDialog" max-width="600px")
                  v-layout(row justify-center)
                    v-card(width="600")
                      v-card-text
                        iframe(
                          align="middle"
                          id="ytplayer" 
                          type="text/html" height="400" width="570"
                          src="https://www.youtube.com/embed/zvM3LIvq-6k?autoplay=1&loop=1&showinfo=0&rel=0"
                          frameborder="0"
                          allowfullscreen
                      )
            v-flex(xs12 md6 text-xs-right)
              img(
                :src="require(`@/assets/images/mycure-homepage-doctor-kid-pediatrician-drawing.png`)"
                width="90%"
                alt="our-story"
              )
  div(v-else)
    v-layout(column wrap justify-center).mt-5
      h1.font-weight-bold.font-18.font-mc-blue.pb-2.text-xs-center MYCURE | Our Story
      h2.font-40.font-weight-regular.font-work-sans.title-line-height.pb-5.text-xs-center.uspTitle MYCURE starts and ends with real people.
      v-layout(row justify-center).mb-5
        img(
          :src="require(`@/assets/images/mycure-homepage-doctor-kid-pediatrician-drawing.png`)"
          height="250"
          alt="our-story"
        )
      v-layout(row justify-center)
        v-btn(
          @click.stop="popUpVideo"
          :color="$mcColors.mcAltGreen"
          target="_blank"
          large
          block
        ).uspMobileBtn
          strong.font-25.text-none.white--text Watch Video
      v-dialog(v-model="videoDialog" max-width="100%")
        v-layout(row justify-center)
          v-card(width="600")
            v-card-text
              iframe(
                align="middle"
                id="ytplayer" 
                type="text/html" height="175" width="300"
                src="https://www.youtube.com/embed/zvM3LIvq-6k?autoplay=1&loop=1&showinfo=0&rel=0"
                frameborder="0"
                allowfullscreen
            )
</template>

<script>
export default {
  data () {
    return {
      videoDialog: false,
      mcGreen: '#18c551',
      mcBlue: '#2e9fdf'
    };
  },
  methods: {
    popUpVideo () {
      this.videoDialog = true;
    }
  }
};
</script>

<style scoped>
.whole-page {
  height: 100vh;
}
.font-xxs {
  font-size: 11px;
}
.uspBtn-padding {
  padding-bottom: 20px;
}
.title-line-height {
  line-height: 1.25em;
}
.uspTitle {
  font-size: 45px;
}
.uspMetaTitle {
  white-space: pre;
}
.panel-size {
  width: 1100px;
}
.uspMobileBtn {
  height: 75px;
}
</style>