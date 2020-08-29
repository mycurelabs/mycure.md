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
          nuxt-link(:to="{ name: 'index' }" title="MYCURE | Clinic Management System | Cloud EMR Philippines" id="toolbar-mycure-logo")
            img(
              height="45"
              src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
              @click="$nuxt.$router.push({ name: 'index' })"
            )
        v-spacer
        template(v-if="!$isMobile")
          //- TODO: add url params?
          //- TODO: could also be refactored along with doctor directory nav buttons
          login-account-btn(
            content="Login"
            :extra-classes="['font-weight-bold', 'mr-3']"
            :extra-bindings="{ text: true }"
          )
          create-account-btn(
            content="Create an Account"
            :extra-bindings="{ color: 'primary' }"
          )
        template(v-else)
          v-menu(bottom left)
            template(v-slot:activator="{ on, attrs }")
              v-btn(icon v-bind="attrs" v-on="on")
                v-icon mdi-menu
            v-list(style="width: 250px")
              //- TODO: add url params?
              //- TODO: could also be refactored along with doctor directory nav buttons
              v-list-item
                login-account-btn(
                  content="Login"
                  :extra-bindings="{ block: true, text: true }"
                )
              v-list-item
                create-account-btn(
                  content="Create an Account"
                  :extra-bindings="{ color: 'primary', block: true }"
                )
</template>

<script>
import GenericContainer from '~/components/commons/generic-container';
import LoginAccountBtn from '~/components/commons/login-account-btn';
import CreateAccountBtn from '~/components/commons/create-account-btn';
export default {
  components: {
    GenericContainer,
    LoginAccountBtn,
    CreateAccountBtn,
  },
};
</script>
