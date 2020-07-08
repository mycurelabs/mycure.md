<template lang="pug">
  v-app-bar(
    color="white"
    elevate-on-scroll
    fixed
  )
    generic-container
      v-row(no-gutters align="center")
        v-col.col-auto
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
            img(
              height="45"
              src="~/assets/images/mycure-header-logo.png"
              to="/"
            )
        v-spacer
        v-col.col-auto
          book-appointment-btn(:outlined="false" btn-color="success")
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import BookAppointmentBtn from '~/components/commons/book-appointment-btn';
export default {
  components: {
    GenericContainer,
    BookAppointmentBtn,
  },
};
</script>
