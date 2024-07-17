<template lang="pug">
  div
    v-row(v-if="noRedirect").pa-1
      v-col
        v-btn(color="primary" icon to="/")
          v-icon {{ mdiArrowLeft }}
    v-container(v-if="!pageLoading").my-16.pb-8
      v-row(align="center" justify="center").mx-1
        v-col(cols="12" sm="8" md="5")
          v-col.text-center
            img(
              src="~/assets/images/sign-in/mycure-sso-sign-in-logo.svg"
              alt="MYCURE logo"
              @click="$nuxt.$router.push({ name: 'index' })"
              width="95px"
              height="110px"
            ).link-to-home.mb-3
            h1(:class="titleSizeClasses").font-weight-bold.pb-2 Sign in to MYCURE
            span.grey--text Because you care the extra mile.
          v-col
            v-form(ref="form" v-model="valid" @keydown.native.enter="valid && submit()")
              v-text-field(
                v-model="email"
                label="Email Address"
                :rules="emailRules"
                outlined
                @focus="onFocusEmail"
              )
              v-text-field(
                v-model="password"
                type="password"
                label="Password"
                :rules="passwordRules"
                outlined
                @focus="onFocusPassword"
              )
            v-alert(
              :value="error"
              type="error"
            ) {{errorMsg}}
            nuxt-link(:to="{ name: 'forgot-password' }").router-link Forgot Password?
          v-col.text-center
            v-btn(
              width="45%"
              color="primary"
              :disabled="!valid || loading || signInDisabled"
              :loading="loading"
              @click="submit"
              large
            ) Sign in
          v-dialog(v-model="showPasswordChangeDialog" width="600" persistent)
            v-card
              v-toolbar(flat)
                h2 Enhance Your Security
              v-card-text
                p We noticed that your current password may be easy to guess. For your security, we recommend updating your password to something stronger.
              v-card-actions
                v-spacer
                v-btn(
                  color="primary"
                  @click="updatePassword"
                  large
                ).font-weight-bold Update Password Now
                v-btn(
                  color="primary"
                  @click="continueWithoutUpdate"
                  large
                  outlined
                ).font-weight-bold Skip for Now
      v-dialog(v-model="otpDialog" width="400" persistent)
        v-card
          v-toolbar(flat)
            h2 Enter 2FA Code
          v-card-text
            p {{label}}
            v-row(justify="center")
              v-flex(xs12 md10)
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
                  v-on:keyup.delete="onDeleteDigit(2)"
                  @keypress="checkNumberInput($event, secondDigit)"
                )#secondDigit.single-field
                input(
                  v-model="thirdDigit"
                  type="number"
                  step="1"
                  max="9"
                  :class="{'night-field': dayOrNight === 'night'}"
                  v-on:keyup.delete="onDeleteDigit(3)"
                  @keypress="checkNumberInput($event, thirdDigit)"
                )#thirdDigit.single-field
                input(
                  v-model="fourthDigit"
                  type="number"
                  step="1"
                  max="9"
                  :class="{'night-field': dayOrNight === 'night'}"
                  v-on:keyup.delete="onDeleteDigit(4)"
                  @keypress="checkNumberInput($event, fourthDigit)"
                )#fourthDigit.single-field
                input(
                  v-model="fifthDigit"
                  type="number"
                  step="1"
                  max="9"
                  :class="{'night-field': dayOrNight === 'night'}"
                  v-on:keyup.delete="onDeleteDigit(5)"
                  @keypress="checkNumberInput($event, fifthDigit)"
                )#fifthDigit.single-field
                input(
                  v-model="sixthDigit"
                  type="number"
                  step="1"
                  max="9"
                  :class="{'night-field': dayOrNight === 'night'}"
                  v-on:keyup.delete="onDeleteDigit(6)"
                  @keypress="checkNumberInput($event, sixthDigit)"
                )#sixthDigit.single-field
      v-dialog(v-model="bestUseDialog" width="300" persistent)
        v-card.text-center
          v-card-text.pa-8
            img(
              src="~/assets/images/sign-in/MYCURE-modal-best-used-in-big-screens-image.png"
              width="236px"
              height="102.66px"
              alt="PC Monitor, Laptop, and Tablet Screens artwork"
            )
            p.py-3
              strong MYCURE&nbsp;
              | is best used on
              br
              | tablets and laptops
            v-btn(color="accent" @click="bestUseDialog = false" large)
              strong.text-capitalize Got It
</template>

<script>
import isEmpty from 'lodash/isEmpty';
import { mdiArrowLeft } from '@mdi/js';
import dayOrNight from '~/utils/day-or-night';
import { signin } from '~/utils/axios';
import headMeta from '~/utils/head-meta';

