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
            label="Mobile Number"
            outlined
            dense
            :rules="[v => !!v || 'This is required']"
          )
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
export default {
  layout: 'RegistrationLayout',
  data () {
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
    };
  },
  methods: {
    async submit () {
      try {
        if (!await this.$refs.formRef.validate()) return;
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
