<template lang="pug">
  v-app-bar(flat color="white")
    nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
      img(
        height="45"
        src="../../assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
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
