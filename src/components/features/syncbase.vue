<template lang="pug">
  div
    div(v-if="!$isMobile")#panel9
      div.pt-5#panel9a
        v-container
          center
            strong.font-21.font-mc-blue SYNCBASE TECHNOLOGY
          v-layout(row justify-center).add-spacing
            strong.font-40.text-xs-center.font-work-sans Go offline safely and securely.
          v-layout(row justify-center).add-spacing
            span.font-21.text-xs-center The holy grail of online-offline technology is here. Work within your local 
              br
              | network using multiple devices even if the internet goes down and just 
              br
              | sync data when back online.
          v-layout(row justify-center).add-spacing
            img(src="@/assets/images/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
          v-layout(row justify-center).add-spacing
            img(src="../../assets/images/mycure-web-features-mockup-07-A.png" alt="Syncbase Technology" width="35%")
      modules.pt-5
    div(v-else)#panel9.showPanel
      div.pt-5
        v-container
          v-layout(row justify-center)
            strong.font-16.font-mc-blue SYNCBASE TECHNOLOGY
          br
          br
          v-layout(row justify-center)
            p.font-weight-bold.font-40.text-xs-center.font-work-sans Go offline safely and securely.
          br
          br
          v-layout(row justify-center)
            p.font-18.text-xs-center The holy grail of online-offline technology is here. Work within your local network using multiple devices even if the internet goes down and just sync data when back online.
          v-layout(row justify-center).add-spacing
            img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
          br
          br
          v-layout(row justify-center)  
            //- https://ssense.github.io/vue-carousel/
            img(src="../../assets/images/mycure-web-features-mockup-07-A.png" alt="Syncbase Technology").syncbasePanel
      modules.showPanel
</template>

<script>
import modules from './modules';

export default {
  components:{
    modules
  },
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
  #panel9 {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  ul {
    list-style-type: none;
  }

  .add-spacing {
    padding-top: 32px;
  }

  .syncbasePanel{
    width: 90%; 
    height: 100%;
  }
</style>
