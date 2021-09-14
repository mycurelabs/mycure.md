<template lang="pug">
  v-container.pa-0
    v-row(justify="center")
      generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
        v-row(:justify="{'center': !$isMobile}" :class="!$isMobile ? ['mx-3', 'mt-3'] : ['ml-1', 'mt-1']")
          v-col(cols="1")
          v-spacer(v-if="!$isMobile")
          v-col(cols="5" align="end")
            v-row(justify="end").pt-5.pl-4
              v-btn(
                color="primary"
                :width="$isWideScreen ? '120' : '110' "
                :height="$isWideScreen ? '40' : '35' "
                depressed
                text
                :large="$isWideScreen"
                @click="openPxPortal(pxPortalLogIn)"
              ).text-none.font-weight-semibold.mr-2.font-16 Sign up
              v-btn(
                color="primary"
                :width="$isWideScreen ? '120' : '110' "
                :height="$isWideScreen ? '40' : '35' "
                depressed
                rounded
                :large="$isWideScreen"
                @click="openPxPortal(pxPortalLogIn)"
              ).text-none.font-weight-thin.font-16 Log in
</template>

<script>
export default {
  components: {
    GenericPanel: () => import('~/components/generic/GenericPanel.vue'),
  },
  props: {
    isServices: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    pxPortalSignUp () {
      return `${process.env.PX_PORTAL_URL}`;
    },
    pxPortalLogIn () {
      return `${process.env.WEB_MAIN_URL}/signin/?target=${process.env.PX_PORTAL_URL}/dashboard/home`;
    },
    navBarStyle () {
      return 'background-color: ' + this.isServices ? '#FFFFFF !important' : 'background-color: rgb(0 0 0 / 0%) !important';
    },
  },
  methods: {
    openPxPortal (location) {
      window.open(location);
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgba(0,0,0,0.8);
}
</style>
