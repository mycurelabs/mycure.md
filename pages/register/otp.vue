<template lang="pug">
v-row(justify="center")
  v-col(cols="11" md="2").mr-5.primary
  v-col(cols="11" md="5")
    h1 Verify it's you
    p Please enter the OTP sent to +xxxxxxxxxxx
    div.d-flex.text-center.justify-center.my-15
      v-otp-input(
        ref="otpInput"
        separator=""
        input-classes="otp-input"
        :class="{ 'mobile-otp': $isMobile }"
        :is-input-num="true"
        :num-inputs="6"
        :should-auto-focus="true"
        @on-change="otp = $event"
      )
    v-btn(
      color="primary"
      type="submit"
      large
      block
      depressed
      :disabled="!otpValid || loading"
      :loading="loading"
      @click="submit"
    ) Verify
    br
    v-alert(
      :value="verificationError"
      type="error"
      dismissible
    ) Incorrect verification code
    p Didn't receive OTP?
      v-btn(
        color="secondary"
        text
        depressed
        :disabled="otpCountdown > 0 || loading"
        @click="resendOtp"
      ).text-none Resend {{ otpCountdown > 0 ? `in 00:${otpCountdown / 1000}` : '' }}

  v-snackbar(
    v-model="showSnack"
    :color="snackBarModel.color"
    :timeout="1000"
  ) {{ snackBarModel.text }}
</template>

<script>
import { verifyMobileNo, signin, resendVerificationCode } from '~/utils/axios';
const COUNTDOWN_MILLIS = 60000;
export default {
  layout: 'RegistrationLayout',
  data () {
    return {
      loading: false,
      otp: null,
      otpValid: false,
      otpCountdown: null,
      //
      verificationError: false,
      showSnack: false,
      snackBarModel: {
        text: 'Success!',
        color: 'accent',
      },
    };
  },
  watch: {
    otp (val) {
      if (val?.length < 6) {
        this.otpValid = false;
        return;
      }
      this.otpValid = true;
      this.submit();
    },
  },
  mounted () {
    this.init();
  },
  methods: {
    init () {
      if (process.browser) {
        this.newAccountPayload = JSON.parse(window.localStorage.getItem('mycure:new-account-payload'));
        const ongoingCountDown = JSON.parse(window.localStorage.getItem('otp:resend:countdown'));
        if (!ongoingCountDown) {
          this.resetCountDown();
        } else {
          this.otpCountdown = Number(JSON.parse(window.localStorage.getItem('otp:resend:countdown')));
          this.startCountDown();
        }
        // Record track
        this.$gtag.pageview('/register/otp');
      }
    },
    async submit () {
      try {
        this.loading = true;
        this.verificationError = false;
        const payload = {
          code: this.otp,
        };
        await verifyMobileNo(payload);
        this.otpCountdown = null;
      } catch (e) {
        console.error(e);
        this.verificationError = true;
      } finally {
        this.loading = false;
        this.otp = '';
      }
    },
    async resendOtp () {
      try {
        await this.resetCountDown();
        const { accessToken } = await signin({
          email: this.newAccountPayload.email,
          password: this.newAccountPayload.password,
        });
        console.log('🚀 ~ file: otp.vue ~ line 122 ~ resendOtp ~ accessToken', accessToken);
        await resendVerificationCode({ token: accessToken });
        // Record track
        this.$gtag.event('click', {
          event_category: 'signup',
          event_label: 'signup-otp-resend',
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
    startCountDown () {
      const interval = setInterval(() => {
        this.otpCountdown -= 1000;
        if (process.browser) {
          window.localStorage.setItem('otp:resend:countdown', this.otpCountdown);
          if (this.otpCountdown < 0) {
            clearInterval(interval);
            window.localStorage.removeItem('otp:resend:countdown');
          }
        }
      }, 1000);
    },
    resetCountDown () {
      if (process.browser) {
        window.localStorage.setItem('otp:resend:countdown', COUNTDOWN_MILLIS);
      }
      this.otpCountdown = COUNTDOWN_MILLIS;
      this.startCountDown();
    },
    toggleChat () {
      const message = 'Hi, I am having an issue with my OTP number.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
  },
};
</script>

<style scoped>
.mobile-otp >>> .otp-input {
  margin-left: 4px;
  margin-right: 4px;
}
</style>
