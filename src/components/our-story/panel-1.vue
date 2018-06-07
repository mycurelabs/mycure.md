<template lang="pug">
  div.panel-1
    mc-navbar-home
    b-container
      div.row-container.row.align-items-center.justify-content-md-center
        div.col-xs-12.col-md-8.text-center
          h2 MYCURE | Mission
          center
            div.hr-blue
          br
          h1 We make it easy to save lives
          br
          h1 Improve health by improving the health care network
          br
          h1 Using information and integration to build a healthier community
          
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