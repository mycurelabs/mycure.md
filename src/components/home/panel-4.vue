<template lang="pug">
  div.white
    div(v-if="!$isMobile").px-5#panel4
      v-container.px-5
        div
          center
            span.font-medium.ma-5.text-xs-center Something missing in your clinic?
        br
        v-layout(row wrap justify-center).mx-5
          v-flex(xs12 md4)
            v-list(two-line).transparent.check-list
              v-list-tile
                v-list-tile-action
                  div.bullet
                    center
                     span.white--text 1
                v-list-tile-content
                  span.font-small Are you having data privacy issues?
              v-list-tile
                v-list-tile-action
                  div.bullet
                    center
                     span.white--text 2
                v-list-tile-content
                  span.font-small Do you need to cut on unnecessary costs?
              v-list-tile
                v-list-tile-action
                  div.bullet
                    center
                     span.white--text 3
                v-list-tile-content
                  span.font-small Is your internet connection unreliable?
          v-flex(xs12 md4)
            v-list(two-line).transparent.check-list
              v-list-tile
                v-list-tile-action
                  div.bullet
                    center
                     span.white--text 4
                v-list-tile-content
                  span.font-small Do you have a duplicate or missing patient charts?
              v-list-tile
                v-list-tile-action
                  div.bullet
                    center
                     span.white--text 5
                v-list-tile-content
                  span.font-small Do you have billing &amp; collection discrepancies?
              v-list-tile
                v-list-tile-action
                  div.bullet
                    center
                     span.white--text 6
                v-list-tile-content
                  span.font-small Is your current system crappy and slows you down?
        br
        v-layout(row wrap justify-center)
          v-btn(
            color="#18c551"
            :href="`${siginURL}/signup/private/step-1`"
            style="height: 60px; width: 250px"
          ).mt-3
            strong.font-small.white--text.text-none Sign Up Now
        br
        p.text-xs-center.py-2.font-small Have questions? Give us a call: 
          strong (+63) 917 303 4350
      br(style="line-height: 4000%").
      //- br(style="line-height: 600px")
      div(style="margin-top: -10%")
        panel4a
    div(v-else).white.pa-5
      v-flex(xs12)
        v-layout(row wrap justify-center)
          strong(style="font-size: 30px").text-xs-center Does your clinic have more than 3 branches? 
            a.font-mc-blue
              span(@click="toggleChat").toggle-chat Talk to us for custom pricing.
</template>

<script>
  import panel4a from './panel-4a';

  export default {
    components: {
      panel4a
    },
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    },
    data () {
      return {
        videoDialog: false,
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  #panel4 {
    height: 1600px;
    width: 100%;
    background-image: url('../../assets/images/mycure-home-web-video-green-background.png');
    background-position: center center;
    background-size: 100% 100%;
  }

  ul {
    list-style-type: none;
  }

  .check-list {
    background-color: #f5f5f5;
  }

  .example-slide {
    align-items: center;
    background-color: #666;
    color: #999;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 10rem;
  }
</style>

