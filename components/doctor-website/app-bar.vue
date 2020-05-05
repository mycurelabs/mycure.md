<template lang="pug">
  v-app-bar(flat color="white")
    img(
      height="45"
      src="../../assets/images/mycure-header-logo.png"
      to="/"
    )
    v-spacer
    book-appointment-btn.mr-2
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
};
</script>
