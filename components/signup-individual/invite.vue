<template lang="pug">
  v-form(ref="formRef" v-model="valid").content-padding
    v-container
      v-row(justify="center" align="center")
        v-col(cols="12" justify="center" align="center")
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
          md="3"
          xl="2"
          align-self="start")
          img(
            src="~/assets/images/sign-up-individual-step-1/mycure-su-message@2x.png"
            alt="Invite message"
            width="100%"
          )
          span.float-right.primary--text
            a(@click="enterReferralCode") I have a referral code.
        v-col(
          cols="12"
          sm="7"
          md="5"
          xl="4"
          justify="center"
          align-self="start")
          //- FIRSTNAME AND LASTNAME
          v-row(no-gutters)
            v-col
              v-text-field(
                v-model="user.firstName"
                label="First Name"
                outlined
                :rules="[requiredRule]"
                :disabled="loading"
              )#firstName.pr-1
                template(v-slot:append v-if="user.firstName")
                  v-icon(color="accent") mdi-check
            v-col
              v-text-field(
                v-model="user.lastName"
                label="Last Name"
                outlined
                :rules="[requiredRule]"
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
            :rules="[requiredRule, emailRule]"
            :disabled="loading"
          )
            //- template(v-slot:append v-if="user.email &&  /.+@.+/.test(user.email)")
            template(v-slot:append v-if="user.email && emailRule")
              v-icon(color="accent") mdi-check
          //- LICENSE NO. AND MOBILE NO.
          v-row(no-gutters)
            v-col
              v-text-field(
                v-model="user.doc_PRCLicenseNo"
                label="Physician License No"
                outlined
                :rules="[requiredRule, numberRule]"
                :disabled="loading"
              ).pr-1
                template(v-slot:append v-if="user.doc_PRCLicenseNo && user.doc_PRCLicenseNo>=0")
                  v-icon(color="accent") mdi-check
            v-col
              v-text-field(
                v-model="user.mobileNo"
                label="Mobile Number"
                type="number"
                outlined
                :prefix="`+${user.countryCallingCode}`"
                :error-messages="mobileNoErrorMessage"
                :rules="[requiredRule]"
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
          v-divider
          //- TERMS AND AGREEMENT
          v-row(no-gutters)
            v-col(align="start")
              div.d-flex
                v-checkbox(
                  v-model="user.acceptTerms"
                  color="primary"
                  hide-details
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
                span.pt-6 I agree to&nbsp;
                  strong MYCURE's&nbsp;
                  a(@click="goToTerms") Terms&nbsp;
                  | and&nbsp;
                  a(@click="goToPrivacy") Privacy Policy.
          v-alert(:value="error" type="error").mt-5 {{ errorMessage }}
          v-row(no-gutters)
            v-col(:align="!$isMobile ? 'end' : 'center'")
              v-btn(
                color="primary"
                large
                :disabled="loading || !valid"
                :loading="loading"
                @click="getAccess"
              ).mt-6.font-weight-bold Get Free Access
      //- REFERRAL CODE DIALOG
      v-dialog(v-model="referralCodeDialog" width="350")
        v-card.text-center
          img(
            src="~/assets/images/sign-up-individual-step-1/mycure-su-banner-invite-code@2x.png"
            alt="Request Sent"
            width="100%"
          )
          v-card-text
            h1.py-5 Enter your&nbsp;
              br(v-if="!$isMobile")
              | Referral Code.
            v-row(no-gutters)
              v-col.d-inline-flex
                v-text-field(
                  v-model="user.referralCode"
                  label="Referral Code"
                  width="100%"
                  ref="referralCode"
                  outlined
                  :disabled="loading"
                ).pr-2
                v-btn(
                  height="55"
                  color="primary"
                  large
                  :disabled="loading"
                  :loading="loading"
                  @click="submitCode"
                ) Submit
            v-alert(:value="error" type="error").text-justify {{ referralCodeError }}
            v-divider.pb-5
            span Got problems with your code?
              br(v-if="$isMobile")
              strong.primary--text
                a(@click="toggleCrispChat") &nbsp;Contact Us.
      //- REQUEST SENT DIALOG
      v-dialog(v-model="requestSentDialog" width="350")
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
              | with you soon.
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
import { getCountry, getCountries, signupWaitList } from '~/utils/axios';
import dayOrNight from '~/utils/day-or-night';

export default {
  components: {
    EmailVerificationDialog,
  },
  data () {
    this.dayOrNight = dayOrNight();
    return {
      // UI STATE
      valid: false,
      loading: false,
      loadingForm: false,
      countryDialog: false,
      requestSentDialog: false,
      referralCodeDialog: false,
      emailVerificationMessageDialog: false,
      // MODELS
      user: {
        countryCallingCode: '',
        countryFlag: null,
      },
      countries: [],
      searchString: '',
      // RULES
      requiredRule: v => !!v || 'This field is required',
      numberRule: v => v >= 0 || 'Please input a valid number',
      emailRule: v => /^([\w]+.)+@([\w]+\.)+[\w-]{2,4}$/.test(v) || 'Email address must be valid',
      // ERROR
      error: false,
      errorMessage: 'There was an error please try again later.',
      referralCodeError: 'Invalid code. Please try again later.',
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
        await signupWaitList(this.user);
        this.requestSentDialog = true;
      } catch (e) {
        console.error(e);
        this.error = true;
        // Get the E<code> part of the error message.
        const errorCode = parseInt(e?.message?.replace(/ .*/, '').substr(1));
        if (errorCode === 11000) {
          this.errorMessage = 'The email you have entered is invalid or taken. Please try again.';
          return;
        }
        this.errorMessage = 'There was an error please try again later';
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
    enterReferralCode () {
      this.referralCodeDialog = true;
      setTimeout(() => {
        this.$refs.referralCode.focus();
      }, 0);
    },
    submitCode () {
      this.loading = true;
      this.referralCodeDialog = false;
      localStorage.setItem('referral-code:', JSON.stringify(this.user.referralCode));
      this.$nuxt.$router.push({ name: 'signup-individual-step-1' });
    },
    goToDocDirectory () {
      this.loading = true;
      this.requestSentDialog = false;
      this.$nuxt.$router.push({ name: 'directory-doctors' });
    },
    toggleCrispChat () {
      const message = 'Hello, I have problem with my referral code.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
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
@media screen and (min-width: 768px) {
  .content-padding {
    padding-top: 10vh;
    padding-bottom: 15%;
  }
}
@media screen and (min-width: 1024px) {
  .content-padding {
    padding-top: 20vh;
    padding-bottom: 25%;
  }
}
@media screen and (min-width: 1024px) and (device-height: 768px) {
  .content-padding {
    padding-top: 0vh;
    padding-bottom: 5%;
  }
}
@media screen and (device-width: 1280px) and (device-height: 800px) {
  .content-padding {
    padding-top: 0vh;
    padding-bottom: 4%;
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
    padding-bottom: 3%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1440px) {
  .content-padding {
    padding-top: 4%;
    padding-bottom: 0%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1600px) {
  .content-padding {
    padding-top: 3%;
    padding-bottom: 0%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1680px) {
  .content-padding {
    padding-top: 7%;
    padding-bottom: 0%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 1920px) {
  .content-padding {
    padding-top: 7%;
    padding-bottom: 2%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (min-width: 2304px) {
  .content-padding {
    padding-top: 12%;
    padding-bottom: 6%;
    position: relative;
    z-index: 2;
  }
}
@media screen and (device-width: 2560px) {
  .content-padding {
    padding-top: 12%;
    margin-bottom: 2%;
    position: relative;
    z-index: 2;
  }
}
</style>
