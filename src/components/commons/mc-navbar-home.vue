<template lang="pug">
  b-container(style="padding-top: 0px; padding-bottom: 0px;")
    b-row
      b-col(xs="12" md="12")
        b-navbar(toggleable="md" variant="transparent")#home-nav
          b-navbar-toggle(target="nav_collapse")
          b-navbar-brand(href="" :to="{name: 'home'}")#home-brand
            img(src="../../assets/images/v4/mycure-logo.svg")
          b-collapse(is-nav id="nav_collapse")
            b-navbar-nav.ml-auto
              b-nav-item(href="" :to="{name: 'cms'}") CMS
              b-nav-item(href="" :to="{name: 'his'}") HIS 
                span.badge.badge-warning BETA
              b-nav-item(href="" :to="{name: 'our-story'}") OUR STORY
              b-nav-item(href="" @click="toggleChat") CONTACT US
              a(href="https://accounts-v4.mycure.md" target="_blank")#login-link LOG IN
              b-button(variant="outline-primary" size="sm" :to="{name: 'signup'}")#signup-button SIGN UP
</template>

<script>
  export default {
    methods: {
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
      }
    }
  }
</script>

<style scoped>
  #home-nav {
    padding-left: 0px;
    padding-right: 0px;
  }

  #login-link {
    color: #0099cc !important;
    margin-top: 8px !important;
    margin-right: 15px;
    margin-left: 15px;
    font-size: 12px;
  }

  #signup-button {
    font-size: 12px;
    padding: 8px 0 10px 0 !important;
    min-width: 100px !important;
    height: 35px !important;
  }

  #home-brand {
    background-color: transparent !important;
  }

  .active {
    background-color: #d8d8d8 !important;
    color: black;
    border-radius: 5px;
    font-weight: bold;
  }

  #signup-button.active {
    background-color: #0099cc !important;
  }
</style>
