<template lang="pug">
  div
    div(v-if="!$isMobile")#panel8.pt-5
      v-container
        center
          strong.font-small.font-mc-blue REPORTS AND ANALYTICS
        br
        br
        v-layout(row justify-center)
          span.font-medium.text-xs-center Never miss out on important business decisions. 
        br
        br
        v-layout(row justify-center)
          span.font-small.text-xs-center Measure your day-to-day clinic performance analyzing comprehensive 
            br
            | graphs based on your KPIs. Census, billing, diagnostics, sales, and 
            br
            | physical exam reports can be generated instantly.
        br
        br
        v-layout(row justify-center)  
          img(src="../../assets/images/mycure-web-features-mockup-06-A.png" alt="Clinic Reports and Analytics" width="90%" height="100%")
    div(v-else)#panel8.pt-5
      v-container
        center
          strong.font-s.font-mc-blue REPORTS AND ANALYTICS
        br
        br
        v-layout(row justify-center)
          span.font-l Never miss out on important business decisions. 
        br
        br
        v-layout(row justify-center)
          span.font-m Measure your day-to-day clinic performance analyzing comprehensive graphs based on your KPIs. Census, billing, diagnostics, sales, and physical exam reports can be generated instantly.
        br
        br
        v-layout(row justify-center)  
          img(src="../../assets/images/mycure-web-features-mockup-06-A.png" alt="Clinic Reports and Analytics" width="90%" height="100%")

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
  #panel8 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  
  ul {
    list-style-type: none;
  }
</style>
