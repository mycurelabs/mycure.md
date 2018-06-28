<template lang="pug">
  div.panel-1
    mc-navbar-home
    b-container
      b-row.row-container.row.align-items-center
        b-col(xs="12" md="5")
          h2 MYCURE | Clinic Management System
          div.hr-blue
          br
          h1 MYCURE cares for people who care for people.
          br
          p Doctors, nurses, and clinic professionals have a lot of work and we want to make that work easier.
          br
          b-button(variant="primary" size="sm" :to="{name: 'home-vid'}") WATCH VIDEO
        b-col(xs="12" md="7")
          img(width="110%" src="../../assets/images/v4/mycure-homepage-doctor-kid-pediatrician-drawing.png")
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
    /* background-image: url('../../assets/images/v4/mycure-homepage-doctor-welcome-smile-emr-his-ehr-philippines-mobile-web-app.jpg'); */
    /* background-repeat: no-repeat; */
    /* background-size: cover; */
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
      /* background-image: url('../../assets/images/v4/mycure-homepage-doctor-kid-pediatrician-drawing.png'); */
      /* background-repeat: no-repeat; */
      /* background-position: center left; */
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