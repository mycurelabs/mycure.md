<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 9
    div(:style="{'background-color': bg}").join-us-panel.pt-5.pb-5
      div.container
        div.row.align-items-center
          div.col-xs-12.col-md-12.text-center.mt-5(style="margin-top:100px;")
            img(src="../../assets/images/v4/mycure-modules-plantg.png").plant
            img(src="../../assets/images/v4/mycure-modules-almond.png").almonds
            center
              div.hr-blue
            br
            h1 Experience MYCURE
            br
            p Explore what you can do more with our smart tools by your side.
            br
          div.col-xs-12.col-md-10.offset-md-1
            div.row
              div.col-xs-12.col-md-6.offset-md-3
                //b-button(variant="outline-primary" size="lg" style="width: 100%" :to="{name: 'signup', query: {id: 'top'}}").mb-3 GET STARTED TODAY
                b-button(variant="primary" size="lg" style="width: 100%" :to="{name: 'signup', query: {id: 'top'}}").mb-3 GET STARTED TODAY 
</template>

<script>
  export default {
    props: {
      bg: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped>

  .join-us-panel {
    
  }

  .plant, .almonds {
    display: none;
  }

  @media (min-width: 576px) {
    .plant, .almonds {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .plant {
      display: inline;
      width: 600px;
      position: absolute;
      left: -250px;
      top: -175px;
    }

    .almonds {
      display: inline;
      position: absolute;
      right: -100px;
      bottom: 100px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>