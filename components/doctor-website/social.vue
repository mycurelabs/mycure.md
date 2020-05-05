<template lang="pug">
  v-container
    v-row(wrap justify="center")
      v-col(cols="12" sm="12").text-center
        span Love this doctor? Share it.
          //- social-sharing(v-bind="socialOptions")
            network(network="facebook") facebook
            network(network="twitter") twitter
            network(network="linkedin") linkedin
      v-col(cols="12" sm="12" md="5")
        v-card(flat hover).grey.lighten-3
          v-card-text
            media
              template(slot="media-image")
                h2 Image
              template(slot="media-content")
                h2 Content
      v-col(cols="12" sm="12" md="5")
        v-card(flat hover).grey.lighten-3
          v-card-text
            media
              template(slot="media-image")
                h2 Image
              template(slot="media-content")
                h2 Content
      v-col(cols="12" sm="12").mb-10.text-center
        span Want to view more doctors? #[a Check MYCURE Directory].
</template>

<script>
import Media from '~/components/commons/media';
export default {
  components: {
    Media,
  },
  computed: {
    doctorLink () {
      return window.location.href;
    },
    socialMedias () {
      return [];
    },
    socialOptions () {
      return {
        url: 'http://localhost:3000/doctors/paulette',
        title: 'foo',
        description: 'Ipsum elit ex sint aliquip laborum laborum ipsum amet.',
        quote: 'Aute incididunt ea nisi tempor minim velit magna exercitation irure est ad.',
        hashtags: 'mycure, cms, onlineconsult',
        'inline-template': true,
        'network-tag': 'span',
      };
    },
  },
};
</script>
