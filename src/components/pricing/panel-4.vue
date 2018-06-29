<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 4
    div.panel-4.pt-5.pb-5
      b-container(fluid)
        b-row.justify-content-md-center.mb-5
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 MYCURE for Health Facilities
            br
            p An 
              strong all-around solution 
              | for your outpatient, multi-specialty, or industrial clinic
        b-row.row.align-items-center.justify-content-md-center
          b-col(xs="12" md="5").pl-5.pr-5
            img(width="100%" src="../../assets/images/v4/mycure-pricing-health-facility-coffee-sack.png")
          b-col(xs="12" md="5")
            p Imagine simplifying all your clinic's paper works -- Faster transactions, more productive staff, reduced paper clutter and secure, integrated data.
            p We promise to formulate the perfect mix for your specialized clinics once you get in touch with us now. We will call you within 24 hours once it's done!
            img(width="60" src="../../assets/images/v4/mycure-homepage-wireframe-icon-emr-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-billing-basic-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-ris-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-lab-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-inventory-active.png").mr-4
            br
            img(width="60" src="../../assets/images/v4/mycure-icon-pos-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-chat-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-syncGateway-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-report-active.png").mr-4
            img(width="60" src="../../assets/images/v4/mycure-icon-pmeepe-active.png").mr-4
            br
            br
            b-button(variant="primary" :to="{name: 'signup-multi'}") GET STARTED FOR FREE


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

