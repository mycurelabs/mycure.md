<template lang="pug">
  v-container
    v-col.text-center
      h2.font-30 USER-BASED PRICING
      br
      p.font-18 Ideal for Small & Medium Clinics
    v-row
      v-col(v-for="(type, key) in pricingTypes" :key="key" cols="12" md="4")
        v-card(height="100%")
          v-card-title
            v-spacer
            v-card-title-text.font-weight-bold {{ type.title }}
            v-spacer
          v-card-text
            v-container.content
              v-col.text-center
                strong.font-16 $
                strong.font-30 {{ type.price }}
                br
                | per use monthly
                br
                br
                span.font-16 {{type.storage}}GB Storage
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
                  :to="type.actionBtn.route"
                ).action-btn {{ type.actionBtn.text }}
                p(v-else).primary--text.font-16.pt-3 COMING SOON

</template>

<script>
export default {
  data () {
    this.pricingTypes = [
      {
        title: 'Essentials',
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
  height: 250px;
}
.btn-container {
  display : table-row;
  vertical-align : bottom;
  height : 1px;
}
.action-btn {
  width: 200px;
}
</style>
