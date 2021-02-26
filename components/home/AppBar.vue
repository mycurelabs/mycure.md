<template lang="pug">
  v-app-bar(
      height="70"
      app
      color="white"
      elevate-on-scroll
      :style="navBarStyle"
    )#navbar.border-transparent
      v-container.pa-0
        v-row(justify="center" align="center" no-gutters)
          v-col
            img(
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
              width="140"
              alt="MYCURE logo"
              href="/"
            )
          v-spacer
          v-btn(
            v-if="!$isMobile"
            text
            large
            depressed
            to="/"
          ).text-none For Providers
          //- TO DO: Will add once support page is available
          //- v-btn(
          //-   text
          //-   depressed
          //-   to="/support"
          //- ).text-none Support
          v-btn(
            text
            depressed
            large
            @click="openPxPortal(pxPortalLogIn)"
          ).text-none.mr-2 #[b Log In]
          v-btn(
            v-if="!$isMobile"
            depressed
            color="success"
            rounded
            large
            @click="openPxPortal(pxPortalSignUp)"
          ).text-none #[b Get Started]
          v-menu(
            v-else
            bottom
            left
            large
          )
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-menu
            v-list(style="width: 250px")
              v-list-item
                v-btn(
                  text
                  block
                  href="/"
                ) For Providers
              //- v-list-item
                //- v-btn(text block) Support
              v-list-item
                v-btn(
                  text
                  block
                  @click="openPxPortal(pxPortalSignUp)"
                ) Get Started for Free

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
      return `${process.env.PX_PORTAL_URL}/signup`;
    },
    pxPortalLogIn () {
      return `${process.env.PX_PORTAL_URL}`;
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
.border-transparent {
  border-color: rgb(0 0 0 / 0%) !important;
}
.bg-white {
  background-color: white !important;
  border-color: white !important;
}
#navbar {
  z-index: 999;
}
</style>
