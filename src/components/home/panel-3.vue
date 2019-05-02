<template lang="pug">
  //- Section 3 of Home Page
  div.mc-light-grey.px-5
    v-container.px-5
      v-layout(row wrap justify-center)
        h2.pa-5 Is your current clinic system stopping you and your clinic from progress?
      v-layout(row wrap justify-center).mx-5
        v-flex(xs12 md4)
          v-list(two-line).check-list
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your clinic system already outdated and lack reliablity?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your clinic system providing accurate, real-time data?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your clinic system already outdated and lack reliability?
        v-flex(xs12 md4)
          v-list(two-line).check-list
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your clinic system hard to maintain?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your clinic system help you in Data Privary Issues?
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Is your clinic system working perfectly even without WiFi?
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
  background-color: #f6f6f6;
}

</style>

