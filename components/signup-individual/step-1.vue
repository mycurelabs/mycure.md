<template lang="pug">
  v-form(ref="formRef" v-model="valid").content-padding
    v-container
      v-row(justify="center" align="center")
        v-col(cols="12" md="8" justify="center" align="center")
          img(
            src="~/assets/images/sign-up-individual-step-1/mycure-sso-sign-in-logo.svg"
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE logo"
            width="70"
          ).link-to-home.pb-5
          h1.pb-3 Create a MYCURE Account
          //- template(v-for="(item, key) in checkListItems")
          //-   span(v-html="item").font-16
        v-col(cols="12" md="5" justify="center" align="center")
          v-row(no-gutters)
            v-col(xs="12")
              v-text-field(
                v-model="user.firstName"
                outlined
                label="First Name"
                :rules="[requiredRule]"
                :disabled="loading"
              )#firstName.step-one-text-field.pr-1
                template(v-slot:append v-if="user.firstName")
                  v-icon(color="accent") mdi-check
            v-col(xs="12")
              v-text-field(
                v-model="user.lastName"
                outlined
                label="Last Name"
                :rules="[requiredRule]"
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
                :rules="[requiredRule, numberRule]"
                :disabled="loading"
              ).pr-1
                template(v-slot:append v-if="user.doc_PRCLicenseNo && user.doc_PRCLicenseNo>=0")
                  v-icon(color="accent") mdi-check
            v-col(xs="12")
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
              ).pl-1
                template(slot="append")
                  div(style="margin-top: -5px")
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
            :rules="[requiredRule, emailRule]"
            :disabled="loading"
          )
            template(v-slot:append v-if="user.email &&  /.+@.+/.test(user.email)")
              v-icon(color="accent") mdi-check
          v-row(no-gutters)
            v-col(xs="12")
              v-text-field(
                v-model="user.password"
                label="Your MYCURE Password"
                outlined
                :type="showPass ? 'text' : 'password'"
                :rules="[requiredRule, passwordRule]"
                :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                :disabled="loading"
                @click:append="showPass = !showPass"
              ).pr-1
            v-col(xs="12")
              v-text-field(
                v-model="confirmPassword"
                label="Confirm Password"
                outlined
                type="password"
                :rules="[requiredRule, matchPasswordRule]"
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
              hide-details
              style="margin-top: -10px"
              :rules="[requiredRule]"
              :disabled="loading"
              color="primary"
            )
            span.mt-n1 By creating a MYCURE account, you're agreeing to accept MYCURE's&nbsp;
              a(@click.stop="goToPrivacy") Privacy Policy,&nbsp;
              a(@click.stop="goToTerms") Terms of Use&nbsp;
              | and BAA
          v-alert(:value="error" type="error").mt-5 {{errorMessage}}
        v-col(cols="12" md="10" justify="center" align="center")
          v-spacer
          v-btn(
            color="primary"
            @click="next"
            :disabled="loading || !valid"
            :loading="loading"
            large
          ).font-weight-bold Create My Account
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
              v-list-item(v-for="(country, key) in countries" @click="selectCountry(country)" :key="key")
                v-list-item-action
                  img(width="25" :src="country.flag")
                v-list-item-content
                  v-list-item-title {{country.name}}
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
import { getCountry, getCountries, signupIndividual } from '~/utils/axios';
import dayOrNight from '~/utils/day-or-night';

const PASS_LENGTH = 6;

export default {
  components: {
    EmailVerificationDialog,
  },
  data () {
    this.dayOrNight = dayOrNight();
    this.checkListItems = [
      'Become a techy doctor in minutes! Manage your clinic more efficiently,<br>produce beautiful and useful reports. Save on time and save more lives!',
    ];
    return {
      showInfo: false,
      valid: false,
      loading: false,
      loadingForm: false,
      countryDialog: false,
      emailVerificationMessageDialog: false,
      showPass: false,
      // models
      user: {
        countryCallingCode: '',
        countryFlag: null,
      },
      specializedClinicType: {
        title: '',
        image: '',
      },
      countries: [],
      confirmPassword: '',
      searchString: '',
      // rules
      requiredRule: v => !!v || 'This field is required',
      numberRule: v => v >= 0 || 'Please input a valid number',
      emailRule: v => /.+@.+/.test(v) || 'Email address must be valid',
      passwordRule: v => v?.length >= PASS_LENGTH || 'Password length must be at least 6 characters.',
      matchPasswordRule: v => v === this.user.password || 'Passwords do not match',
      //
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
      this.countries = this.countries.filter(v => v?.name?.toLowerCase().indexOf(needle) > -1); // eslint-disable-line
    },
  },
  async created () {
    await this.init();
  },
  mounted () {
    // Select first text field
    if (process.browser) {
      this.$nextTick(() => {
        document.getElementById('firstName') && document.getElementById('firstName').focus();
      });
    }
    this.$refs.formRef.resetValidation();
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
      this.loadingForm = true;
      // Load model
      if (process.browser) {
        if (localStorage.getItem('individual:step1:model') && this.pageType === 'signup-individual-step-1') {
          this.user = {
            ...JSON.parse(localStorage.getItem('individual:step1:model')),
            password: '',
            confirmPassword: '',
          };
        } else {
          const country = await getCountry();
          const { location } = country;
          this.user.countryCallingCode = location ? location.calling_code : '63';
          this.user.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';

          // Check if an email was passed
          this.user.email = this.$route.params.email;
        }
        // Load countries
        this.getCountries();
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
    doneSignupNonPH () {
      this.emailVerificationMessageDialog = false;
      if (process.browser) {
        localStorage.clear();
      }
      this.$nuxt.$router.push({ name: 'signin' });
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
    padding-top: 7vh;
    padding-bottom: 21%;
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
