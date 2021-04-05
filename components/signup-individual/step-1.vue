<template lang="pug">
  v-container.content-padding
    v-row(justify="center" align="center")
      v-col(cols="12" justify="center" align="center")
        img(
          src="~/assets/images/sign-up-individual-step-1/mycure-sso-sign-in-logo.svg"
          alt="MYCURE logo"
          width="70"
          @click="$nuxt.$router.push({ name: 'index' })"
        ).link-to-home.pb-5
        h1.pb-3 Create a MYCURE Account
        //- template(v-for="(item, key) in checkListItems")
        //-   span(v-html="item").font-16
      v-form(ref="formRef" v-model="valid").px-3
        v-row(justify="center" align="center")
          v-col(cols="12" md="5" justify="center" align-self="start")
            v-row(no-gutters)
              v-col(xs="12")
                v-text-field(
                  v-model="user.firstName"
                  label="First Name"
                  outlined
                  autofocus
                  :rules="requiredRule"
                  :disabled="loading"
                ).step-one-text-field.pr-1
                  template(v-slot:append v-if="user.firstName")
                    v-icon(color="accent") mdi-check
              v-col(xs="12")
                v-text-field(
                  v-model="user.lastName"
                  label="Last Name"
                  outlined
                  :rules="requiredRule"
                  :disabled="loading"
                ).pl-1
                  template(v-slot:append v-if="user.lastName")
                    v-icon(color="accent") mdi-check
            v-row(no-gutters)
              v-col(xs="12")
                v-text-field(
                  v-model="user.doc_PRCLicenseNo"
                  label="Physician License No"
                  outlined
                  :rules="numberRule"
                  :disabled="loading"
                ).pr-1
                  template(v-slot:append v-if="user.doc_PRCLicenseNo && user.doc_PRCLicenseNo>=2")
                    v-icon(color="accent") mdi-check
              v-col(xs="12")
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
              //- NOTE: DO NOT REMOVE YET
              //- template(slot="append-outer")
              //-   v-tooltip(bottom)
              //-     v-btn(small icon slot="activator" @click="countryDialog = true" :disabled="loading")
              //-       v-icon mdi-earth
              //-     | Change Country
          v-divider(v-if="!$isMobile" vertical).vertical-divider
          v-col(cols="12" md="5" :class="credentialClasses")
            v-text-field(
              v-model="user.email"
              type="email"
              label="Email Address"
              outlined
              :rules="emailRule"
              :disabled="loading"
              @keyup="checkEmail"
            )
              template(v-slot:append v-if="isEmailValid")
                v-icon(color="accent") mdi-check
            v-row(no-gutters)
              v-col(xs="12")
                v-text-field(
                  ref="passwordRef"
                  v-model="user.password"
                  label="Your MYCURE Password"
                  outlined
                  :type="showPass ? 'text' : 'password'"
                  :rules="passwordRule"
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  :disabled="loading"
                  @click:append="showPass = !showPass"
                )#password.pr-1
              v-col(xs="12")
                v-text-field(
                  v-model="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  outlined
                  :rules="[...requiredRule, matchPasswordRule]"
                  :disabled="loading"
                ).pl-1
                  template(v-slot: append v-if="confirmPassword && confirmPassword === user.password")
                    v-icon(color="accent") mdi-check
          v-col(cols="12" md="10" justify="center" v-if="!$isMobile").mt-md-n5
            v-divider
          v-col(cols="12" md="10" justify="center" align="start")
            div.d-inline-flex
              v-checkbox(
                v-model="user.acceptTerms"
                style="margin-top: -10px"
                color="primary"
                hide-details
                :rules="requiredRule"
                :disabled="loading"
              )
              span(style="margin-top: -6px;") I agree to&nbsp;
                b MYCURE's&nbsp;
                a(@click.stop="goToTerms") Terms&nbsp;
                | and&nbsp;
                a(@click.stop="goToPrivacy") Privacy Policy.&nbsp;
            v-alert(:value="error" type="error").mt-5 {{ errorMessage }}
          v-col(cols="12" md="10" justify="center" align="center")
            v-spacer
            v-btn(
              color="primary"
              large
              :disabled="loading || !valid"
              :loading="loading"
              @click="next"
            ).font-weight-bold Create My Account
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
  signupIndividual,
} from '~/utils/axios';
import {
  requiredRule,
  emailRules,
  passwordRules,
  numberRule,
} from '~/utils/text-field-rules';
import { getItem } from '~/utils/localStorage';
import dayOrNight from '~/utils/day-or-night';

