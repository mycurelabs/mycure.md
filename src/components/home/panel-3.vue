<template lang="pug">
  div.px-5.panel-3
    v-container.px-5
      v-layout(row wrap justify-center)
        font.font-l.pa-5 Are you having trouble in your clinic?
      v-layout(row wrap justify-center).mx-5
        v-flex(xs12 md4)
          v-list(two-line).check-list.panel-3
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
          v-list(two-line).check-list.panel-3
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Do you have a duplicate or missing patient charts?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Do you have billing &amp collection discrepancies?
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

  .panel-3 {
    background-color: #f5f5f5
  }
</style>

