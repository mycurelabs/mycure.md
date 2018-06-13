<template lang="pug">
  div.panel-1
    mc-navbar-home
    div.container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-6
          h2 MYCURE | Care the Extra Mile
          div.hr-blue
          br
          h1 MYCURE cares for people who care for people.
          br
          p MYCURE cares for people who care for people. It is an all-inclusive clinic management system for doctors and clinics. MYCURE is one of the fastest growing all-around EMR and practice management software in the Philippines.
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
    background-image: url('../../assets/images/v4/mycure-homepage-doctor-welcome-smile-emr-his-ehr-philippines-mobile-web-app.jpg');
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
      background-image: url('../../assets/images/v4/mycure-homepage-doctor-welcome-smile-emr-his-ehr-philippines-mobile-web-app.jpg');
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