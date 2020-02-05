<template lang="pug">
  div
    v-container
        v-toolbar(flat fixed :class="shadow").white
          router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines").logo-a
            img(src="../../../assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon.font-35 menu
    v-navigation-drawer(fixed app v-model="drawer" right width="500").navMain   
      div.navHeader
        v-toolbar(flat :class="shadow").white
          router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").logo-a
            img(src="../../../assets/images/mycure-header-logo.png" width="130" alt="MYCURE logo").mt-1
          v-spacer
          v-btn(icon large @click="drawer = !drawer")
            v-icon.font-35 close 
      v-content
        v-layout(row wrap)
          v-flex(xs12 md12)
            v-list(two-line)
              v-list-tile(
                v-for="(item, key) in solutionsMenuItems" 
                :key="key"
                :to="{ name: item.route }"
                @click.stop="handleToolbarLinkClick(`mobile-${item.route}`)"
              )
                v-list-tile-content
                  v-list-tile-title 
                    b {{ item.name }}
            v-list(two-line)
              v-list-tile(
                v-for="(link, key) in toolbarLinks"
                :key="key"
                :to="{ name: link.route }"
                @click.stop="handleToolbarLinkClick(`mobile-${link.id}`)"
              )
                v-list-tile-content
                  v-list-tile-title
                    b {{ link.name }}
            br
            br    
            v-divider
          v-flex(xs12 md12 dark)
            v-list(two-line) 
              div(v-for="(section, key) in navSectionLinks" :key="key")
                v-subheader {{ section.header }}
                v-list-tile(
                  v-for="(item, key) in section.items"
                  :key="key"
                  :to="{ name: item.route }"
                  @click="handleToolbarLinkClick(`mobile-${item.route}`)"
                )
                  v-list-tile-content
                    v-list-tile-title 
                      b {{ item.name }}
                v-divider
            v-list(two-line)
              v-subheader {{ contactDetails.header }}
              v-list-tile(
                v-for="(contact, key) in contactDetails.items"
                :key="key"
              )
                v-list-tile-content
                  v-list-tile-title
                    b {{ contact }}
      div.navBottomBtns.py-3
        v-layout(row justify-center)
          v-btn(
              id="navdrawer-login-btn"
              :to="{ name: loginURL }"
              @click.stop="handleToolbarLinkClick(`mobile-${loginURL}`)"
            )
              strong.font-14.tab LOGIN
          v-btn(
            id="navdrawer-signup-btn"
            :color="$mcColors.mcAltGreen"
            :to="{ name: signUpURL }"
            @click.stop="handleToolbarLinkClick(`mobile-${signUpURL}`)"
          )
            strong.font-14.white--text.tab SIGN UP
</template>

<script>
export default {
  props: {
    toolbarLinks: {
      type: Array,
      default: () => []
    },
    solutionsMenuItems: {
      type: Array,
      default: () => []
    },
    shadow: {
      type: String,
      default: () => ''
    },
    loginURL: {
      type: String,
      default: () => 'signin'
    },
    signUpURL: {
      type: String,
      default: () => 'signup-choose'
    }
  },
  data () {
    return {
      drawer: false,
      navSectionLinks: [
        {
          header: 'About',
          items: [
            { name: 'Our Story', route: 'our-story' },
            { name: 'Blog', route: 'blog-link' },
            { name: 'Careers', route: 'careers' },
          ]
        },
        {
          header: 'Support',
          items: [
            { name: 'Book A Demo', route: 'calendly' }
          ]
        },
        {
          header: 'Legal',
          items: [
            { name: 'Terms' },
            { name: 'Privacy Policy' }
          ]
        }
      ],
      contactDetails: {
        header: 'Contact',
        items: [
          'hello@mycure.md',
          '(+632) 7799 6262',
          '(+63) 917 303 4350'
        ]
      }
    };
  },
  methods: {
    handleToolbarLinkClick (link) {
      this.$emit('toolbarLinkClick', link);
    },
    handleMycureLogo () {
      this.$emit('logoClick');
    }
  }
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