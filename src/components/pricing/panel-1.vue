<template lang="pug">
  div.panel-1
    mc-navbar-home
    div.container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-6
          h2 MYCURE | Pricing
          div.hr-blue
          br
          h1 Your best investment yet.
          br
          p Quality technology made more affordable. Only pay for what you need.
          br
          b-button(variant="primary" size="sm") View Prices
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
    background-image: url('../../assets/images/v4/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
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
      background-image: url('../../assets/images/v4/bg.jpg');
      background-repeat: no-repeat;
      background-size: cover;
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