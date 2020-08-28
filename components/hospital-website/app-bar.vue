<template lang="pug">
  v-app-bar(
    color="white"
    elevate-on-scroll
    fixed
  )
    generic-container
      v-row(no-gutters align="center")
        v-col
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
            img(
              height="45"
              src="~/assets/images/mycure-header-logo.png"
              to="/"
            )
        v-spacer
        template(v-if="!$isMobile")
          v-btn(
            color="primary"
            large
            depressed
            :href="url"
          ) Consult Now
          v-avatar.ml-3
            img(:src="picURL")
        template(v-else)
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-menu
            v-list(style="width: 250px")
              v-list-item
                v-btn(
                  color="primary"
                  large
                  depressed
                  block
                  :href="url"
                ) Consult Now
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: { GenericContainer },
  props: {
    picURL: {
      type: String,
      default: '',
    },
  },
  computed: {
    url () {
      return console.log('Dont Forget to add URL here');
    },
  },
};
</script>
