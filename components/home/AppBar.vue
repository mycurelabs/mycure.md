<template lang="pug">
  v-app-bar(
    height="70"
    app
    color="#343A40"
    elevate-on-scroll
  ).nav-bar
    v-container.px-0
      v-col.pa-0
        v-row(:justify="{'center': !$isMobile}").px-0.mx-0
          v-col(cols="1").pl-0
            nuxt-link(to="/")
              img(
                src="~/assets/images/MYCURE Logo - white.png"
                width="120px"
                height="34.46px"
                alt="MYCURE logo"
                :class="!$isMobile ? ['mr-1', 'mt-1'] : '' "
              )
          v-spacer
          v-col(cols="1" :class="!$isMobile ? 'pt-7' : 'pt-6'").pr-0
            v-row(justify="end")
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
  background-color: #343A40;
}
</style>
