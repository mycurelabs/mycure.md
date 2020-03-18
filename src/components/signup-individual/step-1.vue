<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md5 :class="[{'pt-5': !$isMobile}, {'mt-5': !$isMobile}]")
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
          v-layout(row).pt-5
            v-flex.mb-3
              b.font-18 Already have an account? 
                router-link(:to="{ name: 'signin' }") Sign in.
        v-flex(xs12 md5)
          v-card
            v-card-text
              h1 Create a MYCURE Account
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-layout(row)
                  v-flex.mr-1
                    v-text-field(
                      v-model="user.firstName"
                      outline
                      label="First Name"
                      :rules="[requiredRule]"
                      :disabled="loading"
                    ).step-one-text-field
                  v-flex.ml-1
                    v-text-field(
                      v-model="user.lastName"
                      outline
                      label="Last Name"
                      :rules="[requiredRule]"
                      :disabled="loading"
                    )
                v-select(
                  v-model="user.role"
                  v-if="pageType === 'signup-specialized'"
                  :items="roles"
                  label="What is your role?"
                  outline
                  item-text="name"
                  item-value="value"
                  :rules="[requiredRule]"
                  :disabled="loading"
                  clearable
                )
                v-text-field(
                  v-model="user.doc_PRCLicenseNo"
                  v-if="pageType === 'signup-individual' || user.role === 'doctor'"
                  label="Physician License No"
                  outline
                  :rules="[requiredRule, numberRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="user.mobileNo"
                  label="Mobile Number"
                  type="number"
                  outline
                  :prefix="`+${user.countryCallingCode}`"
                  :loading="loadingForm || loading"
                  :disabled="loadingForm || loading"
                  :error-messages="mobileNoErrorMessage"
                  :rules="[requiredRule]"
                  @blur="validatePhoneNo"
                )
                  template(slot="append")
                    v-tooltip(bottom)
                      v-btn(icon style="margin-top: -5px" @click="countryDialog = true" slot="activator").ma-0
                        img(width="25" :src="user.countryFlag").flag-img.mt-2
                      | Change Country
                  //- NOTE: DO NOT REMOVE YET
                  //- template(slot="append-outer")
                  //-   v-tooltip(bottom)
                  //-     v-btn(small icon slot="activator" @click="countryDialog = true" :disabled="loading")
                  //-       v-icon mdi-earth
                  //-     | Change Country
                v-divider
                br
                v-text-field(
                  v-model="user.email"
                  type="email"
                  label="Email Address"
                  outline
                  :rules="[requiredRule, emailRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="user.password"
                  label="Password"
                  outline
                  :type="showPass ? 'text' : 'password'"
                  :rules="[requiredRule]"
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  :disabled="loading"
                  @click:append="showPass = !showPass"
                )
                v-text-field(
                  v-model="confirmPassword"
                  label="Confirm Password"
                  outline
                  type="password"
                  :rules="[requiredRule, matchPasswordRule]"
                  :disabled="loading"
                )
                v-checkbox(
                  v-model="user.acceptTerms"
                  hide-details
                  style="margin-top: -10px"
                  :rules="[requiredRule]"
                  :disabled="loading"
                ).mb-4
                  template(slot="label")
                    p(style="margin-bottom: -12px") By creating a MYCURE account, you're agreeing to accept MYCURE&nbsp;
                      a(target="_blank" @click.stop="gotoTerms") Terms & Privacy Policy
                v-alert(:value="error" type="error").mt-5 {{errorMessage}}
            v-card-actions
              v-spacer
              v-btn(
                color="accent"
                @click="next"
                :disabled="loading || !valid"
                :loading="loading"
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
    email-verification-dialog(
      v-model="emailVerificationMessageDialog"
      :email="user.email"
      @confirm="doneSignupNonPH"
    )
</template>

<script>
// - utils
import { getCountry, getCountries, signupIndividual } from '../../utils/axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
// - components
import EmailVerificationDialog from './email-verification-dialog';
export default {
  components: {
    EmailVerificationDialog
  },
  data () {
    return {
      valid: false,
      loading: false,
      loadingForm: false,
      countryDialog: false,
      emailVerificationMessageDialog: false,
      showPass: false,
      countries: [],
      searchString: '',
      user: {
        countryCallingCode: '',
        countryFlag: null,
      },
      confirmPassword: '',
      requiredRule: v => !!v || 'This field is required',
      numberRule: v => v >= 0 || 'Please input a valid number',
      emailRule: v => /.+@.+/.test(v) || 'Email address must be valid',
      matchPasswordRule: v => v === this.user.password || 'Passwords do not match',
      error: false,
      errorMessage: 'There was an error please try again later.',
      mobileNoError: false,
      mobileNoErrorMessage: '',
      checkListItems: [
        'Manage your clinic more efficiently',
        'Produce beautiful and useful reports',
        'Save on time and save more lives!'
      ],
      // - TODO: update corresponding role values
      roles: [
        { name: 'Owner', value: 'owner' },
        { name: 'Administrator', value: 'admin' },
        { name: 'Manager', value: 'manager' },
        { name: 'Doctor', value: 'doctor' },
        { name: 'Staff', value: 'staff' }
      ]
    };
  },
  computed: {
    pageType () {
      return this.$route.meta.pageType;
    }
  },
  watch: {
    'user.mobileNo': {
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
        this.validateForm();
        if (!this.valid) return;
        this.saveModel(this.user);
        if (this.pageType === 'signup-individual') {
          await signupIndividual(this.user);
          if (this.user.countryCallingCode !== '63') {
            localStorage.clear();
            this.emailVerificationMessageDialog = true;
          } else {
            this.$router.push({ name: 'signup-individual-step-2' });
          }
        } else {
          this.$router.push({ name: 'signup-specialized-step-2' });
        }
        
      } catch (e) {
        console.error(e);
        this.error = true;
        if (e.code === 11000) {
          this.errorMessage = `The email ${this.user.email} or mobile number ${this.user.mobileNo} is already in use.`;
        }
      } finally {
        this.loading = false;
      }
    },
    async init () {
      this.loadingForm = true;
      
      // Load model
      if (localStorage.getItem('individual:step1:model')) {
        this.user = {
          ...JSON.parse(localStorage.getItem('individual:step1:model')),
          password: '',
          confirmPassword: ''
        };
      } else {
        const country = await getCountry();
        const { location } = country;
        this.user.countryCallingCode = location ? location.calling_code : '63';
        this.user.countryFlag = location ? location.country_flag : 'http://assets.ipstack.com/flags/ph.svg';
      }

      // Load countries
      this.getCountries();

      this.loadingForm = false;
    },
    saveModel (val) {
      const saveVal = {
        ...val,
        password: this.pageType === 'signup-individual' ? '' : val.password,
        acceptTerms: false
      };
      localStorage.setItem('individual:step1:model', JSON.stringify(saveVal));
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
      this.user.countryCallingCode = country.callingCodes[0];
      this.user.countryFlag = country.flag;
      this.countryDialog = false;
      this.searchString = '';
    },
    gotoTerms () {
      window.open('https://mycure.md/terms', '_blank');
    },
    validateForm () {
      const valid = this.$refs.formRef.validate();
      this.validatePhoneNo();
      this.valid = valid && this.mobileNoError;
    },
    validatePhoneNo () {
      this.mobileNoError = false;
      this.mobileNoErrorMessage = '';
      try {
        let countryCode = this.user.countryCallingCode;
        let mobileNo = this.user.mobileNo;
        let phoneNumber = parsePhoneNumberFromString(`+${countryCode}${mobileNo}`);
        if (!phoneNumber || !phoneNumber.isValid()) {
          throw new Error();
        } else {
          this.mobileNoError = true;
        }
      } catch (e) {
        this.mobileNoError = false;
        this.mobileNoErrorMessage = 'Invalid mobile number format';
      }
    },
    doneSignupNonPH () {
      this.emailVerificationMessageDialog = false;
      this.$router.push({ name: 'signin' });
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

.flag-img {
  margin-bottom: 5px;
}

.flag-img:hover {
  cursor: pointer;
}

/* TODO: confirm if needed. This will defeat uniformity across other forms. */
/* .step-one-text-field {
  border-width: thin !important;
} */
</style>