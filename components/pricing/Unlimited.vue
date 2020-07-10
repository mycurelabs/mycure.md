<template lang="pug">
  v-container
    v-col.text-center
      h2.font-30 UNLIMITED USERS
    v-row.pt-5
      v-col(v-for="(type, key) in pricingTypes" :key="key" cols="12" md="4")
        v-card(height="100%")
          v-img(
            :src="require(`~/assets/images/pricing/${type.image}.png`)"
            :alt="type.title"
          )
            v-col(:class="{'white--text': key === 1}")
              h2.font-weight-bold {{ type.title }}&nbsp;
                v-chip(v-if="key === 1" color="warning" x-small).black--text BEST VALUE
              strong.font-16 $
              span.font-40.font-weight-medium {{ type.price }}
              br
              | per clinic monthly
              br
              strong.font-16 {{type.storage}}GB&nbsp;
              span.font-16 Storage
          v-card-text
            v-container.content
              v-col.inclusions-container
                v-row(
                  v-for="(inclusion, inclusionKey) in type.inclusions"
                  :key="inclusionKey"
                ).py-1
                  img(:src="require('~/assets/images/mycure-web-bullet-check.png')" alt="check" width="7%")
                  | &nbsp;&nbsp;{{ inclusion }}
              v-col.text-center.btn-container
                v-btn(
                  large
                  color="primary"
                  :to="{name: 'signup-multispecialty'}"
                ).action-btn.font-weight-bold Book A Demo
    v-col.text-center.contact-container
      h1.font-30.lh-title Set up MYCURE in your own cloud server
      br
      p Perfect for organizations with a dedicated IT department that specializes in database management.
      v-btn(
        text
        color="primary"
        @click="toggleChat"
      )
        strong Contact Sales
        v-icon(right small) mdi-arrow-right
</template>

<script>
export default {
  data () {
    this.pricingTypes = [
      {
        title: 'Arabica',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-unli-arabica',
        price: 80,
        storage: 10,
        inclusions: [
          '1 virtual clinic',
          'Registration',
          'Medical Records',
          'Billing',
          'Telehealth',
          'Reports & Analytics',
        ],
      },
      {
        title: 'Robusta',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-unli-robusta',
        price: 200,
        storage: 15,
        inclusions: [
          'Everything in Arabica',
          'Laboratory',
          'Imaging',
          'Materials Management',
          'Physical Medical Exam',
          'Pharmacy',
          'Dental',
        ],
      },
      {
        title: 'Liberica',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-unli-liberica',
        price: 400,
        storage: 25,
        inclusions: [
          'Everything in Robusta',
          'Syncbase Technology',
          'Email & Call Support',
        ],
      },
    ];
    return {};
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>

<style scoped>
.content {
  height: 100%;
  border-collapse: collapse;
  display : table;
}
.inclusions-container {
  min-height: 250px;
}
.btn-container {
  display : table-row;
  vertical-align : bottom;
  height : 5px;
}
.action-btn {
  width: 200px;
}
.contact-container {
  padding-top: 100px;
  padding-bottom: 25px;
}
</style>
