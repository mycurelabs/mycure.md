<template lang="pug">
  v-layout(row justify-center align-center)
    v-flex(xs12 md8)
      v-layout(row wrap justify-center align-center)
        v-flex(xs12 md6).pa-1.mb-3
          img(
            src="../../assets/images/mycure-header-logo.png"
            @click="$router.push({ name: 'home' })"
          ).link-to-home.mb-3
          br
          h5.primary--text Step 2 of 3
          h1 Verify it's you.
          p Enter the code sent to your mobile number: +{{step1Data.countryCallingCode}}{{step1Data.mobileNo}}
          v-layout(row align-center)
            v-flex(grow)
              input(
                v-model="otp"
                placeholder="Enter One-Time Pin (OTP)"
                type="text" 
                maxlength="6"
                autocomplete="off"
                :rules="[v => !!v || 'OTP is required']"
                :disabled="loading"
                :class="{ 'night': dayOrNight === 'night', loading : loading }"
              )#otpField.otp-field.my-3
            v-flex(shrink v-if="loading").pl-3
              v-progress-circular(indeterminate size="15" color="primary")
          //- v-layout(row).pa-0.mb-3
            v-btn(style="margin-left: 0px")
          p Didn't get the code?&nbsp;
            a(@click="resendVerificationCode") Resend.
          v-layout
            v-flex
              v-alert(
                :value="verificationError"
                type="error"
                dismissible
              ) Incorrect verification code
        v-flex(xs12 md6).pa-1.text-xs-center
          img(src="../../assets/images/mycure-onboarding-phone-verification.png")
    
    v-dialog(v-model="successDialog" width="500" persistent)
      v-card
        v-card-text.text-xs-center
          h1 Welcome to MYCURE,
            br
            | Dr. {{step1Data.firstName}}
          img(width="300" src="../../assets/images/mycure-onboarding-congratulations.png")
          div.px-5
            p.subheading Securely organize your medical records and get set for an ultimate clinic make-over.
          v-btn(
            color="accent"
            @click="okay"
          ) Okay!

</template>

<script>
import dayOrNight from '../../utils/day-or-night';
import { verifyMobileNo, signin, resendVerificationCode } from '../../utils/axios';
export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {
      valid: false,
      loading: false,
      verificationError: false,
      successDialog: false,
      otp: '',
      step1Data: {},
      waitMinutes: 600000
    };
  },
  watch: {
    otp (val) {
      if (!val) return;
      if (val.length === 6) this.submit();
    }
  },
  methods: {
    // Verify mobile no and signup
    async submit () {
      try {
        this.loading = true;
        this.verificationError = false;
        const payload = {
          code: this.otp
        };
        await verifyMobileNo(payload);
        this.successDialog = true;
      } catch (e) {
        this.verificationError = true;
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    async resendVerificationCode () {
      try {
        const { accessToken } = await signin({
          email: this.step1Data.email,
          password: this.step1Data.password
        });
        await resendVerificationCode({ token: accessToken });
        // localStorage.setItem('waiting', true);
        // this.startCountDown();
      } catch (e) {
        console.error(e);
      }
    },
    okay () {
      localStorage.clear();
      this.$router.push({ name: 'signin' });
    }
  },
  created () {
    this.$nextTick(() => {
      document.getElementById('otpField') && document.getElementById('otpField').focus();
    });
    const step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    if (step1Data && !step1Data.hasOwnProperty('email')) {
      this.$router.push({ name: 'signup-individual-step-1' });
    } else {
      this.step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
    }
  }
};
</script>

<style scoped>
.disable-hover:hover {
  cursor: not-allowed;
}

.link-to-home:hover {
  cursor: pointer;
}

.otp-field {
  height: 50px;
  width: 280px;
  font-size: 20px;
  text-align: center;
  letter-spacing: 10px;
  background-color: white;
  border-radius: 3px;
  padding: 10px;
  -webkit-box-shadow: 0px 1px 3px 0px rgba(153,153,153,1);
  -moz-box-shadow: 0px 1px 3px 0px rgba(153,153,153,1);
  box-shadow: 0px 1px 3px 0px rgba(153,153,153,1);
}

.otp-field.night {
  color: black;
}

.otp-field.loading {
  color: grey;
}

.otp-field:focus {
  outline: none;
}

.otp-field::placeholder {
  font-size: 16px;
  letter-spacing: 1px;
}
</style>