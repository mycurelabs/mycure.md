<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.white
      v-container.px-5
        v-layout(row wrap justify-center)
          span(style="font-size: 45px").pa-5 Why do doctors use MYCURE in their clinics?
        v-layout(row wrap justify-center).mx-5
          v-flex(xs12 md4)
            v-list(two-line).check-list.white
              v-list-tile(v-for="(problem,index) in clinicProblems" :key="index" v-if="index<=2")
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-small {{ problem }}
          v-flex(xs12 md4)
            v-list(two-line).check-list.white
              v-list-tile(v-for="(problem,index) in clinicProblems" :key="index" v-if="index>2")
                v-list-tile-action
                  img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                v-list-tile-content
                  span.font-small {{ problem }}
        br
        v-layout(row wrap justify-center)
          v-btn(
            color="#18c551"
            :href="`${siginURL}/signup/choose`"
            style="height: 60px; width: 250px"
          ).mt-3
            strong.font-small.white--text.text-none Sign Up Now
        p.text-xs-center.py-4.font-small Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
    div(v-else).mc-light-grey
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center Why do doctors use MYCURE in their clinics?
      v-container
        v-layout(row justify-center)
          v-list(two-line style="background-color: #f5f5f5")
            v-list-tile(v-for="(problem,index) in clinicProblems" :key="index")
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon") 
              v-list-tile-content
                span.font-m {{ problem }}
        v-layout(row wrap justify-center)
          v-btn(
            :href="`${siginURL}/signup/choose`"
            color="#18c551" large).mt-5 
            strong.font-s.text-none.white--text Sign Up Now
        p.text-xs-center.py-4.font-small Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
</template>

<script>
  export default {
    methods: {
      toggleChat () {
        let message = `Hi, I would like to know more about the Electronic Medical Records for Private Practice.`;
        window.$crisp.push(['do', 'chat:toggle']);
        window.$crisp.push(['do', 'message:send', ['text', message]]);
      },
    },
    data () {
      return {
        checkIcon: '../../assets/images/mycure-web-bullet-check.png',
        siginURL: process.env.VUE_APP_SIGNIN_URL,

        clinicProblems: [
          'I\'ve no secretary to help with record keeping',
          'My patients can\'t read my scribbly handwriting!',
          'Paper charts are very difficult to search & filter',
          'Cloud is a much safer place to backup my charts',
          'I have no idea how much HMOs owe me',
          'My previous system is old and not user-friendly'
        ]
      };
    },
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

