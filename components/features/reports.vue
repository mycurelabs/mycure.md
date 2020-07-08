<template lang="pug">
  generic-media-panel(
    cols-left="4"
    cols-right="5"
    offset-cols-right="1"
    custom-image-path="features/"
    web-image-class="ml-n3"
    web-image-width="104%"
    mobile-image-width="90%"
    mobile-file-extension=".png"
    content-align-left
    :header="header"
    :descriptions="descriptions"
    :web-image="image"
    :mobile-image="mobileImage"
    :extension-exclusive="$isMobile"
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
    // this.image = 'webp/MYCURE-virtual-clinic-healthcare-practice-online-features-D-analytics.webp';
    this.image = 'MYCURE-virtual-clinic-healthcare-practice-online-features-D-analytics';
    this.mobileImage = 'MYCURE-virtual-clinic-healthcare-practice-online-features-D-analytics-mobile';
    this.header = 'Never miss out on important business decisions.';
    this.descriptions = [
      'Measure your day-to-day clinic performance analyzing comprehensive graphs based on your KPIs. Census, billing, diagnostics, sales, and physical exam reports can be generated instantly.',
    ];
    return {};
  },
};
</script>
