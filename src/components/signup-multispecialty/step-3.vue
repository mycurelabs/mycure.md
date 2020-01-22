<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md10)
      v-layout(row justify-center)
        v-flex(xs12 md5)
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          h1#step-1-title Let's talk soon!
          br
          p Please fill out the form and expect a call from our experts within 24 hours.
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
                  label="Mobile No."
                  prefix="+63"
                  mask="NNNN-NNN-NNN"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
                v-text-field(
                  v-model="contact.email"
                  type="email"
                  label="Email"
                  outline
                  :rules="[requiredRule]"
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
                  label="Preferred schedule date"
                  prepend-inner-icon="mdi-calendar"
                  outline
                  :rules="[requiredRule]"
                  :disabled="loading"
                )
            v-card-actions
              v-btn(flat :to="{ name: 'signup-multispecialty-step-2' }") Back
              v-spacer
              v-btn(
                color="accent"
                :disabled="loading"
                :loading="loading"
                @click="submit"
              ) Request for demo
          div.mt-3
            b Already have an account? 
              router-link(:to="{ name: 'signin' }") Sign in.

    v-snackbar(
      v-model="success"
      color="accent"
    ) Inquiry sent! Please check your email for confirmation.
</template>

<script>
import _ from 'lodash';
import modules from '../../assets/fixtures/modules';
import { sendMultiSpecialtyInquiry } from '../../utils/axios';
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
      contact: {},
      requiredRule: v => !!v || 'This field is required',
      roles: [
        'Owner',
        'Administrator',
        'Manager',
        'Doctor',
        'Staff'
      ],
    };
  },
  watch: {
    contact: {
      handler (val) {
        localStorage.setItem('multi:step3:model', JSON.stringify(val));
      },
      deep: true,
      immediate: false
    }
  },
  methods: {
    async submit () {
      try {
        this.loading = true;
        if (this.$refs.formRef.validate()) {
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
  created () {
    // if (!localStorage.getItem('multi:step2:model')) 
    //   this.$router.push({ name: 'signup-multispecialty-step-2' });
    if (localStorage.getItem('multi:step3:model')) {
      this.contact = JSON.parse(localStorage.getItem('multi:step3:model'));
    }
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