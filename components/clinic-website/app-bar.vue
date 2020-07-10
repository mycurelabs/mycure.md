<template lang="pug">
  v-app-bar(flat color="white")
    nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
      img(
        height="45"
        src="../../assets/images/mycure-header-logo.png"
        to="/"
      )
    v-spacer
    book-appointment-btn(:outlined="false" btn-color="success")
</template>

<script>
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
export default {
  components: {
    BookAppointmentBtn,
  },
};
</script>
