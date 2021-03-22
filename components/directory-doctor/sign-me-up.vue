<template lang="pug">
  generic-container
    v-row(justify="center" align="center").mb-10
      generic-sign-up-card(
        :btn-href="doctorSignup"
        btn-color="accent"
        image-url="MYCURE-Doctor-Directory-Banner-Sign-Up-Doctor.png"
        image-path="/directory-doctor"
        header-text="Are you a Doctor?"
        content-text="Join the crusade.\nCreate your MYCURE account.\nOnboard now in 5 easy steps"
      ).pl-1
      generic-sign-up-card(
        :is-left="false"
        :btn-href="patientSignup"
        btn-color="amber"
        image-url="MYCURE-Doctor-Directory-Banner-Sign-Up-Patient.png"
        image-path="/directory-doctor"
        header-text="Want to consult online?"
        content-text="Join the family.\nCreate your patient portal now.\nIt's secure and easy to use!"
      ).pr-1
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import GenericSignUpCard from '~/components/commons/generic-sign-up-card';
export default {
  components: {
    GenericContainer,
    GenericSignUpCard,
  },
  props: {
    /**
     * Array of doctor objects
     * @type {Array}
     */
    signUpInfo: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    doctorSignup () {
      if (process.browser) {
        return `${window.location.origin}/signup/health-facilities`;
      }
      return `${process.env.WEB_MAIN_URL}/signup/health-facilities`;
    },
    patientSignup () {
      return process.env.PX_PORTAL_URL;
    },
  },
};
</script>

<style scoped>
.bg-color-doctor {
  background-color: #bbdefb;
  width: 100vw;
}
.bg-color-px {
  background-color: #ffebee;
  width: 100vw;
}
</style>
