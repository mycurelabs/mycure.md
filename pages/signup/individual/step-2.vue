<template lang="pug">
  v-row(align="center" justify="center" :class="[{'pt-5': !$isMobile}, {'mt-5': !$isMobile}]").main-container
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
          v-row(align="center" :class="{'mx-1': $isMobile}" no-gutters).mb-5
            v-col.grow
              input(
                v-model="firstDigit"
                type="number"
                step="1"
                maxlength="1"
                :class="{'night-field': dayOrNight === 'night'}"
              )#firstDigit.single-field
              input(
                v-model="secondDigit"
                type="number"
                step="1"
                maxlength="1"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(2)"
              )#secondDigit.single-field
              input(
                v-model="thirdDigit"
                type="number"
                step="1"
                maxlength="1"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(3)"
              )#thirdDigit.single-field
              input(
                v-model="fourthDigit"
                type="number"
                step="1"
                maxlength="1"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(4)"
              )#fourthDigit.single-field
              input(
                v-model="fifthDigit"
                type="number"
                step="1"
                maxlength="1"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(5)"
              )#fifthDigit.single-field
              input(
                v-model="sixthDigit"
                type="number"
                step="1"
                maxlength="1"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(6)"
              )#sixthDigit.single-field
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
            | Resend{{ otpCountdown > 0 ? ` in 00:${otpCountdown / 1000}` : '.' }}
          v-row
            v-col
              v-alert(
                :value="verificationError"
                type="error"
                dismissible
              ) Incorrect verification code
          br
          span Having trouble with your verification?
          br
          a(@click.stop="toggleChat()")
            strong.primary--text Send us a chat for support.
        v-col(cols="12" md="6").pa-1.text-center
          img(src="~/assets/images/mycure-onboarding-phone-verification.png" alt="Phone")

    v-dialog(v-model="successDialog" width="600" persistent)
      v-card
        v-card-text.text-center
          img(width="300" src="~/assets/images/mycure-signup-image-jumping-doctors.png" alt="Jumping doctors")
          br
          h1.font-40 Welcome to MYCURE!
          div.px-5.pt-5
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
import headMeta from '~/utils/head-meta';
const COUNTDOWN_MILLIS = 60000;
export default {
  layout: 'user',
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
      firstDigit: '',
      secondDigit: '',
      thirdDigit: '',
      fourthDigit: '',
      fifthDigit: '',
      sixthDigit: '',
    };
  },
  computed: {
    pageType () {
      return this.$nuxt.$route.name;
    },
  },
  watch: {
    firstDigit (val) {
      if (val?.length === 1) {
        document.getElementById('secondDigit') && document.getElementById('secondDigit').focus();
      }
    },
    secondDigit (val) {
      if (val?.length === 1) {
        document.getElementById('thirdDigit') && document.getElementById('thirdDigit').focus();
      }
    },
    thirdDigit (val) {
      if (val?.length === 1) {
        document.getElementById('fourthDigit') && document.getElementById('fourthDigit').focus();
      }
    },
    fourthDigit (val) {
      if (val?.length === 1) {
        document.getElementById('fifthDigit') && document.getElementById('fifthDigit').focus();
      }
    },
    fifthDigit (val) {
      if (val?.length === 1) {
        document.getElementById('sixthDigit') && document.getElementById('sixthDigit').focus();
      }
    },
    sixthDigit (val) {
      if (val?.length === 1) {
        const code = `${this.firstDigit}${this.secondDigit}${this.thirdDigit}${this.fourthDigit}${this.fifthDigit}${val}`;
        this.otp = code;
        this.submit();
      }
    },
  },
  async created () {
    await this.init();
  },
  methods: {
    init () {
      if (process.browser) {
        this.$nextTick(() => {
          document.getElementById('firstDigit') && document.getElementById('firstDigit').focus();
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
        this.$router.replace({ query: { success: true } });
        this.successDialog = true;
      } catch (e) {
        this.verificationError = true;
        this.clearInputs();
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    async resendVerificationCode () {
      try {
        this.resetCountDown();
        this.sendingCode = true;
        const { accessToken } = await signin({
          email: this.step1Data.email,
          password: this.step1Data.password,
        });
        await resendVerificationCode({ token: accessToken });
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
    toggleChat () {
      const message = 'Hi, I am having an issue with my OTP number.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
    onDelete (digit) {
      if (process.browser) {
        switch (digit) {
          case 2:
            document.getElementById('firstDigit') && document.getElementById('firstDigit').focus();
            break;
          case 3:
            document.getElementById('secondDigit') && document.getElementById('secondDigit').focus();
            break;
          case 4:
            document.getElementById('thirdDigit') && document.getElementById('thirdDigit').focus();
            break;
          case 5:
            document.getElementById('fourthDigit') && document.getElementById('fourthDigit').focus();
            break;
          case 6:
            document.getElementById('fifthDigit') && document.getElementById('fifthDigit').focus();
            break;
          default: {
            break;
          }
        }
      }
    },
    clearInputs () {
      this.firstDigit = '';
      this.secondDigit = '';
      this.thirdDigit = '';
      this.fourthDigit = '';
      this.fifthDigit = '';
      this.sixthDigit = '';
      if (process.browser) {
        document.getElementById('firstDigit') && document.getElementById('firstDigit').focus();
      }
    },
  },
  head () {
    return headMeta({
      title: 'Start Free EMR Doctor Practice Management System',
      description: 'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
};
</script>

<style scoped>
.main-container {
  min-height: 85vh;
}
.disable-hover:hover {
  cursor: not-allowed;
}

.link-to-home:hover {
  cursor: pointer;
}

.single-field {
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-image: linear-gradient(to left, black 70%, rgba(255, 255, 255, 0) 0%);
  background-position: bottom;
  background-size: 90px 2px;
  border: 0;
  padding-left: 25px;
}

.single-field:focus {
  outline: none;
}

.night-field {
  background-image: linear-gradient(to left, white 70%, rgba(255, 255, 255, 0) 0%) !important;
  color: white;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
