<template lang="pug">
  v-container
    v-row(
      justify="center"
      align="center"
      style="min-height: 80vh"
    ).pa-3
      v-col(
        cols="12"
        sm="6"
        md="5"
        xl="3"
      )
        img(
          src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
          alt="MYCURE logo"
          @click="$nuxt.$router.push({ name: 'index' })"
        ).link-to-home.mb-3
        h2.font-18.primary--text {{ route === 'hippocrates' ? 'Hippocrates' : 'Multispecialty Clinic' }}:
          br(v-if="$isMobile")
          | Sign Up (Step 3 of 3)
        br
        h1#step-1-title Let's talk soon!
        br
        p Please fill out the form and expect a call from our experts within 24 hours.
        div.pt-1
          p By default, you'll have these Core Modules in your clinic:
          v-row(v-for="(module, key) in coreModules" :key="key" no-gutters).pa-0
            v-col.shrink.pr-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check")
            v-col
              p {{ module.name }}
        div(v-if="selectedPremiumModules.length > 0").pt-1
          p You've added these premium modules:
          v-row(v-for="(module, key) in selectedPremiumModules" :key="key" no-gutters).pa-0
            v-col.shrink.pr-2
              img(width="20" src="~/assets/images/mycure-check.png" alt="Check")
            v-col
              p {{ module.name }}
      v-col(
        cols="12"
        sm="6"
        md="5"
        xl="3"
        offset-xl="1"
      )
        v-card
          v-card-text
            h1 Fill out the form below.
          v-card-text
            v-form(ref="formRef" v-model="valid")
              v-text-field(
                v-model="contact.firstName"
                label="First Name"
                outlined
                :rules="[requiredRule]"
                :disabled="loading"
              )
                template(v-if="contact.firstName" v-slot:append)
                  v-icon(color="accent") mdi-check
              v-text-field(
                v-model="contact.lastName"
                label="Last Name"
                outlined
                :rules="[requiredRule]"
                :disabled="loading"
              )
                template(v-slot:append v-if="contact.lastName")
                  v-icon(color="accent") mdi-check
              v-text-field(
                v-model="contact.mobileNo"
                label="Mobile Number"
                type="number"
                outlined
                :prefix="`+${contact.countryCallingCode}`"
                :loading="loading"
                :disabled="loading"
                :error-messages="mobileNoErrorMessage"
                :rules="[requiredRule]"
              )
                template(slot="append")
                  div(style="margin-top: -5px")
                    v-tooltip(bottom)
                      template(v-slot:activator="{ on }")
                        v-btn(icon @click="countryDialog = true" v-on="on").ma-0
                          img(width="25" :src="contact.countryFlag").flag-img.mt-2
                      | Change Country
                    v-icon(v-if="mobileNoError" color="accent") mdi-check
              v-text-field(
                v-model="contact.email"
                type="email"
                label="Email"
                outlined
                :rules="[requiredRule, emailRule]"
                :disabled="loading"
              )
                template(v-slot:append v-if="contact.email && /.+@+./.test(contact.email)")
                  v-icon(color="accent") mdi-check
              v-select(
                v-model="contact.designation"
                label="What is your role?"
                outlined
                :items="roles"
                :rules="[requiredRule]"
                :disabled="loading"
              )
                template(v-slot:append v-if="contact.designation")
                  v-icon(color="accent") mdi-check
              v-menu(
                v-model="dateMenu"
                max-width="290px"
                min-width="290px"
                :close-on-content-click="false"
              ).white
                template(v-slot:activator="{ on }")
                  v-text-field(
                    v-model="dateFormatted"
                    v-on="on"
                    label="Preferred schedule date and time"
                    prepend-inner-icon="mdi-calendar"
                    outlined
                    :rules="[requiredRule]"
                    :disabled="loading"
                    :error-messages="dateErrorMessage"
                  )
                    template(v-if="dateError" v-slot:append)
                      v-icon(color="accent") mdi-check
                v-date-picker(
                  v-if="pickDate"
                  v-model="contact.preferredScheduleDate"
                  color="#0099cc"
                  :min="minDate"
                  :max="maxDate"
                  @input="pickDate = false, pickTime = true"
                )
                v-time-picker(
                  v-if="pickTime"
                  v-model="contact.preferredTime"
                  color="primary"
                  ampm-in-title
                  @input="dateMenu = false, pickDate = true, pickTime = false"
                )
      v-col(
        cols="12"
        md="10"
        xl="7"
        align-self="start"
        :class="actionContainerClasses"
      )
        v-card(flat)
          v-card-actions(:class="cardActionsClasses")
            v-btn(
              text
              large
              :disabled="loading"
              @click="onBack"
            ).font-weight-bold Back
            v-spacer
            v-btn(
              color="accent"
              large
              :disabled="loading"
              :loading="loading"
              @click="submit"
            ).font-weight-bold Request for Demo

    //- Success Dialog
    v-dialog(v-model="successDialog" width="400" persistent)
      v-card.pt-3
        v-card-text.text-center
          img(
            src="~/assets/images/mycure-sign-up-success-pop-up-image.png"
            alt="Email"
          )
          h1.font-40 Success!
          br
          p.subheading We've received your request. Please check out your scheduled apppointment info in&nbsp;
            b {{ contact.email ? contact.email : 'your email.' }}
        v-card-text.text-center
          v-btn(
            large
            bottom
            color="accent"
            @click="onConfirm"
          ).text-none.font-weight-bold Okay!
    v-snackbar(
      v-model="error"
      color="error"
    ) There was an error. Please try again later!
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
            v-list-item(v-for="(country, key) in countries" @click="selectCountry(country)" :key="key")
              v-list-item-action
                img(width="25" :src="country.flag")
              v-list-item-content
                v-list-item-title {{ country.name }}
