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
            h1 App for Doctors
            br
            p An essential record-keeping tool for all practicing physicians.
            //- img(src="../../assets/images/v4/mycure-modules-plantg.png" :class="{'animate': scrollTop > 700}").plant
        b-row.row.align-items-center.justify-content-md-center
          b-col(xs="12" md="5").pl-5.pr-5.text-center
            img(width="100%" src="../../assets/images/v4/mycure-pricing-doctors-app.png")
          b-col(xs="12" md="4")
            p 
            h2 It's always free.
            |
            br
            |✓ Multiple clinics
            br 
            | ✓ 500 patient profiles
            br 
            | ✓ 1GB storage
            br 
            | ✓ SOAP Charting
            br 
            | ✓ e-Prescription
            br 
            | ✓ Diagnostic orders
            br 
            | ✓ Medical Forms
            br 
            | ✓ PNF Drug Catalog
            br 
            | ✓ ICD-10 Reference
            br 
            | ✓ DPA Registration Guide
            br
            br
            b-button(variant="primary" href="https://accounts-v4.mycure.md/create-account-individual?type=individual&plan=arabica" target="_blank") GET STARTED TODAY FOR FREE
            br
            a(href="https://accounts-v4.mycure.md/choose-plan?type=individual" target="_blank") Need more premium features?
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

