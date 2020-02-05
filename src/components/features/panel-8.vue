<template lang="pug">
  div
    div(v-if="!$isMobile")#panel8.pt-5
      v-container
        center
          strong.font-18.font-mc-blue REPORTS AND ANALYTICS
        v-layout(row justify-center).add-spacing
          span.font-48.text-xs-center.font-work-sans Never miss out on important 
            br
            | business decisions. 
        v-layout(row justify-center).add-spacing
          span.font-18.text-xs-center Measure your day-to-day clinic performance analyzing comprehensive 
            br
            | graphs based on your KPIs. Census, billing, diagnostics, sales, and 
            br
            | physical exam reports can be generated instantly.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
        v-layout(row justify-center).add-spacing
          img(src="../../assets/images/mycure-web-features-mockup-06-A.png" alt="Clinic Reports and Analytics" width="95%" height="100%")
    div(v-else)#panel8.pt-5
      v-container
        v-layout(row justify-center)
          strong.font-16.font-mc-blue REPORTS AND ANALYTICS
        br
        br
        v-layout(row justify-center)
          p.font-40.text-xs-center.font-work-sans Never miss out on important business decisions. 
        br
        br
        v-layout(row justify-center)
          p.font-18.text-xs-center Measure your day-to-day clinic performance analyzing comprehensive graphs based on your KPIs. Census, billing, diagnostics, sales, and physical exam reports can be generated instantly.
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
        br
        br
        v-layout(row justify-center)  
          img(src="../../assets/images/mycure-web-features-mockup-06-A.png" alt="Clinic Reports and Analytics" height="200px")

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

  .add-spacing {
    padding-top: 32px;
  }
</style>
