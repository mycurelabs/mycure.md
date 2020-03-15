<template lang="pug">
  v-container
    v-layout(row wrap justify-center)
      v-flex(xs12 md10)
        v-card
          v-toolbar(flat).grey-lighten-4
            h1.font-30 {{ clinicName }}
            v-spacer
            h2.font-25.primary--text ${{currentSubscription}}/mo
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
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      // Models
      clinicName: 'Metro City Clinic',
      storageGB: 1,
      doctorSeats: 1,
      staffSeats: 1,
      // Prices
      storagePrice: 5,
      doctorSeatsPrice: 6,
      staffSeatsPrice: 5,
    };
  },
  computed: {
    currentSubscription () {
      const mock = 50;
      return mock;
    },
    totalSubscription () {
      return this.totalStoragePrice + this.totalDoctorSeatsPrice + this.totalStaffSeatsPrice;
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
  },
  methods: {
    isMinimum (number) {
      return number <= 1;
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