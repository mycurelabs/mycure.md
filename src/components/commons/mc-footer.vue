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
              router-link(:to="{name: 'signup-individual'}").color-white Individual Practice
            li
              router-link(:to="{name: 'signup-group'}").color-white Group Practice
            li
              router-link(:to="{name: 'signup-multi'}").color-white Health Facility
        div.col-xs-12.col-md-3
          h6(style="color: #616161") PRODUCTS
          ul.list.list-tall
            li
              router-link(:to="{name: 'modules', query: {id: 'panel-2'}}").color-white How it works
            li
              router-link(:to="{name: 'modules', query: {id: 'panel-3'}}").color-white Core
            li
              router-link(:to="{name: 'modules', query: {id: 'panel-4'}}").color-white Premium
            li
              router-link(:to="{name: 'modules', query: {id: 'panel-5'}}").color-white Add-Ons
        div.col-xs-12.col-md-3
          h6(style="color: #616161") ABOUT
          ul.list.list-tall
            li
              router-link(:to="{name: 'our-story'}").color-white Our Story
            // li
              router-link(:to="{name: 'our-story'}").color-white Our Team
            li
              router-link(:to="{name: 'blog-link'}").color-white Blog
            li
              router-link(:to="{name: 'careers'}").color-white Careers
        div.col-xs-12.col-md-3
          h6(style="color: #616161") SUPPORT
          ul.list.list-tall
            li
              router-link(:to="{name: 'faqs-link'}").color-white FAQs
            li
              router-link(:to="{name: 'faqs-link'}").color-white Request A Demo
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
