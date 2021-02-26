<template lang="pug">
  div
    app-bar
    v-content
      //- USP
      v-container
        v-row(justify="center" align="center").my-12
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
      services(:fixed-search-bar="false")
</template>

<script>
import AppBar from '~/components/home/AppBar';
import Services from '~/components/services';
export default {
  layout: 'home',
  components: {
    AppBar,
    Services,
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
