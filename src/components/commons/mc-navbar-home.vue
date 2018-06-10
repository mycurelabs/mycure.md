<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="transparent-light")
    b-navbar-toggle(target="nav_collapse")
    b-navbar-brand(href="" :to="{name: 'home'}") 
      img(src="../../assets/images/v4/mycure-logo.svg")
    b-collapse(is-nav id="nav_collapse")

      b-navbar-nav
        b-nav-item(href="" :to="{name: 'modules'}") Modules
        b-nav-item(href="" :to="{name: 'pricing'}") Pricing
        b-nav-item(href="" :to="{name: 'our-story'}") Our Story
        b-nav-item(href="") Contact Us

      b-navbar-nav.ml-auto
        b-nav-item(href="") Login
        b-button(variant="primary" size="sm") Signup
</template>
