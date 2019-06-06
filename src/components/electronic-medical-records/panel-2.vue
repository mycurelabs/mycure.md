<template lang="pug">
  div
    div(v-if="!$isMobile")
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4)
            div.panel-2-box.border-color-a
              b.font-small.text-center View your charts anywhere
          v-flex(xs12 md4)
              div.panel-2-box.border-color-a
                b.font-small.text-center Boost your online presence
          v-flex(xs12 md4)
              div.panel-2-box.border-color-b
                b.font-small.text-center Secure your medical records
    div(v-else)
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4)
            div(style="background-color: white;").panel-2-box.border-color-a
              b.font-small.text-center View your charts anywhere
          v-flex(xs12 md4)
              div(style="background-color: white;").panel-2-box.border-color-a
                b.font-small.text-center Boost your online presence
          v-flex(xs12 md4)
              div(style="background-color: white;").panel-2-box.border-color-b
                b.font-small.text-center Secure your medical records
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
