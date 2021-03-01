<template lang="pug">
  fragment
    v-app-bar(app height="60" color="white" :class="shadow" hide-on-scroll)
      nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines").logo-a
        img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" width="130" alt="MYCURE logo" @click="scrollToTop").mt-1
      v-spacer
      //- v-btn(
      //-   text
      //-   :to="{ name: loginURL }"
      //-   id="login-btn"
      //-   @click.stop="onActionBtnClick('login-btn')"
      //- ).mr-2.ml-1
      //-   span.font-14.tab.text-none.font-weight-bold.header-gray &nbsp;LOGIN
      v-btn(icon large @click="drawer = !drawer")
        v-icon.font-35 mdi-menu
      //- Banner
      //- template(v-slot:extension)
      //-   div.banner
      //-     v-row(justify="center").text-center.white--text
      //-       v-col(cols="12")
      //-         | The world needs independent businesses. Learn about the actions we're taking to address the&nbsp;
      //-         u.font-weight-bold impact of COVID-19
    v-navigation-drawer(fixed v-model="drawer" right width="500").navMain
      div.navHeader
        v-toolbar(:class="shadow").white
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").logo-a
            img(src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg" width="130" alt="MYCURE logo").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon.font-35 mdi-close
      v-row
        v-col(cols="12")
          v-list
            template(v-for="(item, key) in solutionsMenuItems")
              v-list-item(
                v-if="!item.subMenus && !item.invisible"
                link
                dense
                @click="onNavLinkClick(item)"
              )
                v-list-item-title.font-16.mobile-nav-list-item {{ item.name }}
                span(v-if="item.new").ml-2.px-1.white--text.red.font-weight-bold.font-14.pill NEW
              v-list-group(v-if="item.subMenus && !item.invisible")
                template(v-slot:activator)
                  v-list-item-title {{ item.name }}
                template(v-for="(subMenu, key) in item.subMenus")
                  v-list-item(
                    link
                    dense
                    @click="onNavLinkClick(subMenu)"
                  ).pl-10
                    span {{ subMenu.name }}
          v-divider
        v-col(cols="12")
            div(v-for="(section, key) in navSectionLinks" :key="key")
              v-subheader {{section.header}}
              v-list-item(
                v-for="(item, key) in section.items"
                :key="key"
                @click="handleSectionLinkClick(item)"
              )
                v-list-item-content
                  v-list-item-title
                    b {{ item.name }}
              v-divider
        v-col(cols="12")
          v-subheader {{contactDetails.header}}
          v-list-item(
            v-for="(contact, key) in contactDetails.items"
            :key="key"
          )
            v-list-item-content
              v-list-item-title
                b {{ contact }}
      div.navBottomBtns.py-3
        v-row(justify="center")
          v-btn(
            id="mobile-navdrawer-login-btn"
            @click.stop="handleUserLinkClick(`login-btn`)"
          )
            strong.font-14.tab Log In
          v-btn(
            id="mobile-navdrawer-get-started-btn"
            color="accent"
            @click.stop="handleUserLinkClick(`get-started-btn`)"
          ).ml-2
            strong.font-14.white--text.tab Get started for free
</template>

<script>
export default {
  props: {
    toolbarLinks: {
      type: Array,
      default: () => [],
    },
    solutionsMenuItems: {
      type: Array,
      default: () => [],
    },
    shadow: {
      type: String,
      default: () => '',
    },
    loginURL: {
      type: String,
      default: () => 'signin',
    },
  },
  data () {
    this.navSectionLinks = [
      {
        header: 'About',
        items: [
          { name: 'Our Story', route: 'our-story' },
          { name: 'Blog', external: 'http://blog.mycure.md/' },
          { name: 'Careers', external: 'https://culture.mycure.md/' },
        ],
      },
      {
        header: 'Legal',
        items: [
          { name: 'Terms', route: 'terms' },
          { name: 'Privacy Policy', route: 'privacy-policy' },
        ],
      },
    ];
    this.contactDetails = {
      header: 'Contact',
      items: [
        'hello@mycure.md',
        '(+632) 7799 6262',
        '(+63) 917 303 4350',
      ],
    };
    return {
      drawer: false,
    };
  },
  methods: {
    handleSectionLinkClick (link) {
      if (link?.external) {
        window.open(link.external);
      } else {
        const id = `mobile-${link.route}`;
        this.$emit('actionBtnClick', id);
        this.$nuxt.$router.push({ name: link.route });
      }
      this.drawer = false;
    },
    handleMycureLogo () {
      this.$emit('logoClick');
    },
    handleUserLinkClick (id) {
      this.$emit('actionBtnClick', id);
      this.drawer = false;
    },
    onNavLinkClick (navLink) {
      this.$emit('navLinkClick', navLink);
      this.drawer = false;
    },
    scrollToTop () {
      if (this.$nuxt.$route.name === 'index') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
  },
};
</script>

<style scoped>
.pill {
  border-radius: 10px;
}
a {
  text-decoration: none
}
.tab {
  letter-spacing: 0.5px;
}
.navMain {
  z-index: 999 !important
}
.toolbar-container {
  width: 100%
}
.navBottomBtns {
  position: sticky;
  bottom: 0px;
  z-index: 999;
  border-top: 1px solid lightgrey;
  background-color: white
}
.navHeader {
  position: sticky;
  top: 0px;
  z-index: 9999;
  width: 100%;
}
.banner {
  background-color:#11346b;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.mobile-nav-list-item {
  line-height: 2rem !important;
}
</style>
