<template lang="pug">
  div(v-if="!loading")
    v-app-bar(
      height="50"
      app
      dark
      elevate-on-scroll
      style="padding-top: 1px;"
    ).nav-bar
      v-container.pa-0
        v-row(justify="center")
          generic-panel(:column="$isMobile ? 12 : $vuetify. breakpoint.width < 1200 ? '11' : '10'" disable-parent-padding)
            v-col.d-flex
              nuxt-link(to="/")
                img(
                  src="~/assets/images/mycure-logo-white.png"
                  alt="MYCURE logo"
                  width="120px"
                  height="34.46px"
                ).mt-1.mr-4
              template(v-if="!$isMobile")
                template(v-for="(nav, key) in navs")
                  v-menu(v-if="nav.isMenu" offset-y)
                    template(v-slot:activator="{ on }")
                      v-btn(
                        v-on="on"
                        text
                        depressed
                        tile
                        large
                      ).text-none.font-12.font-weight-medium
                        | {{ nav.name }}
                        v-icon(small right) {{ mdiChevronDown }}
                    v-list
                      v-list-item(
                        v-for="(item, key) in nav.menuItems"
                        :key="key"
                        :to="{ name: item.route }"
                        v-if="isNavVisible(item)"
                        exact-path
                      )
                        v-list-item-title {{ item.name }}
                  v-btn(
                    v-else
                    text
                    depressed
                    tile
                    large
                    :key="key"
                    :to="{ name: nav.route }"
                  ).text-none.font-12
                    span.font-weight-medium {{ nav.name }}
                //- v-btn(
                //-   text
                //-   depressed
                //-   large
                //-   :to="{ name: 'pxp' }"
                //- ).text-none.mr-2.font-12 #[b For Patients]
                v-spacer
                mc-btn(
                  event-label="login"
                  text
                  depressed
                  large
                  tile
                  :to="{ name: 'signin' }"
                ).text-none.font-12 #[span.font-weight-medium LOG IN]
                signup-button(
                  color="success"
                  large
                  tile
                ).text-none.font-12.font-weight-medium SIGN UP
              template(v-else)
                v-spacer
                v-icon(@click.stop="drawer = !drawer") {{ mdiMenu }}

    v-navigation-drawer(
      v-if="$isMobile"
      v-model="drawer"
      fixed
      right
      dark
      color="black"
      width="500"
    )
      v-toolbar(flat color="black")
        img(
          src="~/assets/images/mycure-logo-white.png"
          width="120"
          height="34.46px"
          alt="MYCURE logo"
        )
        v-spacer
        v-btn(icon @click="drawer = false")
          v-icon {{ mdiClose }}
      v-list(dense nav)
        template(v-for="nav in navs")
          v-list-group(v-if="nav.isMenu" dark).elevation-0
            template(v-slot:activator)
              v-list-item-title(dark) {{ nav.name }}
            v-list
              v-list-item(
                v-for="(item, key) in nav.menuItems"
                :key="key"
                dense
                link
                exact-path
                :to="{ name: item.route }"
              )
                v-list-item-title(dark) {{ item.name }}
          v-list-item(
            v-else
            dense
            link
            :to="{ name: nav.route }"
          )
            v-list-item-title {{ nav.name }}
      v-divider
      br
      v-btn(
        text
        depressed
        large
        :to="{ name: 'signin' }"
      ).text-none.mr-2 #[span.font-weight-medium LOG IN]
      v-btn(
        color="success"
        large
        shaped
        :to="{name: 'signup-health-facilities'}"
      ).text-none #[span.font-weight-medium SIGN UP]
</template>

<script>
import { mdiChevronDown, mdiClose, mdiMenu } from '@mdi/js';
import GenericPanel from '~/components/generic/GenericPanel';
import SignupButton from '~/components/commons/SignupButton';
import inPh from '~/utils/in-ph';
export default {
  components: {
    GenericPanel,
    SignupButton,
  },
  data () {
    this.navs = [
      {
        name: 'Doctors',
        route: 'doctors-clinics',
      },
      {
        name: 'Clinics',
        isMenu: true,
        menuItems: [
          { name: 'Outpatient Clinics', route: 'clinics' },
          { name: 'Skin Clinics', route: 'clinics-skin' },
          { name: 'Dental Clinics', route: 'clinics-dental' },
          { name: 'Corporate Clinics', route: 'clinics-corporate' },
        ],
      },
      {
        name: 'Diagnostics',
        isMenu: true,
        menuItems: [
          { name: 'Diagnostic Centers', route: 'diagnostics' },
          { name: 'OFW Clinics', route: 'diagnostics-ofw' },
          { name: 'Mobile Labs', route: 'diagnostics-mobile-labs' },
        ],
      },
      // TODO: re-enable
      // {
      //   name: 'Hospitals',
      //   route: 'hospitals',
      // },
      {
        name: 'Telehealth',
        route: 'telehealth',
      },
      {
        name: 'Booking',
        route: 'booking',
      },
      // TODO: re-enable
      // {
      //   name: 'For Patients',
      //   route: 'patients',
      // },
    ];
    return {
      drawer: false,
      inPh: false,
      loading: false,
      // Icons.
      mdiChevronDown,
      mdiClose,
      mdiMenu,
    };
  },
  async created () {
    // fetch packages
    this.inPh = await inPh();
    this.loading = false;
  },
  methods: {
    onNavClick (nav) {
      if (!nav.route) return;
      this.$router.push({
        name: nav.route,
        params: {
          ...nav.panel && { panel: nav.panel },
        },
      });
    },
    isNavVisible (nav) {
      if (nav.route !== 'diagnostics-ofw') return true;
      return this.inPh;
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: rgba(0,0,0,0.8);
}
</style>
