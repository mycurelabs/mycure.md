<template lang="pug">
  //- TODO: mobile responsiveness
  div
    div(v-if="!$isMobile")#panel7.pt-5
      v-container
        center
          strong.font-small.font-mc-blue MATERIALS MANAGEMENT
        br
        br
        v-layout(row justify-center)
          span.font-medium.text-xs-center Your medical supplies at a glance. 
            br
            | where you need them.
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
          img(src="../../assets/images/mycure-web-features-mockup-05-A.png" width="90%" height="100%")
            
    //- div(v-else)
</template>

<script>
  export default {
    data () {
      return {
        items: [
          'Product Identification',
          'Inventory levels, orders, and deliveries tracking',
          'Inventory and Sales Reports',
          'Warehouse Inventory Management',
          'Interface with Medical Billing'
        ]
      };
    }
  };
</script>

<style scoped>
  #panel7 {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }
  
  ul {
    list-style-type: none;
  }
</style>
