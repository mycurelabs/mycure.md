<template lang="pug">
  generic-media-panel(
    align-left-column="center"
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    custom-image-path="features/"
    file-extension=".webp"
    web-image-width="104%"
    web-image-class="ml-n3"
    mobile-image-width="95%"
    mobile-image-class="text-center"
    :content-align-left="true"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
  )
    //- Check list
    template(slot="additional-content")
      template(v-for="item in checkListItems")
        v-row(align="center" dense)
          v-col(cols="1").pr-2.pt-2
            img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
          v-col(shrink)
            span.font-16.font-gray {{ item }}
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.header = 'Your medical supplies at a glance.';
    this.descriptions = [
      {
        text: 'Deliver the right supplies to the right people at the right time.',
        parseFields: ['people '],
      },
    ];
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-H-inventory';
    this.checkListItems = [
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
