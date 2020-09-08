<template lang="pug">
  v-container
    v-row(
      justify="center"
      align="center"
      style="min-height: 80vh"
    )
      v-col(
        cols="12"
        sm="5"
        md="6"
        lg="5"
        xl="3"
      )
        img(
          src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
          alt="MYCURE logo"
          @click="$nuxt.$router.push({ name: 'index' })"
        ).link-to-home.mb-3
        h2.font-18.primary--text {{ route === 'hippocrates' ? 'Hippocrates' : 'Multispecialty Clinic' }}:&nbsp;
          br(v-if="$isMobile")
          | Sign Up (Step 1 of 3)
        br
        h1#step-1-title Make your clinic more efficient in minutes.
        br
        v-row(
          v-for="(item, key) in checkListItems"
          align="center"
          no-gutters
          :key="key"
        )
          v-col(cols="1").mt-n2
            img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
          v-col(cols="11")
            p.font-21 {{ item }}
        v-row.pt-5
          v-col.mb-3
            b.font-18 Already have an account?&nbsp;
              br(v-if="$isMobile")
              nuxt-link(:to="{ name: 'signin' }") Sign in.
      v-col(
        cols="12"
        sm="5"
        md="6"
        lg="5"
        xl="3"
        :class="formCardClasses"
      )
        v-card
          v-card-text
            h1 Tell us about your facility.
          v-card-text
            v-form(ref="formRef" v-model="valid")
              v-text-field(
                v-model="clinic.facilityName"
                label="Clinic Name"
                outlined
                :rules="[requiredRule]"
              )#clinicName.step-one-field.font-21
                template(v-if="clinic.facilityName" v-slot:append)
                  v-icon(color="accent") mdi-check
              v-text-field(
                v-model="clinic.facilityAddress"
                label="Clinic Address"
                outlined
                :rules="[requiredRule]"
              ).step-one-field.font-21
                template(v-if="clinic.facilityAddress" v-slot:append)
                  v-icon(color="accent") mdi-check
              //- FOR REFERENCE 'https://github.com/mycurelabs/web-main/issues/822'
              //- v-text-field(
              //-   v-model="clinic.numberOfStaff"
              //-   label="No. of staff (?)"
              //-   outlined
              //-   :rules="[requiredRule, ...numberRules]"
              //- ).step-one-field.font-21
                template(v-slot:append v-if="clinic.numberOfStaff && clinic.numberOfStaff > 0 && !decimalTest(clinic.numberOfStaff)")
                  v-icon(color="accent") mdi-check
              v-text-field(
                v-model="clinic.numberOfPatients"
                label="Average patients per day (?)"
                outlined
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
              large
              :disabled="!valid"
              @click="next"
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
  mounted () {
    if (process.browser) {
      this.$nextTick(() => {
        document.getElementById('clinicName') && document.getElementById('clinicName').focus();
      });
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
a {
  text-decoration: none;
}
h1 {
  line-height: 35px;
}

.link-to-home:hover {
  cursor: pointer;
}

.step-one-field >>> label {
  font-size: 18px !important;
}
</style>
