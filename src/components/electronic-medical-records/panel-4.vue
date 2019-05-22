<template lang="pug">
  div.px-5
    v-flex(xs12 md12)
        v-layout(row wrap justify-center)
          strong(style="font-size: 25px").pa-5.text-xs-center Are you a part of a group clinic? 
            a(href="https://mycure.md")
              span Ask us how it works
</template>

<script>
  export default {
    data () {
      return {
        //
      };
    }
  };
</script>


<style scoped>
  a {
    color: #2e9fdf
  }
</style>
