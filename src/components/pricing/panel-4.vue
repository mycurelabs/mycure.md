<template lang="pug">
  div.panel-4.pt-5.pb-5
    b-container(fluid)
      b-row.justify-content-md-center.mb-5
        b-col(xs="12" md="12").text-center
          center
            div.hr-blue
          br
          h1 MYCURE for Multispecialty Clinics
          br
          p An all around solution for your outpatient clinic.
      b-row.row.align-items-center
        b-col(xs="12" md="6").pl-5.pr-5
          img(width="100%" src="../../assets/images/v4/635x452px.png")
        b-col(xs="12" md="6")
          p Imagine simplifying all your clinic's paper works -- Faster transactions, more productive staff, reduced paper clutter and secure, integrated data.
          p We promise to formulate the perfect mix for your specialized clinics once you get in touch with us now. We will call you within 24 hours once it's done!
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          br
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          img(src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr.png").mr-4
          br
          br
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
  .panel-4 {
    /* background-color: white; */
  }
</style>

