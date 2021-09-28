<template lang="pug">
  features(
    title="Add Protection and Flexibility"
    meta-title="MYCURE CSI"
    image-dir="csi/"
    image-width="95.63px"
    image-height="95.63px"
    icon-container-col-size="8"
    :items="items"
    hide-learn-more
  )
    template(slot="description")
      p(:class="descriptionClasses").font-open-sans.font-gray Using MYCURE makes your practice&nbsp;
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
        iconExtension: '.webp',
        route: 'csi',
      },
      {
        title: 'Security',
        icon: 'Security',
        iconExtension: '.webp',
        route: 'csi',
      },
      {
        title: 'Interoperability',
        icon: 'Interoperability',
        iconExtension: '.webp',
        route: 'csi',
      },
    ];
    this.descriptionClasses = ['mc-content-set-1'];
    return {};
  },
};
</script>
