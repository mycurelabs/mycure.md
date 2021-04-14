<template lang="pug">
  generic-media-panel(
    content-align-right
    header="Enjoy the best of both worlds. MYCURE works online and offline"
    cols-left="6"
    cols-right="6"
    :header-classes="headerClasses"
    :description-classes="descriptionClasses"
    :descriptions="['Work as if you have an in-house server with the convenience of the cloud. Create your medical records locally using multiple devices even if the internet is down! Once back online, it instantly syncs your data into the cloud.']"
  )
</template>

<script>
import classBinder from '~/utils/class-binder';
import GenericMediaPanel from '~/components/commons/generic-media-panel';
export default {
  components: {
    GenericMediaPanel,
  },
  computed: {
    headerClasses () {
      const headerClasses = [
        classBinder(this, {
          mobile: ['font-m'],
          regular: ['font-l'],
        }),
        'lh-title',
      ];
      return headerClasses;
    },
    descriptionClasses () {
      const descriptionClasses = [
        classBinder(this, {
          mobile: ['font-xs'],
          regular: ['font-s'],
        }),
        'font-open-sans',
        'font-gray',
      ];
      return descriptionClasses;
    },
  },
};
</script>
