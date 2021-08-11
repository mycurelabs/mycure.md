<template lang="pug">
  v-container(v-if="!loading.page")
    v-toolbar(
      color="transparent"
      dense
      flat
    )
      img(
        src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
        alt="White MYCURE Logo"
        width="150px"
        height="41.88px"
        @click="$router.push({ name: 'index' })"
      )
      v-spacer
      span(:class="{'font-10' : $isMobile}").ml-5.mr-2 Already have an account?&nbsp;&nbsp;
      v-btn(
        depressed
        color="primary"
        :to="{ name: 'signin' }"
      ).text-none Log In
    v-row(justify="center" align="center").mt-2
      v-col(cols="12" md="7" justify="center" align="center")
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
                          img(width="25" height="18.75" :src="countryFlag").flag-img.mt-2
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
              v-select(
                v-model="facilityType"
                label="Health Facility Type"
                item-text="text"
                item-value="value"
                outlined
                disabled
                :items="facilityTypes"
                :rules="isRequired"
                :error="errorFacilityType"
                :error-messages="errorMessagesFacilityType"
                return-object
              )
                template(v-slot:item="{ item }")
                  span {{ item.text }}&nbsp;
                    v-chip(v-if="item.chip" small color="primary").font-11 {{item.chip}}
                template(v-slot:selection="{ item }")
                  span {{ item.text }}&nbsp;
                    v-chip(v-if="item.chip" small color="primary").font-11 {{item.chip}}
              //- Pricing
              //- v-autocomplete(
              //-   v-if="facilityType"
              //-   v-model="subscription"
              //-   label="Pricing Bundle"
              //-   item-text="title"
              //-   item-value="value"
              //-   outlined
              //-   :items="pricingBundles"
              //-   :rules="isRequired"
              //-   :disabled="loading.form"
              //-   return-object
              //- )
              v-text-field(
                v-model="invitation"
                label="Invite Code"
                outlined
                hint="6 character invite code"
                :disabled="loading.form"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-8.order-sm-8
              v-select(
                v-model="roles"
                label="Your Role"
                item-text="text"
                item-value="value"
                outlined
                :error-messages="errorMessagesRoles"
                :items="userRoles"
                :rules="isRequired"
                :disabled="loading.form"
                :error="errorRoles"
              )
              v-text-field(
                v-if="isDoctor"
                type="number"
                v-model="doc_PRCLicenseNo"
                label="PRC License No"
                outlined
                hint="Please enter your PRC License No for verification"
                :disabled="loading.form"
                :rules="isRequired"
              )
            v-col(
              cols="12"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-9.order-sm-9.mb-5
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
                color="primary"
                style="min-width: 200px;"
                large
                :disabled="isProceedDisabled"
                :loading="loading.form"
                :block="$isMobile"
              ).text-none #[b Proceed #[v-icon mdi-arrow-right]]
              stripe-checkout(
                ref="checkoutRef"
                :pk="stripePK"
                :sessionId="stripeCheckoutSessionId"
              )
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
    //- Email Verification Dialog
    email-verification-dialog(v-model="emailVerificationMessageDialog" :email="email" @confirm="confirmEmailVerification")
    //- Choose Facility Type Dialog
    choose-facility-type(
      v-model="chooseFacilityTypeDialog"
      :facility-types="facilityTypes"
      @select="facilityType = $event; chooseFacilityTypeDialog = false"
    )
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  getCountries,
  getCountry,
  // signupFacility,
} from '~/utils/axios';
import {
  requiredRule,
  emailRules,
  passwordRules,
} from '~/utils/text-field-rules';
// import { CLINICS_PRICING } from '~/constants/pricing';
// import { SUBSCRIPTION_MAPPINGS } from '~/constants/subscription';
import ChooseFacilityType from '~/components/signup/ChooseFacilityType';
import EmailVerificationDialog from '~/components/signup/EmailVerificationDialog';

const FACILITY_STEP_1_DATA = 'facility:step1:model';

