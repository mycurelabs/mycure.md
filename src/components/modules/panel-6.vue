<template lang="pug">
  div.panel-5.pb-5.pt-5
    div.container
      div.row
        div.col-xs-12.col-md-12.text-center.pb-4
          center  
            div.hr-blue
          br
          h1 Let's get started
          p What recipe/blend do you need right now?
      div.row
        div.col-xs-12.col-md-4.text-center
          h2 For me and my 
            br
            | secretary only
          br
          b-button(variant="outline-primary" size="lg" block) MYCURE for Individuals >
        div.col-xs-12.col-md-4.text-center
          h2 For my peers and I, 
            br
            | practicing as a team
          br
          b-button(variant="primary" size="lg" block) MYCURE for Groups >
        div.col-xs-12.col-md-4.text-center
          h2 For my multispecialty
            br
            | clinic
          br
          b-button(variant="outline-primary" size="lg" block) MYCURE for Specialized Clinics >
</template>

<script>
</script>

<style scoped>
  .panel-5 {
    /* min-height: 100vh; */
    background-color: white;
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  .module-container {
    padding: 15px;
    margin: 5px;
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    .panel-5 {
      /* min-height: 100vh; */
      background-color: white;
    }

    .container {
      padding-top: 0;
      padding-bottom: 0;
    }

    .row-container {
      height: 100vh;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>