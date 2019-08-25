<template lang="pug">
  div
    v-container
      v-layout(row wrap justify-center)
        v-flex(xs5) 
          slot(name="img")
          slot(name="emr-img")
          slot(name="cms-img")
          slot(name="group-img")          
        v-flex(xs7 align-self-center).pl-5
          slot(name="txt")
          slot(name="emr-txt")
          slot(name="cms-txt")
          slot(name="group-txt")
          br
          br
          slot(name="sub-txt")
          slot(name="cms-sub-txt")
          slot(name="group-sub-txt")
          br
          br
          div.pl-1
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