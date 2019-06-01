<template lang="pug">
  b-navbar(toggleable="md" variant="transparent" :class="{'nav-box-shadow': scrollTop >= 1}")#home-nav
    b-container(style="padding: 0px 0px 0px 7px;")
      b-row(style="width: 100vw;")
        b-col(xs="12" md="2")
          b-navbar-brand(href="" :to="{name: 'home'}")#home-brand
            img(src="../../assets/images/v4/mycure-logo.svg")
          b-navbar-toggle(target="nav_collapse" style="float: right")
        b-col(xs="12" md="10").pl-4
          b-collapse(is-nav id="nav_collapse")
            b-navbar-nav.ml-auto
              b-nav-item(href="" :to="{name: 'cms'}") CMS
              b-nav-item(href="" :to="{name: 'his'}") HIS 
                span.badge.badge-warning BETA
              b-nav-item(href="" :to="{name: 'dental'}") DENTAL 
                span.badge.badge-success NEW
              b-nav-item(href="" :to="{name: 'our-story'}") OUR STORY
              b-nav-item(href="" @click="toggleChat") CONTACT US
              a(href="https://accounts.mycure.md?target=https://cms.mycure.md/authenticate" target="_blank")#login-link LOG IN
              //b-button(variant="outline-primary" size="sm" :to="{name: 'signup'}")#signup-button SIGN UP
              b-button(variant="primary" size="sm" :to="{name: 'signup'}")#signup-button SIGN UP
</template>

<script>
  export default {
    data: () => ({
      scrollTop: 0
    }),
    created () {
      this.$scrollspy().subscribe({
        next: (scroll) => this.scrollTop = scroll
      });
    },
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
    position: fixed;
    width: 100vw;
    background-color: white !important;
    z-index: 999999;
  }

  .nav-box-shadow {
    -webkit-box-shadow: 0px 0px 16px 0px rgba(148,148,148,1);
    -moz-box-shadow: 0px 0px 16px 0px rgba(148,148,148,1);
    box-shadow: 0px 0px 16px 0px rgba(148,148,148,1);
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

  @media (min-width: 576px) {
    .container {
      padding-right: 15px !important;
    }
  }
</style>
