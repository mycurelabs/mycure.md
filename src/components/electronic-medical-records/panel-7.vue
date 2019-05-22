<template lang="pug">
  div
    v-container
      v-layout(row)
        v-flex(xs12 md6)
          img(width="100%" src="../../assets/images/mycure-web-banner-last-panel-doctor-clinic.png")
        v-flex(xs12 md6 offset-xs1 align-self-center)
          h2.font-l Because we believe your clinic can stand out and be its best everyday.
          br
          p.font-s.mt-3 Experience what you can do more with 
            strong MYCURE 
            br  
            | technology by your side.
          v-btn(color="info" large) 
            strong.text-none Get Started with MYCURE
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

</style>
