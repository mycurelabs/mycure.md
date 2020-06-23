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
            )
            v-text-field(
              v-model="password"
              type="password"
              label="Password"
              :rules="passwordRules"
              outlined
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
  },
  methods: {
    init () {
      this.target = this.$nuxt.$route.query.target || process.env.CMS_URL;
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
        if (/network error/gi.test(e.message)) {
          this.error = true;
          this.errorMsg = 'Can\'t connect to the server.';
          return;
        }

        if (e.code === 'auth/user-not-found' || e.code === 'auth/wrong-password') {
          this.error = true;
          this.errorMsg = 'Email address or password is incorrect!';
        } else {
          this.error = true;
          this.errorMsg = 'There was an error. Please try again later.';
        }
        this.signInDisabled = false;
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
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
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
