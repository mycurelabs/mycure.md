<template lang="pug">
  v-container
    v-row(justify="center" align="center" style="min-height: 80vh")
      v-col(cols="12" align="center" align-self="end")
        img(
          src="~/assets/images/sign-up-individual-step-1/mycure-sso-sign-in-logo.svg"
          alt="MYCURE logo"
          width="60"
          @click="$nuxt.$router.push({ name: 'index' })"
        ).link-to-home.pb-5
        h1.pb-3 Getting Started
      v-col(
        cols="12"
        sm="4"
        lg="3"
        xl="2"
        align-self="start"
      )
        img(
          v-if="!loadingForm"
          src="~/assets/images/sign-up-individual-step-1/mycure-su-message-blank@2x.png"
          width="100%"
        )
        p(v-if="loadingForm").text-justify.font-20
          | MYCURE virtual clinic is&nbsp;
          strong by invite only.
      v-col(
        cols="12"
        sm="7"
        lg="5"
        xl="4"
        justify="center"
        align-self="start"
      )
        v-form(ref="formRef" v-model="valid")
          //- FIRSTNAME AND LASTNAME
          v-row(no-gutters)
            v-col
              v-text-field(
                v-model="user.firstName"
                label="First Name"
                outlined
                :rules="requiredRule"
                :disabled="loading"
              )#firstName.pr-1
                template(v-slot:append v-if="user.firstName")
                  v-icon(color="accent") mdi-check
            v-col
              v-text-field(
                v-model="user.lastName"
                label="Last Name"
                outlined
                :rules="requiredRule"
                :disabled="loading"
              ).pl-1
                template(v-slot:append v-if="user.lastName")
                  v-icon(color="accent") mdi-check
          //- EMAIL
          v-text-field(
            v-model="user.email"
            type="email"
            label="Email Address"
            outlined
            :rules="emailRules"
            :disabled="loading"
            @keyup="checkEmail"
          )
            template(v-slot:append v-if="isEmailValid")
              v-icon(color="accent") mdi-check
          //- LICENSE NO. AND MOBILE NO.
          v-row(no-gutters)
            v-col
              v-text-field(
                v-model="user.doc_PRCLicenseNo"
                label="Physician License No"
                outlined
                :rules="numberRule"
                :disabled="loading"
              ).pr-1
                template(v-slot:append v-if="user.doc_PRCLicenseNo && user.doc_PRCLicenseNo>=2")
                  v-icon(color="accent") mdi-check
            v-col
              v-text-field(
                v-model="user.mobileNo"
                label="Mobile Number"
                type="number"
                outlined
                :prefix="`+${user.countryCallingCode}`"
                :error-messages="mobileNoErrorMessage"
                :rules="requiredRule"
                :loading="loadingForm || loading"
                :disabled="loadingForm || loading"
                @blur="validatePhoneNo"
                @keypress="checkNumberInput($event)"
              ).pl-1
                template(slot="append")
                  div(style="margin-top: -8px")
                    v-icon(v-if="mobileNoError" color="accent").ml-n10 mdi-check
                    v-tooltip(bottom)
                      template(v-slot:activator="{ on }")
                        v-btn(icon @click="countryDialog = true" v-on="on")
                          img(width="25" :src="user.countryFlag").flag-img.mt-2
                      | Change Country
          v-divider.my-2
          v-alert(:value="error" type="error").mt-5 {{ errorMessage }}
          v-row(no-gutters)
            v-col(:align="!$isMobile ? 'end' : 'center'" align-self="center").mt-6
              p(:class="{ 'float-left mt-3': !$isMobile }").primary--text
                a(@click="haveReferralHandler") I have a referral code.
              v-btn(
                color="primary"
                large
                :disabled="loading || !valid"
                :loading="loading"
                @click="getAccess"
              ).font-weight-bold Get Exclusive Access
      //- REQUEST SENT DIALOG
      v-dialog(v-model="requestSentDialog" width="350" persistent)
        v-card.text-center
          img(
            src="~/assets/images/sign-up-individual-step-1/mycure-su-banner-waitlist@2x.png"
            alt="Request Sent"
            width="100%"
          )
          v-card-text
            h1.py-3 Request Sent!
            strong Thanks for joining!
            p A MYCURE specialist will get in touch&nbsp;
              br(v-if="!$isMobile")
              | with you within 48 hours.
            p Meanwhile, see if you can find a peer&nbsp;
              br(v-if="!$isMobile")
              | in our directory so you can ask for a&nbsp;
              br(v-if="!$isMobile")
              | referral code and get free access&nbsp;
              br(v-if="!$isMobile")
              | right away!
            v-btn(
              color="accent"
              large
              @click="goToDocDirectory"
            ).my-2 VIEW DIRECTORY
      //- SELECT COUNTRY FOR MOBILE NO. DIALOG
      v-dialog(v-model="countryDialog" width="400" scrollable)
        v-card
          v-toolbar(flat)
            v-text-field(
              v-model="searchString"
              label="Search Country"
              append-icon="mdi-magnify"
              solo
              hide-details
              clearable
              autofocus
              flat
            )
          v-divider
          v-card-text(style="height: 300px").pa-0
            v-list
              v-list-item(v-for="(country, key) in countries" @click="selectCountry(country)" :key="key")
                v-list-item-action
                  img(width="25" :src="country.flag")
                v-list-item-content
                  v-list-item-title {{ country.name }}
                strong +{{ country.callingCodes[0] }}
      //- EMAIL VERIFICATION DIALOG
      email-verification-dialog(
        v-model="emailVerificationMessageDialog"
        :email="user.email"
        @confirm="doneSignupNonPH"
      )
