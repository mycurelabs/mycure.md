<template lang="pug">
  div
    div(v-if="!$isMobile")
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4)
            div.panel-2-box-a
              b.font-small.text-center.font-mc-grey View your charts anywhere
          v-flex(xs12 md4)
              div.panel-2-box-b
                b.font-small.text-center.font-mc-grey Boost your online presence
          v-flex(xs12 md4)
              div.panel-2-box-c
                b.font-small.text-center.font-mc-grey Become DPA-compliant
    div(v-else)
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box-a
              b.font-small.text-center.font-mc-grey View your charts anywhere
          v-flex(xs12 md4)
              div(style="background-color: white;").panel-2-box-b
                b.font-small.text-center.font-mc-grey Boost your online presence
          v-flex(xs12 md4)
              div(style="background-color: white;").panel-2-box-c
                b.font-small.text-center.font-mc-grey Become DPA-compliant
</template>

<script>
  import VueScrollTo from 'vue-scrollto';

  export default {
    methods: {
      goToProduct () {
        VueScrollTo.scrollTo(`#emrproduct`, 500, { easing: 'ease' } );
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
