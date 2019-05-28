<template lang="pug">
  div
    div(v-if="!$isMobile")
      v-container
        v-layout(row wrap align-center)
          v-flex(xs6)
            img(width="100%" src="../../assets/images/mycure-web-banner-last-panel-home-doctors.png")
          v-flex(xs6 align-self-center).pl-5
            span.font-l Join thousands of
              br
              | other health
              br
              | professionals who
              br
              | enjoy the benefits of
              br
              | using technology in
              br
              | their practice.
            br
            br
            br
            v-btn(color="info" large) 
              strong.font-m.text-none Sign Up Now
    div(v-else)
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

