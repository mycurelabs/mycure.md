<template lang="pug">
  features(
    title="Add Protection and Flexibility with MYCURE CSI"
    description="Using MYCURE makes your practice Compliant, Secure, and Interoperable."
    :items="items"
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
        route: 'csi',
      },
      {
        title: 'Security',
        route: 'csi',
      },
      {
        title: 'Interoperability',
        route: 'csi',
      },
    ];
    return {};
  },
};
</script>
