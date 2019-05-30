<template lang="pug">
  div
    div(v-if="!$isMobile").px-5.mc-light-grey
      v-container.px-5
        v-layout(row wrap justify-center)
          font.font-large.pa-5 Why do doctors use MYCURE in their clinics?
        v-layout(row wrap justify-center).mx-5
          v-flex(xs12 md4)
            v-list(two-line).check-list.mc-light-grey
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | I've no secretary to help with record keeping
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | My patients can't read my scribbly handwriting!
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Paper charts are very difficult to search &amp filter
          v-flex(xs12 md4)
            v-list(two-line).check-list.mc-light-grey
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | Cloud is a much safer place to backup my charts
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | I have no idea how much HMOs owe me
              v-list-tile
                v-list-tile-action
                  img(src="../../assets/images/mycure-icon-check.png")
                v-list-tile-content
                  | My previous system is old and not user-friendly
        v-layout(row wrap justify-center)
          v-btn(
          color="info"
          large
          ).mt-5 
            strong.font-small.text-none We got a solution
        p.text-xs-center.py-4.font-xs Have questions? Give us a call: 
          strong (+63) 917 303 4350
    div(v-else).mc-light-grey
      v-container
        v-layout(row justify-center)
          span.font-large.text-xs-center Why do doctors use MYCURE in their clinics?
      v-container
        v-layout(row justify-center)
          v-list(two-line style="background-color: #f5f5f5")
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-medium I've no secretary to help with record keeping
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-medium My patients can't read my scribbly handwriting!
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                span.font-medium Paper charts are very difficult to search &amp filter
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | Cloud is a much safer place to backup my charts
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | I have no idea how much HMOs owe me
            v-list-tile
              v-list-tile-action
                img(src="../../assets/images/mycure-icon-check.png")
              v-list-tile-content
                | My previous system is old and not user-friendly
        v-layout(row wrap justify-center)
          v-btn(color="info" large).mt-5 
            strong.font-small.text-none We got a solution
        p.text-xs-center.py-4.font-xs Have questions? Give us a call: 
          strong (+63) 917 303 4350

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

