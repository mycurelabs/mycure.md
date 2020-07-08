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
        template(v-if="!$isMobile")
          //- TODO: add url params?
          //- TODO: could also be refactored along with doctor directory nav buttons
          book-appointment-clinic-btn(content="Book Appointment")
        template(v-else)
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-menu
            v-list(style="width: 250px")
              v-list-item
                //- TODO: add url params?
                //- TODO: could also be refactored along with doctor directory nav buttons
                book-appointment-clinic-btn(
                  content="Book Appointment"
                  :extra-bindings="{ block: true }"
                )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import BookAppointmentClinicBtn from '~/components/commons/book-appointment-clinic-btn';
export default {
  components: {
    GenericContainer,
    BookAppointmentClinicBtn,
  },
};
</script>
