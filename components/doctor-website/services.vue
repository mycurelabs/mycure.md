<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        h2.primary--text Services Offered
    v-row
      v-col(cols="12" md="8")
        div(v-if="services.length === 0")
          h3.grey--text #[i No services to show]
        template(v-else)
          v-row(
            v-for="(service, index) in services"
            :key="index"
          )
            v-col(
              cols="12"
              sm="12"
              md="4"
            ).py-0
              media(image-position="left")
                template(slot="media-image")
                  img(src="../../assets/images/mycure-check.png" width="25px")
                template(slot="media-content")
                  span {{ service }}
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
