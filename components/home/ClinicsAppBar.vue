<template lang="pug">
  v-container
    v-row(:justify="{'center': !$isMobile}" :class="!$isMobile ? ['mx-8', 'mt-3'] : ['ml-1', 'mt-1']")
      v-col(cols="1")
        nuxt-link(to="/")
          img(
            src="~/assets/images/MYCURE Logo - black.png"
            width="120px"
            height="34.46px"
            alt="MYCURE logo"
            :class="!$isMobile ? ['mr-1', 'mt-1'] : '' "
          )
      v-spacer(v-if="!$isMobile")
      v-col(v-else cols="7")
      v-col(cols="1" :class="{'pt-4': !$isMobile}").pl-0
        v-btn(
          color="primary"
          depressed
          rounded
          :large="$isWideScreen"
          @click="openPxPortal(pxPortalLogIn)"
        ).text-none.mr-2
          v-icon(small) mdi-account-outline
          span.font-weight-thin.font-12 Login
</template>

<script>
export default {
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
