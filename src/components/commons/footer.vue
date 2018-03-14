<template lang="pug">
  div
    div(:class="{'pb-5': isMobile, 'footer1': isDesktop, 'footer1-mobile': isMobile}")
      v-layout(column)
        v-flex(xs12 md10 offset-md1)
          v-container
            v-layout(v-bind="binding")
              v-flex(xs12 md3).text-xs-left.pt-5
                div(:class="{'footer-ul-holder': isDesktop}")
                  h1 MYCURE
                  ul.no-style-type
                    li +632 434 0217 
                    li +63 949 3682010
                    li +63 917 3034350
                    li 
                      strong hello@mycure.md
              v-flex(xs12 md3).text-xs-left.pt-5
                div(:class="{'footer-ul-holder': isDesktop}")
                  h2.font-weight-normal ABOUT
                  ul.footer-ul.no-style-type
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Our Story
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Our Team
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Blog
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Careers
              v-flex(xs12 md3).text-xs-left.pt-5
                div(:class="{'footer-ul-holder': isDesktop}")
                  h2.font-weight-normal PRICING
                  ul.footer-ul.no-style-type
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Private Practice
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Group Clinics
              v-flex(xs12 md3 :class="{'pb-5': isMobile, 'mb-5': isMobile }").text-xs-left.pt-5
                div(:class="{'footer-ul-holder': isDesktop}")
                  h2.font-weight-normal SUPPORT
                  ul.footer-ul.no-style-type
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong FAQs
                    li
                      router-link(:to="{name: 'our-story'}").custom-router-link.black--text
                        strong Request a Demo
                  h2.mt-3.font-weight-normal FOLLOW US
                  v-btn(icon large style="margin-left: -15px;" :to="{name: 'fb-link'}") 
                    img(src="../../assets/images/mycure-v3-philippines-web-ic-social-media-fb.png")
                  v-btn(icon large style="margin-left: -5px;" :to="{name: 'twitter-link'}") 
                    img(src="../../assets/images/mycure-v3-philippines-web-ic-social-media-twitter.png")
                  v-btn(icon large style="margin-left: -5px;" :to="{name: 'youtube-link'}")
                    img(src="../../assets/images/mycure-v3-philippines-web-ic-social-media-ytube .png")
    div#footer2
      v-container
        v-layout(column)
          v-flex(xs12).text-xs-center
            img(width="30" src="../../assets/images/mycure-v3-philippines-web-icon-logo.png")
          v-flex(xs12).text-xs-center
            span Born and Brewed in Manila
          v-flex(xs12).text-xs-center
            span © 
              strong MYCURE {{ new Date() | morph-date('YYYY') }}
              | . All Rights Reserved
          v-flex(xs12).text-xs-center
            span Designed and Engineered by 
              router-link(:to="{name: 'our-story'}").custom-router-link.white--text
                strong Team O.P.S. Inc.
          v-flex(xs12).text-xs-center
            span
              router-link(:to="{name: 'terms'}").custom-router-link.white--text 
                strong Terms and Conditions
              | &nbspand&nbsp
              router-link(:to="{name: 'privacy-policy'}").custom-router-link.white--text 
                strong Privacy Policy
</template>

<script>
  export default {
    data() {
      return {
        screenSize: null,
        isMobile: null,
        isDesktop: null
      }
    },
    computed: {
      binding () {
        const binding = {};
        const name = this.$vuetify.breakpoint.name;
        this.screenSize = name;
        this.isMobile = name === 'xs' || name === 'sm';
        this.isDesktop = name === 'md' || name === 'lg';
        if (name === 'xs' || name === 'sm') binding.column = true;
        if (this.$vuetify.breakpoint.mdAndUp) binding.row = true;
        return binding;
      }
    }
  }
</script>

<style scoped>
  .footer1 {
    min-height: 400px;
    background-color: #f7f7f7;
    background-image: url('../../assets/images/mycure-v3-dashboard-footer-bg.b5c0e1c95918b00c0177.png');
    background-position: bottom center;
    background-repeat: no-repeat;
  }

  .footer1-mobile {
    background-repeat: no-repeat;
    background-image: url('../../assets/images/mycure-mobile-footer-side-bg-half.png'), url('../../assets/images/mycure-v3-dashboard-footer-bg.b5c0e1c95918b00c0177.png');
    background-position: right 50px top 100px, bottom center;
    background-repeat: no-repeat, no-repeat;
  }

  #footer2 {
    background-color: #43ab5f;
    color: white;
    padding-bottom: 100px;
  }

  .footer-ul-holder {
    /* outline:1px solid red;  */
    width: 135px; 
    margin: 0 auto;
  }

  .no-style-type {
    list-style-type: none;
  }

  .footer-ul > li {
    padding-top: 5px;
    padding-bottom: 5px;
  }


</style>
