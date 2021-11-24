<template lang="pug">
  generic-blue-bg.white--text
    v-container.py-16
      v-row(justify="center")
        generic-panel
          v-col(cols="12")
            v-row(align="center").d-flex.justify-space-between
              v-col(cols="12" sm="5")
                h2.mc-h2.mb-4.white--text Protect Your Clinic Thanks to MYCURE CSI
                p.mc-b2.white--text As a healthcare provider, your patients trust you with their private electronic health records. We know how important it is to protect that information. This is why MYCURE Doctors is backed by our CSI guarantee:
              v-col(cols="12" sm="2" v-for="(item, key) in items" :key="key").text-center
                picture-source(
                  v-if="item.icon"
                  :extension-exclusive="false"
                  custom-path="csi/"
                  :image="item.icon"
                  :image-alt="item.alt || item.title"
                  image-file-extension=".png"
                  image-width="95.63px"
                  image-height="95.63px"
                )
                br
                h3.mc-h4.white--text {{ item.title }}
</template>

<script>
import GenericBlueBg from '~/components/generic/GenericBlueBg.vue';
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
    GenericBlueBg,
  },
  props: {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
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
};
</script>