export default {
  components: {
    ChooseFacilityType,
    EmailVerificationDialog,
  },
  layout: 'user',
  data () {
    // TEXT FIELD RULES
    this.isRequired = requiredRule;
    this.emailRules = emailRules;
    this.passwordRules = passwordRules;
    this.matchPasswordRule = v => v === this.password || 'Passwords do not match';
    this.mobileNumberRule = v => this.validatePhoneNo(v) || 'Invalid phone number';
    // -- ENUM --
    // Clinic Types
    this.facilityTypes = [
      {
        text: 'Doctor\'s Clinic',
        orgProps: {
          type: 'facility',
          types: ['doctor'],
        },
        value: 'doctor',
        image: 'Doctor',
      },
      {
        text: 'Outpatient Clinic',
        orgProps: {
          type: 'facility',
          types: ['clinic'],
        },
        value: 'clinic',
        image: 'Outpatient',
      },
      {
        text: 'Diagnostics',
        orgProps: {
          type: 'facility',
          types: ['diagnostic'],
        },
        value: 'diagnostic',
        image: 'Diagnostics',
      },
    ];
    this.userRoles = [
      { text: 'Physician/Owner', value: ['doctor', 'admin'] },
      { text: 'Administrator', value: ['admin'] },
    ];
    // this.pricingConstants = CLINICS_PRICING;
    this.stripePK = process.env.STRIPE_PK;
    return {
      // Models
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      facilityType: {},
      subscription: null,
      doc_PRCLicenseNo: null,
      invitation: null,
      roles: [],
      agree: '',
      // - Stripe
      stripeCheckoutSessionId: null,
      // Country Dialog
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
      emailVerificationMessageDialog: false,
      chooseFacilityTypeDialog: false,
      // validity
      valid: false, // Overall form details validity
      isEmailValid: false, // email validity
      // Errors
      error: false,
      errorMessage: 'There was an error please try again later.',
      mobileNoError: false,
      errorFacilityType: false,
      errorMessagesFacilityType: '',
      errorRoles: false,
      errorMessagesRoles: '',
    };
  },
  computed: {
    isDoctor () {
      return this.roles.includes('doctor');
    },
    // pricingBundles () {
    //   if (this.facilityType.value === 'doctor' || this.facilityType.value === 'doctor-telehealth') return this.pricingConstants.slice(0, 2);
    //   return this.pricingConstants.slice(0, 3);
    // },
    // - If needs to pay
    requiresCheckout () {
      return this.subscription.value !== 'essentials';
    },
    areSelectionsValid () {
      return this.facilityType && this.roles.length;
    },
    isProceedDisabled () {
      return this.loading.form || !this.valid || !this.agree || !this.areSelectionsValid;
    },
  },
  watch: {
    searchString (val) {
      if (typeof val !== 'string' || val === '') {
        return;
      }
      const needle = val.toLowerCase();
      this.countries = this.countries.filter(v => v?.name?.toLowerCase().startsWith(needle)); // eslint-disable-line
    },
    facilityType (val) {
      if (!isEmpty(val)) {
        this.errorFacilityType = false;
        this.errorMessagesFacilityType = '';
      }
    },
    roles (val) {
      if (!isEmpty(val)) {
        this.errorRoles = false;
        this.errorMessagesRoles = '';
      }
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
        // - Fetch countries
        await this.getCountries();
        const country = await getCountry();
        const { location } = country;
        this.countryCallingCode = location ? location.calling_code : '63';
        this.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';

        const localStorageData = process.browser && JSON.parse(localStorage.getItem(FACILITY_STEP_1_DATA));
        if (localStorageData) {
          this.firstName = localStorageData.firstName;
          this.lastName = localStorageData.lastName;
          this.email = localStorageData.email;
          this.password = localStorageData.password;
          this.mobileNo = localStorageData.mobileNo;
          this.roles = localStorageData.roles;
          this.doc_PRCLicenseNo = localStorageData.doc_PRCLicenseNo;
          this.invitation = localStorageData.invitation;
        }

        // Query params handling
        if (this.$route.query.email) this.email = this.$route.query.email;
        if (this.$route.query.type) {
          this.facilityType = this.facilityTypes.find(({ value }) => value === this.$route.query.type);
        } else {
          this.chooseFacilityTypeDialog = true;
        }
        if (this.$route.query.subscription) this.subscription = this.$route.query.subscription;
        if (this.$route.query.referralCode) this.invitation = this.$route.query.referralCode;
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
        this.errorFacilityType = false;
        this.errorRoles = false;
        if (isEmpty(this.facilityType)) {
          this.error = true;
          this.errorFacilityType = true;
          this.errorMessage = 'The form is incomplete. Please provide the required inforamtion';
          this.errorMessagesFacilityType = 'This is required';
          return;
        };
        if (isEmpty(this.roles)) {
          this.error = true;
          this.errorRoles = true;
          this.errorMessage = 'The form is incomplete. Please provide the required inforamtion';
          this.errorMessagesRoles = 'This is required';
          return;
        };
        if (!this.$refs.formRef.validate()) {
          return;
        }

        // Map org types and subscription
        const organizationPayload = {
          ...this.facilityType.orgProps,
        };

        // NOTE: See SignupButton component
        // for the logic of query params being
        // passed to the url before going to
        // signup page.
        if (this.$route.query.from === 'booking') {
          if (this.$route.query.type === 'doctor' || this.facilityType === 'doctor') {
            organizationPayload.types = [
              'doctor',
              'doctor-booking',
            ];
          }
          if (this.$route.query.type === 'clinic' || this.facilityType === 'clinic') {
            organizationPayload.types = [
              'clinic',
              'clinic-booking',
            ];
          }
          if (this.$route.query.type === 'diagnostic' || this.facilityType === 'diagnostic') {
            organizationPayload.types = [
              'diagnostic',
              'diagnostic-booking',
            ];
          }
        }

        // Map account payload
        const payload = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          mobileNo: this.mobileNo,
          organization: organizationPayload,
          countryCallingCode: this.countryCallingCode,
          roles: this.roles,
          invitation: this.invitation,
          // skipMobileNoVerification: this.facilityType.value !== 'doctor',
        };

        // HOTFIX:
        // if (this.doc_PRCLicenseNo !== null) {
        //   if (Number.isNaN(+this.doc_PRCLicenseNo)) {
        //     alert('PRC License No must be a number');
        //     return;
        //   }
        //   payload.doc_PRCLicenseNo = +this.doc_PRCLicenseNo;
        // }
        if (this.doc_PRCLicenseNo) payload.doc_PRCLicenseNo = +this.doc_PRCLicenseNo;

        const [
          emailResultUnique,
          mobileResultUnique,
        ] = await Promise.all([
          this.$sdk.service('auth').checkUniqueIdentity('email', this.email),
          this.$sdk.service('auth').checkUniqueIdentity('mobileNo', this.mobileNo),
        ]);
        if (!emailResultUnique || !mobileResultUnique) {
          this.error = true;
          this.errorMessage = 'The email or mobile number you have entered is invalid or taken. Please try again.';
          return;
        };
        this.saveModel(payload);
        this.$router.push({
          name: 'signup-health-facilities-pricing',
          query: {
            ...this.$route.query,
            type: this.facilityType?.value,
          },
        });
        // const data = await signupFacility(payload);
        // console.log('data', data);

        // if (this.requiresCheckout) {
        //   const checkoutSession = get(data, 'organization.subscription.updatesPending');
        //   console.log('checkout session', checkoutSession);
        //   this.stripeCheckoutSessionId = checkoutSession.stripeSession;
        //   this.$refs.checkoutRef.redirectToCheckout();
        //   return;
        // }
        // if (this.countryCallingCode !== '63') {
        //   this.emailVerificationMessageDialog = true;
        // } else {
        //   this.$nuxt.$router.push({ name: 'signup-health-facilities-otp-verification' });
        // }
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
      if (!val) {
        process.browser && localStorage.removeItem(FACILITY_STEP_1_DATA);
        return;
      }
      const saveVal = { ...val };
      process.browser && localStorage.setItem(FACILITY_STEP_1_DATA, JSON.stringify(saveVal));
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
    confirmEmailVerification () {
      this.saveModel(null);
      this.$router.push({ name: 'signin' });
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
