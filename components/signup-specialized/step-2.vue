<template lang="pug">
  v-row(justify="center" align="center")
    v-col(cols="12" md="10")
      v-row(justify="center" no-gutters)
        v-col(cols="12" md="5" :class="[{'content-padding': !$isMobile}]")
          img(
            src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE logo"
          ).link-to-home.mb-3
          h2.font-18.primary--text Specialized Clinic: Sign Up (Step 2 of 3)
          div
            i.font-16 {{ specializedClinicType.title }} Clinic
            br
            br
            img(
              :src="require(`~/assets/images/${specializedClinicType.image}-active.png`)"
              :alt="specializedClinicType.image"
              width="25%"
            )
          h1#step-1-title Become a techy doctor in minutes!
          br
          v-row(v-for="(item, key) in checkListItems" :key="key" align="center" dense)
            v-col(cols="1").pr-2.pt-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check icon")
            v-col(shrink)
              p.font-21 {{ item }}
        v-col(cols="12" md="5")
          v-card
            v-card-actions
              v-btn(
                icon
                medium
                :to="{ name: 'signup-specialized-step-1' }"
              )
                v-icon(medium) mdi-arrow-left
            v-card-text
              h1 Create a MYCURE Account
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-row
                  v-col
                    v-text-field(
                      v-model="user.firstName"
                      outlined
                      label="First Name"
                      :rules="[requiredRule]"
                      :disabled="loading"
                    ).step-one-text-field
                      template(v-slot:append v-if="user.firstName")
                        v-icon(color="accent") mdi-check
                  v-col
                    v-text-field(
                      v-model="user.lastName"
                      outlined
                      label="Last Name"
                      :rules="[requiredRule]"
                      :disabled="loading"
                    )
                      template(v-slot:append v-if="user.lastName")
                        v-icon(color="accent") mdi-check
                v-text-field(
                  v-model="user.doc_PRCLicenseNo"
                  label="Physician License No"
                  outlined
                  :rules="[requiredRule, numberRule]"
                  :disabled="loading"
                )
                  template(v-slot:append v-if="user.doc_PRCLicenseNo && user.doc_PRCLicenseNo>=0")
                    v-icon(color="accent") mdi-check
                v-text-field(
                  v-model="user.mobileNo"
                  label="Mobile Number"
                  type="number"
                  outlined
                  :prefix="`+${user.countryCallingCode}`"
                  :loading="loadingForm || loading"
                  :disabled="loadingForm || loading"
                  :error-messages="mobileNoErrorMessage"
                  :rules="[requiredRule]"
                  @blur="validatePhoneNo"
                )
                  template(slot="append")
                    div(style="margin-top: -5px")
                      v-tooltip(bottom)
                        template(v-slot:activator="{ on }")
                          v-btn(icon @click="countryDialog = true" v-on="on").ma-0
                            img(width="25" :src="user.countryFlag").flag-img.mt-2
                        | Change Country
                      v-icon(v-if="mobileNoError" color="accent") mdi-check
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
                  outlined
                  :rules="[requiredRule, emailRule]"
                  :disabled="loading"
                )
                  template(v-slot:append v-if="user.email &&  /.+@.+/.test(user.email)")
                    v-icon(color="accent") mdi-check
                v-text-field(
                  v-model="user.password"
                  label="Your MYCURE Password"
                  outlined
                  :type="showPass ? 'text' : 'password'"
                  :rules="[requiredRule, passwordRule]"
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  :disabled="loading"
                  @click:append="showPass = !showPass"
                )
                v-text-field(
                  v-model="confirmPassword"
                  label="Confirm Password"
                  outlined
                  type="password"
                  :rules="[requiredRule, matchPasswordRule]"
                  :disabled="loading"
                )
                  template(v-slot: append v-if="confirmPassword && confirmPassword === user.password")
                    v-icon(color="accent") mdi-check
                v-checkbox(
                  v-model="user.acceptTerms"
                  hide-details
                  style="margin-top: -10px"
                  :rules="[requiredRule]"
                  :disabled="loading"
                  color="accent"
                ).mb-4
                  template(slot="label")
                    p(style="margin-bottom: -12px") By creating a MYCURE account, you're agreeing to accept MYCURE&nbsp;
                      a(@click.stop="goToTerms") Terms
                      | &nbsp;and&nbsp;
                      a(@click.stop="goToPrivacy") Privacy Policy
                v-alert(:value="error" type="error").mt-5 {{errorMessage}}
            v-card-actions
              v-spacer
              stripe-checkout(
                ref="checkouRef"
                :pk="stripePK"
                :sessionId="stripeCheckoutSessionId"
              )
                template(slot="checkout-button")
                  v-btn(
                    color="accent"
                    :disabled="loading || !valid || startTrialBtnDisabled"
                    :loading="loading"
                    @click="checkout"
                    large
                  ).font-weight-bold.font-18 Start Trial Now
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
</template>

