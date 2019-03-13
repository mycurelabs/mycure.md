<template lang="pug">
  footer.bg-dark.pt-3.pb-5
    div.container
      mc-navbar-footer
      hr
      div.row.pt-3.pb-3
        div.col-xs-12.col-md-3
          h6(style="color: #616161") PRODUCTS
          ul.list.list-tall
            li
              router-link(:to="{name: 'his', query: {id: 'top'}}").color-white Hospital Information System (HIS)
            li
              router-link(:to="{name: 'cms', query: {id: 'top'}}").color-white Clinic Management System (CMS)
            li
              router-link(:to="{name: 'dental', query: {id: 'top'}}").color-white Dental Clinic System
            li
              router-link(:to="{name: 'signup', query: {id: 'docs'}}").color-white App for Doctors
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
              //span(@click="toggleChat").open-chat.color-white Book A Demo
              router-link(:to="{name: 'calendly'}").color-white Book A Demo
          h6(style="color: #616161") LEGAL
          ul.list.list-tall
            li
              router-link(:to="{name: 'terms', query: {id: 'top'}}").color-white Terms
            li
              router-link(:to="{name: 'privacy-policy', query: {id: 'top'}}").color-white Privacy Policy
        div.col-xs-12.col-md-3
          h6(style="color: #616161") CONTACT US
          ul.list.list-tall
            li
              span.color-primary hello@mycure.md
            li (+632) 799 6262
            li (+63) 917 303 4350
            li (+63) 949 368 2010
      hr
      div.row.pt-5.pb-5
        div.col-xs-12.col-md-12.text-center
          span &copy; {{new Date().getFullYear()}} 
          span.color-primary MYCURE
          |. 
          span All Rights Reserved.
</template>

<script>
  import mcNavbarFooter from './mc-navbar-footer';
  export default {
    components: {
      mcNavbarFooter
    },
    methods: {
      toggleChat() {
        $crisp.push(['do', 'chat:toggle'])
      }
    }
  }
</script>

<style scoped>
  footer {
    /* height: 100vh; */
  }
  .open-chat:hover {
    cursor: pointer;
    color: #0099cc;
    text-decoration: underline;
  }
</style>
