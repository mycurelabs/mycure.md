<template lang="pug">
  div
    div(v-if="!$isMobile").white
      v-container(style="padding-top: 70px; height: 90vh")
        br
        div
          center
            img(src="../../assets/images/mycure-error-404-image.png" alt="Error 404")
        br
        br
        div
          center
            strong.font-small Oh snap!
            br
            span.font-small There isn't any page like that in this site.
              br
              | Please check out our other pages instead.
    div(v-else).showPanel
      v-container
        br
        v-flex(xs12)
          center
            img(width="100%" src="../../assets/images/mycure-error-404-image.png" alt="Error 404")
        br
        br
        v-flex(xs12)
          center
            strong.font-s Oh snap!
            br
            span.font-s There isn't any page like that in this site.
              br
              | Please check out our other pages instead.
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