</template>

<script>
import { parsePhoneNumberFromString } from 'libphonenumber-js';
// - components
import EmailVerificationDialog from './email-verification-dialog';
// - utils
import {
  getCountries,
  getCountry,
  createWaitlist,
} from '~/utils/axios';
import {
  requiredRule,
  numberRule,
  emailRules,
} from '~/utils/text-field-rules';
import dayOrNight from '~/utils/day-or-night';

export default {
  components: {
    EmailVerificationDialog,
  },
  data () {
    this.dayOrNight = dayOrNight();
    this.requiredRule = requiredRule;
    this.numberRule = numberRule;
    this.emailRules = emailRules;
    return {
      // UI STATE
      valid: false,
      loading: false,
      loadingForm: false,
      isEmailValid: false,
      countryDialog: false,
      requestSentDialog: false,
      emailVerificationMessageDialog: false,
      // MODELS
      user: {
        countryCallingCode: '',
        countryFlag: null,
      },
      countries: [],
      searchString: '',
      // ERROR
      error: false,
      errorMessage: 'There was an error please try again later.',
      mobileNoError: false,
      mobileNoErrorMessage: '',
    };
  },
  watch: {
    'user.mobileNo': {
      handler () {
        this.validatePhoneNo();
      },
    },
    searchString (val) {
      if (typeof val !== 'string' || val === '') {
        this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
        return;
      }
      const needle = val.toLowerCase();
      this.countries = this.countries.filter(v => v?.name?.toLowerCase().startsWith(needle)); // eslint-disable-line
    },
  },
  async created () {
    await this.init();
  },
  mounted () {
    // FOCUS IN FIRSTNAME TEXT FIELD
    if (process.browser) {
      this.$nextTick(() => {
        document.getElementById('firstName') && document.getElementById('firstName').focus();
      });
    }
    this.$refs.formRef.resetValidation();
  },
  methods: {
    async init () {
      this.loadingForm = true;
      const country = await getCountry();
      const { location } = country;
      this.user.countryCallingCode = location ? location.calling_code : '63';
      this.user.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
      // CHECK IF EMAIL IS PASSED
      this.user.email = this.$route.params.email;
      this.getCountries();
      this.loadingForm = false;
    },
    async getAccess () {
      try {
        this.loading = true;
        this.error = false;
        this.validateForm();
        if (!this.valid) {
          return;
        }
        await createWaitlist(this.user);
        this.requestSentDialog = true;
        window.$amplitude.logEvent('ACQ022 Btn > Get Exc');
      } catch (e) {
        console.error(e);
        this.error = true;
        // Get the E<code> part of the error message.
        const errorCode = parseInt(e?.message?.replace(/ .*/, '').substr(1));
        if (errorCode === 11000) {
          this.errorMessage = 'This email or mobile number is already on the waitlist. You will receive an exclusive referral code 1-2 days after your request.';
          return;
        }
        this.errorMessage = 'The email or mobile number you have entered is already taken.';
      } finally {
        this.loading = false;
      }
    },
    async getCountries () {
      if (process.browser) {
        if (!localStorage.getItem('mycure:countries')) {
          this.countries = await getCountries();
          localStorage.setItem('mycure:countries', JSON.stringify(this.countries));
        } else {
          this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
        }
      }
    },
    selectCountry (country) {
      this.user.countryCallingCode = country.callingCodes[0];
      this.user.countryFlag = country.flag;
      this.countryDialog = false;
      this.searchString = '';
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
        const countryCode = this.user.countryCallingCode;
        const mobileNo = this.user.mobileNo;
        const phoneNumber = parsePhoneNumberFromString(`+${countryCode}${mobileNo}`);
        if (!phoneNumber || !phoneNumber.isValid() || mobileNo.charAt(0) === '0') {
          throw new Error('Invalid phone number');
        } else {
          this.mobileNoError = true;
        }
      } catch (e) {
        this.mobileNoError = false;
        this.mobileNoErrorMessage = 'Invalid mobile number format';
      }
    },
    checkNumberInput () {
      if (!/\d/.test(event.key)) {
        return event.preventDefault();
      };
      return event;
    },
    doneSignupNonPH () {
      this.emailVerificationMessageDialog = false;
      if (process.browser) {
        localStorage.clear();
      }
      this.$nuxt.$router.push({ name: 'signin' });
    },
    goToDocDirectory () {
      this.loading = true;
      this.requestSentDialog = false;
      this.$nuxt.$router.push({ name: 'directory-doctors' });
    },
    checkEmail () {
      this.isEmailValid = /^.+@.+\.+[a-zA-Z]{2,3}$/.test(this.user.email);
    },
    haveReferralHandler () {
      window.$amplitude.logEvent('ACQ023 Btn > Have Ref');
      this.$nuxt.$router.push({ name: 'signup-individual-referral-code' });
    },
  },
};
</script>

<style scoped>
h1 {
  line-height: 35px;
}
::v-deep input::-webkit-outer-spin-button,
::v-deep input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
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
</style>
