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
          h1 What type of services does your clinic provide?
      v-layout(
        row
        wrap
        align-center
        justify-center
      )
        v-flex(
          xs12 
          md2
          align-center
          v-for="(type, key) in specializedTypes" 
          :key="key"
        ).pa-2
          v-card(
            hover
            @click="toggleType(type)"
            :class="[{'grey-panel': type.selected}]"
            width="100%"
          )
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
                  :src="require(`@/assets/images/specialized/${type.image}.png`)"
                  :alt="type.image"
                  width="100%"
                )
            v-card-text.text-xs-center
              h2(:class="[$isMobile ? 'font-m' : 'font-16']") {{ type.title }}
        v-flex(xs12 md10).pa-1.mt-3
          v-card
            v-card-actions
              v-btn(
                flat
                :to="{ name: 'signup-specialized-step-1' }"
                :disabled="loading"
              ) Back
              v-spacer
              v-btn(
                color="accent"
                :disabled="loading"
                @click="onProceed"
              ) Proceed

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
// - components
import EmailVerificationDialog from '../signup-individual/email-verification-dialog';

export default {
  components: {
    EmailVerificationDialog
  },
  data () {
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
          image: 'mycure-specialized-clinic-feature-skin',
          selected: false,
        },
        {
          title: 'Pediatrics',
          value: 'pediatrics-clinic',
          image: 'mycure-specialized-clinic-feature-pedia',
          selected: false,
        },
        {
          title: 'Maternity Care',
          value: 'maternity-care-clinic',
          image: 'mycure-specialized-clinic-feature-maternity',
          selected: false,
        },
        {
          title: 'Dental',
          value: 'dental-clinic',
          image: 'mycure-specialized-clinic-feature-dentist',
          selected: false,
        },
        {
          title: 'Diagnostic',
          value: 'diagnostic-center',
          image: 'mycure-specialized-clinic-feature-diagnostics',
          selected: false
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
        this.saveModel(this.step1Data);
        if (this.step1Data.countryCallingCode !== '63') {
          localStorage.clear();
          this.emailVerificationMessageDialog = true;
        } else {
          this.$router.push({ name: 'signup-specialized-step-3' });
        }
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
    saveModel (val) {
      const saveVal = {
        ...val,
        password: '',
      };
      localStorage.setItem('individual:step1:model', JSON.stringify(saveVal));
    },
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
      this.$router.push({ name: 'signup-specialized-step-4' });
    }
  }
};
</script>

<style scoped>
.link-to-home:hover {
  cursor: pointer;
}
.grey-card {
  background-color: #f0f0f0 !important;
}
.check-container {
  min-height: 40px;
}

@media screen and (min-height: 1080px) {
  .check-container {
    min-height: 60px !important;
  }
}
</style>