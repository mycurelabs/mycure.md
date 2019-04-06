<template lang="pug">
  div.panel-1
    pre(v-if="!$isProduction()").panel-number 1
    mc-navbar-home
    mc-cookie-prompt
    div(style="padding-top: 58px").container
      div.row-container.row.align-items-center
        div.col-xs-12.col-md-5
          //- h2 MYCURE | Pricing
          //- div.hr-blue
          br
          h1 Your best
          h1 investment yet.
          br
          p Explore how these tech tools can transform the way you manage your day-to-day work.
          br
          br
          b-button(variant="primary" size="sm" @click="toggleChat") ASK A QUICK QUESTION

</template>

<script>
  import mcNavbarHome from '../commons/mc-navbar-home';
  import mcCookiePrompt from '../commons/mc-cookie-prompt';
  export default {
    components: {
      mcNavbarHome,
      mcCookiePrompt
    },
    methods: {
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
      }
    }
  }
</script>

<style scoped>
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
      height: auto;
      background-image: url('../../assets/images/v4/mycure-pricing-best-investment-yet-laptop-drawing.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-color: white;
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
    .panel-1 {
      height: auto;
      background-image: url('../../assets/images/v4/mycure-pricing-best-investment-yet-laptop-drawing.jpg');
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      background-color: white;
    }
  }

  @media (min-width: 1200px) {

  }
</style>