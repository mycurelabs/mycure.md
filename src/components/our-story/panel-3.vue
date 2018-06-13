<template lang="pug">
  div.panel-3
    div.container
      div.row.row-container.align-items-center
        div.col-xs-12.col-md-8
          div.hr-blue
          br
          h1 Our Purpose
          br
          p Like you, MYCURE is 
            strong committed to saving lives too, 
            | by building well-equipped and well-designed apps so healthcare practitioners are in the most ideal work environment to fulfill their purpose.
        div.col-xs-12.col-md-4
          img(width="100%" src="../../assets/images/v4/234x234px.png")
</template>

<script>
</script>

<style scoped>
  .panel-3 {
    min-height: 100vh;
    background-color: white;
  }

  .container {
    /* padding-top: 50px; */
    /* padding-bottom: 50px; */
  }

  @media (min-width: 576px) {
    .container {
      padding-top: 50px;
      padding-bottom: 50px;
    }
  }

  @media (min-width: 768px) {
    .panel-2 {
      min-height: 100vh;
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