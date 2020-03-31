<template lang="pug">
  fragment
    v-row(align="center" justify="center").mx-1
      v-col(cols="12" sm="8" md="4")
        v-card
          v-card-text.pa-4
            img(
              width="120"
              src=`~/assets/images/mycure-${dayOrNight === 'night' ? 'footer' : 'header'}-logo.png`
              alt="MYCURE logo"
              @click="$nuxt.$router.push({ name: 'index' })"
            ).link-to-home.mb-3
            h1.signin-title It's nice to see you here!
            span.grey--text Welcome to MYCURE. Sign in to your account
          v-card-text.pa-4
            v-form(ref="form" v-model="valid" @keydown.native.enter="valid && submit()")
              v-text-field(
                v-model="email"
                solo
                label="Email Address"
                :rules="emailRules"
              )
              v-text-field(
                v-model="password"
                solo
                type="password"
                label="Password"
                :rules="passwordRules"
              )
            v-alert(
              :value="error"
              type="error"
            ) {{errorMsg}}
          v-card-text.pa-4
            nuxt-link(:to="{ name: 'forgot-password' }").router-link Forgot Password?
          v-card-text.pa-4
            v-row
              v-col
                span No account yet?
                br
                nuxt-link(:to="{ name: 'index' , params: { scrollHealthSuites: true}}").router-link Create an account here.
              v-col.text-right
                v-btn(
                  @click="submit"
                  color="accent"
                  :disabled="!valid || loading"
                  :loading="loading"
                ).font-weight-bold Sign in
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
      loading: false,
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
  methods: {
    init () {
      this.target = this.$nuxt.$route.query.target || process.env.VUE_APP_CMS_URL;
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
        } else {
          window.location = this.composeTarget(accessToken);
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
.signin-title {
  font-weight: 500;
}

.router-link {
  text-decoration: none;
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
</style>
