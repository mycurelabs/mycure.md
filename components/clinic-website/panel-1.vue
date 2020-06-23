<template lang="pug">
  v-container.my-10
    v-row(justify="center" align="center")
      v-col(cols="12" md="5" order-sm="2" order-md="1")
        picture-source(
          :customPath="picCustomPath"
          :image="picUrl"
          :imageAlt="picAlt"
          :imageFileExtension="picExtension"
        )
      v-col(cols="12" md="7" order-sm="1" order-md="2")
        h1.font-weight-bold.font-64 {{ clinicCopy }}
        br
        p.font-32 {{ clinicTagline }}
        br
        book-appointment-btn(:outlined="false")
</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
export default {
  components: {
    PictureSource,
    BookAppointmentBtn,
  },
  props: {
    /**
     * String url of image
     * @type {String}
     */
    picUrl: {
      type: String,
      default: null,
    },
    /**
     * String extension of image
     * @type {String}
     */
    picExtension: {
      type: String,
      required: true,
    },
    /**
     * String alt caption
     * @type {String}
     */
    picAlt: {
      type: String,
      default: null,
    },
    /**
     * String custom path for image
     * @type {String}
     */
    picCustomPath: {
      type: String,
      default: '',
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
