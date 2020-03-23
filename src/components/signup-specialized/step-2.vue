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
            :flat="!type.selected"
            width="100%"
            height="100%"
            :color="cardColor(type)"
            :class="[{'black--text': type.selected}]"
            @mouseover="onMouseOver(type.value)"
            @mouseout="hoveredClinic = ''"
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
                    :src="require(`@/assets/images/${type.image}${(type.selected || hoveredClinic === type.value ) ? '-active' : '' }.png`)"
                    :alt="type.image"
                    width="80%"
                  )
              v-card-text.text-xs-center
                h2(:class="[$isMobile ? 'font-m' : 'font-16']") {{ type.title }}
              v-card-text.px-2.inclusions-container.grow
                p The trial includes:
                span(v-for="(item, key) in type.checklist" :key="key")
                  span(:class="{'primary--text': type.selected}") ✓&nbsp;
                  | {{ item }}
                  br
            v-card-actions.clinic-card-actions
              v-btn(
                color="primary"
                medium
                flat
                @click="viewDetails(type)"
              ).font-weight-bold.details-btn View Details
        v-flex(xs12 md10).pa-1.mt-3
          v-card(flat)
            v-card-actions(
              :class="dayOrNight === 'day' ? 'day-card-actions' : 'night-card-actions'"
            )
              v-btn(
                flat
                :to="{ name: 'signup-specialized-step-1' }"
                :disabled="loading"
                large
              ).font-weight-bold Back
              v-spacer
              stripe-checkout(
                ref="checkouRef"
                :pk="stripePK"
                :sessionId="stripeCheckoutSessionId"
              )
                template(slot="checkout-button")
                  v-btn(
                    color="accent"
                    :disabled="loading || !selectedType.value"
                    :loading="loading"
                    @click="onProceed"
                    large
                  ).font-weight-bold Start Trial Now
    specialized-clinic-details-dialog(
      v-model="detailsDialog"
      :clinic="viewClinicModel"
    )
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
import { signupSpecialized } from '../../utils/axios';
import dayOrNight from '../../utils/day-or-night';
// - constants
import { SPECIALIZED_CLINIC_TYPES } from './constants';
// - components
import EmailVerificationDialog from '../signup-individual/email-verification-dialog';
import SpecializedClinicDetailsDialog from './specialized-clinic-details-dialog';
import { MODULE_AVAILABILITY_MAPPINGS } from '@/utils/subscriptions';
import { StripeCheckout } from 'vue-stripe-checkout';
import _ from 'lodash';

export default {
  components: {
    EmailVerificationDialog,
    SpecializedClinicDetailsDialog,
    StripeCheckout
  },
  data () {
    this.stripePK = process.env.VUE_APP_STRIPE_PK;
    this.dayOrNight = dayOrNight();
    return {
      added: false,
      removed: false,
      errorSnack: false,
      loading: false,
      stripeCheckoutSessionId: '',
      // - dialogs
      emailVerificationMessageDialog: false,
      detailsDialog: false,
      // - models
      step1Data: {},
      toggledType: {},
      selectedType: {},
      selectedClinicTypeModulesMapping: {},
      viewClinicModel: {},
      hoveredClinic: '',
      errorMessage: '',
      // - enum
      specializedTypes: SPECIALIZED_CLINIC_TYPES
    };
  },
  created () {
    const step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    if (!step1Data) this.$router.push({ name: 'signup-specialized-step-1' });
    if (step1Data && !step1Data.hasOwnProperty('email')) {
         this.$router.push({ name: 'signup-specialized-step-1'});
    } else {
      this.step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    }
  },
  mounted () {
    this.selectedType = {};
    this.specializedTypes.map(type => type.selected = false);
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
        this.step1Data.subscription = {
          trial: true,
          storageMax: 1,
          doctorSeatsMax: 1,
          staffSeatsMax: 1,
          ...this.selectedClinicTypeModulesMapping
        };
        const data = await signupSpecialized(this.step1Data);
        const checkoutSession = _.get(data, 'organization.subscription.updatesPending');
        this.stripeCheckoutSessionId = checkoutSession.stripeSession;
        this.$refs.checkouRef.redirectToCheckout();
        window.localStorage.clear();
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
    onMouseOver (clinicValue) {
      this.hoveredClinic = clinicValue;
    },
    toggleType (type) {
      type.selected = !type.selected;
      if (type.selected) {
        this.selectedType = type;
        this.selectedClinicTypeModulesMapping = MODULE_AVAILABILITY_MAPPINGS[type.value];
        this.specializedTypes = this.specializedTypes
          .map(item => {
            if (item.title !== type.title ) item.selected = false;
            return item;
          });
      } else {
        this.selectedType = {};
        this.selectedClinicTypeModulesMapping = {};
      }
      this.showToast(type);
    },
    viewDetails (type) {
      this.viewClinicModel = type;
      this.detailsDialog = true;
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
    cardColor (type) {
      if (this.dayOrNight === 'day') {
        return type.selected ? 'white' : '#f0f0f0';
      } else {
        return type.selected ? 'white' : 'black';
      }
    }
  }
};
</script>

<style scoped>
.day-card-actions {
  background-color: #fafafa;
}
.night-card-actions {
  background-color:  rgb(28,28,28);
}
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
  background-color: white !important;
  color: black;
  cursor: pointer;
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