<template lang="pug">
  div
    div(v-if="!$isMobile" style="background-color: #f5f5f5").px-5
      v-container.px-5
        v-layout(row wrap justify-center)
          span.font-l.ma-5.text-xs-center Are you having trouble in your clinic?
        v-layout(row wrap justify-center).mx-5
          v-flex(xs12 md4)
            v-list(two-line).check-list.mc-light-grey
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Are you having data privacy issues?
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Do you need to cut on unnecessary costs?
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Is your internet connection unreliable?
          v-flex(xs12 md4)
            v-list(two-line).check-list.mc-light-grey
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Do you have a duplicate or missing patient charts?
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Do you have billing &amp; collection discrepancies?
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Is your current system crappy and slows you down?
        v-layout(row wrap justify-center)
          v-btn(
          color="info"
          large
          ).mt-5 
            strong.font-s.text-none We got a solution
        p.text-xs-center.py-4.font-xs Have questions? Give us a call: 
          strong (+63) 699 - 7272
    div(v-else).mc-light-grey
      v-container
        v-layout(row justify-center)
          span.font-l.text-xs-center Are you having trouble in your clinic?
      v-container
        v-layout(row justify-center)
          v-list(two-line style="background-color: #f5f5f5")
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Are you having data privacy issues?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Do you need to cut on unnecessary costs?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-m Is your internet connection unreliable?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Do you have a duplicate or missing patient charts?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Do you have billing &amp; collection discrepancies?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your current system crappy and slows you down?  
</template>

<script>
  export default {
    data () {
      return {
        checkIcon: '../../assets/images/mycure-icon-check.png'
      };
    }
  };
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  .check-list {
    background-color: #f5f5f5;
  }
</style>

