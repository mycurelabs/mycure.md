<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md5 :class="[{'pt-5': !$isMobile}, {'mt-5': !$isMobile}]")
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          h1#step-1-title Make your clinic more efficient in minutes.
          br
          v-layout(row v-for="(item, key) in checkListItems" :key="key")
            v-flex(shrink).pr-2.pt-2
              img(width="20" src="../../assets/images/mycure-check.png")
            v-flex(shrink)
              p.font-21 {{ item }}
        v-flex(xs12 md5)
          v-card
            v-card-text
              h5.primary--text Step 1 of 3
              h1 Tell us about your facility.
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-text-field(
                  v-model="clinic.facilityName"
                  outline
                  label="Clinic Name"
                  :rules="[requiredRule]"
                ).step-one-field.font-21
                v-text-field(
                  v-model="clinic.facilityAddress"
                  outline
                  label="Clinic Address"
                  :rules="[requiredRule]"
                ).step-one-field.font-21
                v-text-field(
                  v-model="clinic.numberOfStaff"
                  outline
                  label="No. of staff (?)"
                  :rules="[requiredRule, ...numberRules]"
                ).step-one-field.font-21
                v-text-field(
                  v-model="clinic.numberOfPatients"
                  outline
                  label="Average patients per day (?)"
                  :rules="[requiredRule, ...numberRules]"
                ).step-one-field.font-21
                //- h5(style="margin-bottom: -20px;").grey--text No. of staff (?)
                //- v-slider(
                //-   color="primary"
                //-   thumb-label
                //-   step="1"
                //-   ticks
                //-   min="1"
                //-   max="50"
                //- )
                //- h5(style="margin-bottom: -20px;").grey--text Average patients per day (?)
                //- v-slider(
                //-   color="primary"
                //-   thumb-label
                //-   step="1"
                //-   ticks
                //-   min="1"
                //-   max="1000"
                //- )
                h5(style="margin-bottom: -20px;").grey--text.font-21 Does your clinic have other branches?
                v-radio-group(row v-model="clinic.hasOtherBranches")
                  v-radio(label="Yes" :value="true").step-one-field
                  v-radio(label="No" :value="false").step-one-field
            v-card-actions
              v-spacer
              v-btn(
                color="accent"
                @click="next"
              ) Next
          div.mt-3.font-18
            b Already have an account? 
              router-link(:to="{ name: 'signin' }") Sign in.
</template>

<script>
export default {
  data () {
    return {
      valid: false,
      clinic: {},
      requiredRule: v => !!v || 'This field is required',
      numberRules: [
        v => v > 0 || 'Number should be positive',
        v => !(/.\./.test(v)) || 'Whole numbers only'
      ],
      checkListItems: [
        'Better operations',
        'Beautiful reports',
        'Bye paperworks'
      ]
    };
  },
  watch: {
    clinic: {
      handler (val) {
        localStorage.setItem('multi:step1:model', JSON.stringify(val));
      },
      deep: true
    }
  },
  methods: {
    next () {
      if (this.$refs.formRef.validate()) {
        this.$router.push({ name: 'signup-multispecialty-step-2' });
      }
    }
  },
  created () {
    if (localStorage.getItem('multi:step1:model')) {
      this.clinic = JSON.parse(localStorage.getItem('multi:step1:model'));
    } else {
      this.clinic.hasOtherBranches = true;
    }
  }
};
</script>

<style scoped>
h1 {
  line-height: 35px;
}

.link-to-home:hover {
  cursor: pointer;
}

.step-one-field >>> label {
  font-size: 21px !important;
}
</style>