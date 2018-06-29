<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 2
    div.panel-2.pt-5.pb-5
      b-container(fluid)
        b-row.justify-content-md-center
          b-col(xs="12" md="12").text-center
            center
              div.hr-blue
            br
            h1 MYCURE for Individual Doctors
            br
            p A 
              strong powerful EMR 
              | system with complementary Queuing and Billing modules
            br
            p Enjoy a one-month free trial, no credit card needed. 
              strong Start FREE!
            img(src="../../assets/images/v4/coffee.png" :class="{'animate': scrollTop > 300}").coffee
          b-col(xs="12" md="10")
            b-row(style="background-color: #eff3f5").justify-content-md-center.shadow-3.pl-3.pr-3.pt-5.pb-5
              b-col(xs="12" md="4").pt-5.pl-4.pr-4
                div(style="height: 400px;")
                  div.pl-2.pr-2
                    h2 FREE
                    h1 Arabica
                    label(style="font-size: 22px;") For tasting and testing while you adapt
                  ul 
                    li ✓ Multiple clinics
                    li ✓ 500 patient profiles
                    li ✓ 1 GB storage
                    li ✓ SOAP Charting
                    li ✓ Prescription
                    li ✓ Diagnostic orders
                    li ✓ Medical Forms
                    li ✓ PNF Drug Catalog
                    li ✓ ICD-10 List
                    li ✓ DPA Registration Guide
                div.text-center.mt-5
                  b-button(variant="outline-primary" size="sm" :to="{name: 'arabica-link'}").shadow-5 START FREE
              b-col(xs="12" md="4").pt-5.pl-4.pr-4
                div(style="height: 400px;")
                  div.pl-2.pr-2
                    h2 ₱299
                      span(style="font-size: 25px") /clinic/mo
                    h1 Robusta
                    label(style="font-size: 22px;") For everyday energy in your growing years
                  ul
                    li ✓ Everything in Arabica
                    li ✓ 2500 patient profiles
                    li ✓ 5 GB storage
                    li ✓ Appointment Scheduler
                    li ✓ HMO Profiles
                    li ✓ Billing Services
                    li ✓ Cash Payments
                    li ✓ Specialty Features
                    li ✓ Awesome Care
                div.text-center.mt-5
                  b-button(variant="outline-primary" size="sm" :to="{name: 'robusta-link'}").shadow-5 START FREE
              b-col(xs="12" md="4")
                div.shadow-5.pt-3.pb-3
                  div(style="background-color: #ffcc33").text-center
                    h5 MOST RECOMMENDED
                  div.pl-4.pr-4
                    div(style="height: 400px;")
                      div.pl-2.pr-2
                        h2 ₱999
                          span(style="font-size: 25px") /clinic/mo
                        h1 Liberica
                        label(style="font-size: 22px;") A feast of flavors for full-time practitioners
                      ul
                        li ✓ Everything in Robusta
                        li ✓ Unlimited patient profiles
                        li ✓ 10 GB storage
                        li ✓ Secretary account
                        li ✓ Queuing System
                        li ✓ Queue Board
                        li ✓ Registration Kiosk
                        li ✓ HMO Billing Tracker
                    div.text-center.mt-5
                      b-button(variant="primary" size="sm" :to="{name: 'liberica-link'}").shadow-5 START FREE
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

  ul {
    list-style-type: none; 
    padding: 0; 
    margin: 0;
    background-color: #e0e0e0;
    padding: 10px;
  }

  .panel-2 {
    background-image: url('../../assets/images/v4/mycure-homepage-background-wood.png');
    background-repeat: repeat;
  }

  .coffee {
    display: none;
  }

  @media (min-width: 576px) {
    .coffee {
      display: none;
    }
  }

  @media (min-width: 768px) {
    .coffee {
      display: inline;
      width: 250px;
      position: absolute;
      left: -500px;
      top: -40px;
      -webkit-transition: left 500ms; /* Safari */
      transition: left 500ms;
    }

    .coffee.animate {
      left: -50px;
    }
  }

  @media (min-width: 992px) {

  }

  @media (min-width: 1200px) {

  }
</style>

