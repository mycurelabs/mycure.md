<template lang="pug">
  v-container
    v-layout(row wrap justify-center)
      v-flex(xs12 md10)
        v-card
          v-toolbar(flat).grey-lighten-4
            h1.font-30 {{ clinicName }}
            v-spacer
            h2.font-25.primary--text ${{  totalSubscription }}/mo
          v-card-text.pa-4
            v-layout(row wrap).pt-3
              v-flex(xs12 md3)
                v-icon(color="primary" medium) mdi-numeric-1-box
                br
                p.font-21 {{ clinicName }}
                p.font-16.grey--text Your first clinic is free
                  br
                  | Additional clinics are $5/mo.
                  br
                  span.black--text Starts free
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
                  span.black--text Price: ${{storagePrice}}/gb/mo
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
                  span.black--text Price: ${{ doctorSeatsPrice }}/gb/mo
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
                  span.black--text Price: ${{ staffSeatsPrice }}/gb/mo
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
                  span.black--text Price: varies per module
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
                      span.black--text Essential Features&nbsp;
                      img(:src="require('@/assets/images/mycure-check.png')" alt="Check" width="4%")
                      br
                      | All the modules you need to run your clinic system -
                      br
                      | Registration, Medical Records, Billing, EMR.
                      br
                      p.black--text Price: FREE
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
                  v-flex(xs2 md1)
                    v-img(
                      :src="require(`@/assets/images/subscription/mycure-accounts-subscription-modules-icon-${module.icon}${module.isSubscribed ? '-active' : ''}.png`)"
                      :alt="module.icon"
                    )
                  v-flex(xs10 md11).font-16.pl-3
                    p.grey--text 
                      span.black--text {{ module.name }}&nbsp;
                      img(
                        v-if="module.isSubscribed"
                        :src="require('@/assets/images/mycure-check.png')"
                        alt="Check" 
                        width="4%"
                      )
                      br
                      | {{ module.description }}
                      br
                      p.black--text Price: ${{ module.price }}/mo
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
                p.font-21 ${{ totalSubscription }}/mo
              v-divider
            v-layout(row wrap).text-xs-center
              v-flex(xs12 md3 offset-md6)
                p.grey--text.font-21 Estimated Tax
              v-flex(xs12 md3)
                p.font-21 ${{ tax }}/mo
            v-layout(row wrap).text-xs-center.grey.lighten-4
              v-flex(xs12 md3 offset-md6)
                h2.font-weight-regular {{ clinicName }}'s Total
              v-flex(xs12 md3)
                h2 ${{ totalSubscription + tax }}/mo
          v-card-actions
            v-spacer
            v-btn(
              :color="$mcColors.mcAltGreen"
              dark
              large
              @click="proceedToCheckout"
            ).text-none.font-weight-bold Proceed to Checkout
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      // Prices
      storagePrice: 5,
      doctorSeatsPrice: 6,
      staffSeatsPrice: 5,
      // Models
      clinicName: 'Metro City Clinic',
      storageGB: 1,
      doctorSeats: 1,
      staffSeats: 1,
      premiumModules: [
        {
          name: 'Laboratory',
          description: 'Insert description here',
          icon: 'lab',
          isSubscribed: false,
          price: 5
        },
        {
          name: 'Imaging',
          description: 'Insert description here',
          icon: 'imaging',
          isSubscribed: false,
          price: 5
        },
        {
          name: 'Materials Management',
          description: 'Insert description here',
          icon: 'inventory',
          isSubscribed: false,
          price: 5
        },
        {
          name: 'Physical Medical Exam',
          description: 'Insert description here',
          icon: 'pme',
          isSubscribed: false,
          price: 10
        },
        {
          name: 'Pharmacy',
          description: 'Insert description here',
          icon: 'pharmacy',
          isSubscribed: false,
          price: 8
        }
      ]
    };
  },
  computed: {
    currentSubscription () {
      const mock = 50;
      return mock;
    },
    totalSubscription () {
      return this.totalStoragePrice + this.totalDoctorSeatsPrice + this.totalStaffSeatsPrice + this.totalPremiumModulesPrice;
    },
    tax () {
      const tax = 0.20;
      return tax;
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
  methods: {
    isMinimum (number) {
      return number <= 1;
    },
    proceedToCheckout () {

    }
  }
};
</script>

<style scoped>
.input-field {
  border-style: groove;
  width: 70px;
}
</style>