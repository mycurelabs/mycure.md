<template lang="pug">
  features(
    title="Add Protection and Flexibility"
    meta-title="MYCURE CSI"
    description="Using MYCURE makes your practice Compliant, Secure, and Interoperable."
    image-dir="csi/"
    image-width="50%"
    icon-container-col-size="8"
    panel-height="70vh"
    :items="items"
    hide-learn-more
    extension-exclusive
  )
</template>

<script>
import Features from './Features';
export default {
  components: {
    Features,
  },
  data () {
    this.items = [
      {
        title: 'Compliance',
        icon: 'Compliance',
        iconExtension: '.png',
        route: 'csi',
      },
      {
        title: 'Security',
        icon: 'Security',
        iconExtension: '.png',
        route: 'csi',
      },
      {
        title: 'Interoperability',
        icon: 'Interoperability',
        iconExtension: '.png',
        route: 'csi',
      },
    ];
    return {};
  },
};
</script>
