<template lang="pug">
  v-container.pa-0
    v-row(justify="center")
      generic-panel(:column="$isMobile ? 12 : 10" disable-parent-padding)
        v-row(:justify="{'center': !$isMobile}" :class="!$isMobile ? ['mx-3', 'mt-3'] : ['ml-1', 'mt-1']")
          v-col(cols="1")
            nuxt-link(to="/")
              img(
                src="~/assets/images/MYCURE Logo - black.png"
                width="120px"
                height="34.46px"
                alt="MYCURE logo"
                :class="!$isMobile ? ['mr-1', 'mt-1'] : '' "
              ).ml-n5
          v-spacer(v-if="!$isMobile")
          v-col(v-else cols="7")
          v-col(cols="2")
            v-row(justify="end").pt-5.pl-4
              v-chip(
                color="primary"
                depressed
                rounded
                outlined
                :large="$isWideScreen"
                @click="openPxPortal(pxPortalLogIn)"
              ).text-none.font-weight-thin.font-12.mr-2 Sign up
              v-chip(
                color="primary"
                depressed
                rounded
                :large="$isWideScreen"
                @click="openPxPortal(pxPortalLogIn)"
              ).text-none.font-weight-thin.font-12 Log in
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
  mounted () {
    window.onscroll = () => {
      const nav = document.querySelector('#navbar');
      if (this.scrollY >= 5) {
        nav.classList.remove('bg-white');
        !nav.className.includes('bg-transparent') ? nav.className += ' ' + 'bg-transparent' : nav.className += '';
      } else {
        !nav.className.includes('bg-white') ? nav.className += ' ' + 'bg-white' : nav.className += '';
        nav.classList.remove('bg-transparent');
      }
    };
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
