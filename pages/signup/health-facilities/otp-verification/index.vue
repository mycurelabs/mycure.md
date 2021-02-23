<template lang="pug">
  v-row(align="center" justify="center" :class="[{'pt-5': !$isMobile}, {'mt-5': !$isMobile}]").main-container
    v-col(cols="11" md="8")
      v-row(justify="center" align="center")
        v-col(cols="12" md="6").pa-1.mb-3
          img(
            v-if="dayOrNight === 'night'"
            src="~/assets/images/mycure-footer-logo.png"
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE logo"
          ).link-to-home.mb-3
          img(
            v-else
            src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
            @click="$nuxt.$router.push({ name: 'index' })"
            alt="MYCURE logo"
            width="175"
          ).link-to-home.mb-3
          br
          h1 Verify it's you
          p Enter the code sent to your mobile number: +{{step1Data.countryCallingCode}}{{step1Data.mobileNo}}
          v-row(align="center" :class="{'mx-1': $isMobile}" no-gutters).mb-5
            v-col.grow
              input(
                v-model="firstDigit"
                type="number"
                step="1"
                max="9"
                :class="{'night-field': dayOrNight === 'night'}"
                @keypress="checkNumberInput($event, firstDigit)"
              )#firstDigit.single-field
              input(
                v-model="secondDigit"
                type="number"
                step="1"
                max="9"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(2)"
                @keypress="checkNumberInput($event, secondDigit)"
              )#secondDigit.single-field
              input(
                v-model="thirdDigit"
                type="number"
                step="1"
                max="9"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(3)"
                @keypress="checkNumberInput($event, thirdDigit)"
              )#thirdDigit.single-field
              input(
                v-model="fourthDigit"
                type="number"
                step="1"
                max="9"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(4)"
                @keypress="checkNumberInput($event, fourthDigit)"
              )#fourthDigit.single-field
              input(
                v-model="fifthDigit"
                type="number"
                step="1"
                max="9"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(5)"
                @keypress="checkNumberInput($event, fifthDigit)"
              )#fifthDigit.single-field
              input(
                v-model="sixthDigit"
                type="number"
                step="1"
                max="9"
                :class="{'night-field': dayOrNight === 'night'}"
                v-on:keyup.delete="onDelete(6)"
                @keypress="checkNumberInput($event, sixthDigit)"
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
            | Resend{{ otpCountdown > 0 ? ` in 00:${otpCountdown / 1000}` : '' }}
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

    v-dialog(v-model="successDialog" width="400" height="auto" persistent)
      v-card
        v-card-text.text-center
          h1.pt-5.font-30 Welcome to MYCURE!
          br
          img(width="100%" src="~/assets/images/mycure-signup-image-jumping-doctors.png" alt="Jumping doctors")
          div
            p.subheading
              b(v-if="step1Data.firstName") Dr. {{ step1Data.firstName }}!&nbsp;
              | Get ready to take your practice anywhere you are with your own virtual clinic.
              br
              | Organize your online and face-to-face consultations securely, everyday.
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
      firstDigit: null,
      secondDigit: null,
      thirdDigit: null,
      fourthDigit: null,
      fifthDigit: null,
      sixthDigit: null,
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

        const step1Data = JSON.parse(localStorage.getItem('facility:step1:model'));
        if (!step1Data?.email) {
          this.$nuxt.$router.push({ name: 'signup-health-facilities' });
        } else {
          this.step1Data = step1Data;
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
        this.otpCountdown = null;
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
    async onAcknowledgment () {
      try {
        const { accessToken } = await signin({
          email: this.step1Data.email,
          password: this.step1Data.password,
        });
        if (process.browser) {
          localStorage.clear();
        }
        window.location = `${process.env.CMS_URL}?token=${accessToken}`;
      } catch (error) {
        console.error(error);
        this.snackBarModel = {
          text: 'There was an error in sending. Please try again!',
          color: 'error',
        };
        this.showSnack = true;
      }
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
    checkNumberInput (event, value) {
      if (!/\d/.test(event.key) || value?.length === 1) {
        return event.preventDefault();
      };
      return event;
    },
    clearInputs () {
      this.firstDigit = null;
      this.secondDigit = null;
      this.thirdDigit = null;
      this.fourthDigit = null;
      this.fifthDigit = null;
      this.sixthDigit = null;
      if (process.browser) {
        document.getElementById('firstDigit') && document.getElementById('firstDigit').focus();
      }
    },
  },
  head () {
    return headMeta({
      title: 'Start Free EMR Doctor Practice Management System',
      description: 'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Home.png'),
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
@media screen and (min-width: 768px) {
  .main-container {
    min-height: 73vh;
  }
}
@media screen and (min-width: 1024px) {
  .main-container {
    min-height: 87vh;
  }
}
@media screen and (device-width: 1280px) and (device-height: 800px) {
  .main-container {
    min-height: 76vh;
  }
}
@media screen and (device-width: 1280px) and (device-height: 1024px) {
  .main-container {
    min-height: 81vh;
  }
}
@media screen and (min-width: 1366px) {
  .main-container {
    min-height: 60vh;
    margin-bottom: -3%;
  }
}
@media screen and (min-width: 1440px) {
  .main-container {
    min-height: 82vh;
  }
}
@media screen and (min-width: 1680px) {
  .main-container {
    min-height: 84vh;
  }
}
@media screen and (min-width: 1920px) {
  .main-container {
    min-height: 83vh;
  }
}
@media screen and (min-width: 2304px) {
  .main-container {
    min-height: 86vh;
  }
}
@media screen and (min-width: 2560px) {
  .main-container {
    min-height: 85vh;
  }
}
</style>
