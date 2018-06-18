<template lang="pug">
  div.panel-3.pt-5.pb-5
    div.container
      div.row.align-items-center
        div.col-xs-12.col-md-12.text-center
          div.row.wrap.align-items-center
            div.col-xs-12.col-md-12.pb-5
              h2.color-primary Packaged for you clinic type
          mc-radio-group-image(
            @select="itemSelected"
            v-model="items"
          )
          div#individual
          div#group
          div#specialized
          div.row.justify-content-md-center.pb-5.pt-5.bg-white
            //- INDIVIDUAL
            div(v-if="item1Selected").col-xs-12.col-md-9.pt-4
              h2 {{items[0].name}}
              div.row.justify-content-md-center.mb-5
                div.feature-item
                  img(width="70" src="../../assets/images/v4/mycure-icon-emr-logo-active.png" v-mc-hover-src="'../../assets/images/v4/mycure-icon-emr-logo-active.png'")
                  h6 EMR
                div.feature-item
                  img(width="70" src="../../assets/images/v4/mycure-icon-billing-basic-active.png")
                  h6 Basic 
                    br
                    | Billing
            //- GROUP
            div(v-if="item2Selected").col-xs-12.col-md-9.pt-4
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
            //- MULTI-SPECIALTY
            div(v-if="item3Selected").col-xs-12.col-md-9.pt-4
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
            div.col-xs-12.col-md-12.pb-5.pt-5
              b-button(variant="outline-primary" size="sm" :to="{name: 'modules'}") Learn more about modules
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
            id: 'individual',
            name: 'INDIVIDUAL',
            description: 'A powerful EMR System with Queuing and Billing modules.',
            isSelected: true,
            hasTooltip: false,
            src: require('../../assets/images/v4/mycure-homepage-package-individual.png')
          },
          {
            id: 'group',
            name: 'GROUP',
            description: 'A practical system built for doctors’ clinics being handled by a common secretary.',
            isSelected: false,
            hasTooltip: false,
            src: require('../../assets/images/v4/mycure-homepage-package-group.png')
          },
          {
            id: 'specialized',
            name: 'HEALTH FACILITY',
            description: 'Ad non aliqua et ullamco. Cupidatat fugiat velit. Cupidatat fugiat velit.',
            isSelected: false,
            hasTooltip: true,
            tooltipMessage: 'An all-around solution for your outpatient, multispecialty or specialized clinic.',
            src: require('../../assets/images/v4/mycure-homepage-package-multispecialty.png')
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
          case 'individual': this.item1Selected = true; break;
          case 'group': this.item2Selected = true; break;
          case 'specialized': this.item3Selected = true; break;
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
    /* height: 100vh; */
  }
</style>