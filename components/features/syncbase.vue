<template lang="pug">
  div
    div(v-if="!$isMobile").syncbase-container.py-10
      div.pt-5
        v-container
          v-row(justify="center").text-center
            strong.font-21.primary--text SYNCBASE TECHNOLOGY
          v-row(justify="center").add-spacing
            strong.font-40.text-center.font-work-sans Go offline safely and securely
          v-row(justify="center").add-spacing
            span.font-21.text-center The holy grail of online-offline technology is here. Work within your local
              br
              | network using multiple devices even if the internet goes down and just
              br
              | sync data when back online.
          v-row(justify="center").add-spacing
            p.font-21 This feature is available for multispecialty and enterprise clinic setup.
          v-row(justify="center").add-spacing
            img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png" alt="Arrow down")
          v-row(justify="center").add-spacing
            img(src="~/assets/images/features/mycure-web-features-mockup-07-A.png" alt="Syncbase Technology" width="35%")
      modules.pt-10
    div(v-else).syncbase-container
      div.pt-5
        v-container
          v-row(justify="center")
            strong.font-16.primary--text SYNCBASE TECHNOLOGY
          br
          br
          v-row(justify="center")
            p.font-weight-bold.font-30.text-center.font-work-sans Go offline safely
              br
              | and securely.
          br
          br
          v-row(justify="center").mx-2
            p.font-18.text-center The holy grail of online-offline technology is here. Work within your local network using multiple devices even if the internet goes down and just sync data when back online.
          v-row(justify="center").add-spacing.mx-2
            p.font-18.text-center This feature is available for multispecialty and enterprise clinic setup.
          v-row(justify="center").add-spacing
            img(src="~/assets/images/features/mycure-cms-web-features-arrow-down.png")
          br
          br
          v-row(justify="center")
            img(src="~/assets/images/features/mycure-web-features-mockup-07-A.png" alt="Syncbase Technology").syncbasePanel
      modules
</template>

<script>
import Modules from './modules';

export default {
  components: {
    Modules,
  },
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
.syncbase-container {
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
