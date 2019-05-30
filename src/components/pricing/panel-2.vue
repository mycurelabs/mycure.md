<template lang="pug">
  div(style="height: auto").mc-blue
    v-container 
      v-flex(xs12 md12).py-5
        center 
          strong(v-if="!$isMobile").font-large.text-xs-center.white--text Need to work offline?
          strong(v-else style="font-size: 200%").text-xs-center.white--text Need to work offline?
          br
          font.font-small.white--text Get MYCURE for only 
            strong &#36; 0.63 
            | a day.
          br
          br
          br
          v-btn(color="success" large) 
            strong SUBSCRIBE TO SYNCBASE
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

