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
        :class="{'mt-n6': key === 1}"
      )
        v-card(flat :color="type.color").py-5.mb-4
          div(v-if="key === 1" :class="bestValueClasses") BEST VALUE
          v-col(:class="cardTitleClasses")
            h2 {{ type.title }}&nbsp;
            span(:class="currencyTypeClasses") $
            span.font-50 {{ type.price }}
            div(v-if="key === 2").coming-soon
              p(:class="comingSoonClasses") COMING SOON
            br
            | per use monthly
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
              @click="[key === 2 ? toggleChat() : null]"
            ) {{ type.actionBtn.text }}
        div(v-for="(inclusion, inclusionKey) in type.inclusions" :key="inclusionKey").py-1
          div.d-inline-flex
            img(:src="require('~/assets/images/pricing/mycure-checklist-grey.png')" height="90%" alt="check")
            p(:class="{ 'font-weight-bold': (key === 1 || key === 2) && inclusionKey === 0 }").ml-2.mt-1 {{ inclusion }}
</template>

<script>
export default {
  data () {
    this.pricingTypes = [
      {
        title: 'Essentials',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-user-essentials',
        color: '#FBA92B',
        btnColor: '#F77007',
        price: 0,
        storage: 1,
        inclusions: [
          '1 virtual clinic',
          'Telehealth',
          'Registration',
          'Medical Records',
          'Billing',
          'Doctor website',
          'HIPAA compliant EMR',
        ],
        actionBtn: {
          text: 'Start Free',
          route: 'signup-individual-invite',
        },
      },
      {
        title: 'Pro',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-user-pro',
        color: '#56BE8E',
        btnColor: '#1D8E4F',
        price: 15,
        storage: 5,
        inclusions: [
          'Everything in Essentials',
          '1 secretary account',
          'Online appointment booking',
          'Reports & Analytics',
          'Form Customizations',
          '2-Factor Authentication',
        ],
        actionBtn: {
          text: 'Start Free',
          route: 'signup-individual-invite',
        },
      },
      {
        title: 'Team',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-user-team',
        color: '#3EA9F5',
        btnColor: '#0F70EB',
        price: 20,
        storage: 10,
        inclusions: [
          'Everything in Pro',
          'Unlimited secretary accounts',
          'Clinic website',
        ],
        actionBtn: {
          text: 'Contact Us',
          route: '',
        },
      },
    ];
    return {};
  },
  computed: {
    bestValueClasses () {
      return ['white--text', 'font-weight-bold', 'text-center', 'best-value-background'];
    },
    cardTitleClasses () {
      return ['white--text', 'text-center', 'font-weight-bold'];
    },
    currencyTypeClasses () {
      return ['font-25', 'font-weight-semibold', 'currency-type'];
    },
    comingSoonClasses () {
      return ['mt-7', 'font-16', 'font-weight-bold'];
    },
    typeBtnClasses () {
      return ['white--text', 'font-weight-bold'];
    },
  },
  methods: {
    toggleChat () {
      window.$crisp.push(['do', 'chat:toggle']);
    },
  },
};
</script>

<style scoped>
.best-value-background {
  margin-top: -20px;
  margin-bottom: 20px;
  background-color: #FBA92B;
}
.currency-type {
  position: relative;
  bottom: 15px;
}
.coming-soon {
  position: absolute;
  background-color: rgba(0, 0, 255, 0.5);
  top: 24%;
  left: 0;
  width: 100%;
  height: 75px;
}
</style>
