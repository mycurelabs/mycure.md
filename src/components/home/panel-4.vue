<template lang="pug">
  div.pa-5
    v-flex(xs12)
        v-layout(row wrap justify-center)
          strong(style="font-size: 30px").text-xs-center Does your clinic have more than 3 branches? 
            a
              span(@click="toggleChat").toggle-chat Talk to us for custom pricing.
</template>

<script>
  export default {
    methods: {
      toggleChat () {
        window.$crisp.push(['do', 'chat:toggle']);
      }
    }
  };
</script>

<style scoped>
  a {
    color: #2e9fdf
  }
</style>
