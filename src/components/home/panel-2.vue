<template lang="pug">
  //- Section 2 of Home Page
  div
    v-layout(row wrap justify-center)
      v-flex(xs12 md4)
        div.panel-2-box-a
          b.font-s.text-center.font-mc-grey Serve more patients
      v-flex(xs12 md4)
        div.panel-2-box-b
          b.font-s.text-center.font-mc-grey Easy record-keeping
      v-flex(xs12 md4)
        div.panel-2-box-c
          b.font-s.text-center.font-mc-grey Real-time daily census
</template>

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