export default {
  components: {
    EmailVerificationDialog,
  },
  data () {
    this.dayOrNight = dayOrNight();
    this.requiredRule = requiredRule;
    this.emailRule = emailRules;
    this.passwordRule = passwordRules;
    this.numberRule = numberRule;
    return {
      showInfo: false,
      valid: false,
      loading: false,
      loadingForm: false,
      isEmailValid: false,
      countryDialog: false,
      emailVerificationMessageDialog: false,
      showPass: false,
      // models
      user: {
        countryCallingCode: '',
        countryFlag: '',
        doc_PRCLicenseNo: '',
        email: '',
        firstName: '',
        lastName: '',
        mobileNo: '',
      },
      specializedClinicType: {
        title: '',
        image: '',
      },
      countries: [],
      confirmPassword: '',
      searchString: '',

      matchPasswordRule: v => v === this.user.password || 'Passwords do not match',

      error: false,
      errorMessage: 'There was an error please try again later.',
      mobileNoError: false,
      mobileNoErrorMessage: '',
    };
  },
  computed: {
    pageType () {
      return this.$nuxt.$route.name;
    },
    contentClasses () {
      return [{ 'content-padding': !this.$isMobile }];
    },
    credentialClasses () {
      return [this.$isMobile ? 'mt-n6' : ''];
    },
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
    this.$refs.formRef.resetValidation();
    window.$amplitude.logEvent('ACQ025 Page > Sign Up');
  },
  methods: {
    async next () {
      try {
        this.loading = true;
        this.error = false;
        this.validateForm();
        if (!this.valid) {
          return;
        }
        this.saveModel(this.user);
        await signupIndividual(this.user);
        window.$amplitude.logEvent('ACQ026 Btn > Create Acc');
        if (this.user.countryCallingCode !== '63') {
          if (process.browser) {
            localStorage.clear();
          }
          this.emailVerificationMessageDialog = true;
        } else {
          this.$nuxt.$router.push({ name: 'signup-individual-step-2' });
        }
      } catch (e) {
        console.error(e);
        this.error = true;
        // Get the E<code> part of the error message.
        const errorCode = parseInt(e?.message?.replace(/ .*/, '').substr(1));
        if (errorCode === 11000) {
          this.errorMessage = 'The email or mobile number you have entered is invalid or taken. Please try again.';
          return;
        }
        this.errorMessage = 'There was an error please try again later';
      } finally {
        this.loading = false;
      }
    },
    async init () {
      try {
        this.loadingForm = true;

        // Load defaults, replace with
        // localStorage data later if available
        await this.getCountries();
        const country = await getCountry();
        const { location } = country;
        this.user.countryCallingCode = location ? location.calling_code : '63';
        this.user.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';

        this.$refs.passwordRef.focus();

        // - TODO: Totally remove if confirmed not needed in some way
        // ACCOUNT DATA RECEIVED AS PARAMETER
        // const accountData = this.$route.params.data;

        // CHECK IF THERE IS REFERRAL CODE AND ACCOUNT DATA
        // if (!accountData && getItem('account-invitation') === null) {
        //   this.$nuxt.$router.push({ name: 'signup-individual' });
        //   return;
        // };

        // if (accountData) {
        //   const phoneNumber = accountData.mobileNo && parsePhoneNumberFromString(accountData.mobileNo);
        //   this.user.firstName = accountData.personalDetails?.name?.firstName;
        //   this.user.lastName = accountData.personalDetails?.name?.lastName;
        //   this.user.email = accountData.email;
        //   this.user.mobileNo = phoneNumber?.nationalNumber;
        //   this.user.doc_PRCLicenseNo = accountData.personalDetails?.doc_PRCLicenseNo; // eslint-disable-line
        //   return;
        // }

        // const accountInvitationData = getItem('account-invitation');
        // if (accountInvitationData) {
        //   const accountInvitation = await getWaitlist({ referralCode: accountInvitationData.referralCode });
        //   if (!accountInvitation) return;

        //   const phoneNumber = accountInvitation.mobileNo && parsePhoneNumberFromString(accountInvitation.mobileNo);
        //   this.user.firstName = accountInvitation.personalDetails?.name?.firstName;
        //   this.user.lastName = accountInvitation.personalDetails?.name?.lastName;
        //   this.user.email = accountInvitation.email;
        //   this.user.mobileNo = phoneNumber?.nationalNumber;
        //   this.user.doc_PRCLicenseNo = accountInvitation.personalDetails?.doc_PRCLicenseNo; // eslint-disable-line
        // }

        if (getItem('individual:step1:model') && this.pageType === 'signup-individual-step-1') {
          this.user = {
            ...getItem('individual:step1:model'),
            password: '',
            confirmPassword: '',
          };
        }

        this.$refs.formRef.resetValidation();
      } catch (e) {
        console.error(e);
      } finally {
        this.checkEmail();
        this.loadingForm = false;
      }
    },
    saveModel (val) {
      const saveVal = {
        ...val,
        acceptTerms: false,
      };
      if (process.browser) {
        localStorage.setItem('individual:step1:model', JSON.stringify(saveVal));
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
    checkNumberInput (event) {
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
    checkEmail () {
      this.isEmailValid = /^.+@.+\.+[a-zA-Z]{2,3}$/.test(this.user.email);
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

.checkbox-label {
  margin-bottom: 0;
}

.vertical-divider {
  margin-top: 10px;
  height: 150px !important;
}
@media screen and (min-width: 768px) {
  .content-padding {
    padding-top: 5vh;
    padding-bottom: 10%;
  }
}
@media screen and (min-width: 1024px) {
  .content-padding {
    padding-top: 27vh;
    padding-bottom: 30%;
  }
}
@media screen and (min-width: 1024px) and (device-height: 768px) {
  .content-padding {
    padding-top: 5vh;
    padding-bottom: 3%;
  }
}
@media screen and (device-width: 1280px) and (device-height: 800px) {
  .content-padding {
    padding-top: 5vh;
    padding-bottom: 6%;
  }
}
@media screen and (device-width: 1280px) and (device-height: 1024px) {
  .content-padding {
    padding-top: 16vh;
    padding-bottom: 13%;
  }
}
@media screen and (min-width: 1366px) {
  .content-padding {
    margin-top: -4%;
    margin-bottom: 3%;
    height: 75vh;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1440px) {
  .content-padding {
    padding-top: 13%;
    margin-bottom: 7%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1600px) {
  .content-padding {
    padding-top: 12%;
    margin-bottom: 6%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1680px) {
  .content-padding {
    padding-top: 15%;
    margin-bottom: 8%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1920px) {
  .content-padding {
    padding-top: 15%;
    margin-bottom: 5%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 2304px) {
  .content-padding {
    padding-top: 21%;
    margin-bottom: 6%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (device-width: 2560px) {
  .content-padding {
    padding-top: 19%;
    margin-bottom: 2%;
    position: relative;
    z-index: 2;
  }
}
/* TODO: confirm if needed. This will defeat uniformity across other forms. */
/* .step-one-text-field {
  border-width: thin !important;
} */
</style>
