<template lang="pug">
  generic-media-panel(
    content-align-left
    cols-left="5"
    cols-right="6"
    offset-cols-right="1"
    custom-image-path="features/"
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    :mobile-image="mobileImage"
    mobile-image-width="90%"
  )
</template>

<script>
// components
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  data () {
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-D-analytics.png';
    this.mobileImage = 'MYCURE-virtual-clinic-healthcare-practice-online-features-D-analytics-mobile.png';
    this.header = 'Never miss out on important business decisions.';
    this.descriptions = [
      'Measure your day-to-day clinic performance analyzing comprehensive graphs based on your KPIs. Census, billing, diagnostics, sales, and physical exam reports can be generated instantly.',
    ];
    return {};
  },
};
</script>
