<template lang="pug">
  v-container
    v-layout(row wrap justify-center)
      v-flex(xs12 md10)
        v-card
          v-toolbar(flat).grey-lighten-4
            h1.font-30 {{ clinicName }}
            v-spacer
            h2.font-25.primary--text ${{totalSubscription}}/mo
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
                p.font-16.grey--text You have 1 FREE Seat
                  br
                  | 1 GB is equivalent to 1,000 patient profiles.
                  br
                  span.black--text Price: $5/gb/mo
              v-flex(xs12 md3 align-self-center).text-xs-center
                //- TODO: Implement rule
                input(
                  v-model="storageGB"
                  type="number"
                  :disabled="loading"
                  :rules="storageGBRule"
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
                p.font-21 ${{ storagePrice }}/mo
            v-divider




</template>

<script>
export default {
  data () {
    return {
      loading: false,
      // Models
      clinicName: 'Metro City Clinic',
      storageGB: 3,
      // Rules
      storageGBRule: v => v >=1 || 'Invalid number'
    };
  },
  computed: {
    totalSubscription () {
      const mock = 50;
      return mock;
    },
    storagePrice () {
      return this.isMinimum(this.storageGB) ? 0 : (this.storageGB-1)*5;
    }
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