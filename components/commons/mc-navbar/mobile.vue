<template lang="pug">
  fragment
    v-app-bar(app fixed flat height="70" color="white" :class="shadow")
      nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines").logo-a
        img(src="~/assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
      v-spacer
      v-btn(icon large @click="drawer = !drawer")
        v-icon.font-35 mdi-menu
    v-navigation-drawer(fixed app v-model="drawer" right width="500").navMain
      div.navHeader
        v-toolbar(:class="shadow").white
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").logo-a
            img(src="~/assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon.font-35 mdi-close
      v-row
        v-col(cols="12")
          v-list(two-line)
            v-list-item(
              v-for="(item, key) in solutionsMenuItems"
              :key="key"
              :to="{ name: item.route }"
              @click.stop="handleToolbarLinkClick(`mobile-${item.route}`)"
            )
              v-list-item-content
                v-list-item-title
                  b {{item.name}}
          v-list(two-line)
            v-list-item(
              v-for="(link, key) in toolbarLinks"
              :key="key"
              :to="{ name: link.route }"
              @click.stop="handleToolbarLinkClick(`mobile-${link.id}`)"
            )
              v-list-item-content
                v-list-item-title
                  b {{link.name}}
          br
          br
          v-divider
        v-col(cols="12")
          v-list(two-line)
            div(v-for="(section, key) in navSectionLinks" :key="key")
              v-subheader {{section.header}}
              v-list-item(
                v-for="(item, key) in section.items"
                :key="key"
                :to="{ name: item.route }"
                @click="handleToolbarLinkClick(`mobile-${item.route}`)"
              )
                v-list-item-content
                  v-list-item-title
                    b {{item.name}}
              v-divider
          v-list(two-line)
            v-subheader {{contactDetails.header}}
            v-list-item(
              v-for="(contact, key) in contactDetails.items"
              :key="key"
            )
              v-list-item-content
                v-list-item-title
                  b {{contact}}
      div.navBottomBtns.py-3
        v-row(justify="center")
          v-btn(
              id="mobile-navdrawer-login-btn"
              :to="{ name: loginURL }"
              @click.stop="handleToolbarLinkClick(`mobile-${loginURL}`)"
            )
              strong.font-14.tab LOGIN
          v-btn(
            id="mobile-navdrawer-get-started-btn"
            color="accent"
            :to="{ name: 'home', params: { scrollToHealthSuites: true }}"
            @click.stop="handleToolbarLinkClick(`mobile-navdrawer-get-started-btn`)"
          ).ml-2
            strong.font-14.white--text.tab GET STARTED
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
          { name: 'Blog', route: 'blog-link' },
          { name: 'Careers', route: 'careers' },
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
    handleToolbarLinkClick (link) {
      this.$emit('toolbarLinkClick', link);
      this.drawer = false;
    },
    handleMycureLogo () {
      this.$emit('logoClick');
    },
  },
};
</script>

<style scoped>
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
</style>
