<template lang="pug">
  v-container
    v-layout(row wrap justify-center)
      v-flex(xs12 md10)
        img(
          src="../../assets/images/mycure-header-logo.png"
          @click="$router.push({ name: 'home' })"
        ).link-to-home.mb-3
        h1#step-3-title.mb-5 Choose your subscriptions.
        v-card
          v-toolbar(flat).grey-lighten-4
            h1.font-30 {{ clinicName }}
            v-spacer
            h2.font-25.primary--text ${{  totalSubscription.toFixed(2) }}/mo
          v-card-text.pa-4
            v-layout(row wrap).pt-3
              v-flex(xs12 md3)
                v-icon(color="primary" medium) mdi-numeric-1-box
                br
                p.font-21 {{ clinicName }}
                p.font-16.grey--text Your first clinic is free
                  br
                  | Additional clinics are ${{ clinicPrice }}/mo.
                  br
                  span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Starts free
              v-flex(xs12 md3 align-self-center).text-xs-center
                p.font-21 Free
              v-flex(
                xs12
                md3
                align-self-center 
                offset-md3
              ).text-xs-center
                p.font-21 $0/mo
            v-divider
            v-layout(row wrap).pt-3
              v-flex(xs12 md3)
                v-icon(color="primary" medium) mdi-numeric-2-box
                br
                p.font-21 Cloud Storage
                p.font-16.grey--text You have FREE 1 GB.
                  br
                  | 1 GB is equivalent to 1,000 patient profiles.
                  br
                  span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Price: ${{storagePrice}}/gb/mo
              v-flex(xs12 md3 align-self-center).text-xs-center
                input(
                  v-model="storageGB"
                  type="number"
                  disabled
                ).font-21.text-xs-center.input-field
                p.font-21 GB
              v-flex(xs12 md3 align-self-center).text-xs-center
                v-btn(
                  :disabled="isMinimum(storageGB)"
                  icon
                  @click="storageGB-=1;"
                )
                  v-icon(color="primary") mdi-minus-box
                v-btn(
                  icon
                  @click="storageGB+=1;"
                )
                  v-icon(color="primary") mdi-plus-box
              v-flex(
                xs12
                md3
                align-self-center 
              ).text-xs-center
                p.font-21 ${{ totalStoragePrice }}/mo
            v-divider
            v-layout(row wrap).pt-3
              v-flex(xs12 md3)
                v-icon(color="primary" medium) mdi-numeric-3-box
                br
                p.font-21 Doctor Seat
                p.font-16.grey--text You have 1 FREE Seat.
                  br
                  | 1 Doctor Seat is 1 MYCURE Doctor account.
                  br
                  span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Price: ${{ doctorSeatsPrice }}/doctor/mo
              v-flex(xs12 md3 align-self-center).text-xs-center
                //- TODO: Implement rule
                input(
                  v-model="doctorSeats"
                  type="number"
                  disabled
                ).font-21.text-xs-center.input-field
                p.font-21 GB
              v-flex(xs12 md3 align-self-center).text-xs-center
                v-btn(
                  :disabled="isMinimum(doctorSeats)"
                  icon
                  @click="doctorSeats-=1;"
                )
                  v-icon(color="primary") mdi-minus-box
                v-btn(
                  icon
                  @click="doctorSeats+=1;"
                )
                  v-icon(color="primary") mdi-plus-box
              v-flex(
                xs12
                md3
                align-self-center 
              ).text-xs-center
                p.font-21 ${{ totalDoctorSeatsPrice }}/mo
            v-divider
            v-layout(row wrap).pt-3
              v-flex(xs12 md3)
                v-icon(color="primary" medium) mdi-numeric-4-box
                br
                p.font-21 Staff Seat
                p.font-16.grey--text By default, you have 1 FREE Seat. 1 Staff seat is 1 account that you can designate at your admin panel.
                  br
                  span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Price: ${{ staffSeatsPrice }}/staff/mo
              v-flex(xs12 md3 align-self-center).text-xs-center
                input(
                  v-model="staffSeats"
                  type="number"
                  disabled
                ).font-21.text-xs-center.input-field
                p.font-21 GB
              v-flex(xs12 md3 align-self-center).text-xs-center
                v-btn(
                  :disabled="isMinimum(staffSeats)"
                  icon
                  @click="staffSeats-=1;"
                )
                  v-icon(color="primary") mdi-minus-box
                v-btn(
                  icon
                  @click="staffSeats+=1;"
                )
                  v-icon(color="primary") mdi-plus-box
              v-flex(
                xs12
                md3
                align-self-center 
              ).text-xs-center
                p.font-21 ${{ totalStaffSeatsPrice }}/mo
            v-divider
            v-layout(row wrap).pt-3
              v-flex(xs12 md8)
                v-icon(color="primary" medium) mdi-numeric-5-box
                br
                p.font-21 Modules
                p.font-16.grey--text By default, the core modules are FREE. Add more in premium modules.
                  br
                  span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Price: varies per module
              v-flex(
                xs12
                md4
                align-self-center 
              ).text-xs-center
                v-img(
                  :src="require('@/assets/images/subscription/mycure-accounts-subscription-modules-image.png')"
                  alt="Modules Image"
                )
            v-layout(row wrap).pt-3
              v-flex(xs12 md6)
                p.font-weight-bold.font-18 Core Modules
                v-layout(row wrap)
                  v-flex(xs2 md1)
                    v-img(
                      :src="require('@/assets/images/subscription/mycure-accounts-subscription-modules-icon-core-active.png')"
                      alt="Subscription Modules"
                    )
                  v-flex(xs10 md11).font-16.pl-3
                    p.grey--text 
                      span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Essential Features&nbsp;
                      img(:src="require('@/assets/images/mycure-check.png')" alt="Check" width="4%")
                      br
                      | All the modules you need to run your clinic system -
                      br
                      | Registration, Medical Records, Billing, EMR.
                      br
                      p(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Price: FREE
              v-flex(xs12 md3 align-self-center).text-xs-center
                p.font-21 Free
              v-flex(
                xs12
                md3
                align-self-center 
              ).text-xs-center
                p.font-21 $0/mo
            v-layout(row wrap).pt-3
              v-flex(xs12 md6)
                p.font-weight-bold.font-18 + Premium Modules
            v-layout(
              v-for="(module, key) in premiumModules"
              :key="key"
              row 
              wrap
            )
              v-flex(xs12 md6)
                v-layout(row wrap)
                  v-flex(xs2 md1).pt-3
                    v-img(
                      :src="require(`@/assets/images/subscription/mycure-accounts-subscription-modules-icon-${module.icon}${module.isSubscribed ? '-active' : ''}.png`)"
                      :alt="module.icon"
                    )
                  v-flex(xs10 md11).font-16.pl-3
                    p.grey--text 
                      span(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") {{ module.name }}&nbsp;
                      img(
                        v-if="module.isSubscribed"
                        :src="require('@/assets/images/mycure-check.png')"
                        alt="Check" 
                        width="4%"
                      )
                      br
                      span.font-16 {{ module.description }}
                      br
                      p(:class="dayOrNight === 'night' ? 'night-text' : 'black--text'") Price: ${{ module.price }}/mo
              v-flex(xs12 md3).text-xs-center
                v-btn(
                  :color="module.isSubscribed ? 'error' : $mcColors.mcBlue"
                  dark
                  :disabled="loading"
                  @click="module.isSubscribed = !module.isSubscribed"
                ).text-none.font-weight-bold {{ module.isSubscribed ? 'Unsubscribe' : 'Subscribe'}}
              v-flex(xs12 md3 align-self-center).text-xs-center.font-21
                p(v-if="module.isSubscribed") ${{ module.price }}/mo
                p(v-else) --
            v-layout(row wrap).text-xs-center
              v-flex(xs12 md3 offset-md6)
                b.font-21 Sub Total
              v-flex(xs12 md3)
                p.font-21 ${{ totalSubscription.toFixed(2) }}/mo
              v-divider
            v-layout(row wrap).text-xs-center
              v-flex(xs12 md3 offset-md6)
                p.grey--text.font-21 Estimated Tax
              v-flex(xs12 md3)
                p.font-21 ${{ tax.toFixed(2) }}/mo
            v-divider
            v-layout(row wrap).text-xs-center
              v-flex(xs12 md3 offset-md6)
                h2.font-weight-regular {{ clinicName }}'s Total
              v-flex(xs12 md3)
                h2 ${{ computedPaymentAmount.toFixed(2) }}/mo
          v-card-actions.grey.lighten-3
            v-btn(
              large
              @click="goBack"
            ).text-none.font-weight-bold Back
            v-spacer
            v-btn(
              :color="$mcColors.mcAltGreen"
              dark
              large
              @click="proceedToCheckout"
            ).text-none.font-weight-bold Proceed to Checkout
</template>

<script>
// - utils
import dayOrNight from '../../utils/day-or-night';

export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {
      loading: false,
      // Prices
      clinicPrice: 5,
      storagePrice: 4,
      doctorSeatsPrice: 4,
      staffSeatsPrice: 2,
      // Models
      step1Data: {},
      storageGB: 1,
      doctorSeats: 1,
      staffSeats: 1,
      premiumModules: [
        {
          name: 'Laboratory',
          description: 'A Laboratory Information System that communicates with modern diagnostic machines through HL7 interfacing.',
          icon: 'lab',
          isSubscribed: false,
          price: 5
        },
        {
          name: 'Imaging',
          description: 'An Imaging Information System that allows doctors to view DICOM images remotely, and patients to view imaging results online.',
          icon: 'imaging',
          isSubscribed: false,
          price: 5
        },
        {
          name: 'Materials Management',
          description: 'A Materials Management System built for healthcare facilities to monitor in-house supplies and over-the-counter products.',
          icon: 'inventory',
          isSubscribed: false,
          price: 5
        },
        {
          name: 'Physical Medical Exam',
          description: 'Manage corporate and private Annual Physical Exams, Pre-employment Medical Exams, Executive Checkups, and Full Medical Exams.',
          icon: 'pme',
          isSubscribed: false,
          price: 10
        },
        {
          name: 'Pharmacy',
          description: 'A Pharmacy Management System with Point-of-Sales functions, Rx access, inventory management, and reports in one place.',
          icon: 'pharmacy',
          isSubscribed: false,
          price: 8
        }
      ]
    };
  },
  computed: {
    clinicName () {
      return this.step1Data.hasOwnProperty('firstName')
        ? `${this.step1Data.firstName}'s Clinic`
        : 'Your Clinic';
    },
    totalSubscription () {
      const total = this.totalStoragePrice + this.totalDoctorSeatsPrice
        + this.totalStaffSeatsPrice + this.totalPremiumModulesPrice;
      return total;
    },
    tax () {
      const tax = 0.20;
      return tax;
    },
    computedPaymentAmount () {
      const amount = this.totalSubscription + this.tax;
      return amount;
    },
    totalStoragePrice () {
      return this.isMinimum(this.storageGB) ? 0 : (this.storageGB-1)*this.storagePrice;
    },
    totalDoctorSeatsPrice () {
      return this.isMinimum(this.doctorSeats) ? 0 : (this.doctorSeats-1)*this.doctorSeatsPrice;
    },
    totalStaffSeatsPrice () {
      return this.isMinimum(this.staffSeats) ? 0 : (this.staffSeats-1)*this.staffSeatsPrice;
    },
    totalPremiumModulesPrice () {
      const subscriptions = this.premiumModules.filter(module => module.isSubscribed);
      if (!subscriptions.length) return 0;
      let total = 0;
      subscriptions.forEach(module => {
        total+=module.price;
      });
      return total;
    }
  },
  created () {
    const step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    if (step1Data && !step1Data.hasOwnProperty('email')
      && !step1Data.hasOwnProperty('clinicType')) {
      this.$router.push({ name: 'signup-specialized-step-1'});
    } else {
      this.step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    }
  },
  methods: {
    isMinimum (number) {
      return number <= 1;
    },
    proceedToCheckout () {

    },
    goBack () {
      this.$router.push({name: 'signup-specialized-step-2'});
    }
  },
};
</script>

<style scoped>
.link-to-home:hover {
  cursor: pointer;
}
.input-field {
  border-style: groove;
  width: 60px;
  padding-left: 10px;
}
.night-text {
  color: white !important;
}
</style>