<template lang="pug">
  v-container(v-if="!loading.page" fluid fill-height).pa-0.ma-0
    v-row(style="height: 100vh")
      v-col(cols="6" v-if="!$isMobile").pa-0.bg-panel
        v-row(style="height: 100vh" align="center" justify="center")
          //- v-col.text-center
          //-   img(
          //-     src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
          //-     alt="White MYCURE Logo"
          //-     width="150px"
          //-     height="41.88px"
          //-     @click="$router.push({ name: 'index' })"
          //-   ).link-to-home
          //-   br
          //-   img(src="~/assets/images/mycure-onboarding-phone-verification.png" alt="Phone")
      v-col(:cols="$isMobile? '12' : '6'" :class="$isMobile ? 'pa-4' : 'pa-0'")
        v-container(style="background: white; height: 100vh;" :class="$isMobile ? 'pa-3' : ['ml-n16', 'px-16', 'py-8']").rounded-tl-xl.rounded-bl-xl.scroll.no-scroll.no-scroll-2
          v-form(ref="formRef" v-model="valid" @submit.prevent="submit")
            v-row
              v-col(cols="10")
                h2 Register
                p Level up your healthcare services and get more patients safely
            p.mb-2 Personal Info
            v-row(:no-gutters="$isMobile").px-2
              v-col(
                cols="12"
                md="6"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-1.order-sm-1
                //- First Name
                v-text-field(
                  ref="firstNameRef"
                  v-model="firstName"
                  placeholder="First Name"
                  outlined
                  :dense="!$isWideScreen"
                  :rules="isRequired"
                  :disabled="loading.form"
                ).ma-0.no-details-margin
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
                  placeholder="Last Name"
                  outlined
                  :dense="!$isWideScreen"
                  :rules="isRequired"
                  :disabled="loading.form"
                ).ma-0.no-details-margin
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
                  placeholder="Email"
                  outlined
                  :dense="!$isWideScreen"
                  :rules="emailRules"
                  :disabled="loading.form"
                  @keyup="checkEmail"
                ).mb-0.no-details-margin
                  template(v-slot:append v-if="isEmailValid && emailUnique")
                    v-icon(color="accent") mdi-check
              v-col(
                cols="12"
                md="6"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-4.order-sm-6
                //- Mobile No.
                v-text-field(
                  v-model="mobileNo"
                  placeholder="Mobile Number"
                  type="number"
                  outlined
                  :dense="!$isWideScreen"
                  :prefix="`+${countryCallingCode}`"
                  :disabled="loading.form"
                  :rules="[...isRequired, mobileNumberRule]"
                  @keypress="checkNumberInput($event)"
                ).mb-0.no-details-margin
                  template(slot="append")
                    div(style="margin-top: -8px")
                      v-icon(v-if="mobileNoError && mobileUnique" color="accent").ml-n10 mdi-check
                      v-tooltip(bottom)
                        template(v-slot:activator="{ on }")
                          v-btn(icon @click="countryDialog = true" v-on="on")
                            img(width="25" height="18.75" :src="countryFlag" :alt="countryFlag").flag-img.mt-2
                        | Change Country
              v-col(
                cols="12"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-5.order-sm-4
                //- Password
                v-text-field(
                  v-model="password"
                  placeholder="Password"
                  outlined
                  :dense="!$isWideScreen"
                  :type="showPass ? 'text' : 'password'"
                  :rules="passwordRules"
                  :disabled="loading.form"
                  :append-icon="showPass ? 'mdi-eye-off' : 'mdi-eye'"
                  @click:append="showPass = !showPass"
                ).no-details-margin
              v-col(
                cols="12"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-6.order-sm-5
                //- Confirm Password
                v-text-field(
                  v-model="confirmPassword"
                  placeholder="Confirm Password"
                  type="password"
                  outlined
                  :dense="!$isWideScreen"
                  :rules="[...isRequired, matchPasswordRule]"
                  :disabled="loading.form"
                ).no-details-margin
                  template(v-slot: append v-if="confirmPassword && confirmPassword === password")
                    v-icon(color="accent") mdi-check
            p.mt-5.mb-2 Facility Info
            v-row(:no-gutters="$isMobile").px-2
              v-col(
                cols="12"
                md="8"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-7.order-sm-7
                div(@click="chooseFacilityTypeDialog = true")
                  v-select(
                    v-model="facilityType"
                    placeholder="Health Facility Type"
                    item-text="text"
                    item-value="value"
                    outlined
                    :dense="!$isWideScreen"
                    readonly
                    append-icon="$dropdown"
                    :items="availableFacilityTypes"
                    :rules="isRequired"
                    :error="errorFacilityType"
                    :error-messages="errorMessagesFacilityType"
                    @click:append="chooseFacilityTypeDialog = true"
                  ).no-details-margin
                    template(v-slot:item="{ item }")
                      span {{ item.text }}&nbsp;
                        v-chip(v-if="item.chip" small color="primary").font-11 {{item.chip}}
                    template(v-slot:selection="{ item }")
                      span {{ item.text }}&nbsp;
                        v-chip(v-if="item.chip" small color="primary").font-11 {{item.chip}}
              v-col(
                cols="12"
                md="4"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-8.order-sm-8
                v-select(
                  v-model="roles"
                  placeholder="Your Role"
                  item-text="text"
                  item-value="value"
                  outlined
                  :dense="!$isWideScreen"
                  :error-messages="errorMessagesRoles"
                  :items="userRoles"
                  :rules="isRequired"
                  :disabled="loading.form"
                  :error="errorRoles"
                ).no-details-margin
              v-col(
                cols="12"
                :class="{ 'pa-1': !$isMobile }"
              ).order-md-8.order-sm-8
                v-text-field(
                  v-if="isDoctor"
                  v-model="doc_PRCLicenseNo"
                  type="number"
                  placeholder="PRC License No"
                  outlined
                  :dense="!$isWideScreen"
                  :disabled="loading.form"
                  :rules="[v => !!v && (numPRC > 0) || (numPRC < 0 ? 'Value not allowed' : 'Please enter your PRC License No for verification')] "
                ).no-details-margin
                  //- hint="Please enter your PRC License No for verification"
            div(v-if="!invitation").font-italic.font-gray.mt-4
              span Have a referral code?&nbsp;
              a(@click="codeDialog = true") Click here
            div(v-else).font-italic.font-gray.mt-4
              span Referral code has been applied.&nbsp;
              a(@click="codeDialog = true") Change
            br
            v-checkbox(
              v-model="hasPromoCode"
              hide-details
              color="primary"
              height="57.97px"
              :disabled="loading.form"
            ).mt-0
              template(slot="label")
                span Apply a promo code (Optional)&nbsp;&nbsp;
                div(width="200px")
                  v-text-field(
                    v-if="hasPromoCode"
                    v-model="stripeCoupon"
                    :rules="[v => !!v && hasPromoCode && (stripeCoupon > 0) || (stripeCoupon < 0 ? 'Value not allowed' : 'Please input your promo code')]"
                    placeholder="Promo Code"
                    outlined
                    dense
                    clearable
                    :disabled="loading.form"
                    :class="{'pt-1': $isMobile}"
                    @click.stop
                  ).no-details-margin
            v-checkbox(
              v-model="agree"
              color="primary"
              :disabled="loading.form"
            ).ma-0.no-details-margin
              template(slot="label")
                span I agree to MYCURE's&nbsp;
                  a(target="_blank" rel="noopener noreferrer" href="../terms" @click.stop style="text-decoration: none") Terms of Use&nbsp;
                  | and&nbsp;
                  a(target="_blank" rel="noopener noreferrer" href="../privacy-policy" @click.stop style="text-decoration: none") Privacy Policy
            v-row.mt-1.mb-2
              v-col(cols="12")
                v-btn(
                  type="submit"
                  color="primary"
                  block
                  large
                  :disabled="isProceedDisabled"
                  :loading="loading.form"
                ).text-none Proceed
                stripe-checkout(
                  ref="checkoutRef"
                  :pk="stripePK"
                  :sessionId="stripeCheckoutSessionId"
                )
            span Already have an account?&nbsp;
            a(href="../signin" style="text-decoration: none") Log in
    v-snackbar(:value="error" type="error" color="red" timeout="2000").mt-5 {{ errorMessage }}
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
      :facility-types="availableFacilityTypes"
      @select="onFacilityTypeSelect($event)"
    )
    //- referral code dilog
    v-dialog(v-model="codeDialog" :width="$isMobile ? '100%' : '60%'").ma-0.rounded-xl
      v-card(height="100%" width="100%").rounded-xl
        v-card-text.pa-0
          div(style="position: relative; left: 0; top: 0;")
            img(
              src="~/assets/images/sign-up/Referral-code.png"
              width="100%"
              style="background: #D7F7FE; position: relative; left: 0; top: 0;"
            ).rounded-tl-xl.rounded-tr-xl
            div(style="position: absolute; top: 35%; left: 0; width: 100%")
              v-col(cols="12")
                v-row(justify="center")
                  v-col(cols="10" sm="4")
                    img(
                      width="100%"
                      src="~/assets/images/sign-up/referral-fg.png"
                    )
          v-col(cols="12").text-center.pt-16.px-4.pb-4
            div.mt-10.mb-5
              span.font-m.black--text.font-weight-bold Enter Referral Code
            v-col(cols="12")
              v-row(justify="center")
                v-col(cols="12" sm="5")
                  v-text-field(
                    v-model="invitation"
                    label="Referral Code (Optional)"
                    hint="6 character referral code"
                    outlined
                    :dense="$isMobile"
                    clearable
                    :disabled="loading.form"
                  ).rounded-lg
              v-row(justify="end")
                v-col(cols="1" align="end")
                  v-row(justify="end" align="end")
                    v-btn(
                      fab
                      :width="$isWideScreen ? '100' : '70'"
                      :height="$isWideScreen ? '100' : '70'"
                      color="primary"
                      @click="codeDialog = false"
                    )
                      v-icon mdi-arrow-right
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import isObject from 'lodash/isObject';
import omit from 'lodash/omit';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import headMeta from '~/utils/head-meta';
import {
  getCountries,
  getCountry,
} from '~/utils/axios';
import {
  requiredRule,
  emailRules,
  passwordRules,
} from '~/utils/text-field-rules';
import { DOCTOR_TYPES } from '~/services/subscription-packages';
import ChooseFacilityType from '~/components/signup/ChooseFacilityType';
import EmailVerificationDialog from '~/components/signup/EmailVerificationDialog';

const FACILITY_STEP_1_DATA = 'facility:step1:model';

export default {
  components: {
    ChooseFacilityType,
    EmailVerificationDialog,
  },
  layout: 'empty',
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
      stripeCoupon: null,
      roles: [],
      agree: '',
      hasPromoCode: null,
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
      codeDialog: false,
      emailUnique: true,
      mobileUnique: true,
    };
  },
  head () {
    return headMeta({
      title: 'Sign Up to MYCURE',
      description: 'Welcome to MYCURE Complete Clinic Management System. Sign up today and get ready to easily create, store, and retrieve your electronic medical records (EMR).',
      socialBanner: require('~/assets/images/banners/OG Homepage.png'),
    });
  },
  computed: {
    availableFacilityTypes () {
      // Diagnostic is hidden in telehealth signup
      return this.$route.query.from === 'telehealth'
        ? [...this.facilityTypes].slice(0, 2)
        : this.facilityTypes;
    },
    isDoctor () {
      return this.roles.includes('doctor');
    },
    preBundle () {
      return this.$route.query.plan;
    },
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
    numPRC () {
      return this.doc_PRCLicenseNo ? parseInt(this.doc_PRCLicenseNo) : 0;
    },
  },
  watch: {
    searchString (val) {
      if (typeof val !== 'string' || val === '') {
        return;
      }
      const needle = val.toLowerCase();
      this.countries = this.countries.filter(v => v?.name?.toLowerCase().includes(needle)); // eslint-disable-line
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
    hasPromoCode (val) {
      if (!val) this.stripeCoupon = null;
    },
  },
  created () {
    this.loading.page = false;
    this.init();
  },
  methods: {
    async init () {
      try {
        this.$vuetify.theme.dark = false;
        this.loading.form = true;
        // - Fetch countries
        await this.getCountries();
        const country = await getCountry();
        const { location } = country;
        this.countryCallingCode = location ? location.calling_code : '63';
        this.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';

        // - Check if there is pending session
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
          this.stripeCoupon = localStorageData.stripeCoupon;
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
        if (this.stripeCoupon) this.hasPromoCode = true;
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
        const filledFacilityType = isObject(this.facilityType) ? this.facilityType.value : this.facilityType;
        const { orgProps } = this.facilityTypes.find(type => type.value === filledFacilityType);
        const organizationPayload = {
          ...orgProps,
        };

        // Route queries
        const { trial, plan, from } = this.$route.query;

        // NOTE: See SignupButton component
        // for the logic of query params being
        // passed to the url before going to
        // signup page.
        // `from` has value of either 'telehealth' or 'booking'
        if (from && ['telehealth', 'booking'].includes(from)) {
          if (this.$route.query.type === 'doctor' || this.facilityType === 'doctor') {
            organizationPayload.types = [
              'doctor',
              `doctor-${from}`,
            ];
          }
          if (this.$route.query.type === 'clinic' || this.facilityType === 'clinic') {
            organizationPayload.types = [
              'clinic',
              `clinic-${from}`,
            ];
          }
          // Diagnostic telehealth not yet available business-wise
          if (from === 'booking' && (this.$route.query.type === 'diagnostic' || this.facilityType === 'diagnostic')) {
            organizationPayload.types = [
              'diagnostic',
              `diagnostic-${from}`,
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
          stripeCoupon: this.stripeCoupon,
          // skipMobileNoVerification: this.facilityType.value !== 'doctor',
          // - To be omitted in actual submit in step 2
          ...trial && { trial: true },
          ...plan && { plan },
          ...from && { from },
          organizationType: this.facilityType,
        };
        console.table(payload);
        // Only include PRC when user is a doctor
        if (this.doc_PRCLicenseNo && this.isDoctor) payload.doc_PRCLicenseNo = +this.doc_PRCLicenseNo;

        const [
          emailResultUnique,
          mobileResultUnique,
        ] = await Promise.all([
          this.$sdk.service('auth').checkUniqueIdentity('email', this.email),
          this.$sdk.service('auth').checkUniqueIdentity('mobileNo', `+${this.countryCallingCode}${this.mobileNo}`),
        ]);
        this.emailUnique = emailResultUnique;
        this.mobileUnique = mobileResultUnique;
        if (!emailResultUnique || !mobileResultUnique) {
          this.error = true;
          this.errorMessage = 'The email or mobile number you have entered is invalid or taken. Please try again.';
          return;
        };
        this.saveModel(payload);
        // Record track
        this.$gtag.event('submit', {
          event_category: 'signup',
          event_label: 'signup-step-1',
        });
        this.$router.push({
          name: 'signup-health-facilities-pricing',
          query: {
            ...this.$route.query,
            type: this.facilityType?.value || this.$route.query.type,
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
            console.log('countries', this.countries);
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
    onFacilityTypeSelect (type) {
      this.facilityType = type;
      /*
        Remove the pricing plan query since you've changed facility type.
        Remove the trial flag, when doctor has been selected.
      */
      this.$router.replace({
        query: {
          ...omit(this.$route.query, ['plan', 'trial']),
          ...(!DOCTOR_TYPES.includes(type) && this.$route.query.trial) && { trial: true },
          type,
        },
      });
      this.chooseFacilityTypeDialog = false;
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
.no-scroll::-webkit-scrollbar {
  display: none;
}
.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
}
.no-scroll-2 {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.no-details-margin >>> .v-text-field__details {
  margin-bottom: 0px !important;
}
.bg-panel {
  background-image: url('~/assets/images/sign-up/Signup-bg.png');
  background-size: 100%;
  background-position: center center;
}
</style>
