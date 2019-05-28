<template lang="pug">
  div.white
    div(v-if="!$isMobile").py-5
      v-container
        v-layout(row justify-center)
          span.font-l It's complete - everything your clinic needs.
      div.py-5
        center
          img(width="80%" src="../../assets/images/mycure-home-web-complete-clinic-management-system-diagram.png")
    div(v-else)
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

</style>

