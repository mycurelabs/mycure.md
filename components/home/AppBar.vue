<template lang="pug">
  v-app-bar(
      height="70"
      app
      elevate-on-scroll
    )#navbar.bg-transparent
      v-container(v-if="!$isMobile").pa-0
        v-row(justify="center" align="center" no-gutters)
          v-col
            img(
              src="~/assets/images/home/mycure-logo.png"
              width="140"
              alt="MYCURE logo"
              href="/"
            )
          v-spacer
          v-btn(
            text
            depressed
            to="/"
          ).text-none For Providers
          //- v-btn(
          //-   text
          //-   depressed
          //-   to="/support"
          //- ).text-none Support
          v-btn(
            text
            depressed
            @click="openPxPortal(pxPortalLogIn)"
          ).text-none #[b Login]
          v-btn(
            depressed
            color="success"
            rounded
            @click="openPxPortal(pxPortalSignUp)"
          ).text-none #[b Get Started]
      v-row(v-else align="center" justify="center")
        v-col
          img(src="~/assets/images/home/mycure-logo.png" width="140" alt="MYCURE logo")
        v-spacer
        v-btn(
          text
          @click="openPxPortal(pxPortalLogIn)"
        ) #[b Login]
        v-menu(bottom left large)
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
                  @clicl="openPxPortal(pxPortalSignUp)"
                ) Get Started

</template>

<script>
export default {
  computed: {
    pxPortalSignUp () {
      return `${process.env.PX_PORTAL_URL}/signup`;
    },
    pxPortalLogIn () {
      return `${process.env.PX_PORTAL_URL}`;
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
.bg-transparent {
  background-color: rgb(0 0 0 / 0%) !important;
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
