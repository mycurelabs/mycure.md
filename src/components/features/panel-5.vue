<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5.pt-5
      v-container
        center
          strong.font-small.font-mc-blue BILLING AND PAYMENTS
        br
        br
        v-layout(row justify-center)
          span.font-medium Simplified billing, beautiful reports.
        br
        br
        v-layout(row justify-center)
          span.font-small.text-xs-center Produce neatly-organized reports in a minute or less.
        br
        br
        v-layout(row justify-center)
          ul
            li
              v-layout(v-for="(item, index) in items" :key="index" row align-left).pb-3 
                img(src="../../assets/images/mycure-web-bullet-check.png")
                span.font-small.pl-3 {{ item }} 
        br
        br
        br
        br
        br
        v-layout(row justify-center)  
          //- https://ssense.github.io/vue-carousel/
          center
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
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
                img(:src="require(`../../assets/images/mycure-web-features-mockup-03-${feature}.png`)" width="70%")
    div(v-else)#panel5.pt-5
      v-container
        center
          strong.font-s.font-mc-blue BILLING AND PAYMENTS
        br
        br
        v-layout(row justify-center)
          span.font-l Simplified billing, beautiful reports.
        br
        br
        v-layout(row justify-center)
          span.font-m.text-xs-center Produce neatly-organized reports in a minute or less.
        br
        br
        v-layout(row justify-center)
          ul
            li
              v-layout(v-for="(item, index) in items" :key="index" row align-left).pb-3 
                img(src="../../assets/images/mycure-web-bullet-check.png" style="height: 29px;")
                span.font-s.pl-3 {{ item }} 
        br
        br
        v-layout(row justify-center)  
          //- https://ssense.github.io/vue-carousel/
          center
            carousel(
              :per-page="1" 
              :autoplay="false"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
              style="height: 250px"
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
                img(:src="require(`../../assets/images/mycure-web-features-mockup-03-${feature}.png`)" width="70%")
    
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'Payment Management & History',
          'Invoice & Receipt Printing',
          'HMO Statements, Collections, & Reports',
          'Interface with Materials Management'
        ],
        features: ['A','B','C']
      };
    }
  };
</script>

<style scoped>
  #panel5 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  ul {
    list-style-type: none;
  }
</style>
