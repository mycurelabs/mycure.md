<template lang="pug">
  div
    v-layout(row wrap justify-center)
      v-flex(xs12 md4)
        router-link(:to="{name: 'pricing'}").link.white--text 
          div.panel-2-box-a
            strong.font-s.text-center.font-mc-grey Serve more patients
      v-flex(xs12 md4)
        router-link(:to="{name: 'pricing'}").link.white--text 
          div.panel-2-box-b
            strong.font-s.text-center.font-mc-grey Comply to Data Privacy Law
      v-flex(xs12 md4)
        router-link(:to="{name: 'pricing'}").link.white--text 
          div.panel-2-box-c
            strong.font-s.text-center.font-mc-grey Works Offline
</template>

<script>
  export default {
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
