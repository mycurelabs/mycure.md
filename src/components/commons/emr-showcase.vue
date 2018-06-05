<template lang="pug">
  div
    v-container
      v-layout(column)
        v-flex(xs12 md10 offset-md1)
          v-layout(row).hidden-sm-and-down
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
                    ul.pl-3.pt-2
                      li(v-for="(subItem, key) in item.subItems" :key="key") {{ subItem }}
          v-layout(column).hidden-md-and-up
            v-flex(xs12)
              v-carousel(style="height: 600px;")
                v-carousel-item(v-for="(item,i) in items" :src="item.image" :key="i")
            v-flex(xs12)
              div(v-for="(item, key) in items" :key="key").right-content.pa-1.pt-3
                h2 {{ item.title }}
                ul.pl-3.pt-2
                  li(v-for="(subItem, key) in item.subItems" :key="key") {{ subItem }}
</template>

<script>
  export default {
    created() {
      this.selectedItem = this.items[0];
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
    margin-top: 5px;
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

