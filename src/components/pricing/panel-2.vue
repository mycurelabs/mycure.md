<template lang="pug">
  div.panel-2.pt-5.pb-5
    b-container(fluid)
      b-row.justify-content-md-center
        b-col(xs="12" md="12").text-center
          center
            div.hr-blue
          br
          h1 MYCURE for Individuals
          br
          p 
            strong A powerful EMR System with Queuing and Billing modules.
          br
          p Try it out first without having to pay for anything. No credit card needed. 
            strong Start FREE!
      b-row.mt-5
        b-col(xs="12" md="4").text-center
          img(src="../../assets/images/v4/mycure-modules-notepad.png")
          br
          br
          b-button(variant="outline-primary" size="lg").shadow-5 Get MYCURE
        b-col(xs="12" md="4").text-center
          img(src="../../assets/images/v4/mycure-modules-notepad.png")
          br
          br
          b-button(variant="outline-primary" size="lg").shadow-5 Get MYCURE
        b-col(xs="12" md="4").text-center
          img(src="../../assets/images/v4/mycure-modules-notepad.png")
          br
          br
          b-button(variant="primary" size="lg").shadow-5 Get MYCURE
</template>

<script>
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });
    },
    data() {
      return {
        scrollTop: 0
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-2 {
    background-image: url('../../assets/images/v4/mycure-homepage-background-wood.png');
    background-repeat: repeat;
  }
</style>

