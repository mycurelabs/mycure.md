<template lang="pug">
  v-app-bar(
    height="50"
    app
    dark
    elevate-on-scroll
  ).nav-bar
    v-container
      v-row(justify="center")
        v-col(cols="12" md="11")
          div.d-flex
            nuxt-link(to="/")
              img(
                src="~/assets/images/MYCURE Logo - white.png"
                width="120px"
                height="34.46px"
                alt="MYCURE logo"
              )
            template(v-if="!$isMobile")
              v-spacer
              v-btn(
                v-if="!$isMobile"
                text
                large
                depressed
                to="/"
              ).text-none.font-12 For Providers
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
              ).text-none.mr-2.font-12 #[span.font-weight-semibold LOG IN]
              v-btn(
                v-if="!$isMobile"
                depressed
                color="success"
                tile
                large
                @click="openPxPortal(pxPortalSignUp)"
              ).text-none.font-12.font-weight-semibold #[span GET STARTED]
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
                  ) Get Started Free
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
