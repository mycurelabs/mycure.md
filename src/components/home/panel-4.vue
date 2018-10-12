<template lang="pug">
  div.panel-4
    pre(v-if="!$isProduction()").panel-number 4
    b-container
      b-row.align-items-center
        b-col(xs="12" md="12").text-center.pt-5.pb-5
          img(src="../../assets/images/v4/mycure-modules-coffee.png" :class="{'animate': scrollTop > 2200}").coffee
          img(src="../../assets/images/v4/mycure-modules-chickpeas.png" :class="{'animate': scrollTop > 2600}").peas
          center
            div.hr-blue
          br
          h1 Protect your patient’s medical records
            br
            | the smarter way.
          br
          p Keeping them secure is our #1 priority.
          p(style="line-height:.5em;") With MYCURE , you’ll get: 
          br
          b-row.justify-content-center
            b-col(xs="12" md="2")
              div.feature-item
                img(width="70" src="../../assets/images/v4/mycure-homepage-dpa-ssla.png").mb-2
                h6 Grade A+ 
                  br 
                  | SSL
            b-col(xs="12" md="2")
              div.feature-item
                img(width="70" src="../../assets/images/v4/mycure-homepage-dpa-encryption.png").mb-2
                h6 Data 
                  br
                  | Encryption
            b-col(xs="12" md="2")
              div.feature-item
                img(width="70" src="../../assets/images/v4/mycure-homepage-dpa-user-access.png").mb-2
                h6 User Designated 
                  br 
                  | Access
            b-col(xs="12" md="2")
              div.feature-item
                img(width="70" src="../../assets/images/v4/mycure-homepage-dpa-cloud.png").mb-2
                h6 Secure Cloud
                  br
                  | Hosting
            b-col(xs="12" md="2")
              div.feature-item
                img(width="70" src="../../assets/images/v4/mycure-homepage-dpa-compliance.png").mb-2
                h6 DPA 
                  br
                  | Compliance
          div.col-xs-12.pt-5
            b-button(variant="primary" size="sm" :to="{name: 'data-privacy-for-physicians'}").shadow-5 DATA PRIVACY FOR PHYSICIANS
</template>

<script>
  export default {
    created() {
      this.$scrollspy().subscribe({
        next: (scrollTop) => this.scrollTop = scrollTop
      });
    },
    data() {
      return {
        scrollTop: 0
      }
    },
    destroyed() {
      this.$removeScrollspy();
    }
  }
</script>

<style scoped>
  .panel-4 {
    /* height: 100vh; */
    /* background-color: white; */
  }

  .coffee, .peas {
    display: none;
  }

  @media (min-width: 576px) {
    .coffee, .peas {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .coffee {
      width: 300px;
      display: inline;
      position: absolute;
      left: -1000px;
      top: -150px;
      -webkit-transition: left 500ms;
      transition: left 500ms;
    }

    .coffee.animate {
      left: -200px;
    }

    .peas {
      display: inline;
      position: absolute;
      right: -1000px;
      bottom: -130px;
      -webkit-transition: right 500ms;
      transition: right 500ms;
    }

    .peas.animate {
      right: -300px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>