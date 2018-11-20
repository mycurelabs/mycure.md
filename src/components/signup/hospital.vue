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
            h1 MYCURE for Hospitals 
              <span class="badge badge-warning" style="font-size: 18px; position: absolute; margin-top: 12px; margin-left: 10px">BETA</span>
            br
            p An affordable, custom-fit solution for your hospital operations and management needs
            //- img(src="../../assets/images/v4/mycure-modules-plantg.png" :class="{'animate': scrollTop > 700}").plant
        b-row.row.align-items-center.justify-content-md-center
          b-col(xs="12" md="5").pl-5.pr-5.text-center
            img(width="100%" src="../../assets/images/v4/mycure-pricing-his.png")
          b-col(xs="12" md="4")
            |
            br
            | ✓ E-Medical Records
            br
            | ✓ Ward Management
            br
            | ✓ In-patient Management
            br
            | ✓ Emergency Room
            br
            | ✓ Operating Room
            br 
            | ✓ Advanced Billing
            br 
            | ✓ Laboratory
            br 
            | ✓ Imaging
            br 
            | ✓ Inventory
            br 
            | ✓ Point-of-Sales
            br 
            | ✓ Staff Chatbox
            br 
            | ✓ Syncbase Technology
            br 
            | ✓ Reports & Analytics
            br 
            | ✓ Physical Medical Exams
            br
            br
            b-button(variant="primary" href="https://mycure1.typeform.com/to/EZHOvV" target="_blank") RESERVE MY SLOT NOW
            br
            small(style="color: red;") Few Slots Left!
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