</template>

<script>
// - utils
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import _ from 'lodash';
import {
  getCountry,
  getCountries,
  sendMultiSpecialtyInquiry,
} from '~/utils/axios';
import dayOrNight from '~/utils/day-or-night';
import headMeta from '~/utils/head-meta';
// - constants
import modules from '~/assets/fixtures/modules';

export default {
  layout: 'user',
  data () {
    this.step1Fields = [
      'facilityName',
      'facilityAddress',
      // FOR REFERENCE https://github.com/mycurelabs/web-main/issues/822
      // 'numberOfStaff',
      'numberOfPatients',
      'hasOtherBranches',
    ];
    this.step3Fields = [
      'firstName',
      'lastName',
      'mobileNo',
      'email',
      'designation',
      'preferredScheduleDate',
    ];
    this.coreModules = modules
      .filter(m => m.type === 'core')
      .map(m => ({
        ...m, icon: require(`~/assets/images/${m.icon}`),
      }));
    this.dayOrNight = dayOrNight();
    return {
      loading: false,
      valid: false,
      successDialog: false,
      dateMenu: false,
      pickDate: true,
      pickTime: false,
      error: false,
      countries: [],
      searchString: '',
      countryDialog: false,
      contact: {
        countryCallingCode: '',
        countryFlag: null,
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
        'Staff',
      ],
    };
  },
  computed: {
    route () {
      return this.$nuxt.$route?.params?.route || 'multispecialty';
    },
    // returns min date in ISO 8601 format
    minDate () {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const formatted = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
      return formatted;
    },
    // returns max date in ISO 8601 format
    maxDate () {
      const date = new Date();
      date.setMonth(date.getMonth() + 3);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate() + 1;
      const formatted = `${year}-${month < 10 ? `0${month}` : month}-${day < 10 ? `0${day}` : day}`;
      return formatted;
    },
    dateFormatted () {
      const date = this.contact.preferredScheduleDate;
      const time = this.contact.preferredTime;
      if (!date) {
        return null;
      }
      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year} ${time}`;
    },
    actionContainerClasses () {
      return [{ 'mb-10': this.$isMobile }];
    },
    cardActionsClasses () {
      return [this.dayOrNight === 'day' ? 'day-card-actions' : 'night-card-actions'];
    },
  },
  watch: {
    'contact.mobileNo': {
      handler () {
        this.validatePhoneNo();
      },
    },
    'contact.preferredScheduleDate': {
      handler () {
        this.validateDate();
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
    // Prefill email
    const email = localStorage.getItem('multi:step3:email');
    if (email) {
      this.contact.email = email;
    }
  },
  methods: {
    async init () {
      if (process.browser) {
        if (!localStorage.getItem('multi:step2:model')) {
          this.$nuxt.$router.push({ name: 'signup-multispecialty-step-2' });
        }

        // Load model
        if (localStorage.getItem('multi:step3:model')) {
          this.contact = JSON.parse(localStorage.getItem('multi:step3:model'));
        } else {
          const country = await getCountry();
          const { location } = country;
          this.contact.countryCallingCode = location ? location.calling_code : '63';
          this.contact.countryFlag = location ? location.country_flag : 'https://assets.ipstack.com/flags/ph.svg';
        }
        if (localStorage.getItem('multi:step2:model')) {
          const premiumModules = JSON.parse(localStorage.getItem('multi:step2:model'));
          this.selectedPremiumModules = premiumModules.filter(module => module.selected);
        }

        // Load countries
        this.getCountries();
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
        const countryCode = this.contact.countryCallingCode;
        const mobileNo = this.contact.mobileNo;
        const phoneNumber = parsePhoneNumberFromString(`+${countryCode}${mobileNo}`);
        if (!phoneNumber || !phoneNumber.isValid() || mobileNo.charAt(0) === '0') {
          throw new Error('Invalid mobile number');
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
        if (date > max || date < min) {
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
    saveModel (val) {
      if (process.browser) {
        localStorage.setItem('multi:step3:model', JSON.stringify(val));
      }
    },
    async submit () {
      try {
        this.loading = true;
        this.validateForm();
        this.saveModel(this.contact);
        if (process.browser) {
          if (this.valid) {
            const step1Data = JSON.parse(localStorage.getItem('multi:step1:model'));
            const step2Data = JSON.parse(localStorage.getItem('multi:step2:model')) || [];
            const step3Data = JSON.parse(localStorage.getItem('multi:step3:model'));
            const modulesArr = [...step2Data, ...this.coreModules]
              .filter(m => m.selected)
              .map(m => m.name);
            const payload = {
              $inquiry: true,
              to: this.contact.email,
              substitutions: {
                name: this.contact.firstName,
                fullName: `${this.contact.firstName} ${this.contact.lastName}`,
                modules: modulesArr.join(', '),
                modulesArr,
                ..._.pick(step1Data, this.step1Fields),
                ..._.pick(step3Data, this.step3Fields),
              },
            };
            await sendMultiSpecialtyInquiry(payload);
            this.$router.replace({ query: { success: true } });
            this.successDialog = true;
          }
        }
      } catch (e) {
        console.error(e);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
    onBack () {
      if (process.browser) {
        localStorage.removeItem('multi:step3:model');
      }
      this.contact = {
        countryCallingCode: '',
        countryFlag: null,
      };
      this.$refs.formRef.resetValidation();
      this.$nuxt.$router.push({ name: 'signup-multispecialty-step-2' });
    },
    onConfirm () {
      if (process.browser) {
        localStorage.clear();
      }
      this.contact = {
        countryCallingCode: '',
        countryFlag: null,
      };
      this.$refs.formRef.resetValidation();
      this.$nuxt.$router.push({ name: 'index' });
    },
  },
  head () {
    return headMeta({
      title: 'Book a Free Demo for MYCURE Clinic Management System',
      description: 'Book a free demo with MYCURE Specialists to learn more how the clinic management system can help boost your clinic performance',
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
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
.day-card-actions {
  background-color: #fafafa;
}
.night-card-actions {
  background-color:  rgb(28,28,28);
}
</style>
