<template lang="pug">
  div
    div(v-if="!$isMobile")#panel7.pt-5
      v-container
        center
          strong.font-18.font-18c-blue MATERIALS MANAGEMENT
        v-layout(row justify-center).add-spacing
          span.font-48.text-xs-center Your medical supplies at a glance.
        v-layout(row justify-center).add-spacing
          span.font-18.text-xs-center Deliver the right supplies to the right people at the right time.
        v-layout(row justify-center).add-spacing
          ul
            li
              v-layout(v-for="(item, index) in items" :key="index" row align-left).pb-3 
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                span.font-18.pl-3 {{ item }} 
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png" alt="Arrow down icon")
        v-layout(row justify-center).add-spacing 
          img(src="../../assets/images/mycure-web-features-mockup-05-A.png" alt="Clinic Materials Management" width="90%" height="100%")     
    div(v-else)#panel7.pt-5
      v-container
        v-layout(row justify-center)
          strong.font-16.font-18c-blue MATERIALS MANAGEMENT
        br
        br
        v-layout(row justify-center)
          p.font-40.text-xs-center Your medical supplies at a glance
        br
        br
        v-layout(row justify-center)
          p.font-18.text-xs-center Deliver the right supplies to the right people at the right time.
        br
        br
        v-layout(row justify-center)
          ul
            li
              v-layout(v-for="(item, index) in items" :key="index" row align-left).pb-3 
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon" style="height: 29px;")
                span.font-16.pl-3 {{ item }} 
        v-layout(row justify-center).add-spacing
          img(src="@/assets/images/mycure-cms-web-features-arrow-down.png")
        br
        br
        br
        v-layout(row justify-center)  
          img(src="../../assets/images/mycure-web-features-mockup-05-A.png" alt="Clinic Materials Management" height="200px")     
    
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

  .add-spacing {
    padding-top: 32px;
  }
</style>
