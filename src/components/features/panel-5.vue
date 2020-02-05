<template lang="pug">
  div
    div(v-if="!$isMobile")#panel5.pt-5
      v-container
        center
          strong.font-18.font-mc-blue BILLING AND PAYMENTS
        v-layout(row justify-center text-xs-center).add-spacing
          span.font-48.font-work-sans Simplified billing, beautiful reports.
        v-layout(row justify-center).add-spacing
          span.font-18.text-xs-center Produce neatly-organized reports in a minute or less.
        v-layout(row justify-center).add-spacing
          ul
            li
              v-layout(v-for="(item, index) in items" :key="index" row align-left).pb-3 
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                span.font-18.pl-3 {{ item }} 
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
        v-layout(row justify-center).add-spacing
          //- https://ssense.github.io/vue-carousel/
          center
            carousel(
              :per-page="1" 
              :autoplay="true"
              :loop="true"
              paginationActiveColor="white"
              paginationColor="grey"
              navigationNextLabel=" "
              navigationPrevLabel=" "
            )
              slide(v-for="(feature,index) in features" :key="index" :data-index="index+1").pa-1
                img(:src="require(`../../assets/images/mycure-web-features-mockup-03-${feature}.png`)" alt="Clinic Billing and Payments" width="75%")
    div(v-else)#panel5.pt-5
      v-container
        center
          strong.font-16.font-mc-blue BILLING AND PAYMENTS
        br
        br
        v-layout(row justify-center)
          p.font-40.text-xs-center.font-work-sans Simplified billing, beautiful reports.
        br
        br
        v-layout(row justify-center)
          p.font-18.text-xs-center Produce neatly-organized reports in a minute or less.
        br
        br
        v-layout(row justify-center)
          ul
            li
              v-layout(v-for="(item, index) in items" :key="index" row align-left).pb-3 
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon" height="29px")
                span.font-16.pl-3 {{ item }}
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
        br
        br
        v-layout(row justify-center)  
          //- https://ssense.github.io/vue-carousel/
          carousel(
            :per-page="1" 
            autoplay
            loop
            adjustableHeight
            paginationActiveColor="#3498db"
            paginationColor="#808080"
          ).pa-1
            slide(v-for="(feature,index) in features" :key="index" :data-index="index+1")
              v-layout(row justify-center)
                img(:src="require(`../../assets/images/mycure-web-features-mockup-03-${feature}.png`)" alt="Clinic Billing and Payments" height="175px")
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

  .add-spacing {
    padding-top: 32px;
  }
</style>
