<template lang="pug">
  v-app-bar(
    height="50"
    app
    color="black"
    dark
    elevate-on-scroll
    :style="navBarStyle"
  )#navbar.border-transparent
    v-container.pa-0
      v-row(justify="center" align="center" no-gutters)
        v-col.mt-2
          nuxt-link(to="/")
            img(
              src="~/assets/images/MYCURE Logo - white.png"
              width="120"
              alt="MYCURE logo"
            )
        v-spacer
        v-btn(
          v-for="(nav, key) in navs"
          :key="key"
          text
          depressed
          large
          :to="{ name: nav.route }"
        ).text-none.mr-2
          b {{ nav.name }}
        v-btn(
          text
          depressed
          large
          :to="{ name: 'pxp' }"
        ).text-none.mr-2 #[b For Patients]
        v-spacer
        v-btn(
          text
          depressed
          large
        ).text-none.mr-2 #[b LOG IN]
        v-btn(
          v-if="!$isMobile"
          color="success"
          large
          shaped
          :to="{name: 'signup-health-facilities'}"
        ).text-none #[b SIGN UP]
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
              ) Get Started Free
</template>

<script>
export default {
  data () {
    this.navs = [
      {
        name: 'Doctors',
        route: 'doctors-clinics',
      },
      {
        name: 'Clinics',
        route: 'doctors-clinics',
      },
      {
        name: 'Diagnostics',
        route: 'enterprise',
      },
      {
        name: 'Hospitals',
        route: 'enterprise',
      },
      {
        name: 'Scheduling',
        route: 'pxp',
      },
    ];
    return {};
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
