<template lang="pug">
  div
    div(v-if="!$isMobile" style="padding: 0 6% 0 6%;").white.py-5
      v-container
        v-layout(row justify-center)
          span.font-medium It's complete - everything your clinic needs.
      div.py-5
        center
          img(style="max-width: 90%;" src="../../assets/images/mycure-home-web-complete-clinic-management-system-diagram.png")
    
</template>

<script>
  export default {
    data () {
      return {
        siginURL: process.env.VUE_APP_SIGNIN_URL
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

</style>