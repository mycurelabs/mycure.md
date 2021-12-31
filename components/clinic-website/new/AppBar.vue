<template lang="pug">
  div
    v-app-bar(
      app
      flat
      absolute
      color="transparent"
    )
      template(v-if="$isMobile")
        img(
          src="../../../assets/images/MYCURE-logo.png"
          width="150"
        )
        v-spacer
        v-btn(
          icon
          @click="drawer = !drawer"
        )
          v-icon(size="30").black--text {{ mdiMenu }}
      template(v-else)
        v-container
          v-row(justify="center")
            v-col(cols="10")
              div.d-flex.py-0.align-center
                img(
                  src="../../../assets/images/MYCURE-logo.png"
                  width="150"
                )
                v-spacer
                template(v-for="menu in menus")
                  v-btn(
                    depressed
                    text
                    @click="navigate(menu)"
                  ).ml-1.text-none {{menu.title}}
    v-navigation-drawer(
      v-model="drawer"
      temporary
      right
      app
      dark
    )
      v-list(two-line).text-center
        v-list-item(to="/")
          v-list-item-title Home
        template(v-for="menu in menus")
          v-list-item(@click="navigate(menu)")
            v-list-item-title {{menu.title}}
        v-list-item
          v-spacer
          v-btn(
            rounded
            large
            color="success"
            :to="{ name: 'signin' }"
          ).text-none Login
          v-spacer
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import { mdiMenu } from '@mdi/js';
export default {
  data () {
    this.menus = [
      {
        anchorId: '#services-panel',
        title: 'Services',
      },
      {
        anchorId: '#about-us-panel',
        title: 'About Us',
      },
    ];
    return {
      drawer: false,
      mdiMenu,
    };
  },
  methods: {
    navigate (menu) {
      this.$emit('navigate', menu);
      VueScrollTo.scrollTo(menu.anchorId, 500, { offset: 0, easing: 'ease' });
      if (this.$isMobile) {
        this.drawer = false;
      }
    },
  },
};
</script>
