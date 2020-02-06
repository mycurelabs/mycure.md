<template lang="pug">
  v-container(:class="isMainRoute ? 'mc-gradient-grey' : 'white'").toolbarHeight.py-0
    v-layout(row wrap justify-center)
      v-flex(xs12 md12).toolbarMargin
        v-toolbar(flat :class="isMainRoute ? 'mc-gradient-grey' : 'white'")
          router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
            img(src="../../../assets/images/mycure-header-logo.png" width="140" alt="MYCURE logo")
          v-spacer
          v-menu(
            v-model="solutionsMenuModel"
            offset-y
          )
            template(slot="activator" slot-scope="props")
              v-btn(
                flat
                v-on="props.on"
              ).mx-0
                span.font-14.tab.text-none {{ solutionsText }}
                v-icon(small) mdi-chevron-down
            v-card
              v-list
                v-list-tile(
                  v-for="(item, key) in solutionsMenuItems"
                  :key="key"
                  :to="{ name: item.route }"
                  @click="handleToolbarLinkClick(item.route)"
                )
                  v-list-tile-content
                    v-list-tile-title {{ item.name }}
          div(v-for="(link, key) in toolbarLinks" :key="key")
            v-btn(
              v-if="showNav(key)"
              :to="{ name: link.route }"
              :id="link.id"
              flat
              @click.stop="handleToolbarLinkClick(link.id)"
            ).mx-0
              span.font-14.tab.text-none {{ link.name }}
          v-btn(
            v-if="currentRoute === 'specialized-clinics'"
            :to="{ name: 'calendly' }"
            id="nav-specialized-book-demo"
            flat
            @click.stop="handleToolbarLinkClick('nav-specialized-book-demo')"
          ).mx-0
            span.font-14.tab.text-none Book A Demo
          v-btn(
            flat
            :to="{ name: loginURL}"
            id="login-btn"
            @click.stop="handleToolbarLinkClick('login-btn')"
          )
            v-img(:src="require(`@/assets/images/${loginIcon}.png`)")
            span.font-14.tab.text-none &nbsp;Login
          v-btn(
            v-if="currentRoute === 'doctors-clinics' || currentRoute === 'specialized-clinics'"
            :color="$mcColors.mcAltGreen"
            :to="currentRoute === 'doctors-clinics' ? { name: 'signup-individual' } : { name: 'signup-choose' }"
            id="start-free-btn"
            @click.stop="handleToolbarLinkClick('start-free-btn')"
          )
            strong.font-14.white--text.tab.text-none Start Free
          v-btn(
            v-else-if="currentRoute === 'multispecialty-clinics'"
            :color="$mcColors.mcAltGreen"
            :to="{ name: 'signup-multispecialty' }"
            id="multispecialty-book-demo-btn"
            @click.stop="handleToolbarLinkClick('multispecialty-book-demo-btn')"
          )
            strong.font-14.white--text.tab.text-none Book A Free Demo
          v-btn(
            v-else
            :color="$mcColors.mcAltGreen"
            id="get-started-btn"
            @click.stop="handleToolbarLinkClick('get-started-btn')"
          )
            strong.font-14.white--text.tab.text-none Get Started
</template>

<script>
export default {
  props: {
    isMainRoute: {
      type: Boolean,
      default: true
    },
    solutionsMenuItems: {
      type: Array,
      default: () => []
    },
    toolbarLinks: {
      type: Array,
      default: () => []
    },
    solutionsText: {
      type: String,
      default: () => 'Solutions'
    },
    loginURL: {
      type: String,
      default: () => 'signin'
    },
    signUpURL: {
      type: String,
      default: () => 'signUpURL'
    }
  },
  data () {
    return {
      solutionsMenuModel: false,
      loginIcon: 'mycure-icon-login'
    };
  },
  computed: {
    currentRoute () {
      return this.$route.name;
    }
  },
  methods: {
    showNav (key) {
      if (key === 0) return true;
      return this.currentRoute === 'doctors-clinics' ? true : false;
    },
    handleToolbarLinkClick (link) {
      this.$emit('toolbarLinkClick', link) ;
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
.toolbarMargin{
  margin-top: 3px;
}
.toolbarHeight {
  height: 70px !important;
}
.tab {
  letter-spacing: 0.5px;
}
</style>