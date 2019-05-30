<template lang="pug">
  div
    v-container
      v-layout(row wrap justify-center)
        v-flex(xs6)
          slot(name="home-img")
          slot(name="emr-img")
          slot(name="cms-img")
        v-flex(xs6 align-self-center)
          slot(name="home-txt")
          slot(name="emr-txt")
          slot(name="cms-txt")
          br
          br
          slot(name="emr-sub-txt")
          slot(name="cms-sub-txt")
          br
          br
          slot(name="sign-up-button")
</template>

<script>
  
  export default {
    components: {
      //
    },
    data () {
      return {
        //
      };
    }
  };
</script>

<style scoped>

</style>