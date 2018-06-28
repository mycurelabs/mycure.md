<template lang="pug">
  div(:style="{'background-color': bg}").join-us-panel.pt-5.pb-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center
          img(src="../../assets/images/v4/mycure-modules-plantg.png").plant
          img(src="../../assets/images/v4/mycure-modules-almond.png").almonds
          center
            div.hr-blue
          br
          h1 Care to join us?
          br
          p Tell us why you're here:
          br
        div.col-xs-12.col-md-10.offset-md-1
          div.row
            div.col-xs-12.col-md-6
              b-button(variant="outline-primary" size="lg" style="width: 100%" :to="{name:'modules'}").mb-3 I WANNA LEARN MORE ABOUT YOUR PRODUCT
              // b-button(variant="outline-primary" size="lg" style="width: 100%").mb-3 I wanna partner with MYCURE
            div.col-xs-12.col-md-6
              b-button(variant="outline-primary" size="lg" style="width: 100%" :to="{name: 'careers'}").mb-3 I WANNA JOIN MYCURE TEAM
              // b-button(variant="outline-primary" size="lg" style="width: 100%").mb-3 I wanna care the extra mile with you
            div.col-xs-12.col-md-6.offset-md-3.text-center.mt-4
              b-button(variant="success" size="lg" style="width: 100%" :to="{name: 'join-today'}") I WANNA SIGN UP NOW
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
      top: -250px;
    }

    .almonds {
      display: inline;
      position: absolute;
      right: -100px;
      bottom: -100px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>