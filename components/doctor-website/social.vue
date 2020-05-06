<template lang="pug">
  v-container
    v-row(wrap justify="center")
      v-col(cols="12" sm="12").text-center
        span Love this doctor? Share their website.
          social-sharing(
            :url="doctorLink"
            :title="windowTitle"
            inline-template
          )
            div
              network(network="facebook").social-image
                img(src="../../assets/images/social/facebook.png").pa-3
              network(network="twitter").social-image
                img(src="../../assets/images/social/twitter.png").pa-3
              network(network="linkedin").social-image
                img(src="../../assets/images/social/linkedin.png").pa-3
              network(network="email").social-image
                img(src="../../assets/images/social/email.png").pa-3
      v-col(cols="12" sm="12" md="5").social-image
        v-card(flat hover).grey.lighten-3
          v-card-text
            media
              template(slot="media-image")
                img(width="150" src="../../assets/images/mycure-homepage-holistic.png")
              template(slot="media-content")
                h2 Don't like waiting?
                div(style="height: 50px")
                  p Book an appointment to Dr. {{name.firstName}} and avoid the long line in the waiting area.
                book-appointment-btn
      v-col(cols="12" sm="12" md="5")
        v-card(flat hover).grey.lighten-3
          v-card-text
            media
              template(slot="media-image")
                img(width="150" src="../../assets/images/mycure-homepage-secure.png")
              template(slot="media-content")
                h2 Talk to Dr. {{name.firstName}}
                div(style="height: 50px")
                  p Dr. {{name.firstName}} is now available for consult online.
                online-consult-btn
      v-col(cols="12" sm="12").mb-10.text-center
        span Want to view more doctors? #[a.font-weight-bold Check MYCURE Directory].
</template>

<script>
import Media from '~/components/commons/media';
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import OnlineConsultBtn from '~/components/commons/online-consult-btn';
export default {
  components: {
    BookAppointmentBtn,
    Media,
    OnlineConsultBtn,
  },
  props: {
    name: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    doctorLink () {
      if (process.client) {
        return window.location.href;
      }
      return '';
    },
    windowTitle () {
      if (process.client) {
        return window.document.title;
      }
      return '';
    },
    // socialOptions () {
    //   return {
    //     url: 'http://localhost:3000/doctors/paulette',
    //     title: 'foo',
    //     description: 'Ipsum elit ex sint aliquip laborum laborum ipsum amet.',
    //     quote: 'Aute incididunt ea nisi tempor minim velit magna exercitation irure est ad.',
    //     hashtags: 'mycure, cms, onlineconsult',
    //     'inline-template': true,
    //     'network-tag': 'span',
    //   };
    // },
  },
};
</script>

<style scoped>
.social-image:hover {
  cursor: pointer !important;
}
</style>
