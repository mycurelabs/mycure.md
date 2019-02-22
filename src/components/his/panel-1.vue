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
          h1 MYCURE Hospital Information System 
            <span class="badge badge-warning" style="font-size: 18px; position: absolute; margin-top: 12px; margin-left: 10px">BETA</span>
          br
          span(style="color: #acadae")
            b
              i An affordable, custom-fit solution for your hospital operations and management needs
          br
          br
          p
            b MYCURE Hospital Information System (HIS)
            |  is now on Beta! Early birds get the most awesome deals.
          p Few slots left.
          br
          b-button(variant="primary" size="sm" href="https://mycure1.typeform.com/to/EZHOvV" target="_blank") RESERVE MY SLOT NOW
        div.col-xs-12.col-md-6
          img(width="100%" src="../../assets/images/v4/mycure-home-his-image.png")
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
      /* background-image: url('../../assets/images/v4/mycure-home-his-image.png'); */
      background-repeat: no-repeat;
      background-position: right center;
      /* background-size: ; */
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
      /* background-image: url('../../assets/images/v4/mycure-home-his-image.png'); */
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 600px;
    }
  }

  @media (min-width: 1200px) {

  }
</style>