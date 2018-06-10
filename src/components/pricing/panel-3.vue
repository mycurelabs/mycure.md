<template lang="pug">
  div.panel-3.pt-5.pb-5
    b-container(fluid)
      b-row.justify-content-md-center.mb-5
        b-col(xs="12" md="12").text-center
          center
            div.hr-blue
          br
          h1 MYCURE for Groups
          br
          p 
            strong A practical system 
            | built for doctor's clinic being handled by a common secretary.
      b-row.row.align-items-center
        b-col(xs="12" md="6").pl-5.pr-5
          img(width="100%" src="../../assets/images/v4/635x452px.png")
        b-col(xs="12" md="6")
          p Signup ang get your clinic spiced up with the best package for you group clinic within 24 hours!
          p Also get get a glimpse of the EMR module for free while you wait!
          b-button(variant="primary") GET STARATED FOR FREE

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
  .panel-3 {
    background-color: white;
  }
</style>

