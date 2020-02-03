<template lang="pug">
  v-container.grey-gradient.toolbarHeight.py-0
    v-layout(row wrap justify-center)
      v-flex(xs12 md12).toolbarMargin
        v-toolbar(flat).grey-gradient
          router-link(:to="{ name: 'home' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo" @click.stop="handleMycureLogo").mr-3.mt-2
            img(src="../../../assets/images/mycure-header-logo.png" width="140" alt="MYCURE logo")
          v-spacer
          v-menu(
            v-model="solutionsMenuModel"
            :close-on-content-click="false"
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
                )
                  v-list-tile-content
                    v-list-tile-title {{ item.name }}
          v-btn(
            v-for="(link, key) in toolbarLinks" 
            :key="key" 
            :to="{ name: link.route }" 
            :id="link.id" 
            flat
          ).mx-0
            span.font-14.tab.text-none {{ link.name }}
          v-btn(
            flat
            :to="{ name: loginURL}"
            id="toolbar-login-btn"
            @click.stop="handleLoginBtn"
          )
            strong.font-14.tab.text-none Login
          v-btn(
            :color="$mcColors.mcAltGreen"
            :to="{ name: signUpURL }"
            id="toolbar-signup-btn"
            @click.stop="handleSignupBtn"
          )
            strong.font-14.white--text.tab.text-none Start Free
</template>

<script>
export default {
  props: {
    solutionsMenuItems: {
      type: Array,
      default: []
    },
    toolbarLinks: {
      type: Array,
      default: []
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
      solutionsMenuModel: false
    };
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
.grey-gradient {
  background-color: #f0f0f0;
}
.toolbarHeight {
  height: 70px !important;
}
.tab {
  letter-spacing: 0.5px;
}
</style>