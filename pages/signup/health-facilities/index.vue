<template lang="pug">
  v-container
    v-row(justify="center" align="center")
      v-col(cols="12" md="7" justify="center" align="center")
        img(
          src="~/assets/images/sign-up-individual-step-1/mycure-sso-sign-in-logo.svg"
          alt="MYCURE logo"
          width="70"
          @click="$router.push({ name: 'index' })"
        ).link-to-home.mb-5
        h1.mb-5 Level up your healthcare services and get more patients safely
        v-form(ref="formRef" v-model="valid" @submit.prevent="submit")
          v-row
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-1.order-sm-1
              v-text-field(
                v-model="firstName"
                label="First Name"
                outlined
                :rules="[isRequired]"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-2.order-sm-2
              v-text-field(
                v-model="lastName"
                label="Last Name"
                outlined
                :rules="[isRequired]"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-3.order-sm-3
              v-text-field(
                v-model="email"
                label="Email"
                outlined
                :rules="[isRequired]"
              )
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
              v-text-field(
                v-model="mobileNo"
                label="Mobile Number"
                type="number"
                outlined
                :prefix="`+${countryCallingCode}`"
                :error-messages="mobileNoErrorMessage"
                :rules="requiredRule"
                :loading="loadingForm || loading"
                :disabled="loadingForm || loading"
                @blur="validatePhoneNo"
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
              v-text-field(
                v-model="password"
                label="Password"
                outlined
                :rules="[isRequired]"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-6.order-sm-5
              v-text-field(
                v-model="confirmPassword"
                label="Confirm Password"
                outlined
                :rules="[isRequired]"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-7.order-sm-7
              v-text-field(
                v-model="clinicType"
                label="Clinic Type"
                outlined
                :rules="[isRequired]"
              )
            v-col(
              cols="12"
              md="6"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-8.order-sm-8
              v-text-field(
                v-model="role"
                label="Your Role"
                outlined
                :rules="[isRequired]"
              )
            v-col(
              cols="12"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-9.order-sm-9
              v-checkbox(
                v-model="agree"
                hide-details
                style="margin-top: 0px"
              )
                template(slot="label")
                  span I agree to MYCURE's Terms of use and Privacy Policy.
            v-col(
              cols="12"
              :class="{ 'pa-1': !$isMobile }"
            ).order-md-10.order-sm-10
              v-btn(
                type="submit"
                large
                color="success"
              ).mt-5.text-none #[b Create my free account]
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
import {
  getCountries,
  getCountry,
  // signupIndividual,
} from '~/utils/axios';
export default {
  layout: 'user',
  data () {
    this.isRequired = v => !!v || 'This is required';
    this.isMobileNo = (v) => {
      // TODO: move validation here
    };
    return {
      countryDialog: false,
      //
      firstName: '',
      lastName: '',
      email: '',
      mobileNo: '',
      password: '',
      confirmPassword: '',
      clinicType: '',
      role: '',
      agree: '',
      //
      searchString: '',
      countries: [],
      countryCallingCode: '',
      mobileNoErrorMessage: '',
      countryFlag: '',
    };
  },
  created () {
    this.init();
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
  methods: {
    async init () {
      try {
        await this.getCountries();
        const country = await getCountry();
        const { location } = country;
        this.countryCallingCode = location ? location.calling_code : '63';
        this.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
        this.$refs.passwordRef.focus();
      } catch (e) {
        console.error(e);
      }
    },
    submit () {
      try {
        if (!this.$refs.formRef.validate()) {
          return;
        }
      } catch (e) {
        console.error(e);
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
      this.countryCallingCode = country.callingCodes[0];
      this.countryFlag = country.flag;
      this.countryDialog = false;
      this.searchString = '';
    },
    checkNumberInput (event) {
      if (!/\d/.test(event.key)) {
        return event.preventDefault();
      };
      return event;
    },
  },
};
</script>

<style scoped>
.link-to-home:hover {
  cursor: pointer;
}
</style>
