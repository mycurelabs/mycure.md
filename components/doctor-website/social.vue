<template lang="pug">
  v-container
    v-row(wrap justify="center")
      v-col(cols="12" sm="12").pa-0.text-center
        span Love this doctor? Let your friends know by sharing this website!
      v-col(cols="12" sm="12").pt-0.text-center
        social-sharing(
          :url="doctorLink"
          :title="windowTitle"
          inline-template
        )
          div
            network(network="facebook").social-image
              img(src="../../assets/images/doctor-website/facebook.png").pa-3
            network(network="twitter").social-image
              img(src="../../assets/images/doctor-website/twitter.png").pa-3
            network(network="linkedin").social-image
              img(src="../../assets/images/doctor-website/linkedin.png").pa-3
            network(network="email").social-image
              img(src="../../assets/images/doctor-website/email.png").pa-3
      v-col(cols="12" sm="12" md="5").social-image
        v-card(flat hover).grey.lighten-4
          v-card-text
            media
              template(slot="media-image")
                img(width="100" src="../../assets/images/doctor-website/mycure-doctor-website-icon-book.png")
              template(slot="media-content")
                h2 Don't like waiting?
                div(style="height: 50px")
                  p Save time by booking your next visit with Dr. {{name.firstName}}.
                book-appointment-btn
      v-col(cols="12" sm="12" md="5")
        v-card(flat hover).grey.lighten-4
          v-card-text
            media
              template(slot="media-image")
                img(width="100" src="../../assets/images/doctor-website/mycure-doctor-website-icon-online-consult.png")
              template(slot="media-content")
                h2 Talk with Doc anywhere.
                div(style="height: 50px")
                  p Dr. {{name.firstName}} is now available for online consults.
                online-consult-btn
      v-col(cols="12" sm="12").mb-10.text-center
        span View more doctors and clinics in the #[a(@click="$nuxt.$router.push({ name: 'directory-doctors' })").font-weight-bold MYCURE Directory].
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
