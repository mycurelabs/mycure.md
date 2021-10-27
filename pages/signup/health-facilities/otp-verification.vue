<template lang="pug">
  v-container(v-if="!loading" fluid fill-height).pa-0.ma-0
    v-row(style="height: 100vh")
      v-col(cols="6" v-if="!$isMobile" style="background: #E2FAF4;").pa-0.text-center
        v-row(style="height: 100vh" align="center" justify="center")
          img(src="~/assets/images/mycure-onboarding-phone-verification.png" alt="Phone")
      v-col(:cols="$isMobile? '12' : '6'" :class="$isMobile ? 'pa-4' : 'pa-0'")
        v-container(style="background: white; height: 100vh;" :class="$isMobile ? 'pa-3' : ['ml-n16', 'px-16', 'pt-10']").rounded-tl-xl.rounded-bl-xl
          v-col(cols="12")
            h1 {{ isPaymentSuccessful ? 'Your payment was successful!' : 'Verify it\'s you' }}
          br
          br
          br
          v-col(cols="12")
            p.mb-0 Please enter the OTP sent to
            p.secondary--text +{{step1Data.countryCallingCode}}{{step1Data.mobileNo}}
          v-col(cols="12").my-4
            v-otp-input(
              ref="otpInput"
              separator=""
              input-classes="otp-input"
              :num-inputs="6"
              :should-auto-focus="true"
              :is-input-num="true"
              @on-change="otp = $event"
              :class="{'mobile-otp': $isMobile}"
            ).d-flex
          //- Verify button
          v-col(cols="12")
            v-btn(
              block
              color="secondary"
              large
              :disabled="otp.length < 6"
              @click="submit()"
            ).white--text Verify
          v-col(cols="12")
            v-alert(
              :value="verificationError"
              type="error"
              dismissible
            ) Incorrect verification code
          v-col(cols="12").text-center
            span Didn't receive the OTP?&nbsp;
            v-btn(
              :disabled="otpCountdown > 0 || loading"
              @click="resendVerificationCode"
              color="secondary"
              text
              right
              bottom
              depressed
            ).text-none
              | Resend{{ otpCountdown > 0 ? ` in 00:${otpCountdown / 1000}` : '' }}
          br
          br
          br
          v-col(cols="12")
            p.mb-0 Having trouble with your verification?
            a(@click.stop="toggleChat()").secondary--text Send us a chat for support.
    //- v-row(align="center" justify="center" :class="[{'pt-5': !$isMobile}, {'mt-5': !$isMobile}]").main-container
    //-   v-col(cols="11" md="8")
    //-     v-row(justify="center" align="center")
    //-       v-col(cols="12" md="6").pa-1.mb-3
    //-         img(
    //-           v-if="dayOrNight === 'night'"
    //-           src="~/assets/images/mycure-footer-logo.png"
    //-           @click="$nuxt.$router.push({ name: 'index' })"
    //-           alt="MYCURE logo"
    //-         ).link-to-home.mb-3
    //-         img(
    //-           v-else
    //-           src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
    //-           @click="$nuxt.$router.push({ name: 'index' })"
    //-           alt="MYCURE logo"
    //-           width="175"
    //-         ).link-to-home.mb-3
    //-         br
    //-         h1 {{ isPaymentSuccessful ? 'Your payment was successful!' : 'Verify it\'s you' }}
    //-         p Enter the code sent to your mobile number: +{{step1Data.countryCallingCode}}{{step1Data.mobileNo}}
    //-         v-row.my-5
    //-           div.d-flex
    //-             v-otp-input(
    //-               ref="otpInput"
    //-               separator=""
    //-               input-classes="otp-input"
    //-               :num-inputs="6"
    //-               :should-auto-focus="true"
    //-               :is-input-num="true"
    //-               @on-complete="onOTPComplete($event)"
    //-             )
    //-         p Didn't get the code?
    //-         v-btn(
    //-           style="width: 150px;"
    //-           :disabled="otpCountdown > 0 || loading"
    //-           @click="resendVerificationCode"
    //-           color="primary"
    //-           right
    //-           bottom
    //-           depressed
    //-         ).text-none.font-weight-bold
    //-           | Resend{{ otpCountdown > 0 ? ` in 00:${otpCountdown / 1000}` : '' }}
    //-         v-row.mt-2
    //-           v-col
    //-             v-alert(
    //-               :value="verificationError"
    //-               type="error"
    //-               dismissible
    //-             ) Incorrect verification code
    //-         br
    //-         span Having trouble with your verification?
    //-         br
    //-         a(@click.stop="toggleChat()")
    //-           strong.primary--text Send us a chat for support.
    //-       v-col(cols="12" md="6").pa-1.text-center
    //-         img(src="~/assets/images/mycure-onboarding-phone-verification.png" alt="Phone")

    v-dialog(v-model="successDialog" width="400" height="auto" persistent)
      v-card
        v-card-text.text-center
          h1.pt-5.font-30 Welcome to MYCURE!
          br
          img(width="100%" src="~/assets/images/mycure-signup-image-jumping-doctors.png" alt="Jumping doctors")
          div
            p.subheading
              | Awesome, your account is verified!
              br
              | Opening your digital health facility...
          br
          div.text-center
            v-progress-circular(color="primary" indeterminate)
          //- v-btn(
          //-   color="accent"
          //-   @click="onAcknowledgment"
          //-   large
          //-   :disabled="loading"
          //-   :loading="loading"
          //- ).text-none.font-weight-bold Get Started
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
  layout: 'empty',
  data () {
    this.dayOrNight = dayOrNight();
    return {
      // UI States
      valid: false,
      loading: false,
      verificationError: false,
      successDialog: false,
      // Data Models
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
      isPaymentSuccessful: false,
      verifyButton: null,
      otpVal: null,
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE | Verify your Account',
      description: 'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  computed: {
    pageType () {
      return this.$nuxt.$route.name;
    },
  },
  watch: {
    // firstDigit (val) {
    //   if (val?.length === 1) {
    //     document.getElementById('secondDigit') && document.getElementById('secondDigit').focus();
    //   }
    // },
    // secondDigit (val) {
    //   if (val?.length === 1) {
    //     document.getElementById('thirdDigit') && document.getElementById('thirdDigit').focus();
    //   }
    // },
    // thirdDigit (val) {
    //   if (val?.length === 1) {
    //     document.getElementById('fourthDigit') && document.getElementById('fourthDigit').focus();
    //   }
    // },
    // fourthDigit (val) {
    //   if (val?.length === 1) {
    //     document.getElementById('fifthDigit') && document.getElementById('fifthDigit').focus();
    //   }
    // },
    // fifthDigit (val) {
    //   if (val?.length === 1) {
    //     document.getElementById('sixthDigit') && document.getElementById('sixthDigit').focus();
    //   }
    // },
    // sixthDigit (val) {
    //   if (val?.length === 1) {
    //     const code = `${this.firstDigit}${this.secondDigit}${this.thirdDigit}${this.fourthDigit}${this.fifthDigit}${val}`;
    //     this.otp = code;
    //     this.submit();
    //   }
    // },
  },
  async created () {
    await this.init();
  },
  methods: {
    init () {
      if (process.browser) {
        // this.$nextTick(() => {
        //   document.getElementById('firstDigit') && document.getElementById('firstDigit').focus();
        // });

        this.$vuetify.theme.dark = false;
        const step1Data = JSON.parse(localStorage.getItem('facility:step1:model'));
        if (!step1Data?.email) {
          this.$nuxt.$router.push({ name: 'signup-health-facilities' });
        } else {
          this.step1Data = step1Data;
        }

        this.isPaymentSuccessful = this.$route.query.payment === 'success';

        const ongoingCountDown = JSON.parse(localStorage.getItem('otp:resend:countdown'));
        if (!ongoingCountDown) {
          this.resetCountDown();
        } else {
          this.otpCountdown = Number(JSON.parse(localStorage.getItem('otp:resend:countdown')));
          this.startCountDown();
        }

        // Record track
        this.$gtag.pageview('/signup/health-facilities/otp-verification');
      }
    },
    // - Test
    // onOTPComplete (otp) {
    //   this.otp = `${otp}`;
    //   this.submit();
    // },
    // Verify mobile no and signup
    async submit () {
      try {
        // this.loading = true;
        this.verificationError = false;
        const payload = {
          code: this.otp,
        };
        await verifyMobileNo(payload);
        this.$router.replace({ query: { success: 1 } });
        this.otpCountdown = null;
        this.successDialog = true;
        // Remove saved data
        // - Mock loading then run acknowledgment
        await setTimeout(() => {
          this.onAcknowledgment();
        }, 300);
      } catch (e) {
        this.verificationError = true;
        this.clearInputs();
        console.error(e);
      } finally {
        // this.loading = false;
        this.otp = '';
      }
    },
    async resendVerificationCode () {
      try {
        this.resetCountDown();
        const { accessToken } = await signin({
          email: this.step1Data.email,
          password: this.step1Data.password,
        });
        await resendVerificationCode({ token: accessToken });
        // Record track
        this.$gtag.event('click', {
          event_category: 'signup',
          event_label: 'signup-step-3-otp-resend',
        });
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
      }
    },
    async onAcknowledgment () {
      try {
        this.loading = true;
        const { accessToken } = await signin({
          email: this.step1Data.email,
          password: this.step1Data.password,
        });
        localStorage.clear();
        // Record track
        this.$gtag.event('click', {
          event_category: 'signup',
          event_label: 'signup-step-3-otp-success',
        });
        window.location = `${process.env.CMS_URL}?token=${accessToken}`;
      } catch (error) {
        console.error(error);
        this.snackBarModel = {
          text: 'There was an error in sending. Please try again!',
          color: 'error',
        };
        this.showSnack = true;
      } finally {
        this.loading = false;
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
.mobile-otp >>> .otp-input {
  margin-left: 4px;
  margin-right: 4px;
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
