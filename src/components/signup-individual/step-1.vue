<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md5)
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          h1#step-1-title Become a techy doctor in minutes!
          br
          v-layout(row v-for="(item, key) in checkListItems" :key="key")
            v-flex(shrink).pr-2.pt-2
              img(width="20" src="../../assets/images/mycure-check.png")
            v-flex(shrink)
              p.font-21 {{ item }}
          br
          div.mt-3
            b.font-18.white--text Already have an account? 
              router-link(:to="{ name: 'signin' }") Sign in.
        v-flex(xs12 md5)
          v-card
            v-card-text
              h5.primary--text Step 1 of 3
              h1 Create a MYCURE Account.
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-layout(row)
                  v-flex.mr-1
                    v-text-field(
                      v-model="doctor.firstName"
                      outline
                      label="First Name"
                      :rules="[requiredRule]"
                      :disabled="loading"
                    ).step-one-text-field
                  v-flex.ml-1
                    v-text-field(
                      v-model="doctor.lastName"
                      outline
                      label="Last Name"
                      :rules="[requiredRule]"
                      :disabled="loading"
                    )
                v-text-field(
                  v-model="doctor.doc_PRCLicenseNo"
                  label="Physician License No"
                  outline
                  :rules="[requiredRule, numberRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="doctor.mobileNo"
                  label="Mobile Number"
                  type="number"
                  outline
                  :prefix="`+${doctor.countryCallingCode}`"
                  :loading="loadingForm || loading"
                  :disabled="loadingForm || loading"
                  :error="mobileNoError"
                  :error-messages="mobileNoErrorMessage"
                  :rules="[requiredRule]"
                  @blur="validatePhoneNo"
                )
                  template(slot="append")
                    v-tooltip(bottom)
                      img(width="25" :src="doctor.countryFlag" slot="activator" @click="countryDialog = true" :disabled="loading").mt-2.country-flag
                      | Change Country
                  //- template(slot="append-outer")
                  //-   v-tooltip(bottom)
                  //-     v-btn(small icon slot="activator" @click="countryDialog = true" :disabled="loading")
                  //-       v-icon mdi-earth
                  //-     | Change Country
                v-divider
                br
                v-text-field(
                  v-model="doctor.email"
                  type="email"
                  label="Email Address"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="doctor.password"
                  label="Password"
                  outline
                  :type="showPass ? 'text' : 'password'"
                  :rules="[requiredRule, ]"
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  :disabled="loading"
                  @click:append="showPass = !showPass"
                )
                v-checkbox(
                  v-model="doctor.acceptTerms"
                  hide-details
                  style="margin-top: -10px"
                  :rules="[requiredRule]"
                  :disabled="loading"
                ).mb-4
                  template(slot="label")
                    p(style="margin-bottom: -8px") By creating a MYCURE account, you're agreeing to accept MYCURE&nbsp;
                      a(target="_blank" @click.stop="gotoTerms") Terms & Privacy Policy
                v-alert(:value="error" type="error").mt-5 {{errorMessage}}
            v-card-actions
              v-spacer
              v-btn(
                color="accent"
                @click="next"
                :disabled="loading"
                :loading="loading"
                large
              ) Create my Account
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
    
    //- v-dialog(v-mode="errorDialog")
          
</template>

<script>
import { getCountry, getCountries, signupIndividual } from '../../utils/axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
export default {
  data () {
    return {
      valid: false,
      loading: false,
      loadingForm: false,
      countryDialog: false,
      showPass: false,
      countries: [],
      searchString: '',
      doctor: {
        countryCallingCode: '',
        countryFlag: null,
      },
      requiredRule: v => !!v || 'This field is required',
      numberRule: v => v >= 0 || 'Please input a valid number',
      error: false,
      errorMessage: 'There was an error please try again later.',
      mobileNoError: false,
      mobileNoErrorMessage: '',
      checkListItems: [
        'Manage your clinic more efficiently',
        'Produce beautiful and useful reports',
        'Save on time and save more lives!'
      ]
    };
  },
  watch: {
    doctor: {
      handler (val) {
        localStorage.setItem('individual:step1:model', JSON.stringify(val));
      },
      deep: true
    },
    'doctor.mobileNo': {
      handler () {
        this.validatePhoneNo();
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
    async next () {
      try {
        this.loading = true;
        this.error = false;
        this.mobileNoError = false;
        if (!this.$refs.formRef.validate()) return;
        await signupIndividual(this.doctor);
        this.$router.push({ name: 'signup-individual-step-2' });
      } catch (e) {
        console.error(e);
        this.error = true;
        if (e.code === 11000) {
          this.errorMessage = `The email ${this.doctor.email} or mobile number ${this.doctor.mobileNo} is already in use.`;
        }
      } finally {
        this.loading = false;
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
    },
    validatePhoneNo () {
      this.mobileNoError = false;
      this.mobileNoErrorMessage = '';
      try {
        let countryCode = this.doctor.countryCallingCode;
        let mobileNo = this.doctor.mobileNo;
        let phoneNumber = parsePhoneNumberFromString(`+${countryCode}${mobileNo}`);
        if (!phoneNumber || !phoneNumber.isValid()) throw new Error();
      } catch (e) {
        this.mobileNoError = false;
        this.mobileNoErrorMessage = 'Invalid mobile number format';
      }
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

.step-one-text-field {
  border-width: thin !important;
}
.country-flag:hover {
  cursor: pointer;
}
</style>