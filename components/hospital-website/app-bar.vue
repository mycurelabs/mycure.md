<template lang="pug">
  v-app-bar(
    color="white"
    height="70"
    elevate-on-scroll
    fixed
  )
    v-container
      v-row(no-gutters align="center")
        v-col(align-self="center")
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
            img(
              height="45"
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
              @click="$nuxt.$router.push({ name: 'index' })"
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
export default {
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