<script>
import { StripeCheckout } from 'vue-stripe-checkout';
import _ from 'lodash';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
// - utils
import { getCountry, getCountries, signupSpecialized } from '~/utils/axios';
import dayOrNight from '~/utils/day-or-night';

const PASS_LENGTH = 6;

export default {
  components: {
    StripeCheckout,
  },
  data () {
    this.stripePK = process.env.STRIPE_PK;
    this.dayOrNight = dayOrNight();
    this.checkListItems = [
      'Manage your clinic more efficiently',
      'Produce beautiful and useful reports',
      'Save on time and save more lives!',
    ];
    return {
      valid: false,
      loading: false,
      loadingForm: false,
      startTrialBtnDisabled: false,
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
      stripeCheckoutSessionId: '',
    };
  },
  computed: {
    pageType () {
      return this.$nuxt.$route.name;
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
    this.startTrialBtnDisabled = false;
  },
  methods: {
    async checkout () {
      try {
        this.loading = true;
        this.error = false;
        this.validateForm();
        if (!this.valid) {
          return;
        }
        const data = await signupSpecialized(this.user);
        const checkoutSession = _.get(data, 'organization.subscription.updatesPending');
        this.stripeCheckoutSessionId = checkoutSession.stripeSession;
        this.startTrialBtnDisabled = true;
        this.$refs.checkouRef.redirectToCheckout();
        if (process.browser) {
          localStorage.clear();
        }
      } catch (e) {
        console.error(e);
        this.error = true;
        if (e.code === 11000) {
          this.errorMessage = 'The email or mobile number you have entered is invalid or taken. Please try again.';
        } else {
          this.errorMessage = 'There was an error in creating your account. Please try again.';
        }
        this.startTrialBtnDisabled = false;
      } finally {
        this.loading = false;
      }
    },
    async init () {
      this.loadingForm = true;

      // Load model
      if (process.browser) {
        if (localStorage.getItem('specialized:step1:model') && this.pageType === 'signup-specialized-step-2') {
          this.user = {
            ...JSON.parse(localStorage.getItem('specialized:step1:model')),
          };
          this.specializedClinicType = this.user.clinicTypeData;
          delete this.user.clinicTypeData;

          const country = await getCountry();
          const { location } = country;
          this.user.countryCallingCode = location ? location.calling_code : '63';
          this.user.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
        } else if (!localStorage.getItem('specialized:step1:model') && this.pageType === 'signup-specialized-step-2') {
          this.$nuxt.$router.push({ name: 'signup-specialized-step-1' });
        } else {
          const country = await getCountry();
          const { location } = country;
          this.user.countryCallingCode = location ? location.calling_code : '63';
          this.user.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
        }
        // Load countries
        this.getCountries();
        this.loadingForm = false;
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
      window.open(routeData.href, '_blank');
    },
    goToPrivacy () {
      const routeData = this.$nuxt.$router.resolve({ name: 'privacy-policy' });
      window.open(routeData.href, '_blank');
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

.flag-img {
  margin-bottom: 5px;
}

.flag-img:hover {
  cursor: pointer;
}

.content-padding {
  padding-top: 100px;
}
/* TODO: confirm if needed. This will defeat uniformity across other forms. */
/* .step-one-text-field {
  border-width: thin !important;
} */
</style>
