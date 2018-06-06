<template lang="pug">
  div.panel-2
    div.container
      div(style="height: 100vh").row.align-items-center
        div.col-xs-12.col-md-12.text-center
          center
            div.hr-blue
          br
          h1 All-inclusive system, all-around solution
          br
          p An all-inclusive clinic management system so you don't have to look anywhere else.
          br
          div.row
            div.col-xs-12.col-md-6
              img(src="../../assets/images/v4/635x452px.png" width="100%")
            div.col-xs-12.col-md-6
              img(src="../../assets/images/v4/635x452px.png" width="100%")
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
  .panel-2 {
    height: 100vh;
    background: white;
  }
</style>