<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 3
    div.panel-3.pt-5.pb-5
      b-container(fluid)
        b-row.justify-content-md-center.mb-5
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 MYCURE for Group Clinics
            br
            p
              strong A practical system built for doctors’ clinics being handled by a common secretary.
            br
            p Aside from the premium Group Clinic Package, you’ll also receive expert recommendations on
              br
              | boosting clinic efficiency from our technical team, all for a plan that will suit your budget.
            img(src="../../assets/images/v4/mycure-modules-plantg.png" :class="{'animate': scrollTop > 1500}").plant
        b-row.row.align-items-center.justify-content-md-center
          b-col(xs="12" md="5").pl-5.pr-5.text-center
            img(width="100%" src="../../assets/images/v4/mycure-pricing-group-clinic-coffee-jars.png")
          b-col(xs="12" md="5")
            p Sign up ang get your clinic spiced up with the best package for you group clinic within 24 hours!
            p Also get a glimpse of the EMR module for free while you wait!
            b-button(variant="primary" :to="{name: 'signup-group'}") GET STARTED FOR FREE

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
    display: none;
  }

  @media (min-width: 576px) {
    .plant {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .plant {
      display: inline;
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
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>

