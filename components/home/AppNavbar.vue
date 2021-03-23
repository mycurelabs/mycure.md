<template lang="pug">
  fragment
    v-app-bar(
      height="50"
      app
      color="black"
      dark
      elevate-on-scroll
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
          template(v-if="!$isMobile")
            v-btn(
              v-for="(nav, key) in navs"
              :key="key"
              text
              depressed
              large
              @click="onNavClick(nav)"
            ).text-none.mr-2.font-12
              b {{ nav.name }}
            //- v-btn(
            //-   text
            //-   depressed
            //-   large
            //-   :to="{ name: 'pxp' }"
            //- ).text-none.mr-2.font-12 #[b For Patients]
            v-spacer
            v-btn(
              text
              depressed
              large
            ).text-none.mr-2.font-12 #[b LOG IN]
            v-btn(
              color="success"
              large
              shaped
              :to="{name: 'signup-health-facilities'}"
            ).text-none.font-12 #[b SIGN UP]
          v-app-bar-nav-icon(v-else @click.stop="drawer = !drawer")

    v-navigation-drawer(
      v-if="$isMobile"
      v-model="drawer"
      fixed
      right
      dark
      color="black"
      width="500"
    )
      v-list(dense nav)
        template(v-for="nav in navs")
          v-list-item(
            dense
            link
            @click="onNavClick(nav)"
          )
            v-list-item-title {{ nav.name }}
      v-divider
      br
      v-btn(
        text
        depressed
        large
      ).text-none.mr-2 #[b LOG IN]
      v-btn(
        color="success"
        large
        shaped
        :to="{name: 'signup-health-facilities'}"
      ).text-none #[b SIGN UP]
        //- v-menu(
        //-   v-else
        //-   bottom
        //-   left
        //-   large
        //- )
        //-   template(v-slot:activator="{ on, attrs }")
        //-     v-btn(icon v-bind="attrs" v-on="on")
        //-       v-icon mdi-menu
        //-   v-list(style="width: 250px")
        //-     v-list-item
        //-       v-btn(
        //-         text
        //-         block
        //-         href="/"
        //-       ) For Providers
        //-     //- v-list-item
        //-       //- v-btn(text block) Support
        //-     v-list-item
        //-       v-btn(
        //-         text
        //-         block
        //-       ) Get Started Free
</template>

<script>
import VueScrollTo from 'vue-scrollto';
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
        route: 'diagnostics',
      },
      {
        name: 'Hospitals',
        route: 'enterprise',
      },
      {
        name: 'Scheduling',
        route: 'pxp',
      },
      {
        name: 'For Patients',
        route: 'patients',
      },
    ];
    return {
      drawer: false,
    };
  },
  methods: {
    onNavClick (nav) {
      if (nav.route === this.$route.name && nav.panel) {
        VueScrollTo.scrollTo(`#${nav.panel}`, 500, {
          easing: 'ease',
          ...nav.panelOffset && { offset: nav.panelOffset },
        });
        return;
      }
      this.$router.push({
        name: nav.route,
        params: {
          ...nav.panel && { panel: nav.panel },
        },
      });
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
.navHeader {
  position: sticky;
  top: 0px;
  z-index: 9999;
  width: 100%;
}
#navbar {
  z-index: 999;
}
</style>
