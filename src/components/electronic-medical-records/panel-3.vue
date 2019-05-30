<template lang="pug">
  div.white
    div(v-if="!$isMobile" style="padding: 0 6% 0 6%;").pt-5
      v-container
        v-layout(row justify-center)
          span.font-medium It's complete - everything your clinic needs.
      div.py-5
        center
          img(style="max-width: 90%;" src="../../assets/images/mycure-home-web-individual-clinic-diagram-banner.png")
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