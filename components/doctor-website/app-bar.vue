<template lang="pug">
  v-app-bar(color="white")
    nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
      img(
        height="45"
        src="../../assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
        to="/"
      )
    v-spacer
    //- Hide in mobile view since they overlap with logo,
    //- The same btns exist on the center
</template>

<script>
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
export default {
  components: {
    BookAppointmentBtn,
  },
};
</script>
