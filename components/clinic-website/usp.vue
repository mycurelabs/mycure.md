<template lang="pug">
  generic-container
    v-row(justify="center" align="center").my-10
      v-col(cols="12" md="5" order-sm="2" order-md="1")
        img(v-lazy="require(`~/assets/images/${this.imageUrl}`)")
      v-col(cols="12" md="7" order-sm="1" order-md="2")
        h1.font-weight-bold.font-50 {{ clinicCopy }}
        p.font-32 {{ clinicTagline }}
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
    /**
     * String url of image
     * @type {String}
     */
    imageUrl: {
      type: String,
      default: null,
    },
    /**
     * String text copy of panel 1
     * @type {String}
     */
    clinicCopy: {
      type: String,
      default: null,
    },
    /**
     * String tagline copy of panel 1
     * @type {String}
     */
    clinicTagline: {
      type: String,
      default: null,
    },
  },
};
</script>
