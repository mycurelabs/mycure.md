<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md10)
      v-layout(row justify-center)
        v-flex(xs12 md5)
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          h1#step-1-title Become a techy doctor in minutes!
          br
          v-layout(row)
            v-flex(shrink).pr-2
              img(width="20" src="../../assets/images/mycure-check.png")
            v-flex(shrink)
              p Better operations
          v-layout(row)
            v-flex(shrink).pr-2
              img(width="20" src="../../assets/images/mycure-check.png")
            v-flex(shrink)
              p Beautiful reports
          v-layout(row)
            v-flex(shrink).pr-2
              img(width="20" src="../../assets/images/mycure-check.png")
            v-flex(shrink)
              p Bye paperworks
        v-flex(xs12 md5)
          v-card
            v-card-text
              h5.primary--text Step 1 of 3
              h1 Create an account.
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-text-field(
                  v-model="doctor.firstName"
                  outline
                  label="First Name"
                  :rules="[requiredRule]"
                )
                v-text-field(
                  v-model="doctor.lastName"
                  outline
                  label="Last Name"
                  :rules="[requiredRule]"
                )
                v-text-field(
                  v-model="doctor.mobileNo"
                  label="Mobile Number"
                  mask="NNNN-NNN-NNN"
                  outline
                  :prefix="`+${doctor.countryCallingCode}`"
                  :rules="[requiredRule]"
                  :loading="loadingForm"
                  :disabled="loadingForm"
                )
                  template(slot="append")
                    img(width="25" :src="doctor.countryFlag").mt-2
                  template(slot="append-outer")
                    v-tooltip(bottom)
                      v-btn(small icon slot="activator" @click="countryDialog = true")
                        v-icon mdi-earth
                      | Change Country
                v-divider
                br
                v-text-field(
                  v-model="doctor.email"
                  type="email"
                  label="Email Address"
                  outline
                  :rules="[requiredRule]"
                )
                v-text-field(
                  v-model="doctor.password"
                  label="Password"
                  outline
                  :type="showPass ? 'text' : 'password'"
                  :rules="[requiredRule]"
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="showPass = !showPass"
                )
                v-checkbox(
                  v-model="doctor.acceptTerms"
                  hide-details
                  style="margin-top: -10px"
                  :rules="[requiredRule]"
                ).mb-4
                  template(slot="label")
                    p(style="margin-bottom: -35px") By creating a MYCURE account, you're agreeing to accept MYCURE&nbsp;
                      a(target="_blank" @click.stop="gotoTerms") Terms & Privacy Policy

            v-card-actions
              v-spacer
              v-btn(
                color="accent"
                @click="next"
              ) Next
          div.mt-3
            b Already have an account? 
              router-link(:to="{ name: 'signin' }") Sign in.
    
    v-dialog(v-model="countryDialog" width="500" scrollable)
      v-card
        v-toolbar(flat)
          v-text-field(
            v-model="searchString" 
            label="Search Country"
            solo
            hide-details
            clearable
            autofocus
            flat
          )
        v-card-text(style="height: 300px").pa-0
          v-list
            v-list-tile(v-for="(country, key) in countries" @click="selectCountry(country)" :key="key")
              v-list-tile-action
                img(width="25" :src="country.flag")
              v-list-tile-content
                v-list-tile-title {{country.name}}
          
</template>

<script>
import { getCountry, getCountries } from '../../utils/axios';
export default {
  data () {
    return {
      valid: false,
      loadingForm: false,
      countryDialog: false,
      showPass: false,
      countries: [],
      searchString: '',
      doctor: {
        countryCallingCode: '',
        countryFlag: null,
      },
      requiredRule: v => !!v || 'This field is required'
    };
  },
  watch: {
    doctor: {
      handler (val) {
        localStorage.setItem('individual:step1:model', JSON.stringify(val));
      },
      deep: true
    },
    searchString (val) {
      if (typeof val !== 'string' || val === '') {
        this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
        return;
      }
      const needle = val.toLowerCase();
      this.countries = this.countries.filter(v => v.name.toLowerCase().indexOf(needle) > -1);
    }
  },
  methods: {
    next () {
      if (this.$refs.formRef.validate()) {
        this.$router.push({ name: 'signup-individual-step-2' });
      }
    },
    async init () {
      this.loadingForm = true;
      
      // Load model
      if (localStorage.getItem('individual:step1:model')) {
        this.doctor = JSON.parse(localStorage.getItem('individual:step1:model'));
      } else {
        const country = await getCountry();
        const { location } = country;
        this.doctor.countryCallingCode = location.calling_code;
        this.doctor.countryFlag = location.country_flag;
      }

      // Load countries
      this.getCountries();

      this.loadingForm = false;
    },
    async getCountries () {
      if (!localStorage.getItem('mycure:countries')) {
        this.countries = await getCountries();
        localStorage.setItem('mycure:countries', JSON.stringify(this.countries));
      } else {
        this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
      }
    },
    selectCountry (country) {
      this.doctor.countryCallingCode = country.callingCodes[0];
      this.doctor.countryFlag = country.flag;
      this.countryDialog = false;
      this.searchString = '';
    },
    gotoTerms () {
      window.open('https://mycure.md/terms', '_blank');
    }
  },
  async created () {
    this.init();
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
</style>