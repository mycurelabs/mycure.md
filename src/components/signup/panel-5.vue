<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 5
    div.panel-5.pt-5.pb-5
      b-container(fluid)
        b-row.justify-content-md-center
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 Not sure what you're looking for?
            br
            br
            p 
              strong We'll help you figure it out fast.
            br
            p Talk to the smart people behind MYCURE and get fast answers to your inquiries.
            br
            br
            br
            b-button(variant="primary" @click="toggle") START QUICK CHAT
            img(src="../../assets/images/v4/mycure-modules-chickpeas.png" :class="{'animate': scrollTop > 2500}").peas
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
    destroyed() {
      this.$removeScrollspy();
    },
    methods: {
      toggle() {
        $crisp.push(['do', 'chat:toggle'])
      }
    }
  }
</script>

<style scoped>
  .panel-5 {
    background-color: white;
  }

  .peas {
    display: none;
  }

  @media (min-width: 576px) {
    .peas {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .peas {
      display: inline;
      width: 300px;
      position: absolute;
      left: -500px;
      top: 20px;
      -webkit-transition: left 500ms; /* Safari */
      transition: left 500ms;
    }

    .peas.animate {
      left: -100px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>

