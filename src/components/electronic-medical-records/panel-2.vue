<template lang="pug">
  div
    div(v-if="!$isMobile")
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4 v-for="(tab,index) in panel2btns" :key="index")
            div(:class="index < 2 ? 'border-color-a' : 'border-color-b'" :id="tab.id").panel-2-box
              b.font-18.text-center {{ tab.text }}
    div(v-else)
      a(@click="goToProduct()")
        v-layout(row wrap justify-center)     
          v-flex(xs12 md4 v-for="(tab,index) in panel2btns" :key="index")
            div(:class="index < 2 ? 'border-color-a' : 'border-color-b'" :id="tab.id").panel-2-box
              b.font-18.text-center {{ tab.text }}
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
        panel2btns: [
          {
            text: 'View your charts anywhere',
            id: 'emr-panel2-btn1'
          },
          {
            text: 'Boost your online presence',
            id: 'emr-panel2-btn2'
          },
          {
            text: 'Secure your medical records',
            id: 'emr-panel2-btn3'
          }
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
