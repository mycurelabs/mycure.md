<template lang="pug">
  v-app-bar(
    color="white"
    height="70"
    elevate-on-scroll
    fixed
  )
    generic-container
      v-row(no-gutters align="center")
        v-col
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines")
            img(
              height="45"
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
            )
        v-spacer
        template(v-if="!$isMobile")
          v-btn(text).font-weight-bold.mr-3 Login
          v-btn(color="primary" :class="createBtnClasses") Create an Account
        template(v-else)
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-menu
            v-list(style="width: 250px")
              v-list-item
                v-btn(text block).font-weight-bold Login
              v-list-item
                v-btn(color="primary" block :class="createBtnClasses") Create an Account
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
export default {
  components: { GenericContainer },
  computed: {
    createBtnClasses () {
      return ['font-weight-bold', 'text-capitalize'];
    },
  },
};
</script>
