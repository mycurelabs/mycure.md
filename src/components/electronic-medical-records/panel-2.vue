<template lang="pug">
  div
    div(v-if="!$isMobile")
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4 v-for="(tab,index) in tabText" :key="index")
            div(:class="index < 2 ? 'border-color-a' : 'border-color-b'").panel-2-box
              b.font-small.text-center {{ tab }}
    div(v-else)
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4 v-for="(tab,index) in tabText" :key="index")
            div(:class="index < 2 ? 'border-color-a' : 'border-color-b'").panel-2-box
              b.font-small.text-center {{ tab }}
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
        tabText: [
          'View your charts anywhere',
          'Boost your online presence',
          'Secure your medical records'
        ]
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
