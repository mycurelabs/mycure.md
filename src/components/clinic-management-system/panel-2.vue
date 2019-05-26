<template lang="pug">
  div
    v-layout(row wrap justify-center)
      v-flex(xs12 md4)
        router-link(:to="{name: 'pricing'}").link.white--text 
          div.panel-2-box-a
            b.font-s.text-center.font-mc-grey Organized Patient Records
      v-flex(xs12 md4)
        router-link(:to="{name: 'pricing'}").link.white--text 
          div.panel-2-box-b
            b.font-s.text-center.font-mc-grey Data-driven Decisions
      v-flex(xs12 md4)
        router-link(:to="{name: 'pricing'}").link.white--text 
          div.panel-2-box-c
            b.font-s.text-center.font-mc-grey Happier Staff Members
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
  background-color: white;
  border-width: thin;
  border-style: solid;
  border-color: lightgray lightgray transparent transparent;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;  
  }

  .panel-2-box-b {
  height: 90px;
  background-color: white;
  border-width: thin;
  border-style: solid;
  border-color: lightgray lightgray transparent transparent;
  text-align: center;
  vertical-align: middle;
  line-height: 90px;  
  } 

  .panel-2-box-c {
    height: 90px;
    background-color: white;
    border-width: thin;
    border-style: solid;
    border-color: lightgray transparent transparent transparent;
    text-align: center;
    vertical-align: middle;
    line-height: 90px;  
    }
</style>
