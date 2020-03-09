<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md5)
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          h1#step-1-title Let's talk soon!
          br
          p Please fill out the form and expect a call from our experts within 24 hours.
          div.pt-1
            p By default, you'll have these Core Modules in your clinic:
            v-layout(row v-for="(module, key) in coreModules" :key="key").pa-0
              v-flex(shrink).pr-2
                img(width="20" src="../../assets/images/mycure-check.png")
              v-flex(shrink)
                p {{ module.name }}
          div(v-if="selectedPremiumModules.length > 0").pt-1
            p You've added these premium modules:
            v-layout(row v-for="(module, key) in selectedPremiumModules" :key="key").pa-0
              v-flex(shrink).pr-2
                img(width="20" src="../../assets/images/mycure-check.png")
              v-flex(shrink)
                p {{ module.name }}
        v-flex(xs12 md5)
          v-card
            v-card-text
              h5.primary--text Step 3 of 3
              h1 Fill out the form below.
            v-card-text
              v-form(ref="formRef" v-model="valid")
                v-text-field(
                  v-model="contact.firstName"
                  label="First Name"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="contact.lastName"
                  label="Last Name"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="contact.mobileNo"
                  label="Mobile Number"
                  type="number"
                  outline
                  :prefix="`+${contact.countryCallingCode}`"
                  :loading="loading"
                  :disabled="loading"
                  :error-messages="mobileNoErrorMessage"
                  :rules="[requiredRule]"
                  @blur="validatePhoneNo"
                )
                  template(slot="append")
                    v-tooltip(bottom)
                      v-btn(icon style="margin-top: -5px" @click="countryDialog = true" slot="activator").ma-0
                        img(width="25" :src="contact.countryFlag").flag-img.mt-2
                      | Change Country
                v-text-field(
                  v-model="contact.email"
                  type="email"
                  label="Email"
                  outline
                  :rules="[requiredRule, emailRule]"
                  :disabled="loading"
                )
                v-select(
                  v-model="contact.designation"
                  :items="roles"
                  label="What is your role?"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="contact.preferredScheduleDate"
                  type="date"
                  :min="minDate"
                  :max="maxDate"
                  label="Preferred schedule date (dd/mm/yy)"
                  prepend-inner-icon="mdi-calendar"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                  :error-messages="dateErrorMessage"
                )
        v-flex(xs12 md10).mt-2
          v-card
            v-card-actions
              v-btn(flat :to="{ name: 'signup-multispecialty-step-2' }") Back
              v-spacer
              v-btn(
                color="accent"
                :disabled="loading"
                :loading="loading"
                @click="submit"
              ) Request for Demo
        v-flex(xs12 md6 offset-md-6 :class="{'text-xs-right' : !$isMobile}").pt-2
          b.font-18 Already have an account? 
            router-link(:to="{ name: 'signin' }") Sign in.
    v-snackbar(
      v-model="success"
      color="accent"
    ) Inquiry sent! Please check your email for confirmation.

    //- Country dialog
    //- TODO: Make this into a separate component
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
            v-list-tile(v-for="(country, key) in countries" @click="selectCountry(country)" :key="key")
              v-list-tile-action
                img(width="25" :src="country.flag")
              v-list-tile-content
                v-list-tile-title {{country.name}}
</template>

