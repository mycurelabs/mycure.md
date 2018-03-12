<template lang="pug">
  div
    v-navigation-drawer(
      temporary
      v-model="drawer"
      absolute
    )
      v-list.pt-0
        v-divider
        v-list-tile(v-for="item in items" :key="item.title" @click="")
          //- v-list-tile-action
            //- v-icon {{ item.icon }}
          v-list-tile-content
              v-list-tile-title {{ item.title }}

    v-toolbar(color="white").elevation-0.pr-5
      v-toolbar-side-icon(@click.stop="drawer = !drawer").hidden-md-and-up
      router-link(:to="{name: 'home'}").pl-5.hidden-sm-and-down
        img(src="../../assets/images/mycure-v3-philippines-web-header-logo.svg" alt="MYCURE Logo" :to="{name:'home'}").mt-1
      img(src="../../assets/images/mycure-v3-philippines-web-header-logo.svg" alt="MYCURE Logo" :to="{name:'home'}").hidden-md-and-up
      v-spacer
      router-link(
        v-for="item in items" 
        :key="item.title" 
        :to="{name: item.to}" 
        v-if="excludeLinks(item)"
        :class="{'success--text': item.title === 'MYCURE Family'}"
      ).hidden-sm-and-down.pl-2.pr-2.toolbar-links 
        | {{ item.title }}
      v-btn(color="primary" :to="{name: 'join-today'}").hidden-sm-and-down
        strong Join Today
</template>

<script>
  export default {
    data() {
      return {
        drawer: false,
        items: [
          {
            title: 'Home',
            icon: 'people',
            to: 'home'
          },
          {
            title: 'MYCURE Family',
            icon: 'people',
            to: 'family',
          },
          {
            title: 'Our Story',
            icon: 'people',
            to: 'our-story'
          },
          {
            title: 'Products',
            icon: 'people',
            to: 'products'
          },
          {
            title: 'Contact us',
            icon: 'people'
          },
          {
            title: 'About Us',
            icon: 'people',
            to: 'our-story'
          },
          {
            title: 'LOGIN',
            icon: 'people',
            external: true,
            to: 'login'
          },
          {
            title: 'Join Today',
            icon: 'people',
            external: true,
            to: 'join-today'
          }
        ]
      }
    },
    methods: {
      excludeLinks(item) {
        const exclude = [
          'Home', 'Join Today'
        ];

        return !exclude.find(e => {
          return e === item.title;
        });
        
      }
    }
  }
</script>

<style>
  .toolbar-links {
    text-decoration: none;
    font-weight: bold;
    color: #2c3e50;
  }
</style>