export default {
  layout: 'signin',
  data () {
    this.dayOrNight = dayOrNight();
    return {
      valid: false,
      pageLoading: true,
      loading: false,
      signInDisabled: false,
      email: '',
      password: '',
      emailRules: [
        v => !!v || 'Email address is required',
        v => /.+@.+/.test(v) || 'Email address must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is required',
      ],
      target: '',
      error: false,
      errorMsg: '',
      isMFAMobileNoEnabled: false,
      otpDialog: false,
      bestUseDialog: false,
      otp: null,
      errors: [],
      firstDigit: null,
      secondDigit: null,
      thirdDigit: null,
      fourthDigit: null,
      fifthDigit: null,
      sixthDigit: null,
      mdiArrowLeft,
      showPasswordChangeDialog: false,
      accessToken: '',
    };
  },
  head () {
    return headMeta({
      title: 'Sign In to MYCURE | We Care the Extra Mile',
      description: 'Welcome to MYCURE Complete Clinic Management System. Sign in today and get ready to easily create, store, and retrieve your electronic medical records (EMR).',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  computed: {
    label () {
      return this.isMFAMobileNoEnabled
        ? 'We sent the authentication code to your mobile number. Enter the code in the form above to verify your identity.'
        : 'Enter the code from Google Authenticator in the form above to verify your identity.';
    },
    titleSizeClasses () {
      return [this.$isMobile ? 'font-24' : 'font-32'];
    },
    checkDevice () {
      return this.$vuetify.breakpoint.smAndDown;
    },
    noRedirect () {
      return isEmpty(this.$route.query);
    },
  },
  watch: {
    otpDialog (val) {
      if (val) {
        this.$nextTick(() => {
          document.getElementById('firstDigit').focus();
        });
      }
    },
    checkDevice (val) {
      if (val && !this.pageLoading) this.bestUseDialog = true;
    },
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
  created () {
    this.init();
    this.pageLoading = false;
  },
  mounted () {
    window?.$amplitude?.logEvent('RET001 Page > Sign in');
  },
  methods: {
    init () {
      this.target = this.$nuxt.$route.query.target || process.env.CMS_URL;
    },
    onFocusEmail (e) {
      window?.$amplitude?.logEvent('RET002 Enter creds');
    },
    onFocusPassword (e) {
      window?.$amplitude?.logEvent('RET002 Enter creds');
    },
    async submit () {
      try {
        this.loading = true;
        const payload = { email: this.email, password: this.password };
        if (this.otp) {
          payload.otp = this.otp;
        }

        const {
          accessToken,
          code,
          message,
          isMFAMobileNoEnabled,
        } = await signin(payload);

        if (code === 206 && message === 'Missing MFA token') {
          this.isMFAMobileNoEnabled = !!isMFAMobileNoEnabled;
          this.otpDialog = true;
        } else if (accessToken) {
          this.accessToken = accessToken;
          this.signInDisabled = true;
          window?.$amplitude?.logEvent('RET003 Btn > Sign in');
          // Check if password needs updating
          if (!this.checkPasswordStrength(this.password)) {
            this.showPasswordChangeDialog = true;
          } else {
            window.location = this.composeTarget(accessToken);
          }
        } else {
          throw new Error('There was an error. Please try again later.');
        }

        if (this.otp) {
          this.otpDialog = false;
        }
      } catch (e) {
        console.error(e);
        this.error = true;
        this.signInDisabled = false;
        if (/network error/gi.test(e.message)) {
          this.errorMsg = "Can't connect to the server.";
          return;
        }
        const errorCode = e.data.code;
        window?.$amplitude?.logEvent('RET004 Err');
        if (errorCode === 'auth/user-not-found') {
          this.errorMsg = 'This user does not exist';
          return;
        }
        if (errorCode === 'auth/wrong-password') {
          this.errorMsg = 'Email address or password is incorrect!';
          return;
        }
        this.errorMsg = 'There was an error. Please try again later.';
        return;
      } finally {
        this.loading = false;
      }
    },
    composeTarget (accessToken) {
      const queries = Object.keys(this.$route.query)
        .filter(item => item !== 'target')
        .map(item => `${item}=${this.$route.query[item]}`);
      queries.unshift(`token=${accessToken}`);
      return `${this.target}?${queries.join('&')}`;
    },
    checkNumberInput (event, value) {
      if (!/\d/.test(event.key) || value?.length === 1) {
        return event.preventDefault();
      }
      return event;
    },
    onDeleteDigit (digit) {
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
          default:
            break;
        }
      }
    },
    checkPasswordStrength (password) {
      const minLength = 8;
      const hasUpperCase = /[A-Z]/.test(password);
      const hasLowerCase = /[a-z]/.test(password);
      const hasNumbers = /\d/.test(password);

      return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
    },
    updatePassword () {
      this.showPasswordChangeDialog = false;
      this.signInDisabled = false;
      const signInURL = process.env.SIGNIN_URL;
      const href = `${signInURL}/?token=${this.accessToken}`;
      window.open(href, '_blank');
    },
    continueWithoutUpdate () {
      this.showPasswordChangeDialog = false;
      window.location = this.composeTarget(this.accessToken);
    },
  },
};
</script>

<style scoped>
.main-container {
  min-height: 20vh;
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

.link-to-home:hover {
  cursor: pointer;
}

@media screen and (min-width: 1280px) and (max-width: 1366px) {
  .main-container {
    margin-bottom: 5%;
  }
}
@media screen and (min-width: 1500px) {
  .login-card.v-card {
    width: 350px;
    margin: 0 auto;
  }
}
</style>