<script>
import _ from 'lodash';
import modules from '../../assets/fixtures/modules';
import {
  getCountry,
  getCountries,
  sendMultiSpecialtyInquiry 
} from '../../utils/axios';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
export default {
  data () {
    this.step1Fields = [
      'facilityName',
      'facilityAddress',
      'numberOfStaff',
      'numberOfPatients',
      'hasOtherBranches'
    ];
    this.step3Fields = [
      'firstName',
      'lastName',
      'mobileNo',
      'email',
      'designation',
      'preferredScheduleDate'
    ];
    this.coreModules = modules
        .filter(m => m.type === 'core')
        .map(m => ({ 
          ...m, icon: require(`../../assets/images/${m.icon}`)
        }));
    return {
      loading: false,
      valid: false,
      success: false,
      countries: [],
      searchString: '',
      countryDialog: false,
      contact: {
        countryCallingCode: '',
        countryFlag: null
      },
      mobileNoError: false,
      mobileNoErrorMessage: '',
      dateError: false,
      dateErrorMessage: '',
      selectedPremiumModules: [],
      requiredRule: v => !!v || 'This field is required',
      emailRule: v => /.+@.+/.test(v) || 'Email address must be valid',
      roles: [
        'Owner',
        'Administrator',
        'Manager',
        'Doctor',
        'Staff'
      ],
    };
  },
  computed: {
    minDate () {
      const date = new Date;
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatted = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
      return formatted;
    },
    maxDate () {
      const date = new Date;
      date.setMonth(date.getMonth() + 3);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate() + 1;
      const formatted = `${year}-${month < 10 ? `0${month}` : month }-${day < 10 ? `0${day}` : day}`;
      return formatted;
    }
  },
  watch: {
    contact: {
      handler (val) {
        localStorage.setItem('multi:step3:model', JSON.stringify(val));
      },
      deep: true,
      immediate: false
    },
    'contact.mobileNo': {
      handler () {
        this.validatePhoneNo();
      },
      deep: true
    },
    'contact.preferredScheduleDate': {
      handler () {
        this.validateDate();
      },
      deep: true
    },
    searchString (val) {
      if (typeof val !== 'string' || val === '') {
        this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
        return;
      }
      const needle = val.toLowerCase();
      this.countries = this.countries.filter(v => v.name.toLowerCase().indexOf(needle) > -1);
    }
  },
  methods: {
    async init () {
      // if (!localStorage.getItem('multi:step2:model')) 
      //   this.$router.push({ name: 'signup-multispecialty-step-2' });

      // Load model
      if (localStorage.getItem('multi:step3:model')) {
        this.contact = JSON.parse(localStorage.getItem('multi:step3:model'));
      } else {
        const country = await getCountry();
        const { location } = country;
        this.contact.countryCallingCode = location.calling_code;
        this.contact.countryFlag = location.country_flag;
      }
      if (localStorage.getItem('multi:step2:model')) {
        const premiumModules = JSON.parse(localStorage.getItem('multi:step2:model'));
        this.selectedPremiumModules = premiumModules.filter(module => module.selected);
      }

      // Load countries
      this.getCountries();
    },
    async getCountries () {
      if (!localStorage.getItem('mycure:countries')) {
        this.countries = await getCountries();
        localStorage.setItem('mycure:countries', JSON.stringify(this.countries));
      } else {
        this.countries = JSON.parse(localStorage.getItem('mycure:countries'));
      }
    },
    selectCountry (country) {
      this.contact.countryCallingCode = country.callingCodes[0];
      this.contact.countryFlag = country.flag;
      this.countryDialog = false;
      this.searchString = '';
    },
    validateForm () {
      const valid = this.$refs.formRef.validate();
      this.validatePhoneNo();
      this.validateDate();
      this.valid = valid && this.mobileNoError && this.dateError;
    },
    validatePhoneNo () {
      this.mobileNoError = false;
      this.mobileNoErrorMessage = '';
      try {
        let countryCode = this.contact.countryCallingCode;
        let mobileNo = this.contact.mobileNo;
        let phoneNumber = parsePhoneNumberFromString(`+${countryCode}${mobileNo}`);
        if (!phoneNumber || !phoneNumber.isValid()) {
          throw new Error();
        } else {
          this.mobileNoError = true;
        }
      } catch (e) {
        this.mobileNoError = false;
        this.mobileNoErrorMessage = 'Invalid mobile number format';
      }
    },
    validateDate () {
      this.dateError = false;
      this.dateErrorMessage = '';
      try {
        const date = new Date(this.contact.preferredScheduleDate);
        const max = new Date(this.maxDate);
        const min = new Date(this.minDate);
        if (date > max || date < min ) {
          throw new Error(`${date > max ? 'max' : 'min'}`);
        } else {
          this.dateError = true;
        }
      } catch (e) {
        this.dateError = false;
        if (e.message === 'max') {
          this.dateErrorMessage = 'Please set date within a 3-month period.';
        } else if (e.message === 'min') {
          this.dateErrorMessage = 'You cannot set a past date';
        } else {
          this.dateErrorMessage = 'Invalid date';
        }
      }
    },
    async submit () {
      try {
        this.loading = true;
        this.validateForm();
        if (this.valid) {
          const step1Data = JSON.parse(localStorage.getItem('multi:step1:model'));
          const step2Data = JSON.parse(localStorage.getItem('multi:step2:model')) || [];
          const step3Data = JSON.parse(localStorage.getItem('multi:step3:model'));
          const payload = {
            $inquiry: true,
            to: this.contact.email,
            substitutions: {
              name: this.contact.firstName,
              fullName: `${this.contact.firstName} ${this.contact.lastName}`,
              modules: [...step2Data, ...this.coreModules]
                .filter(m => m.selected)
                .map(m => m.name),
              ..._.pick(step1Data, this.step1Fields),
              ..._.pick(step3Data, this.step3Fields),
            }
          };
          await sendMultiSpecialtyInquiry(payload);
          localStorage.removeItem('multi:step1:model');
          localStorage.removeItem('multi:step2:model');
          localStorage.removeItem('multi:step3:model');
          this.contact = {};
          this.$refs.formRef.resetValidation();
          this.success = true;
        }
      } catch (e) {
        console.error(e);
      } finally {
        this.loading = false;
      }
    }
  },
  async created () {
    await this.init();
  }
};
</script>

<style scoped>
h1 {
  line-height: 35px;
}

.link-to-home:hover {
  cursor: pointer;
}
</style>