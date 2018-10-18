<template lang="pug">
  div#prices
    pre(v-if="!$isProduction()").panel-number 2
    div.panel-2.pt-5.pb-5
      b-container(fluid)
        b-row.justify-content-md-center
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 Schedule a Demo
            br
            p 
              strong Get to see what you need in action. 
            br
            p Select your clinic type:
            img(src="../../assets/images/v4/coffee.png" :class="{'animate': scrollTop > 300}").coffee
          b-col(xs="12" md="10")
            b-row(style="background-color: snow").justify-content-md-center.shadow-3.pl-3.pr-3.pt-5.pb-5
              b-col(xs="12" md="4").pt-5.pl-4.pr-4
                div(style="height: 400px;")
                  div.pl-2.pr-2
                  form(method='POST' action='/register')
                      label(for='clinic-type')
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
    }
  }
</script>

<style scoped>

  ul {
    list-style-type: none; 
    padding: 0; 
    margin: 0;
    background-color: #e0e0e0;
    padding: 10px;
  }

  .panel-2 {
    background-image: url('../../assets/images/v4/mycure-homepage-background-wood.png');
    background-repeat: repeat;
  }

  .coffee {
    display: none;
  }

  @media (min-width: 576px) {
    .coffee {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .coffee {
      display: inline;
      width: 250px;
      position: absolute;
      left: -500px;
      top: -40px;
      -webkit-transition: left 500ms; /* Safari */
      transition: left 500ms;
    }

    .coffee.animate {
      left: -50px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>

