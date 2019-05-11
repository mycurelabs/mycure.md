<template lang="pug">
  div
    div.pt-5
      center
        v-layout(row wrap justify-center style="width: 60%")
          font.font-l.text-xs-center Join thousands of other health professionals who enjoy the benefits of using technology in their practice
        v-layout(row wrap justify-center).py-5
          v-btn(large style="width: 250px" color="info")
            strong.text-none Get Started   
      v-layout(row wrap)
        img(src="../../assets/images/mycure-before-footer-panel-background.png")
    div.mc-dark-grey
      v-container(justify-center)
        mc-navbar-footer
        hr.mc-grey.mb-3
        v-layout(row wrap justify-center)
          v-flex(xs12 md3 offset-md1).font-mc-grey
            ul.no-style-type
              li CLINIC SOLUTIONS
              li 
                router-link(:to="{name: 'home'}").link.white--text
                  span HOME
              li
                router-link(:to="{name: 'private'}").link.white--text
                  span For Individual Doctors
              li.pb-3
                router-link(:to="{name: 'multi-specialty'}").link.white--text
                  span For Multi-sepcialty-clinics
              li ABOUT
              li
                router-link(:to="{name: 'our-story'}").link.white--text 
                  span Our Story
              li 
                a(href="http://blog.mycure.md/").link.white--text Blog 
              li 
                a(href="https://culture.mycure.md/").link.white--text Careers
            
          v-flex(xs12 md3 offset-md1).font-mc-grey 
            ul.no-style-type
              li SUPPORT 
              li 
                a(href="http://blog.mycure.md/frequently-asked-questions/").link.white--text FAQs
              li.pb-3
                a(href="https://calendly.com/mycure").link.white--text Book A Demo
              li LEGAL
              li
                router-link(:to="{name: 'terms'}").link.white--text 
                  span Terms
              li
                router-link(:to="{name: 'privacy-policy'}").link.white--text 
                  span Privacy Policy
            
          v-flex(xs12 md3 offset-md1).font-mc-grey
            ul.no-style-type
              li 
                a(href="mailto:hello@mycure.md") hello@mycure.md
              li (+632) 799 6262
              li (+63) 917 303 4350
        hr.mc-grey.my-4  
        v-layout(row wrap justify-center)  
          span.white--text &copy; {{new Date().getFullYear()}} 
            span.font-mc-blue MYCURE
            |. 
            span.white--text All Rights Reserved.
</template>

<script>
import mcNavbarFooter from "./mc-navbar-footer";

export default {
  components: {
    mcNavbarFooter
  }
};
</script>


<style scoped>

hr {
  height: 1px;
  color: #616161;
  background-color: #616161;
  border: none;
}

.no-style-type {
    list-style-type: none;
    padding-left: 0;
  }

a:link {
  text-decoration: none;
  color: white;
}

.center {
  padding: auto;
}

.font-mc-blue {
	color: #2e9fdf
}
</style>
