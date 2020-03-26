<template lang="pug">
  div
    div(v-if="!$isMobile").inventory-container.py-10
      v-container
        v-row(justify="center").text-center
          strong.font-21.primary--text MATERIALS MANAGEMENT
        v-row(justify="center").add-spacing
          strong.font-40.text-center.font-work-sans Your medical supplies at a glance.
        v-row(justify="center").add-spacing
          span.font-21.text-center Deliver the right supplies to the right people at the right time.
        v-row(justify="center").add-spacing
          ul
            li
              v-row(v-for="(item, index) in items" :key="index" align="start").pb-3
                img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon")
                span.font-18.pl-3 {{item}}
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-web-features-mockup-05-A.png" alt="Clinic Materials Management" width="85%" height="100%")
    div(v-else).inventory-container.pt-5
      v-container
        v-row(justify="center")
          strong.font-16.primary--text MATERIALS MANAGEMENT
        br
        br
        v-row(justify="center").mx-2
          p.font-weight-bold.font-30.text-center.font-work-sans Your medical supplies at a glance
        br
        br
        v-row(justify="center").mx-2
          p.font-18.text-center Deliver the right supplies to the right people at the right time.
        br
        br
        v-row(justify="center").mx-1
          ul
            li
              v-row(v-for="(item, index) in items" :key="index" align="start" no-gutters).pb-3
                v-col(cols="2")
                  img(src="~/assets/images/mycure-web-bullet-check.png" alt="Check icon" height="29px")
                v-col(cols="10")
                  span.font-16 {{item}}
        v-row(justify="center").add-spacing
          img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
        br
        br
        br
        v-row(justify="center")
          img(src="~/assets/images/features/mycure-web-features-mockup-05-A.png" alt="Clinic Materials Management" width="95%")
</template>

<script>
export default {
  data () {
    this.items = [
      'Product Identification',
      'Inventory levels, orders, and deliveries tracking',
      'Inventory and Sales Reports',
      'Warehouse Inventory Management',
      'Interface with Medical Billing',
    ];
    return {};
  },
};
</script>

<style scoped>
.inventory-container {
  background-image: url('../../assets/images/features/mycure-web-features-gradient-background.png');
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
