<template lang="pug">
  v-container(v-if="!pageLoading").main-container
    v-row(align="center" justify="center").mx-1
      v-col(cols="12" sm="8" md="5")
        v-col.text-center
          img(
            src="~/assets/images/sign-in/mycure-sso-sign-in-logo.svg"
            alt="MYCURE logo"
            @click="$nuxt.$router.push({ name: 'index' })"
          ).link-to-home.mb-3
          h1(:class="titleSizeClasses").signin-title.font-weight-bold.pb-2 Sign in to MYCURE
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
          ).mb-5 Sign in
          template(v-if="facebookLoginOauthURI || googleLoginOauthURI")
            br
            span.grey--text or sign in with
            v-row(justify="center").mt-5
              v-btn(
                v-if="googleLoginOauthURI"
                :href="googleLoginOauthURI"
                color="primary"
                large
              ).text-none.mx-1
                v-icon.mr-2 mdi-google
                | Google
              v-btn(
                v-if="facebookLoginOauthURI"
                :href="facebookLoginOauthURI"
                color="primary"
                large
              ).text-none.mx-1
                v-icon.mr-2 mdi-facebook
                | Facebook
    v-dialog(v-model="otpDialog" width="400" persistent)
      v-card
        v-toolbar(flat)
          h2 One-Time Pin
        v-card-text
          v-form(v-model="otpValid" @submit.prevent="otpValid && submit()")
            p {{label}}
            input(
              v-model="otp"
              placeholder="Enter One-Time Pin (OTP)"
              type="text"
              maxlength="6"
              autofocus
              :rules="[v => !!v || 'OTP is required']"
              :disabled="loading"
            )#otpField.otp-field.mb-5
            v-btn(
              large
              color="primary"
              type="submit"
            ) Submit
    v-dialog(v-if="checkDevice" v-model="bestUseDialog" width="300" persistent)
      v-card.text-center
        v-card-text.pa-8
          img(src="~/assets/images/sign-in/MYCURE-modal-best-used-in-big-screens-image.png" width="100%")
          p.py-3
            strong MYCURE&nbsp;
            | is best used on
            br
            | tablets and laptops
          v-btn(color="accent" @click="bestUseDialog = false" large)
            strong.text-capitalize Got It
</template>

<script>
import dayOrNight from '~/utils/day-or-night';
import { signin } from '~/utils/axios';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'signin',
  data () {
    this.dayOrNight = dayOrNight();
    return {
      valid: false,
      otpValid: false,
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
      bestUseDialog: true,
      otp: '',
      errors: [],
    };
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
    facebookLoginOauthURI () {
      const clientId = process.env.FACEBOOK_CLIENT_ID;
      if (!clientId) return;
      const queryParams = new URLSearchParams({
        client_id: clientId,
        redirect_uri: [window.location.href.split('?')[0], 'oauth', 'facebook'].join('/'),
        scope: 'email',
        // encode query params
        state: window.btoa(new URLSearchParams(window.location.search)),
      }).toString();
      return 'https://www.facebook.com/v10.0/dialog/oauth?' + queryParams;
    },
    googleLoginOauthURI () {
      const clientId = process.env.GOOGLE_CLIENT_ID;
      if (!clientId) return;
      const queryParams = new URLSearchParams({
        client_id: clientId,
        redirect_uri: [window.location.href.split('?')[0], 'oauth', 'google'].join('/'),
        scope: [
          'https://www.googleapis.com/auth/userinfo.email',
          'https://www.googleapis.com/auth/userinfo.profile',
        ].join(' '),
        response_type: 'code',
        access_type: 'offline',
        prompt: 'consent',
        // encode query params
        state: window.btoa(new URLSearchParams(window.location.search)),
      }).toString();
      return 'https://accounts.google.com/o/oauth2/v2/auth?' + queryParams;
    },
  },
  watch: {
    otpDialog (val) {
      if (val) {
        this.$nextTick(() => {
          document.getElementById('otpField').focus();
        });
      }
    },
  },
  created () {
    this.init();
  },
  mounted () {
    this.pageLoading = false;
    window.$amplitude.logEvent('RET001 Page > Sign in');
  },
  methods: {
    init () {
      this.target = this.$nuxt.$route.query.target || process.env.CMS_URL;
    },
    onFocusEmail (e) {
      window.$amplitude.logEvent('RET002 Enter creds');
    },
    onFocusPassword (e) {
      window.$amplitude.logEvent('RET002 Enter creds');
    },
    async submit () {
      try {
        this.loading = true;
        const payload = { email: this.email, password: this.password };
        if (this.otp) { payload.otp = this.otp; }

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
          this.signInDisabled = true;
          window.$amplitude.logEvent('RET003 Btn > Sign in');
          window.location = this.composeTarget(accessToken);
        } else {
          throw new Error({
            message: 'There was an error. Please try again later.',
          });
        }

        if (this.otp) {
          this.otpDialog = false;
        }
      } catch (e) {
        console.error(e);
        this.error = true;
        this.signInDisabled = false;
        if (/network error/gi.test(e.message)) {
          this.errorMsg = 'Can\'t connect to the server.';
          return;
        }
        // Get error code
        const errorCode = e.data.code;
        window.$amplitude.logEvent('RET004 Err');
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
        .map((item) => { return `${item}=${this.$route.query[item]}`; });
      queries.unshift(`token=${accessToken}`);
      return `${this.target}?${queries.join('&')}`;
    },
  },
  head () {
    return headMeta({
      title: 'Sign In to MYCURE',
      description: 'Welcome to MYCURE Complete Clinic Management System. Sign in today and get ready to easily create, store, and retrieve your electronic medical records (EMR).',
      socialBanner: require('~/assets/images/banners/MYCURE Open Graph Images -  Home.png'),
    });
  },
};
</script>
<style scoped>
.main-container {
  min-height: 20vh;
}
.otp-field {
  height: 50px;
  width: 100%;
  border-bottom: 2px solid grey;
  font-size: 30px;
  text-align: center;
  letter-spacing: 20px;
}

.otp-field:focus {
  outline: none;
}

.otp-field::placeholder {
  font-size: 18px;
  letter-spacing: 1px;
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
