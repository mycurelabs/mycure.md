<template lang="pug">
  generic-container
    v-row(justify="center" align="center").my-10
      v-col(cols="12" md="5" order-sm="2" order-md="1")
        img(v-lazy="require(`~/assets/images/${this.clinicImage}`)")
      v-col(cols="12" md="7" order-sm="1" order-md="2" :class="{ 'text-center': $isMobile }")
        h1.font-weight-bold.font-50 {{ clinicCopy }}
        p.font-26 {{ clinicTagline }}
        //- TODO: add url params?
        //- TODO: could also be refactored along with doctor directory nav buttons
        book-appointment-clinic-btn(
          content="Book Appointment"
          :extra-bindings="{ color: 'primary' }"
        )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import PictureSource from '~/components/commons/PictureSource';
import BookAppointmentClinicBtn from '~/components/commons/book-appointment-clinic-btn';
export default {
  components: {
    GenericContainer,
    PictureSource,
    BookAppointmentClinicBtn,
  },
  props: {
    content: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    clinicCopy () {
      return this.content?.copy || '';
    },
    clinicTagline () {
      return this.content?.tagline || '';
    },
    clinicImage () {
      return this.content?.imageUrl || 'mycure-homepage-usp-cover-mobile.png';
    },
  },
};
</script>
