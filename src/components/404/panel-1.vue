<template lang="pug">
  div.white
    v-container(fluid fill-height align-start).panel1
      v-layout(row align-center)
        v-flex
          v-layout(row justify-center)  
            img(v-if="!$isMobile" width="auto" src="../../assets/images/mycure-error-404-image.png" alt="Error 404")
            img(v-else width="100%" src="../../assets/images/mycure-error-404-image.png" alt="Error 404")
          br
          v-layout(column justify-center).text-xs-center
            strong.pb-2.font-18 Oh snap!
            p.pb-2.font-16 The page you’re looking for can’t be found.
            router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines") 
              p.font-16 Back to Home >
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
  .panel1 {
    height: 90vh; 
    padding-top: 70px;
  }
</style>
