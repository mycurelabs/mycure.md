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