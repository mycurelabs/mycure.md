<template lang="pug">
  v-app-bar(
    color="white"
    height="70"
    elevate-on-scroll
    fixed
  )
    v-container
      v-row(no-gutters align="center")
        v-avatar
          img(
            :src="picURL"
            height="60"
            alt="Profile"
          )
        v-col.pl-2
          h3 {{ clinicName }}
          span Telemedicine
        v-spacer
        template(v-if="!$isMobile")
          nuxt-link(:to="{ name: 'directory-facilities' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines").powered-by-link
            small.powered-by-txt Powered by:
            br
            img(
              height="30"
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
              alt="Mycure"
            )
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
    clinicName: {
      type: String,
      default: '',
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

<style scoped>
.powered-by-link {
  text-align: right;
  text-decoration: none;
}

.powered-by-txt {
  font-size: 0.7em;
  font-weight: bold;
  color: black;
}
</style>
