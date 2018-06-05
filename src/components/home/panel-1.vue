<template lang="pug">
  div.panel-1
    mc-navbar-home
    div.container
      div(style="height: 90vh").row.align-items-center
        div.col-xs-12.col-md-6
          h2(style="font-size: 24px;") MYCURE | Clinic Management System
          div.hr-blue
          br
          h1 MYCURE cares for people who care for people.
          br
          p Cupidatat deserunt sint incididunt est laborum excepteur ex enim. Ipsum labore labore consectetur consequat cillum pariatur nostrud pariatur veniam eiusmod ad excepteur commodo.
          br
          b-button(variant="primary" size="sm") Watch Video
          br
          br
          a(href="") Signup me up now.
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
    height: 100vh;
    background-image: url('../../assets/images/v4/bg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
  }
</style>