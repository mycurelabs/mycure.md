<template lang="pug">
  b-navbar(toggleable="md" type="dark" variant="transparent")
    b-navbar-toggle(target="nav_collapse")
    
    b-navbar-brand(:to="{name: 'home'}") 
      img(src="../../assets/images/v4/mycure-logo.svg")

    b-collapse(is-nav id="nav_collapse")
      b-navbar-nav.ml-auto
        b-nav-item
          small.color-white Follow us on:
        b-nav-item(:to="{name: 'fb-link'}") 
          img(width="25" src="../../assets/images/v4/mycure-homepage-wireframe-icon-fb.png")
        b-nav-item(:to="{name: 'youtube-link'}")
          img(width="25" src="../../assets/images/v4/mycure-homepage-wireframe-icon-ytub-e.png")
        b-nav-item(:to="{name: 'ig-link'}")
          img(width="25" src="../../assets/images/v4/mycure-homepage-wireframe-icon-ig.png")
        b-nav-item(:to="{name: 'linkedin-link'}")
          img(width="25" src="../../assets/images/v4/mycure-homepage-wireframe-icon-linkedin.png")
        b-nav-item(:to="{name: 'twitter-link'}")
          img(width="25" src="../../assets/images/v4/mycure-homepage-wireframe-icon-twitter.png")

      // b-navbar-nav.ml-auto
        b-form(@submit.prevent="onSubmit")
          b-form-input(v-model="search" class="form-control-dark" type="text" placeholder="Search")
</template>

<script>
  export default {
    data() {
      return {
        search: ''
      }
    },
    methods: {
      onSubmit() {
        location.href = `http://blog.mycure.md/?s=${this.search}&post_type=post`;
      }
    }
  }
</script>
