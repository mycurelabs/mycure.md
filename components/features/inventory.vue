<template lang="pug">
  div
    client-only
      generic-media-panel(
        cols-left="4"
        cols-right="5"
        offset-cols-right="1"
        web-image-width="103%"
        web-image-class="ml-n2"
        content-align-left
        :header="header"
        :descriptions="descriptions"
        :web-image="mediaImage"
        :custom-image-path="customPath"
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
    this.mediaImage = 'MYCURE-virtual-clinic-healthcare-practice-online-features-H-inventory';
    this.checkListItems = [
      'Product Identification',
      'Inventory levels, orders, and deliveries tracking',
      'Inventory and Sales Reports',
      'Warehouse Inventory Management',
      'Interface with Medical Billing',
    ];
    this.customPath = 'features/';
    return {};
  },
};
</script>
