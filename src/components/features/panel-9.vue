<template lang="pug">
  //- TODO: mobile responsiveness
  div
    div(v-if="!$isMobile")#panel9
      div.pt-5#panel9a
        v-container
          center
            strong.font-small.font-mc-blue SYNCBASE TECHNOLOGY
          br
          br
          v-layout(row justify-center)
            span.font-medium.text-xs-center Go offline safely and securely.
          br
          br
          v-layout(row justify-center)
            span.font-small.text-xs-center The holy grail of online-offline technology is here. Work within your local 
              br
              | network using multiple devices even if the internet goes down and just 
              br
              | sync data when back online.
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
                slide(v-for="(feature,index) in 6" :key="index" :data-index="feature")
                  img(:src="require(`../../assets/images/mycure-web-features-mockup-0${feature}-A.png`)" width="70%")
      panel10(style="padding-top: 200px")
    //- div(v-else)
</template>

<script>
  import panel10 from './panel-10'

  export default {
    components:{
      panel10
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
</style>
