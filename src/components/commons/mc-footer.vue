<template lang="pug">
  footer.bg-dark.pt-3.pb-5
    div.container
      mc-navbar-footer
      hr
      div.row.pt-3.pb-3
        div.col-xs-12.col-md-3
          h6(style="color: #616161") CLINIC SOLUTIONS
          ul.list.list-tall
            li
              a.color-white Individual Practice
            li
              a.color-white Group Practice
            li
              a.color-white Organizations
        div.col-xs-12.col-md-3
          h6(style="color: #616161") MODULES
          ul.list.list-tall
            li
              a.color-white Doctor
            li
              a.color-white Billing
            li
              a.color-white Laboratory
            li
              a.color-white Radiology
            li
              a.color-white Inventory
        div.col-xs-12.col-md-3
          h6(style="color: #616161") ABOUT
          ul.list.list-tall
            li
              router-link(:to="{name: 'our-story'}").color-white Our Story
            li
              router-link(:to="{name: 'our-story'}").color-white Our Team
            li
              router-link(:to="{name: 'blog-link'}").color-white Blog
            li
              a.color-white Careers
        div.col-xs-12.col-md-3
          h6(style="color: #616161") SUPPORT
          ul.list.list-tall
            li
              a.color-white FAQs
            li
              a.color-white Request A Demo
      hr
      div.row.pt-3.pb-3
        div.col-xs-12.col-md-4
          span &copy; {{new Date().getFullYear()}} 
          span.color-primary MYCURE
          |. 
          span All Rights Reserved
        div.col-xs-12.col-md-3
          span.color-primary hello@mycure.md
        div.col-xs-12.col-md-3
          span +639173034350
        div.col-xs-12.col-md-2
          span +639493682010
</template>

<script>
  import mcNavbarFooter from './mc-navbar-footer';
  export default {
    components: {
      mcNavbarFooter
    }
  }
</script>

<style scoped>
  footer {
    /* height: 100vh; */
  }
</style>
