<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 2
    div.panel-2.pb-5.pt-5
      b-container
        b-row.align-items-center
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 The most complete clinic
              br
              | management system around
            br
          b-col(xs="12" md="6").offset-md-3.text-center
            p MYCURE smoothly integrates your patient records together from registration to billing. It simplifies record-keeping for everyone. 
            br
          b-col(xs="12" md="6").border-right.pl-5.pr-5.text-right
            h2.right Other providers
            br
            img(src="../../assets/images/v4/mycure-homepage-compare-other-emr-incomplete-clinic-management-system.png" width="100%").mb-3
          b-col(xs="12" md="6").pl-5.pr-5.text-left
            h2 With MYCURE 
              span.color-primary ✓
            br
            img(src="../../assets/images/v4/mycure_homepage_compare_mycure_complete.png" width="100%").mb-3
          b-col(xs="12" md="8").offset-md-2.text-center
            br
            p With MYCURE, you don’t have to depend on multiple, complicated systems anymore. Your patients’ medical data are synced together and stored safely
              br
              | in the cloud using one powerful system.
</template>

<script>
</script>

<style scoped>
  .panel-2 {
    height: auto;
    background-color: white;
  }

  .container {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  .border-right {
    border: none !important;
  }
  

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .border-right {
      border: none !important;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      background-color: white;
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .border-right {
      border-right: 1px solid #cecece !important;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>