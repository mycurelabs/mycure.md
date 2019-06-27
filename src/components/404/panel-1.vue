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
            strong.font-18 Oh snap!
            br
            span.font-18 There isn't any page like that in this site.
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
            strong.font-16 Oh snap!
            br
            span.font-16 There isn't any page like that in this site.
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
