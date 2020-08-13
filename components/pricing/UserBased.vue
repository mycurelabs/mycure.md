<template lang="pug">
  v-container
    v-col.text-center
      h2.font-30 USER-BASED PRICING
      p.font-18 Ideal for Small & Medium Clinics
    v-row
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
              | per use monthly
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
                  v-if="type.actionBtn"
                  large
                  color="success"
                  :to="{name: type.actionBtn.route}"
                ).action-btn.font-weight-bold {{ type.actionBtn.text }}
                p(v-else).primary--text.font-16.pt-3 COMING SOON

</template>

<script>
import PictureSource from '~/components/commons/PictureSource';
export default {
  components: {
    PictureSource,
  },
  data () {
    this.pricingTypes = [
      {
        title: 'Essentials',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-user-essentials',
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
          route: 'signup-individual',
        },
      },
      {
        title: 'Pro',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-user-pro',
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
          text: 'Start Trial',
          route: 'signup-individual',
        },
      },
      {
        title: 'Team',
        image: 'MYCURE-virtual-clinic-healthcare-practice-online-pricing-user-team',
        price: 20,
        storage: 10,
        inclusions: [
          'Everything in Pro',
          'Unlimited secretary accounts',
          'Clinic website',
        ],
      },
    ];
    return {};
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

@media screen and (min-width: 1900px){
  .inclusions-container {
    min-height: 400px !important;
  }
}
</style>
