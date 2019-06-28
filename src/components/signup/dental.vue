<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 3
    div.panel-3.pt-5.pb-5
      b-container(fluid)
        b-row.justify-content-md-center.mb-5
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 MYCURE for Dentists
            br
            p An easy-to-use clinic management system tailored for dental services and operations.
            //- img(src="../../assets/images/v4/mycure-modules-plantg.png" :class="{'animate': scrollTop > 700}").plant
        b-row.row.align-items-center.justify-content-md-center
          b-col(xs="12" md="5").pl-5.pr-5.text-center
            img(width="100%" src="../../assets/images/v4/mycure-pricing-dental.png")
          b-col(xs="12" md="4")
            |
            br
            | ✓ Queuing
            br 
            | ✓ Dental Charting
            br 
            | ✓ Scheduler
            br 
            | ✓ Analytics
            br 
            | ✓ EMR and Patient List
            br 
            | ✓ Point-of-Sales
            br 
            | ✓ Inventory
            br 
            | ✓ Staff Chatbox
            br 
            br
            //- b-button(variant="primary" :to="{name: 'signup-group'}") CREATE MY FREE ACCOUNT
            b-button(variant="primary" href="https://accounts.mycure.md/signup/multi-specialty/step-1" target="_blank") GET STARTED
            //- b-button(variant="primary" href="https://accounts.mycure.md/signup/private/step-1?origin=website" target="_blank") SCHEDULE A DEMO

</template>

<script>
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });
    },
    data() {
      return {
        scrollTop: 0
      }
    },
    methods: {
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-3 {
    background-color: white;
  }

  .plant {
    display: none;
  }

  @media (min-width: 576px) {
    .plant {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .plant {
      display: inline;
      width: 550px;
      position: absolute;
      right: -1000px;
      top: -200px;
      -webkit-transition: right 500ms; /* Safari */
      transition: right 500ms;
    }

    .plant.animate {
      right: -420px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>

