<template lang="pug">
  div.my-10
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
    picUrl: {
      type: String,
      default: null,
    },
    picExtension: {
      type: String,
      required: true,
    },
    picAlt: {
      type: String,
      default: null,
    },
    picCustomPath: {
      type: String,
      default: '',
    },
    clinicCopy: {
      type: String,
      default: null,
    },
    clinicTagline: {
      type: String,
      default: null,
    },
  },
};
</script>
