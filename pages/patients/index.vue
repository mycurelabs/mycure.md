<template lang="pug">
  div
    app-bar
    v-content
      v-container
        v-row(justify="center" align="center")
          v-col(cols="12" md="6")
            h1.primary--text Find the right healthcare services near you
            p The best diagnostic clinics, hospitals, and full service clinics in Metro Manila are within your reach whenever you need them.
            v-btn(
              depressed
              color="primary"
              rounded
              large
              dense
              @click="openPxPortal(pxPortalSignUp)"
            ).text-none #[b Get Started Free]
          v-col(cols="12" md="6")
            v-img(
              :src="require('~/assets/images/patients/usp-patients.png')"
              alt="patients-usp"
            )
</template>

<script>
import AppBar from '~/components/home/AppBar';
export default {
  layout: 'home',
  components: {
    AppBar,
  },
  computed: {
    pxPortalSignUp () {
      return `${process.env.PX_PORTAL_URL}/signup`;
    },
  },
  methods: {
    openPxPortal (location) {
      window.open(location);
    },
  },
};
</script>
