<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12").text-center
        v-avatar(size="150")
          img(:src="picUrl")
      v-col(cols="12").text-center
        h1 Dr. {{fullName}}
        span Pediatrician | 25 Years Expecience
      v-col(cols="12" md="10").text-center
        p {{bio}}
    v-row(justify="center")
      v-col(class="shrink").pa-1.text-center
        book-appointment-btn
      v-col(class="shrink").pa-1.text-center
        online-consult-btn
</template>

<script>
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
import OnlineConsultBtn from '~/components/commons/online-consult-btn';
export default {
  components: {
    BookAppointmentBtn,
    OnlineConsultBtn,
  },
  props: {
    picUrl: {
      type: String,
      default: null,
    },
    fullName: {
      type: String,
      default: null,
    },
    specialties: {
      type: Array,
      default: () => ([]),
    },
    practicingSince: {
      type: Date,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
  },
};
</script>
