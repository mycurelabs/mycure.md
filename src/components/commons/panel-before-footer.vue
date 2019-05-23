<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container
        v-layout(row)
          v-flex(xs12 md6)
            img(width="100%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic.png")
          v-flex(xs12 md6 offset-xs1 align-self-center)
            h2.font-l Because we believe your clinic can stand out and be its best everyday.
            br
            p.font-s.mt-3 Experience what you can do more with
              a(href="https://mycure.md")
                strong &nbsp; MYCURE 
              br  
              | technology by your side.
            v-btn(color="info" large) 
              strong.text-none Contact Sales Today 
    div(v-else)
      v-container.pa-4
        h2.font-l Because we believe your clinic can stand out and be its best everyday.
        br
        p.font-s.mt-3 Experience what you can do more with
          a(href="https://mycure.md")
            strong &nbsp; MYCURE 
            | technology by your side.
        br
        v-layout(row justify-center)    
          v-btn(color="info" large) 
            strong.text-none Contact Sales Today   
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
  a {
    text-decoration: none;
    color: black
  }
</style>
