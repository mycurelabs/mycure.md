<template lang="pug">
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
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon")
                span.font-small.pl-3 {{ item }} 
        br
        br
        br
        br
        br
        v-layout(row justify-center)  
          img(src="../../assets/images/mycure-web-features-mockup-05-A.png" alt="Clinic Materials Management" width="90%" height="100%")     
    div(v-else)#panel7.pt-5
      v-container
        center
          strong.font-s.font-mc-blue MATERIALS MANAGEMENT
        br
        br
        v-layout(row justify-center)
          span.font-l Your medical supplies at a glance.
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
                img(src="../../assets/images/mycure-web-bullet-check.png" alt="Check icon" style="height: 29px;")
                span.font-s.pl-3 {{ item }} 
        br
        br
        v-layout(row justify-center)  
          img(src="../../assets/images/mycure-web-features-mockup-05-A.png" alt="Clinic Materials Management" width="90%" height="100%")     
    
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
