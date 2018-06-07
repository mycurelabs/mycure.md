<template lang="pug">
  b-navbar(toggleable="md" type="light" variant="transparent-light")
    b-navbar-toggle(target="nav_collapse")
    b-navbar-brand(href="#") 
      img(src="../../assets/images/v4/mycure-logo.svg")
    b-collapse(is-nav id="nav_collapse")

      b-navbar-nav
        b-nav-item(href="") Link 1
        b-nav-item(href="") Link 2
        b-nav-item(href="") Link 3
        b-nav-item(href="") Link 4

      b-navbar-nav.ml-auto
        b-nav-item(href="") Login
        b-button(variant="primary" size="sm") Signup
        
        //- b-nav-item-dropdown(text="" right)
        //-   b-dropdown-item(href="#") EN
        //-   b-dropdown-item(href="#") ES
        //-   b-dropdown-item(href="#") RU
        //-   b-dropdown-item(href="#") FA
</template>
