<template lang="pug">
  div
    pre(v-if="!$isProduction()").panel-number 3
    div.panel-3.pt-5
      b-container
        b-row.align-items-center
          b-col(xs="12" md="12").text-center
            b-row.wrap.align-items-center
              b-col(xs="12" md="12").pb-5
                center
                  div.hr-blue
                br
                h1 Diligently produced for clinics of all sizes.
            mc-radio-group-image(
              @select="itemSelected"
              v-model="items"
            )
    div(style="background-color: white; margin-top: -30px;").panel-3.pb-5
      div.container
        div.row.align-items-center
          div.col-xs-12.col-md-12.text-center
            div#individual
            div#group
            div#specialized
            div.row.justify-content-md-center.pb-5.pt-5.bg-white
              //- MULTI-SPECIALTY
              div(v-if="item1Selected").col-xs-12.col-md-9.pt-4
                center
                  div.hr-blue
                br
                h1 {{items[0].longName}}
                p {{items[0].fullDescription}}
                div.row.justify-content-md-center.mb-5
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-emr-logo-active.png")
                    h6 EMR
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-billing-advance-active.png")
                    h6 Advanced
                      br
                      | Billing
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-pos-active.png")
                    h6 POS
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-chat-active.png")
                    h6 Chat Box
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-report-active.png")
                    h6 Reports
                div.row.justify-content-md-center
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-lab-active.png")
                    h6 LIS
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-ris-active.png")
                    h6 RIS
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-inventory-active.png")
                    h6 Inventory
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-dpa-active.png")
                    h6 DPA 
                      br
                      | Guide
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-support-active.png")
                    h6 Awesome
                      br
                      | Care
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-specialty-feat-active.png")
                    h6 Specialty
                      br
                      | Features
              //- GROUP
              div(v-if="item2Selected").col-xs-12.col-md-9.pt-4
                center
                  div.hr-blue
                br
                h1 {{items[1].longName}}
                p {{items[1].fullDescription}}
                div.row.justify-content-md-center.mb-5
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-emr-logo-active.png")
                    h6 EMR
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-billing-advance-active.png")
                    h6 Advanced
                      br
                      | Billing
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-pos-active.png")
                    h6 POS
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-chat-active.png")
                    h6 Chat Box
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-report-active.png")
                    h6 Reports
                div.row.justify-content-md-center
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-dpa-active.png")
                    h6 DPA 
                      br
                      | Guide
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-support-active.png")
                    h6 Awesome
                      br
                      | Care
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-specialty-feat-active.png")
                    h6 Specialty
                      br
                      | Features
              //- INDIVIDUAL
              div(v-if="item3Selected").col-xs-12.col-md-9.pt-4
                center
                  div.hr-blue
                br
                h1 {{items[2].longName}}
                p {{items[2].fullDescription}}
                div.row.justify-content-md-center.mb-5
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-emr-logo-active.png" v-mc-hover-src="'../../assets/images/v4/mycure-icon-emr-logo-active.png'")
                    h6 EMR
                  div.feature-item
                    img(width="70" src="../../assets/images/v4/mycure-icon-billing-basic-active.png")
                    h6 Basic 
                      br
                      | Billing
              div.col-xs-12.col-md-12.pb-5.pt-5
                b-button(variant="primary" size="sm" :to="{name: 'modules'}").shadow-5 {{'Learn more about features'.toUpperCase()}}
</template>

<script>
  import mcRadioGroupImage from '../commons/mc-radio-group-image';
  import VueScrollTo from 'vue-scrollto';
  export default {
    components: {
      mcRadioGroupImage
    },
    data() {
      return {
        item1Selected: true,
        item2Selected: false,
        item3Selected: false,
        items: [
          {
            id: 'specialized',
            name: 'Farm',
            subName: 'Health Facility',
            description: 'Ideal for one-stop, <br> multi-staff clinics',
            longName: 'MYCURE for Health Facilities',
            fullDescription: 'An all-around solution for your outpatient, multi-specialty, or industrial clinic',
            isSelected: true,
            hasTooltip: false,
            tooltipMessage: 'An all-around solution for your outpatient, multispecialty or specialized clinics.',
            src: require('../../assets/images/v4/mycure-homepage-package-health-facility-big.png')
          },
          {
            id: 'group',
            name: 'Garden',
            subName: 'Group Clinic',
            description: 'Made for group of doctors <br> practicing together',
            longName: 'MYCURE for Group Clinics',
            fullDescription: `A unified system built for a doctors' clinic being handled by one secretary`,
            isSelected: false,
            hasTooltip: false,
            src: require('../../assets/images/v4/mycure-homepage-package-group.png')
          },
          {
            id: 'individual',
            name: 'Plant',
            subName: 'Individual Clinic',
            description: 'Designed for doctors <br> practicing independently',
            longName: 'MYCURE for Individual Doctors',
            fullDescription: 'A powerful EMR system with complementary Queuing and Billing modules',
            isSelected: false,
            hasTooltip: false,
            src: require('../../assets/images/v4/mycure-homepage-package-individual.png')
          }
        ]
      }
    },
    methods: {
      itemSelected(item) {
        this.item1Selected = false;
        this.item2Selected = false;
        this.item3Selected = false;
        switch (item.id) {
          case 'specialized': this.item1Selected = true; break;
          case 'group': this.item2Selected = true; break;
          case 'individual': this.item3Selected = true; break;
          default:break;
        }
        setTimeout(() => {
          VueScrollTo.scrollTo(`#${item.id}`, 500, { easing: 'ease' } );
        }, 200);
      }
    }
  }
</script>

<style scoped>
  .panel-3 {
    background-color: #eeeeee;
  }
</style>