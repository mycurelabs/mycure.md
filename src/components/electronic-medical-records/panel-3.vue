<template lang="pug">
  //- Section 3 of Home Page
  div.px-5.panel-3
    v-container.px-5
      v-layout(row wrap justify-center)
        font.font-l.pa-5 Why do doctors use MYCURE in their clinics?
      v-layout(row wrap justify-center).mx-5
        v-flex(xs12 md4)
          v-list(two-line).check-list.panel-3
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
          v-list(two-line).check-list.panel-3
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

.panel-3 {
  background-color: #f5f5f5
}

</style>

