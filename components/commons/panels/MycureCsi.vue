<template lang="pug">
  features(
    title="Add Protection and Flexibility"
    meta-title="MYCURE CSI"
    image-dir="csi/"
    image-width="50%"
    icon-container-col-size="8"
    :items="items"
    hide-learn-more
    extension-exclusive
  )
    template(slot="description")
      p Using MYCURE makes your practice&nbsp;
        br(v-if="!$isMobile")
        | Compliant, Secure, and Interoperable
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
