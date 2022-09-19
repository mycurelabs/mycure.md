<template lang="pug">
v-row(justify="center")
  v-col(cols="11" md="8")
    div(style="margin-bottom: 60px;")
      pre MYCURE LOGO
    h1 Register
    p Level up your healthcare services and get more patients safely
  v-col(cols="11" md="8")
    v-form(ref="formRef" @submit.prevent="submit")
      h4.mb-4 Personal Info
      v-row
        v-col(cols="12" md="6").pa-1
          v-text-field(
            v-model="firstName"
            label="First Name"
            outlined
            dense
            :rules="[v => !!v || 'This is required']"
          )
        v-col(cols="12" md="6").pa-1
          v-text-field(
            v-model="lastName"
            label="Last Name"
            outlined
            dense
            :rules="[v => !!v || 'This is required']"
          )
        v-col(cols="12").pa-1
          v-text-field(
            v-model="mobileNo"
            placeholder="Mobile Number"
            type="number"
            outlined
            dense
            :rules="[v => !!v || 'This is required', mobileNumberRule]"
            @keypress="checkNumberInput($event)"
          ).mb-4.no-details-margin
            template(slot="prepend-inner")
              div(@click="countryDialog = true").country-container
                v-tooltip(bottom)
                  template(v-slot:activator="{ on }")
                    img(
                      width="25"
                      height="19"
                      :src="countryFlag"
                      :alt="countryFlag"
                      v-on="on"
                    ).flag-img.mt-3
                  | Change Country
              span(style="margin-top: 4px;") &nbsp;+{{ countryCallingCode }}
            template(slot="append")
              v-icon(v-if="mobileNoError && mobileUnique" color="accent") {{ mdiCheck }}
      h4.mb-4 Account
      v-row
        v-col(cols="12" md="6").pa-1
          v-text-field(
            v-model="email"
            label="Email Address"
            type="email"
            outlined
            dense
            :rules="[v => !!v || 'This is required']"
          )
        v-col(cols="12" md="6").pa-1
          v-text-field(
            v-model="password"
            label="Password"
            outlined
            dense
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? mdiEyeOff : mdiEye"
            :rules="[v => !!v || 'This is required']"
            @click:append="v => showPassword = !showPassword"
          )
        v-col(cols="12").pa-1.mb-5
          v-checkbox(
            v-model="hasReferralCode"
            label="Apply a referral code (Optional)"
            color="primary"
            hide-details
            dense
            :on-icon="mdiCheckboxMarkedOutline"
            :off-icon="mdiCheckboxBlankOutline"
          ).mb-3
          v-text-field(
            v-if="hasReferralCode"
            v-model="referralCode"
            label="Referral Code"
            outlined
            dense
            hide-details
            autofocus
            :rules="[v => !!v || 'This is required']"
          )
          v-checkbox(
            v-model="hasPromoCode"
            label="Apply a promo code (Optional)"
            color="primary"
            hide-details
            dense
            :on-icon="mdiCheckboxMarkedOutline"
            :off-icon="mdiCheckboxBlankOutline"
          ).mb-3
          v-text-field(
            v-if="hasPromoCode"
            v-model="promoCode"
            label="Promo Code"
            outlined
            dense
            hide-details
            autofocus
            :rules="[v => !!v || 'This is required']"
          )
          v-checkbox(
            v-model="agree"
            color="primary"
            hide-details
            :on-icon="mdiCheckboxMarkedOutline"
            :off-icon="mdiCheckboxBlankOutline"
            :rules="[v => !!v || 'This is required']"
          )
            template(slot="label") I agree to MYCURE's&nbsp;#[a Terms of Use]&nbsp;and&nbsp;#[a Privacy Policy] {{typeof promoCode}}
      v-row
        v-col(cols="12")
          v-btn(
            color="primary"
            type="submit"
            large
            block
            depressed
          ) Sign Up
        v-col(cols="12").text-center
          p Already have an account? #[a Log in]

    //- DIALOGS
    v-dialog(v-model="countryDialog" width="500" scrollable)
      v-card
        v-toolbar(flat)
          v-text-field(
            v-model="searchString"
            label="Search Country"
            :append-icon="mdiMagnify"
            solo
            hide-details
            clearable
            flat
            @click:clear="searchString = ''"
          )
        v-divider
        v-card-text(style="height: 300px").pa-0
          v-list
            v-list-item(v-for="(country, key) in countriesList" @click="selectCountry(country)" :key="key")
              v-list-item-action
                img(width="25" :src="country.flag")
              v-list-item-content
                v-list-item-title.text-wrap {{ country.name }}
              strong +{{ country.callingCodes[0] }}
</template>

<script>
import {
  mdiArrowRight,
  mdiMagnify,
  mdiCheck,
  mdiEye,
  mdiEyeOff,
  mdiCheckboxMarkedOutline,
  mdiCheckboxBlankOutline,
  mdiArrowULeftTop,
} from '@mdi/js';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import {
  getCountries,
  getCountry,
} from '~/utils/axios';
export default {
  layout: 'RegistrationLayout',
  data () {
    this.mobileNumberRule = v => this.validatePhoneNo(v) || 'Invalid phone number';
    return {
      firstName: '',
      lastName: '',
      mobileNo: '',
      email: '',
      password: '',
      showPassword: false,
      referralCode: '',
      hasReferralCode: false,
      promoCode: '',
      hasPromoCode: false,
      agree: false,
      // icons
      mdiArrowRight,
      mdiMagnify,
      mdiCheck,
      mdiEye,
      mdiEyeOff,
      mdiCheckboxMarkedOutline,
      mdiCheckboxBlankOutline,
      mdiArrowULeftTop,
      //
      mobileNoError: '',
      mobileUnique: true,
      countryDialog: false,
      // Country models
      searchString: '',
      countries: [],
      countriesList: [],
      countryCallingCode: '',
      countryFlag: '',
    };
  },
  watch: {
    searchString (val) {
      if (typeof val !== 'string') {
        return;
      }
      const needle = val.toLowerCase();
      this.countriesList = this.countries.filter(v => v?.name?.toLowerCase().includes(needle)); // eslint-disable-line
    },
  },
  mounted () {
    this.init();
  },
  methods: {
    async init () {
      try {
        // - Fetch countries
        await this.getCountries();
        const country = await getCountry();
        const { location } = country;
        this.countryCallingCode = location ? location.calling_code : '63';
        this.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
      } catch (e) {
        console.error(e);
      }
    },
    async submit () {
      try {
        if (!await this.$refs.formRef.validate()) return;
        // const payload =
      } catch (e) {
        console.error(e);
      }
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
    async getCountries () {
      try {
        if (process.browser) {
          if (!localStorage.getItem('mycure:countries')) {
            this.countries = await getCountries();
            this.countriesList = await getCountries();
            localStorage.setItem('mycure:countries', JSON.stringify(this.countries));
          } else {
            this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
            this.countriesList = JSON.parse(localStorage.getItem('mycure:countries'));
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
  },
};
</script>

<style scoped>
.link-to-home:hover, .country-container:hover {
  cursor: pointer;
}

.country-container {
  margin-top: -9.5px;
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
  background-size: cover;
  background-position: center center;
}
.rounded-ref-dialog {
  border-radius: 50px;
}
.custom-grey-text {
  color: #768995;
}

@media screen and (min-width: 1920px) {
  .country-container {
    margin-top: -11px;
  }
}
</style>
