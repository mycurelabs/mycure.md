<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12").text-center
        h1 Services Offered
    v-row(justify="center")
      v-col(cols="12" md="10")
        v-row
          v-col(
            v-for="(service, index) in services" :key="index"
            cols="12"
            sm="12"
            md="4"
          ).pa-1
            media(align="left" image-position="left")
              template(slot="media-image")
                img(src="../../assets/images/mycure-check.png")
              template(slot="media-content")
                span {{service}}
</template>

<script>
import Media from '~/components/commons/media';
export default {
  components: {
    Media,
  },
  props: {
    services: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>
