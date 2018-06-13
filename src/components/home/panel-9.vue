<template lang="pug">
  div(:style="{'background-color': bg}").pt-5.pb-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center
          center
            div.hr-blue
          br
          h1 Care to join us?
          br
          p Tell us why you're here:
          br
        div.col-xs-12.col-md-4.offset-md-2
          b-button(variant="outline-primary" size="lg" style="width: 100%") I wanna learn more about your product
          br
          br
          b-button(variant="outline-primary" size="lg" style="width: 100%") I wanna partner with MYCURE
        div.col-xs-12.col-md-4
          b-button(variant="outline-primary" size="lg" style="width: 100%") I wanna join the MYCURE team
          br
          br
          b-button(variant="outline-primary" size="lg" style="width: 100%") I wanna care the extra mile with you
        div.col-xs-12.col-md-12.text-center.mt-4
          b-button(variant="success" size="lg") I wanna signup now
</template>

<script>
  export default {
    props: {
      bg: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>
</style>