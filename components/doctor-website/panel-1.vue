<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12").text-center
        v-avatar(size="150")
          img(:src="picUrl")
      v-col(cols="12" md="10").text-center
        h1 {{fullName}}
        span {{specialtiesMapped}} #[span(v-if="practicingSince") | {{yearsOfExperience}} Years Experience ]
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
    professions: {
      type: Array,
      default: () => ([]),
    },
    practicingSince: {
      type: [Date, Number],
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
  },
  computed: {
    yearsOfExperience () {
      const from = new Date(this.practicingSince).getFullYear();
      const to = new Date().getFullYear();
      return to - from;
    },
    specialtiesMapped () {
      return this.specialties.join(', ');
    },
    professionsMapped () {
      return this.professions.join(', ');
    },
  },
};
</script>
