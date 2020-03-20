<template lang="pug">
  v-layout(row justify-center)
    v-flex(xs12 md10)
      v-layout(row wrap justify-center)
        v-flex(xs12 md10).pa-1.mb-3
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          br
          h2.primary--text Specialized Clinic: Sign Up (Step 2 of 3)
          h1.font-work-sans Choose your specialized clinic:
      v-layout(
        row
        wrap
        justify-center
      )
        v-flex(
          xs12 
          md2
          v-for="(type, key) in specializedTypes" 
          :key="key"
        ).pa-2
          v-card(
            hover
            width="100%"
            height="100%"
            :color="type.selected ? '#f0f0f0' : ''"
            :class="[{'black--text': type.selected}]"
          ).clinic-card
            div(@click="toggleType(type)")
              div.check-container.text-xs-right
                img(
                  v-if="type.selected"
                  src="../../assets/images/mycure-web-bullet-check.png"
                  width="15%"
                  alt="Check"
                ).mt-1.mr-1
              v-card-text
                div.text-xs-center
                  img(
                    :src="require(`@/assets/images/${type.image}${type.selected ? '-active' : '' }.png`)"
                    :alt="type.image"
                    width="100%"
                  )
              v-card-text.text-xs-center
                h2(:class="[$isMobile ? 'font-m' : 'font-16']") {{ type.title }}
              v-card-text.px-2.inclusions-container.grow
                p The trial includes:
                span(v-for="(item, key) in type.checklist" :key="key")
                  span(:class="type.selected ? 'primary--text' : 'black--text'") ✓&nbsp;
                  | {{ item }}
                  br
            v-card-actions.clinic-card-actions
              v-btn(
                color="primary"
                medium
                flat
              ).font-weight-bold.details-btn View Details
        v-flex(xs12 md10).pa-1.mt-3
          v-card(flat)
            v-card-actions
              v-btn(
                flat
                :to="{ name: 'signup-specialized-step-1' }"
                :disabled="loading"
                large
              ).font-weight-bold Back
              v-spacer
              v-btn(
                color="accent"
                :disabled="loading || !selectedType.value"
                @click="onProceed"
                large
              ).font-weight-bold Proceed

    email-verification-dialog(
      v-model="emailVerificationMessageDialog"
      :email="step1Data.email"
      @confirm="doneSignupNonPH"
    )
    v-snackbar(
      color="accent"
      v-model="added"
      :timeout="1000"
    ) {{toggledType}} Selected!
    
    v-snackbar(
      v-model="removed"
      :timeout="1000"
    ) {{toggledType}} Removed!

    v-snackbar(
      v-model="errorSnack"
      color="error"
      :timeout="1000"
    ) {{ errorMessage }}
</template>

<script>
// - utils
import dayOrNight from '../../utils/day-or-night';
import { signupSpecialized } from '../../utils/axios';
// - components
import EmailVerificationDialog from '../signup-individual/email-verification-dialog';

export default {
  components: {
    EmailVerificationDialog
  },
  data () {
    this.dayOrNight = dayOrNight();
    this.freeInclusions = [
      '1 doctor account',
      '1 staff account',
      '1 GB Storage'
    ];
    return {
      added: false,
      removed: false,
      errorSnack: false,
      loading: false,
      emailVerificationMessageDialog: false,
      // - models
      step1Data: {},
      toggledType: {},
      selectedType: {},
      errorMessage: '',
      // - enum
      specializedTypes: [
        {
          title: 'Skin and Aesthetic',
          value: 'aesthetics-clinic',
          image: 'mycure-signup-derma',
          selected: false,
          checklist: [
            ...this.freeInclusions,
            'Core Modules',
            'Pharmacy',
            'Materials Management',
          ]
        },
        {
          title: 'Pediatrics',
          value: 'pediatrics-clinic',
          image: 'mycure-signup-pedia',
          selected: false,
          checklist: [
            ...this.freeInclusions,
            'Core Modules',
            'Pharmacy',
            'Materials Management',
          ]
        },
        {
          title: 'Maternity Care',
          value: 'maternity-care-clinic',
          image: 'mycure-signup-maternity',
          selected: false,
          checklist: [
            ...this.freeInclusions,
            'Core Modules',
            'Laboratory',
            'Imaging',
            'Pharmacy',
            'Materials Management'
          ]
        },
        {
          title: 'Dental',
          value: 'dental-clinic',
          image: 'mycure-signup-dental',
          selected: false,
          checklist: [
            ...this.freeInclusions,
            'Core Modules',
            'Laboratory',
            'Imaging',
            'Pharmacy',
            'Materials Management'
          ]
        },
        {
          title: 'Diagnostic',
          value: 'diagnostic-center',
          image: 'mycure-signup-diag',
          selected: false,
          checklist: [
            ...this.freeInclusions,
            'Core Modules',
            'Laboratory',
            'Imaging',
            'Pharmacy',
            'Materials Management'
          ]
        }
      ]
    };
  },
  created () {
    const step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    if (step1Data && !step1Data.hasOwnProperty('email')) {
         this.$router.push({ name: 'signup-specialized-step-1'});
    } else {
      this.step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    }
  },
  methods: {
    async onProceed () {
      try {
        this.loading = true;
        if (!this.selectedType.hasOwnProperty('value')) {
          this.errorMessage = 'Please select a type of clinic service';
          this.errorSnack = true;
          return;
        }
        this.step1Data.clinicType = this.selectedType.value;
        const data = await signupSpecialized(this.step1Data);
        console.warn('specialized data', data);
        // this.saveModel(this.step1Data);
      } catch (e) {
        console.error(e);
        this.error = true;
        if (e.code === 11000) {
          this.errorMessage = `The email ${this.step1Data.email} or mobile number ${this.step1Data.mobileNo} is already in use.`;
          this.errorSnack = true;
        }
      } finally {
        this.loading = false;
      }
    },
    // saveModel (val) {
    //   const saveVal = {
    //     ...val,
    //     password: '',
    //   };
    //   localStorage.setItem('individual:step1:model', JSON.stringify(saveVal));
    // },
    toggleType (type) {
      type.selected = !type.selected;
      if (type.selected) {
        this.selectedType = type;
        this.specializedTypes = this.specializedTypes
          .map(item => {
            if (item.title !== type.title ) item.selected = false;
            return item;
          });
      } else {
        this.selectedType = {};
      }
      this.showToast(type);
    },
    showToast (type) {
      this.toggledType = type.title;
      type.selected ? this.added = true : this.removed = true;
    },
    doneSignupNonPH () {
      this.emailVerificationMessageDialog = false;
      localStorage.clear();
      this.$router.push({ name: 'home' });
    },
  }
};
</script>

<style scoped>
.link-to-home:hover {
  cursor: pointer;
}
.check-container {
  min-height: 40px;
}
.clinic-card {
  position: relative;
  padding-bottom: 30px;
}
.clinic-card:hover {
  background-color: #f0f0f0 !important;
  color: black;
}
.clinic-card-actions {
  position: absolute;
  width: 100%;
  bottom: 0;
}
.details-btn {
  width: 100%
}
@media screen and (min-height: 1080px) {
  .check-container {
    min-height: 60px !important;
  }
}
</style>