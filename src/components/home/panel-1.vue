<template lang="pug">
  div.panel-1
    mc-navbar-home
    div.container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-6
          h2 MYCURE | Clinic Management System
          div.hr-blue
          br
          h1 MYCURE cares for people who care for people.
          br
          p Cupidatat deserunt sint incididunt est laborum excepteur ex enim. Ipsum labore labore consectetur consequat cillum pariatur nostrud pariatur veniam eiusmod ad excepteur commodo.
          br
          b-button(variant="primary" size="sm") Watch Video
          br
          br
          a(href="") Signup me up now
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