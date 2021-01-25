<template lang="pug">
  //- TODO: not in use
  v-container.py-12
    v-row(justify="center" align="start")
      v-col(
        v-for="(type, key) in pricingTypes"
        cols="12"
        sm="4"
        lg="3"
        :key="key"
        :class="{'mt-n6': key === 2}"
      ).pb-10
        v-card(height="100%" flat :color="type.color").py-5.mb-4
          div(v-if="key === 2" :class="libericaClasses") BEST VALUE
          v-col(:class="cardTitleClasses")
            h2 {{ type.title }}&nbsp;
            span(:class="currencyTypeClasses") $
            span.font-50 {{ type.price }}
            br
            | per clinic monthly
            br
            p.font-16 {{type.storage}}GB Storage
            v-btn(
              v-if="type.actionBtn"
              width="150"
              elevation="0"
              rounded
              :class="typeBtnClasses"
              :color="type.btnColor"
              :to="{ name: type.actionBtn.route }"
              @click="bookDemo(type)"
            ) {{ type.actionBtn.text }}
        div(v-for="(inclusion, inclusionKey) in type.inclusions" :key="inclusionKey").py-1
          div.d-inline-flex
            img(:src="require('~/assets/images/pricing/mycure-checklist-grey.png')" height="90%" alt="check")
            p(:class="{ 'font-weight-bold': (key === 1 || key === 2) && inclusionKey === 0 }").ml-2.mt-1 {{ inclusion }}
      v-col(cols="12").py-10.text-center
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
        color: '#FBA92B',
        btnColor: '#F77007',
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
        actionBtn: {
          text: 'Book A Demo',
          route: 'signup-multispecialty-step-1',
        },
      },
      {
        title: 'Robusta',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-unli-robusta',
        color: '#56BE8E',
        btnColor: '#1D8E4F',
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
        actionBtn: {
          text: 'Book A Demo',
          route: 'signup-multispecialty-step-1',
        },
      },
      {
        title: 'Liberica',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-unli-liberica',
        color: '#3EA9F5',
        btnColor: '#0F70EB',
        price: 400,
        storage: 25,
        inclusions: [
          'Everything in Robusta',
          'Syncbase Technology',
          'Email & Call Support',
        ],
        actionBtn: {
          text: 'Book A Demo',
          route: 'signup-multispecialty-step-1',
        },
      },
    ];
    return {};
  },
  computed: {
    cardTitleClasses () {
      return ['white--text', 'text-center', 'font-weight-bold'];
    },
    currencyTypeClasses () {
      return ['font-25', 'font-weight-medium', 'currency-type'];
    },
    typeBtnClasses () {
      return ['white--text', 'font-weight-bold'];
    },
    libericaClasses () {
      return ['white--text', 'font-weight-bold', 'text-center', 'liberica-background'];
    },
  },
  methods: {
    bookDemo (type) {
      localStorage.setItem('selected:plan', type.title);
    },
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>

<style scoped>
.liberica-background {
  margin-top: -20px;
  margin-bottom: 20px;
  background-color: #FBA92B;
}
.currency-type {
  position: relative;
  bottom: 15px;
}
</style>
