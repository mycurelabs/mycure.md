<template lang="pug">
  div.white
    div(v-if="!$isMobile" style="padding: 0 6% 0 6%;").pt-5
      v-container
        v-layout(row justify-center)
          span.font-medium.lh-title Ideal for Individual Practice
      div.py-5
        center
          img(style="max-width: 90%;" src="../../assets/images/mycure-home-web-individual-clinic-diagram-banner.png")
    div(v-else).mc-light-grey
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center Ideal for Individual Practice
      v-container
        v-layout(row justify-center)
          v-list(two-line style="background-color: #f5f5f5")
            v-list-tile(v-for="(problem,index) in clinicProblems" :key="index")
              v-list-tile-action
                img(src="../../assets/images/mycure-web-bullet-check.png")
              v-list-tile-content
                span.font-m {{ problem }}
        v-layout(row wrap justify-center)
          v-btn(
            :href="`${siginURL}/signup/private/step-1`"
            color="#18c551" large).mt-5 
            strong.font-s.text-none.white--text Sign Up Now
        p.text-xs-center.py-4.font-small Have questions? 
          a(@click.stop="toggleChat()")
            strong.font-mc-blue Send us a chat.
</template>

<script>
  export default {
    data () {
      return {
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
    methods: {
       toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
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