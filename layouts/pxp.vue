<template lang="pug">
  v-app#app.pa-0
    v-row(align="start" :class="$isMobile ? 'clinics-mobile-bg' : 'clinics-bg' ").pa-0.ma-0
      v-col
        v-row(align="start")
          pxp-app-bar(v-if="!loading")
        v-row(justify="center")
          v-col(cols="12" sm="8")
            nuxt
</template>

<script>
import PxpAppBar from '~/components/home/PxpAppBar';
import PxpFooter from '~/components/commons/mc-footer';
export default {
  components: {
    PxpAppBar,
    PxpFooter,
  },
  data () {
    return {
      loading: true,
    };
  },
  mounted () {
    this.loading = false;
  },
};
</script>

<style scoped>
.clinics-bg {
  background-image: url('../assets/images/pxp/Clinic Directory - Desktop.png');
  background-position: bottom center;
  background-size: cover;
}
.clinics-mobile-bg {
  background-image: url('../assets/images/pxp/Clinic Directory - Mobile.png');
  background-position: bottom center;
  background-size: cover;
}
</style>
