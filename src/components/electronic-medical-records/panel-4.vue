<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.white
      v-container.px-5
        v-layout(row wrap justify-center)
          span(style="font-size: 45px").pa-5 Why do doctors use MYCURE in their clinics?
        v-layout(row wrap justify-center).mx-5
          v-flex(xs12 md4)
            v-list(two-line).check-list.white
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small I've no secretary to help with record keeping
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small My patients can't read my scribbly handwriting!
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Paper charts are very difficult to search &amp filter
          v-flex(xs12 md4)
            v-list(two-line).check-list.white
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small Cloud is a much safer place to backup my charts
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small I have no idea how much HMOs owe me
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png")
                v-list-tile-content
                  span.font-small My previous system is old and not user-friendly
        br
        v-layout(row wrap justify-center)
          v-btn(
            color="#18c551"
            :href="`${siginURL}/signup/private/step-1`"
            style="height: 60px; width: 250px"
          ).mt-3
            strong.font-small.white--text.text-none Sign Up Now
        p.text-xs-center.py-4.font-small Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
    div(v-else)
      div.white
        v-flex(xs12 md12)
            v-layout(row wrap justify-center)
              strong(style="font-size: 25px").py-5.text-xs-center Are you a part of a group clinic? 
                a.font-mc-blue
                  span(@click="toggleChat") Ask us how it works

</template>

<script>
  export default {
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    },
    data () {
      return {
        checkIcon: '../../assets/images/mycure-web-bullet-check.png',
        siginURL: process.env.VUE_APP_SIGNIN_URL
      };
    }
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .check-list {
    background-color: #f6f6f6;
  }

</style>

