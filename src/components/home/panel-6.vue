<template lang="pug">
  div.panel-6.pt-5.pb-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center
          center
            div.hr-blue
          br
          h1 You are the center of the universe
          br
          p Quis ipsum est incididunt ut qui culpa labore 
            br
            | dolore id est aute qui ex.
          br
          div.row.justify-content-center
            div.col-xs-12.col-md-3.pl-3.pr-3
              img(width="100%" src="../../assets/images/v4/234x234px.png")
              br
              div.text-left
                strong Foo
                p Occaecat anim nostrud.
            div.col-xs-12.col-md-3.pl-3.pr-3
              img(width="100%" src="../../assets/images/v4/234x234px.png")
              br
              div.text-left
                strong Foo
                p Culpa amet ut laboris.
            div.col-xs-12.col-md-3.pl-3.pr-3
              img(width="100%" src="../../assets/images/v4/234x234px.png")
              br
              div.text-left
                strong Foo
                p Nisi Lorem labore.
            div.col-xs-12.col-md-3.pl-3.pr-3
              img(width="100%" src="../../assets/images/v4/234x234px.png")
              br
              div.text-left
                strong Foo
                p Eu nostrud qui.
            
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
  .panel-6 {
    height: 100vh;
    background-color: white;
  }
</style>