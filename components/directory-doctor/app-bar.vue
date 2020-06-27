<template lang="pug">
  v-app-bar(flat color="white")
    nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
      img(
        height="45"
        src="../../assets/images/mycure-header-logo.png"
        to="/"
      )
    v-spacer
    template(v-if="!$isMobile")
      h4 Sign up as:
      v-btn(
        width="110"
        color="#8db738"
        elevation="0"
        :href="doctorSignUpUrl"
      ).text-none.letter-spacing-normal.white--text.ml-6.px-8 A Doctor
      v-btn(
        width="110"
        color="#edba42"
        elevation="0"
        :href="patientSignUpUrl"
      ).text-none.letter-spacing-normal.white--text.ml-6.px-8 A Patient
    template(v-else)
      v-menu(bottom left)
        template(v-slot:activator="{ on, attrs }")
          v-btn(icon v-bind="attrs" v-on="on")
            v-icon mdi-dots-vertical
        v-list
          v-list-item
            h5 Sign up as:
          v-list-item
            v-btn(
              width="110"
              color="#8db738"
              elevation="0"
              :href="doctorSignUpUrl"
            ).text-none.letter-spacing-normal.white--text A Doctor
          v-list-item
            v-btn(
              width="110"
              color="#edba42"
              elevation="0"
              :href="patientSignUpUrl"
            ).text-none.letter-spacing-normal.white--text A Patient
</template>

<script>
export default {
  props: {
    doctorSignUpUrl: {
      type: String,
      default: 'https://www.mycure.md/',
    },
    patientSignUpUrl: {
      type: String,
      default: 'https://www.mycure.md',
    },
  },
};
</script>
