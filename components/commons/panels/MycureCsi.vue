<template lang="pug">
  features(
    title="Add Protection and Flexibility"
    meta-title="MYCURE CSI"
    image-dir="csi/"
    image-width="50%"
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
import classBinder from '~/utils/class-binder';
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
    return {};
  },
  computed: {
    descriptionClasses () {
      return [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
          wide: ['font-m'],
        }),
      ];
    },
  },
};
</script>
