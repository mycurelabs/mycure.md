<template lang="pug">
  div.panel-5.pt-5.pb-5
    b-container(fluid)
      b-row.justify-content-md-center
        b-col(xs="12" md="12").text-center
          center
            div.hr-blue
          br
          h1 Not sure about what you're looking for?
          br
          br
          p 
            strong We'll help you figure it out fast.
          br
          p Talk to the smart people behind MYCURE and get fast answers to your inquiries.
          br
          br
          br
          b-button(variant="primary") START QUICK CHAT
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
  .panel-5 {
    background-color: white;
  }
</style>

