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
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
              to="/"
            ).mt-2
        v-spacer
        v-col.col-auto
          template(v-if="!$isMobile")
            span.mr-1 #[b Sign up as:]
            signup-as-a-doctor-btn(
              :extra-classes="['mx-1']"
            )
            signup-as-a-patient-btn(
              :extra-classes="['ml-1']"
            )
          template(v-else)
            v-menu(bottom left)
              template(v-slot:activator="{ on, attrs }")
                v-btn(icon v-bind="attrs" v-on="on")
                  v-icon mdi-menu
              v-list(style="width: 300px")
                v-list-item
                  h5 Sign up as:
                v-list-item
                  signup-as-a-doctor-btn(
                    :extra-bindings="{ block: true }"
                  )
                v-list-item
                  signup-as-a-patient-btn(
                    :extra-bindings="{ block: true }"
                  )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import SignupAsADoctorBtn from '~/components/commons/signup-as-a-doctor-btn';
import SignupAsAPatientBtn from '~/components/commons/signup-as-a-patient-btn';
export default {
  components: {
    GenericContainer,
    SignupAsADoctorBtn,
    SignupAsAPatientBtn,
  },
  props: {
    doctorSignUpUrl: {
      type: String,
      default: 'https://www.mycure.md/signup/health-facilities/',
    },
    patientSignUpUrl: {
      type: String,
      default: `${process.env.PX_PORTAL_URL}`,
    },
  },
};
</script>
