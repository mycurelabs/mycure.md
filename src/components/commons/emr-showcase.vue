<template lang="pug">
  div
    v-container
      v-layout(column)
        v-flex(xs12 md10 offset-md1)
          v-layout(row)
            v-flex(xs12 md6).text-xs-right.pt-2
              img(width="auto" :src="selectedItem.image")
            v-flex(xs12 md6).text-xs-left
              v-layout(column)
                v-flex(xs12 v-for="(item, key) in items" :key="key" @click="selectedItem = item").stepper-button.text-xs-left
                  div.left-content.pa-1
                    div(:style="{'background-color': getBackgrounColor(item)}").circle-div
                    div.vertical-line
                  div.right-content.pa-1
                    h2(:style="{color: getBackgrounColor(item)}") {{ item.title }}
                    ul.pa-3
                      li(v-for="(subItem, key) in item.subItems" :key="key") {{ subItem }}
</template>

<script>
  import patientRecordManagementImg from '../../assets/images/mycure-v3-philippines-web-mobile-ipad-emr-feature-patient-list.png';
  export default {
    created() {
      this.selectedItem = this.items[1];
      console.log(this.selectedItem)
    },
    data() {
      return {
        selectedItem: null,
        items: [
          {
            title: 'Patient Record Management',
            color: '#f33',
            image: require('../../assets/images/mycure-v3-philippines-web-mobile-ipad-emr-feature-patient-list.png'),
            subItems: [
              'Clean patient profiles', 
              'Update past medical histories, review of systems, and vaccinations'
            ]
          },
          {
            title: 'Charting',
            color: '#e3ba3b',
            image: require('../../assets/images/mycure-v3-philippines-web-mobile-ipad-emr-feature-charting-vitals.png'),
            subItems: [
              'Subjective, objective, assessment plan', 
              'Comprehensive charts, ICD-10 database, multiple image attachments, medical illustrations'
            ]
          },
          {
            title: 'Prescription',
            color: '#2e9fdf',
            image: require('../../assets/images/mycure-v3-philippines-web-mobile-ipad-emr-feature-prescription-print.png'),
            subItems: [
              'Create, review, print your rx', 
              'Medicine catalog, customizable layout, print feature'
            ]
          },
          {
            title: 'Laboratory',
            color: '#90b94e',
            image: require('../../assets/images/mycure-v3-philippines-web-mobile-ipad-emr-feature-laboratory-test.png'),
            subItems: [
              'Request lab test & upload results', 
              `Save electronic copies of your patient's lab test result`
            ]
          },
          {
            title: 'Medical Form',
            color: '#ec8a38',
            image: require('../../assets/images/mycure-v3-philippines-web-mobile-ipad-emr-feature-medical-forms.png'),
            subItems: [
              'Medical certificates, waivers and custom forms', 
              `Build your own forms just the way you need them`
            ]
          },
        ]
      }
    },
    methods: {
      getBackgrounColor(item) {
        if(item.title === this.selectedItem.title)
          return item.color;
      }
    }
  }
</script>

<style scoped>
  .left-content {
    float: left;
    width: 6%;
  }

  .right-content {
    float: left;
    width: 94%;
  }

  .circle-div {
    width: 20px;
    height: 20px;
    background: #ccc;
    border-radius: 100%;
    margin-top: 7px;
  }

  .vertical-line {
    margin-top: 5px;
    margin-left: 9px;
    min-height: 70px;
    width: 3px;
    background-color: #ccc;
  }

  .stepper-button:hover,
  .stepper-button:focus,
  .stepper-button:active {
    cursor: pointer;
  }
</style>

