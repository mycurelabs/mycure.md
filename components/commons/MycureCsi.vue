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
      },
      {
        title: 'Security',
      },
      {
        title: 'Interoperability',
      },
    ];
    return {};
  },
};
</script>
