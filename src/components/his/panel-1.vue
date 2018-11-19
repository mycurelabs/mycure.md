<template lang="pug">
  div.panel-1
    pre(v-if="!$isProduction()").panel-number 1
    mc-navbar-home
    div.container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-6
          //- h2 MYCURE | Modules
          //- div.hr-blue
          br
          h1 MYCURE | Hospital Information System
          br
          span(style="color: #acadae")
            b
              i An all-around solution for your outpatient, multispecialty or specialized clinics.
          br
          br
          p Imagine simplifying all of your clinic’s paperwork -- Faster transactions, more productive staff, reduced paper clutter, and secure, integrated data.

          p Our professionals will formulate the perfect mix for your health facility in less than 24 hours.
          br
          b-button(variant="primary" size="sm" :to="{name: 'join-today'}") GET MYCURE
          //- img(width="100%" src="../../assets/images/v4/mycure-modules-mobile-drawing.jpg")

</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  export default {
    components: {
      mcNavbarHome
    },
    methods: {
      goto(page) {
        this.$router.push({name: page});
      }
    }
  }
</script>

<style scoped>
  /* .panel-1 {
    height: auto;
    background-color: white !important;
    background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.jpg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 400px;
  } */

  .product-card {
    background-color: white;
    margin: 15px 0 15px 0;
  }

  .container {
    padding-top: 50px;
    padding-bottom: 50px;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .panel-1 {
      background-position: right center;
      background-size: 300px;
    }
  }

  @media (min-width: 768px) {
    .panel-1 {
      height: auto;
      background-color: white !important;
      background-image: url('../../assets/images/v4/mycure-home-his-image.png');
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 500px;
    }
    
    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 90vh;
    }
  }

  @media (min-width: 992px) {
    .panel-1 {
      height: auto;
      background-color: white !important;
      background-image: url('../../assets/images/v4/mycure-home-his-image.png');
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 600px;
    }
  }

  @media (min-width: 1200px) {

  }
</style>