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
          h1 Customize your own MYCURE System.
          br
          span(style="color: #acadae")
            b
              i Because every clinic has its unique way of getting things done.
          br
          br
          p MYCURE is a clinic management system designed to securely 
            br
            | process digital medical records of your patients.
          br
          b-button(variant="primary" size="sm" :to="{name: 'join-today'}") GET MYCURE
</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  export default {
    components: {
      mcNavbarHome
    }
  }
</script>

<style scoped>
  .panel-1 {
    height: auto;
    background-color: white !important;
    background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.jpg');
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 400px;
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
      height: 100vh;
      background-color: #E9E9E9;
      background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.jpg');
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
      height: 100vh;
      background-color: #E9E9E9;
      background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.jpg');
      background-repeat: no-repeat;
      background-position: right center;
      background-size: 700px;
    }
  }

  @media (min-width: 1200px) {

  }
</style>