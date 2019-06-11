<template lang="pug">
  //- TODO: mobile responsiveness
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
        br
        br
        br
        v-layout(row justify-center)  
          //- https://ssense.github.io/vue-carousel/
          //- center
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
              style="height: 550px"
            )
              slide(v-for="(feature,index) in 6" :key="index" :data-index="feature")
                img(:src="require(`../../assets/images/mycure-web-features-mockup-0${feature}-A.png`)" width="70%")
          img(src="../../assets/images/mycure-web-features-mockup-sample.png" width="90%" height="100%")
    //- div(v-else)
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
