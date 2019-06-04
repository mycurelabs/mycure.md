<template lang="pug">
  div
    div(v-if="!$isMobile")
      a(@click="goToProducts()")
        v-layout(row wrap justify-center)
          v-flex(xs12 md4)
            div.panel-2-box-a
              strong.font-small.text-center.font-mc-blue Serve more patients
          v-flex(xs12 md4)
            div.panel-2-box-b
              strong.font-small.text-center.font-mc-blue Comply to Data Privacy Act
          v-flex(xs12 md4)
            div.panel-2-box-c
              strong.font-small.text-center.font-mc-blue Work Offline
    div(v-else)
      a(@click="goToProducts()")
        v-layout(row wrap justify-center)
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box-a
              strong.font-small.text-center.font-mc-grey Serve more patients
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box-b
              strong.font-small.text-center.font-mc-grey Comply to Data Privacy Act
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box-c
              strong.font-small.text-center.font-mc-grey Work Offline
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

  .panel-2-box-a {
  height: 90px;
  background-color: #f5f5f5;
  border-width: thin;
  border-style: solid;
  border-color: lightgray lightgray lightgray transparent;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;  
  
  }
  .panel-2-box-b {
  height: 90px;
  background-color: #f5f5f5;
  border-width: thin;
  border-style: solid;
  border-color: lightgray lightgray lightgray transparent;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;  
  } 

  .panel-2-box-c {
    height: 90px;
    background-color: #f5f5f5;
    border-width: thin;
    border-style: solid;
    border-color: lightgray transparent lightgray transparent;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;  
  }
</style>
