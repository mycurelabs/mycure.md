<template lang="pug">
  div
    div(v-if="!$isMobile")#panel9
      div.pt-5#panel9a
        v-container
          center
            strong.font-small.font-mc-blue SYNCBASE TECHNOLOGY
          v-layout(row justify-center).add-spacing
            span.font-medium.text-xs-center Go offline safely and securely.
          v-layout(row justify-center).add-spacing
            span.font-small.text-xs-center The holy grail of online-offline technology is here. Work within your local 
              br
              | network using multiple devices even if the internet goes down and just 
              br
              | sync data when back online.
          v-layout(row justify-center).add-spacing
            img(src="@/assets/images/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
          v-layout(row justify-center).add-spacing
            //- https://ssense.github.io/vue-carousel/
            img(src="../../assets/images/mycure-web-features-mockup-07-A.png" alt="Syncbase Technology" width="50%")
      modules.pt-5
      panel10(style="padding-top: 200px")
    div(v-else)#panel9.showPanel
      div.pt-5
        v-container
          v-layout(row justify-center)
            strong.font-s.font-mc-blue SYNCBASE TECHNOLOGY
          br
          br
          v-layout(row justify-center)
            p.font-l.text-xs-center Go offline safely and securely.
          br
          br
          v-layout(row justify-center)
            p.font-m.text-xs-center The holy grail of online-offline technology is here. Work within your local network using multiple devices even if the internet goes down and just sync data when back online.
          v-layout(row justify-center).add-spacing
            img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
          br
          br
          v-layout(row justify-center)  
            //- https://ssense.github.io/vue-carousel/
            img(src="../../assets/images/mycure-web-features-mockup-07-A.png" alt="Syncbase Technology" style="width: 90%; height: 100%;")
      panel10.showPanel
</template>

<script>
  import panel10 from './panel-10';
  import modules from './modules';
  
  export default {
    components:{
      panel10,
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
  #panel9a {
    background-image: url('../../assets/images/mycure-web-features-gradient-background.png');
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% auto;
  }

  #panel9 {
    background-image: url('../../assets/images/mycure-home-web-sky-background.png');
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  
  ul {
    list-style-type: none;
  }

  .add-spacing {
    padding-top: 32px;
  }
</style>
