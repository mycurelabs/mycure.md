<template lang="pug">
  v-container.toolbarHeight.py-0.white
    v-row(justify="center")
      v-col(cols="12" md="12").toolbarMargin
        v-toolbar(flat).white
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
            img(src="../../../assets/images/mycure-header-logo.png" width="140" alt="MYCURE logo")
          v-spacer
          v-menu(
            v-model="solutionsMenuModel"
            offset-y
          )
            template(slot="activator" slot-scope="props")
              v-btn(
                text
                v-on="props.on"
              ).mx-0
                span.font-14.tab.text-none {{ solutionsText }}
                v-icon(small) mdi-chevron-down
            v-card
              v-list
                v-list-item(
                  v-for="(item, key) in solutionsMenuItems"
                  :key="key"
                  :to="{ name: item.route }"
                  @click="handleToolbarLinkClick(item.route)"
                )
                  v-list-item-content
                    v-list-item-title {{ item.name }}
          div(v-for="(link, key) in toolbarLinks" :key="key")
            v-btn(
              v-if="showNav(key)"
              :to="{ name: link.route }"
              :id="link.id"
              text
              @click.stop="handleToolbarLinkClick(link.id)"
            ).mx-0
              span.font-14.tab.text-none {{ link.name }}
          v-btn(
            text
            :to="{ name: loginURL}"
            id="login-btn"
            @click.stop="handleToolbarLinkClick('login-btn')"
          )
            //- img(:src="require(`@/assets/images/${loginIcon}.png`)" alt="login icon" width="17%")
            span.font-14.tab.text-none &nbsp;Login
          v-btn(
            v-if="currentRoute === 'doctors-clinics'"
            color="accent"
            :to="currentRoute === 'doctors-clinics' ? { name: 'signup-individual' } : { name: 'signup-multispecialty' }"
            id="start-free-btn"
            @click.stop="handleToolbarLinkClick('start-free-btn')"
          )
            strong.font-14.white--text.tab.text-none Start Free
          v-btn(
            v-else-if="currentRoute === 'multispecialty-clinics'"
            color="accent"
            :to="{ name: 'signup-multispecialty' }"
            id="multispecialty-book-demo-btn"
            @click.stop="handleToolbarLinkClick('multispecialty-book-demo-btn')"
          )
            strong.font-14.white--text.tab.text-none Book A Free Demo
          v-btn(
            v-else-if="currentRoute === 'specialized-clinics'"
            color="accent"
            :to="{ name: 'signup-specialized' }"
            id="specialized-signup-btn"
            @click.stop="handleToolbarLinkClick('specialized-signup-btn')"
          )
            strong.font-14.white--text.tab.text-none Start 14-Day Trial
          v-btn(
            v-else
            color="accent"
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
      default: true,
    },
    solutionsMenuItems: {
      type: Array,
      default: () => [],
    },
    toolbarLinks: {
      type: Array,
      default: () => [],
    },
    solutionsText: {
      type: String,
      default: () => 'Solutions',
    },
    loginURL: {
      type: String,
      default: () => 'signin',
    },
  },
  data () {
    return {
      solutionsMenuModel: false,
      loginIcon: 'login-icon',
    };
  },
  computed: {
    currentRoute () {
      return this.$nuxt.$route.name;
    },
  },
  methods: {
    showNav (key) {
      if (key === 0) { return true; }
      return this.currentRoute === 'doctors-clinics';
    },
    handleToolbarLinkClick (link) {
      this.$emit('toolbarLinkClick', link);
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
