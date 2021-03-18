<template lang="pug">
  v-container(v-if="!loading.page")
    v-row(justify="end")
      | Already have an account?&nbsp;&nbsp;
      v-btn(
        color="primary"
        :to="{ name: 'signin' }"
      ).text-none Log In
    v-row(justify="center" align="center")
      v-col(cols="12" md="7" justify="center" align="center")
        img(
          src="~/assets/images/sign-up-individual-step-1/mycure-sso-sign-in-logo.svg"
          alt="MYCURE logo"
          :width="$isMobile ? '50' : '70'"
          :class="{ 'mb-5': !$isMobile }"
          @click="$router.push({ name: 'index' })"
        ).link-to-home
        h1(v-if="!$isMobile").mb-5 Level up your healthcare services and get more patients safely
        h2(v-else style="line-height: 1.25em;").mb-5 Level up your healthcare services and get more patients safely
        v-form(ref="formRef" v-model="valid" @submit.prevent="submit")
          v-row(:no-gutters="$isMobile")
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-1.order-sm-1
              //- First Name
              v-text-field(
                ref="firstNameRef"
                v-model="firstName"
                label="First Name"
                outlined
                :rules="isRequired"
                :disabled="loading.form"
              )
                template(v-slot:append v-if="firstName")
                  v-icon(color="accent") mdi-check
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-2.order-sm-2
              //- Last Name
              v-text-field(
                v-model="lastName"
                label="Last Name"
                outlined
                :rules="isRequired"
                :disabled="loading.form"
              )
                template(v-slot:append v-if="lastName")
                  v-icon(color="accent") mdi-check
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-3.order-sm-3
              //- Email
              v-text-field(
                v-model="email"
                label="Email"
                outlined
                :rules="emailRules"
                :disabled="loading.form"
                @keyup="checkEmail"
              )
                template(v-slot:append v-if="isEmailValid")
                  v-icon(color="accent") mdi-check
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-4.order-sm-6
              //- v-text-field(
              //-   v-model="mobileNo"
              //-   label="Mobile No."
              //-   outlined
              //-   :rules="[isRequired]"
              //- )
              //- Mobile No.
              v-text-field(
                v-model="mobileNo"
                label="Mobile Number"
                type="number"
                outlined
                :prefix="`+${countryCallingCode}`"
                :disabled="loading.form"
                :rules="[...isRequired, mobileNumberRule]"
                @keypress="checkNumberInput($event)"
              )
                template(slot="append")
                  div(style="margin-top: -8px")
                    v-icon(v-if="mobileNoError" color="accent").ml-n10 mdi-check
                    v-tooltip(bottom)
                      template(v-slot:activator="{ on }")
                        v-btn(icon @click="countryDialog = true" v-on="on")
                          img(width="25" :src="countryFlag").flag-img.mt-2
                      | Change Country
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-5.order-sm-4
              //- Password
              v-text-field(
                v-model="password"
                label="Password"
                outlined
                :type="showPass ? 'text' : 'password'"
                :rules="passwordRules"
                :disabled="loading.form"
                :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="showPass = !showPass"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-6.order-sm-5
              //- Confirm Password
              v-text-field(
                v-model="confirmPassword"
                label="Confirm Password"
                type="password"
                outlined
                :rules="[...isRequired, matchPasswordRule]"
                :disabled="loading.form"
              )
                template(v-slot: append v-if="confirmPassword && confirmPassword === password")
                  v-icon(color="accent") mdi-check
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-7.order-sm-7
              v-autocomplete(
                v-model="clinicType"
                label="Health Facility Type"
                item-text="text"
                item-value="value"
                outlined
                :items="clinicTypes"
                :rules="isRequired"
                :disabled="loading.form"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-8.order-sm-8
              v-autocomplete(
                v-model="roles"
                label="Your Role"
                item-text="text"
                item-value="value"
                outlined
                :items="userRoles"
                :rules="isRequired"
                :disabled="loading.form"
              )
            v-col(
              cols="12"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-9.order-sm-9
              v-checkbox(
                v-model="agree"
                hide-details
                color="primary"
                style="margin-top: 0px"
                :disabled="loading.form"
              )
                template(slot="label")
                  span
                    | I agree to MYCURE's&nbsp;
                    a(@click.stop="goToTerms") Terms of Use&nbsp;
                    | and&nbsp;
                    a(@click.stop="goToPrivacy") Privacy Policy.
              v-alert(:value="error" type="error").mt-5 {{ errorMessage }}
            v-col(
              cols="12"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-10.order-sm-10
              v-btn(
                type="submit"
                large
                color="success"
                :disabled="loading.form || !valid || !agree"
                :loading="loading.form"
              ).mt-5.text-none #[b Create my free account]
    //- Country Dialog
    v-dialog(v-model="countryDialog" width="500" scrollable)
      v-card
        v-toolbar(flat)
          v-text-field(
            v-model="searchString"
            label="Search Country"
            append-icon="mdi-magnify"
            solo
            hide-details
            clearable
            flat
          )
        v-divider
        v-card-text(style="height: 300px").pa-0
          v-list
            v-list-item(v-for="(country, key) in countries" @click="selectCountry(country)" :key="key")
              v-list-item-action
                img(width="25" :src="country.flag")
              v-list-item-content
                v-list-item-title.text-wrap {{ country.name }}
              strong +{{ country.callingCodes[0] }}
</template>

<script>
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  getCountries,
  getCountry,
  signupFacility,
} from '~/utils/axios';
import {
  requiredRule,
  emailRules,
  passwordRules,
} from '~/utils/text-field-rules';
export default {
  layout: 'user',
  data () {
    // TEXT FIELD RULES
    this.isRequired = requiredRule;
    this.emailRules = emailRules;
    this.passwordRules = passwordRules;
    this.matchPasswordRule = v => v === this.password || 'Passwords do not match';
    this.mobileNumberRule = v => this.validatePhoneNo(v) || 'Invalid phone number';
    // ENUM
    // Clinic Types
    this.clinicTypes = [
      { text: 'Doctor\'s Clinic', value: 'personal-clinic' },
      { text: 'Group Clinic', value: 'group-clinic' },
      { text: 'Multispecialty Clinic', value: 'cms' },
      { text: 'Diagnostic Clinic', value: 'diagnostic-center' },
      { text: 'Corporate Clinic', value: 'company' },
      { text: 'Medical Center', value: 'health-group' },
      { text: 'Hospital', value: 'his' },
      { text: 'Other', value: 'facility' },
    ];
    this.userRoles = [
      { text: 'Physician/Owner', roles: ['doctor', 'admin'] },
      { text: 'Administrator', roles: ['admin'] },
    ];
    return {
      // Models
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      clinicType: '',
      roles: [],
      agree: '',
      // County Dialog
      countryDialog: false,
      searchString: '',
      countries: [],
      countryCallingCode: '',
      countryFlag: '',
      // UI States
      showPass: false,
      loading: {
        page: true,
        form: false,
      },
      // validity
      valid: false, // Overall form details validity
      isEmailValid: false, // email validity
      // Errors
      error: false,
      errorMessage: 'There was an error please try again later.',
      mobileNoError: false,
    };
  },
  watch: {
    searchString (val) {
      if (typeof val !== 'string' || val === '') {
        return;
      }
      const needle = val.toLowerCase();
      this.countries = this.countries.filter(v => v?.name?.toLowerCase().startsWith(needle)); // eslint-disable-line
    },
  },
  created () {
    this.loading.page = false;
    this.init();
  },
  methods: {
    async init () {
      try {
        this.loading.form = true;
        await this.getCountries();
        const country = await getCountry();
        const { location } = country;
        this.countryCallingCode = location ? location.calling_code : '63';
        this.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
        // Check if email has been passed
        this.email = this.$route.query.email;
      } catch (e) {
        console.error(e);
      } finally {
        this.loading.form = false;
      }
    },
    async submit () {
      try {
        this.loading.form = true;
        this.error = false;
        if (!this.$refs.formRef.validate()) {
          return;
        }
        const payload = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          mobileNo: this.mobileNo,
          countryCallingCode: this.countryCallingCode,
          clinicType: this.clinicType,
          roles: this.roles,
        };
        this.saveModel(payload);
        await signupFacility(payload);
        if (this.countryCallingCode !== '63') {
          this.emailVerificationMessageDialog = true;
        } else {
          this.$nuxt.$router.push({ name: 'signup-health-facilities-otp-verification' });
        }
      } catch (e) {
        console.error(e);
        this.error = true;
        const errorCode = parseInt(e?.message?.replace(/ .*/, '').substr(1));
        if (errorCode === 11000) {
          this.errorMessage = 'The email or mobile number you have entered is invalid or taken. Please try again.';
          return;
        }
        this.errorMessage = 'There was an error please try again later';
      } finally {
        this.loading.form = false;
      }
    },
    saveModel (val) {
      const saveVal = { ...val };
      if (process.browser) {
        localStorage.setItem('facility:step1:model', JSON.stringify(saveVal));
      }
    },
    async getCountries () {
      try {
        if (process.browser) {
          if (!localStorage.getItem('mycure:countries')) {
            this.countries = await getCountries();
            localStorage.setItem('mycure:countries', JSON.stringify(this.countries));
          } else {
            this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
          }
        }
      } catch (e) {
        console.error(e);
      }
    },
    selectCountry (country) {
      this.countryCallingCode = country.callingCodes[0];
      this.countryFlag = country.flag;
      this.countryDialog = false;
      this.searchString = '';
    },
    validatePhoneNo (mobileNo) {
      this.mobileNoError = false;
      const countryCode = this.countryCallingCode;
      const phoneNumber = parsePhoneNumberFromString(`+${countryCode}${mobileNo}`);
      if (!phoneNumber || !phoneNumber.isValid() || mobileNo.charAt(0) === '0') {
        return false;
      } else {
        this.mobileNoError = true;
        return true;
      }
    },
    checkNumberInput (event) {
      if (!/\d/.test(event.key)) {
        return event.preventDefault();
      };
      return event;
    },
    goToTerms () {
      const routeData = this.$nuxt.$router.resolve({ name: 'terms' });
      if (process.client) {
        const changeRoute = window.open(routeData.href, '_blank');
        changeRoute.opener = null;
        changeRoute.rel = 'noopener noreferrer';
      }
    },
    goToPrivacy () {
      const routeData = this.$nuxt.$router.resolve({ name: 'privacy-policy' });
      if (process.client) {
        const changeRoute = window.open(routeData.href, '_blank');
        changeRoute.opener = null;
        changeRoute.rel = 'noopener noreferrer';
      }
    },
    checkEmail () {
      this.isEmailValid = /^.+@.+\.+[a-zA-Z]{2,3}$/.test(this.email);
    },
  },
};
</script>

<style scoped>
.link-to-home:hover {
  cursor: pointer;
}

::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
