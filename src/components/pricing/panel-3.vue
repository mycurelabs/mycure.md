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
          img(src="../../assets/images/v4/mycure-modules-plantg.png" :class="{'animate': scrollTop > 1500}").plant
      b-row.row.align-items-center.justify-content-md-center
        b-col(xs="12" md="5").pl-5.pr-5.text-center
          img(src="../../assets/images/v4/mycure-homepage-package-group.png")
        b-col(xs="12" md="5")
          p Signup ang get your clinic spiced up with the best package for you group clinic within 24 hours!
          p Also get get a glimpse of the EMR module for free while you wait!
          b-button(variant="primary") Get started for FREE

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

  .plant {
    width: 550px;
    position: absolute;
    right: -1000px;
    top: -200px;
    -webkit-transition: right 500ms; /* Safari */
    transition: right 500ms;
  }

  .plant.animate {
    right: -420px;
  }
</style>

