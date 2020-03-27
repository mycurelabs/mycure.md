<template lang="pug">
  v-row(align="center" justify="center" :class="[{'pt-10': !$isMobile}, {'mt-10': !$isMobile}]")
    v-col(cols="11" md="8")
      v-row(justify="center" align="center")
        v-col(cols="12" md="6").pa-1.mb-3
          img(
            src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE logo"
          ).link-to-home.mb-3
          br
          h1 Verify it's you.
          p Enter the code sent to your mobile number: +{{step1Data.countryCallingCode}}{{step1Data.mobileNo}}
          v-row(align="center" :class="{'mx-1': $isMobile}")
            v-col.grow
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
            v-col(v-if="loading").shrink
              v-progress-circular(indeterminate size="15" color="primary")
          p Didn't get the code?
          v-btn(
            style="width: 150px;"
            :disabled="otpCountdown > 0"
            @click="resendVerificationCode"
            color="primary"
            right
            bottom
          ).text-none.font-weight-bold
            | Resend {{ otpCountdown > 0 ? `in 00:${otpCountdown / 1000}` : '.' }}
          v-row
            v-col
              v-alert(
                :value="verificationError"
                type="error"
                dismissible
              ) Incorrect verification code
        v-col(cols="12" md="6").pa-1.text-center
          img(src="~/assets/images/mycure-onboarding-phone-verification.png" alt="Phone")

    v-dialog(v-model="successDialog" width="600" persistent)
      v-card
        v-card-text.text-center
          img(width="300" src="~/assets/images/mycure-signup-image-jumping-doctors.png" alt="Jumping doctors")
          br
          h1.font-40 Welcome to MYCURE!
          div.px-5
            p.subheading
              b(v-if="step1Data.firstName") Dr. {{ step1Data.firstName }}
              | {{ step1Data.firstName ? `, you've` : `You've` }} taken the first step in securely organizing your medical records.&nbsp;
              | Now get ready for the ultimate clinic make-over.
          v-btn(
            color="accent"
            @click="onAcknowledgment"
            large
          ).text-none.font-weight-bold Get Started
    v-snackbar(
      v-model="showSnack"
      :color="snackBarModel.color"
      :timeout="1000"
    ) {{ snackBarModel.text }}

</template>

<script>
import dayOrNight from '~/utils/day-or-night';
import { verifyMobileNo, signin, resendVerificationCode } from '~/utils/axios';
const COUNTDOWN_MILLIS = 60000;
export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {
      valid: false,
      loading: false,
      sendingCode: false,
      verificationError: false,
      successDialog: false,
      otp: '',
      step1Data: {},
      otpCountdown: null,
      showSnack: false,
      snackBarModel: {
        text: 'Success!',
        color: 'accent',
      },
    };
  },
  computed: {
    pageType () {
      return this.$nuxt.$route.name;
    },
  },
  watch: {
    otp (val) {
      if (!val) {
        return;
      }
      if (val?.length === 6) {
        this.submit();
      }
    },
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      if (process.browser) {
        this.$nextTick(() => {
          document.getElementById('otpField') && document.getElementById('otpField').focus();
        });

        const step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
        if (!step1Data?.email) {
          this.pageType === 'signup-individual-step-2' ? this.$nuxt.$router.push({ name: 'signup-individual-step-1' })
            : this.pageType === 'signup-specialized-step-2' ? this.$nuxt.$router.push({ name: 'signup-specialized-step-1' })
              : this.$nuxt.$router.push({ name: 'index' });
        } else {
          this.step1Data = JSON.parse(localStorage.getItem('individual:step1:model'));
        }

        const ongoingCountDown = JSON.parse(localStorage.getItem('otp:resend:countdown'));
        if (!ongoingCountDown) {
          this.resetCountDown();
        } else {
          this.otpCountdown = Number(JSON.parse(localStorage.getItem('otp:resend:countdown')));
          this.startCountDown();
        }
      }
    },
    // Verify mobile no and signup
    async submit () {
      try {
        this.loading = true;
        this.verificationError = false;
        const payload = {
          code: this.otp,
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
        this.sendingCode = true;
        const { accessToken } = await signin({
          email: this.step1Data.email,
          password: this.step1Data.password,
        });
        await resendVerificationCode({ token: accessToken });
        this.resetCountDown();
        this.snackBarModel = {
          text: 'OTP was resent successfully!',
          color: 'accent',
        };
        this.showSnack = true;
      } catch (e) {
        console.error(e);
        this.snackBarModel = {
          text: 'There was an error in sending. Please try again!',
          color: 'error',
        };
        this.showSnack = true;
      } finally {
        this.sendingCode = false;
      }
    },
    onAcknowledgment () {
      if (process.browser) {
        localStorage.clear();
      }
      this.$nuxt.$router.push({ name: 'signin' });
    },
    startCountDown () {
      const interval = setInterval(() => {
        this.otpCountdown -= 1000;
        if (process.browser) {
          localStorage.setItem('otp:resend:countdown', this.otpCountdown);
          if (this.otpCountdown < 0) {
            clearInterval(interval);
            localStorage.removeItem('otp:resend:countdown');
          }
        }
      }, 1000);
    },
    resetCountDown () {
      if (process.browser) {
        localStorage.setItem('otp:resend:countdown', COUNTDOWN_MILLIS);
      }
      this.otpCountdown = COUNTDOWN_MILLIS;
      this.startCountDown();
    },
  },
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
