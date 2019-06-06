<template lang="pug">
  div
    div(v-if="!$isMobile")
      a(@click="goToProducts()")
        v-layout(row wrap justify-center)
          v-flex(xs12 md4)
            div.panel-2-box.border-color-a
              strong.font-small.text-center Serve more patients
          v-flex(xs12 md4)
            div.panel-2-box.border-color-a
              strong.font-small.text-center Comply to Data Privacy Act
          v-flex(xs12 md4)
            div.panel-2-box.border-color-b
              strong.font-small.text-center Work Offline
    div(v-else)
      a(@click="goToProducts()")
        v-layout(row wrap justify-center)
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box.border-color-a
              strong.font-small.text-center.font-mc-blue Serve more patients
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box.border-color-a
              strong.font-small.text-center.font-mc-blue Comply to Data Privacy Act
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box.border-color-b
              strong.font-small.text-center.font-mc-blue Work Offline
</template>

<script>
  import VueScrollTo from 'vue-scrollto';

  export default {
    methods: {
      goToProducts () {
        VueScrollTo.scrollTo(`#products`, 500, { easing: 'ease' } );
      }
    },   
    data () {
      return {
        //
      };
    } 
  };
</script>


<style scoped>
  a {
    text-decoration: none
  }
  .panel-2-box {
    height: 90px;
    background-color: #f5f5f5;
    border-width: thin;
    border-style: solid;
    text-align: center;
    vertical-align: middle;
    line-height: 90px; 
    color: #2e9fdf;
  }
  .panel-2-box:hover {
    background-color: #2e9fdf;
    color: white;
  }
  .border-color-a {
    border-color: lightgray lightgray lightgray transparent;
  }
  .border-color-b {
    border-color: lightgray transparent lightgray transparent;
  }
</style>
