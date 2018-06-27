<template lang="pug">
  div.container
    div#print.row.pt-5
      div.col-xs-12.col-md-10.offset-md-1.pb-3
        div
          
    
    div#printClaimStub.row.pt-5
      div.col-xs-12.col-md-4.offset-md-4.pb-3.text-center
        h2 MYCURE MEDICAL CENTER
        h1 CLAIM STUB
        hr(style="margin:0; padding:0;")
        label TIQUEZ, M.S.R
        br
        label 25/M
        br
        label {{new Date().toString()}}
        barcode(width="1" value="Jofferson Ramirez Tiquez")
    
    div.row
      div.col-xs-12.col-md-12
        button(@click="print").btn.btn-primary Print
</template>

<script>
  import VueBarcode from 'vue-barcode';
  export default {
    components: {
      'barcode': VueBarcode
    },
    methods: {
      print() {
        this.$htmlToPaper('print');
      }
    }
  }
</script>

<style scoped>
  #print {
    /* display: none; */
  }
</style>
