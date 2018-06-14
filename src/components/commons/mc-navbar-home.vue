<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="transparent-light")
    b-navbar-toggle(target="nav_collapse")
    b-navbar-brand(href="" :to="{name: 'home'}") 
      img(src="../../assets/images/v4/mycure-logo.svg")
    b-collapse(is-nav id="nav_collapse")

      b-navbar-nav
        b-nav-item(href="" :to="{name: 'modules'}") MODULES
        b-nav-item(href="" :to="{name: 'pricing'}") PRICING
        b-nav-item(href="" :to="{name: 'our-story'}") OUR STORY
        b-nav-item(href="" @click="toggle") CONTACT US

      b-navbar-nav.ml-auto
        a(href="https://accounts-v4.mycure.md" targe="_blank")#login-link LOGIN
        b-button(variant="primary" size="sm") SIGNUP
</template>

<script>
  export default {
    methods: {
      toggle() {
        $crisp.push(['do', 'chat:toggle'])
      }
    }
  }
</script>

<style scoped>
  #login-link {
    color: rgba(0, 0, 0, 0.5) !important;
    margin-top: 8px !important;
    margin-right: 50px;
    font-size: 12px;
  }
</style>
