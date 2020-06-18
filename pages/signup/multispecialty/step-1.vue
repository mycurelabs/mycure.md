<template lang="pug">
  v-row(justify="center" align="center")
    v-col(cols="12" md="10")
      v-row(justify="center")
        v-col(cols="12" md="5" :class="contentClasses")
          img(
            src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE logo"
          ).link-to-home.mb-3
          h2.font-18.primary--text {{ route === 'hippocrates' ? 'Hippocrates' : 'Multispecialty Clinic' }}: Sign Up (Step 1 of 3)
          br
          h1#step-1-title Make your clinic more efficient in minutes.
          br
          v-row(v-for="(item, key) in checkListItems" :key="key" align="center" no-gutters)
            v-col(cols="1")
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(cols="11")
              p.font-21 {{ item }}
          v-row.pt-5
            v-col.mb-3
              b.font-18 Already have an account?&nbsp;
                nuxt-link(:to="{ name: 'signin' }") Sign in.
        v-col(cols="12" md="5" :class="formCardClasses")
          v-card
            v-card-text
              h1 Tell us about your facility.
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-text-field(
                  v-model="clinic.facilityName"
                  outlined
                  label="Clinic Name"
                  :rules="[requiredRule]"
                ).step-one-field.font-21
                  template(v-slot:append v-if="clinic.facilityName")
                    v-icon(color="accent") mdi-check
                v-text-field(
                  v-model="clinic.facilityAddress"
                  outlined
                  label="Clinic Address"
                  :rules="[requiredRule]"
                ).step-one-field.font-21
                  template(v-slot:append v-if="clinic.facilityAddress")
                    v-icon(color="accent") mdi-check
                v-text-field(
                  v-model="clinic.numberOfStaff"
                  outlined
                  label="No. of staff (?)"
                  :rules="[requiredRule, ...numberRules]"
                ).step-one-field.font-21
                  template(v-slot:append v-if="clinic.numberOfStaff && clinic.numberOfStaff > 0 && !decimalTest(clinic.numberOfStaff)")
                    v-icon(color="accent") mdi-check
                v-text-field(
                  v-model="clinic.numberOfPatients"
                  outlined
                  label="Average patients per day (?)"
                  :rules="[requiredRule, ...numberRules]"
                ).step-one-field.font-21
                  template(v-slot:append v-if="clinic.numberOfPatients && clinic.numberOfPatients > 0 && !decimalTest(clinic.numberOfPatients)")
                    v-icon(color="accent") mdi-check
                h5(style="margin-bottom: -20px;").grey--text.font-21 Does your clinic have other branches?
                v-radio-group(row v-model="clinic.hasOtherBranches")
                  v-radio(label="Yes" :value="true").step-one-field
                  v-radio(label="No" :value="false").step-one-field
            v-card-actions
              v-spacer
              v-btn(
                color="accent"
                :disabled="!valid"
                @click="next"
                large
              ).font-weight-bold Next
</template>

<script>
// - utils
import dayOrNight from '~/utils/day-or-night';
import headMeta from '~/utils/head-meta';

export default {
  layout: 'user',
  data () {
    this.dayOrNight = dayOrNight();
    return {
      valid: false,
      clinic: {},
      requiredRule: v => !!v || 'This field is required',
      numberRules: [
        v => v > 0 || 'Please enter a positive number',
        v => !(/.\./.test(v)) || 'Whole numbers only',
      ],
      checkListItems: [
        'Better operations',
        'Beautiful reports',
        'Bye paperworks',
      ],
    };
  },
  computed: {
    route () {
      return this.$nuxt.$route?.params?.route || 'multispecialty';
    },
    formCardClasses () {
      return [{ 'mb-10': this.$isMobile }];
    },
    contentClasses () {
      return [{ 'content-padding': !this.$isMobile }];
    },
  },
  created () {
    if (process.browser) {
      if (localStorage.getItem('multi:step1:model')) {
        this.clinic = JSON.parse(localStorage.getItem('multi:step1:model'));
      } else {
        this.clinic.hasOtherBranches = true;
      }
    }
  },
  methods: {
    next () {
      if (this.$refs.formRef.validate()) {
        if (process.browser) {
          localStorage.setItem('multi:step1:model', JSON.stringify(this.clinic));
        }
        this.$nuxt.$router.push({ name: 'signup-multispecialty-step-2', params: { route: this.route } });
      }
    },
    decimalTest (val) {
      const test = /.\./.test(val);
      return test;
    },
  },
  head () {
    return headMeta({
      title: 'Book a Free Demo for MYCURE Clinic Management System',
      description: 'Book a free demo with MYCURE Specialists to learn more how the clinic management system can help boost your clinic performance',
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
h1 {
  line-height: 35px;
}

.link-to-home:hover {
  cursor: pointer;
}

.content-padding {
  padding-top: 100px;
}

.step-one-field >>> label {
  font-size: 18px !important;
}
</style>
