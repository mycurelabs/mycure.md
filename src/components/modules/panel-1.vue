<template lang="pug">
  div.panel-1
    pre(v-if="!$isProduction()").panel-number 1
    mc-navbar-home
    div.container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-6
          h2 MYCURE | Modules
          div.hr-blue
          br
          h1 Customize your own MYCURE System.
          br
          p Because every clinic has its unique way of 
            br
            | getting things done.
          p MYCURE is a clinic management system designed to securely 
            br
            | process digital medical records of your patients.
          br
          b-button(variant="primary" size="sm") Get MYCURE
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
    background-color: #E9E9E9;
    background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right -50px top;
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
  }

  @media (min-width: 768px) {
    .panel-1 {
      height: 100vh;
      background-color: #E9E9E9;
      background-image: url('../../assets/images/v4/mycure-modules-mobile-drawing.png');
      background-repeat: no-repeat;
      background-position: top bottom;
      /* background-size: cover; */
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

  }

  @media (min-width: 1200px) {

  }
</style>