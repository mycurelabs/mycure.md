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
            alt="Clinic Logo"
          )
        v-col.pl-2
          h3 {{ clinicName }}
          span Telemedicine
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
