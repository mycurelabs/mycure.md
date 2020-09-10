<template lang="pug">
  v-app-bar(
    color="white"
    height="70"
    elevate-on-scroll
    fixed
  )
    v-container
      v-row(no-gutters align="center")
        v-col
          nuxt-link(:to="{ name: 'directory-facilities' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
            img(
              height="45"
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
              alt="Mycure"
            )
        v-spacer
        template(v-if="!$isMobile")
          v-btn(
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            large
            depressed
            :href="goToConsult"
          ) Consult Now
          v-avatar.ml-3
            img(:src="picURL" alt="Profile")
        template(v-else)
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-menu
            v-list(style="width: 250px")
              v-list-item
                v-btn(
                  color="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  large
                  depressed
                  block
                  :href="goToConsult"
                ) Consult Now
</template>

<script>
export default {
  props: {
    picURL: {
      type: String,
      default: '',
    },
    consultIDS: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    goToConsult () {
      const docUID = this.consultIDS?.docUID;
      const clinicID = this.consultIDS?.clinicID;
      if (!docUID) {
        return `${process.env.PX_PORTAL_URL}/clinic-appointment/step-1?facility=${clinicID}`;
      }
      return `${process.env.PX_PORTAL_URL}/clinic-appointment/step-1?doctor=${docUID}&facility=${clinicID}`;
    },
  },
};
</script>
