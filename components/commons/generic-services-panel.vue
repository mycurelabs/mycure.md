<template lang="pug">
  //- TODO: used on clinic website; can be used on doctor website;
  generic-container.mb-10
    v-row(justify="center")
      v-col(cols="12").text-center
        h1 {{ headerText }}
    v-row(justify="center").px-2
      v-col(cols="12")
        v-row(justify="center")
          template(v-if="services.length === 0")
            div.text-center.pa-5
              h3.grey--text #[i No services to show]
          template(v-else v-for="(service, index) in services")
            v-col(
              cols="12"
              sm="12"
              md="4"
            )
              media(image-position="left")
                template(slot="media-image")
                  img(src="~/assets/images/mycure-web-bullet-check.png" width="25px")
                template(slot="media-content")
                  span {{ service }}
</template>

<script>
import Media from '~/components/commons/media';
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: {
    Media,
    GenericContainer,
  },
  props: {
    headerText: {
      type: String,
      default: '',
    },
    services: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>
