<template lang="pug">
  div.white
    //- div(v-if="!$isMobile").px-5#panel4
      v-container.px-5
        div
          center
            span.font-48.ma-5.text-xs-center Something missing in your clinic?
        br
        v-layout(row wrap justify-center).mx-5
          v-flex(xs12 md4)
            v-list(two-line).transparent.check-list
              v-list-tile(v-for="(problem,index) in problems" :key="index" v-if="index<=2")
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-18 {{ problem }}
          v-flex(xs12 md4)
            v-list(two-line).transparent.check-list
              v-list-tile(v-for="(problem,index) in problems" :key="index" v-if="index>2")
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-18 {{ problem }}
        br
        v-layout(row wrap justify-center)
          v-btn(
            color="#18c551"
            :href="`${signInURL}/signup/choose`"
            style="height: 60px; width: 250px"
            id="home-signup-btn"
            @click.stop="handleHomeSignupBtn"
          ).mt-3
            strong.font-18.white--text.text-none Sign Up Now
        br
        p.text-xs-center.py-4.font-18 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-18c-blue Send us a chat.
      br(style="line-height: 4000%")
      div(style="margin-top: -10%")
        panel4a
    div(v-if="$isMobile" style="background-color: #f5f5f5")
      v-container
        v-layout(row justify-center)
          span.font-40.text-xs-center Something missing in your clinic?
      v-container
        v-layout(row justify-center)
          v-list(two-line style="background-color: #f5f5f5")
            v-list-tile(v-for="(problem,index) in problems" :key="index")
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
              v-list-tile-content
                span.font-18 {{ problem }} 
        v-layout(row wrap justify-center)
          v-btn(
            :href="`${signInURL}/signup/choose`"
            target="_blank"
            color="#18c551" 
            large
            id="home-signup-btn"
            @click.stop="handleHomeSignupBtn"
          ).mt-5 
            strong.font-16.white--text.text-none Sign Up Now
        p.text-xs-center.py-4.font-18 Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-18c-blue Send us a chat.

</template>

<script>
  import panel4a from './panel-4a';

  export default {
    components: {
      panel4a
    },
    data () {
      return {
        videoDialog: false,
        signInURL: process.env.VUE_APP_SIGNIN_URL,

        problems: [
          'Are you having data privacy issues?',
          'Do you need to cut on unnecessary costs?',
          'Is your internet connection unreliable?',
          'Do you have a duplicate or missing patient charts?',
          'Do you have billing & collection discrepancies?',
          'Is your current system crappy and slows you down?'
        ]
      };
    },
    methods: {
      handleHomeSignupBtn () {
        this.$ga.event({
          eventCategory: 'button',
          eventAction: 'click-home-signup-btn',
          eventLabel: 'home-signup-btn'
        });
      },
      toggleChat () {
        let message = `Hi, I would like to know more about MYCURE's products.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      }
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

