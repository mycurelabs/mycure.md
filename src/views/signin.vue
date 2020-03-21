<template lang="pug">
  v-app(:dark="dayOrNight === 'night'")
    v-content
      v-container(
        fluid fill-height
        :class="dayOrNight === 'day' ? 'white' : 'night-sky'"
        :style="{ 'background-image': dayOrNight === 'day' ? `url(${require('../assets/images/mycure-onboarding-background.png')})` : `url(${require('../assets/images/mycure-onboarding-background-dark-mode.png')})` }"
      ).bg
        v-layout(align-center justify-center)
          v-flex(xs12 sm8 md4)
            v-card
              v-card-text.pa-4
                img(
                  width="120" 
                  src="../assets/images/mycure-header-logo.png"
                  @click="$router.push({ name: 'home' })"
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
                router-link(:to="{ name: 'forgot-password' }").router-link Forgot Password?
              v-card-text.pa-4
                v-layout(row)
                  v-flex
                    span No account yet?
                    br
                    router-link(:to="{ name: 'home' , params: { scrollHealthSuites: true}}").router-link Create an account here.
                  v-flex
                    v-btn(
                      @click="submit" 
                      :color="$mcColors.mcAltGreen" 
                      :disabled="!valid || loading"
                      :loading="loading"
                    ).right.font-weight-bold Sign in
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
import dayOrNight from '../utils/day-or-night';
import { signin } from '../utils/axios';
import OtpForm from '../components/commons/otp-form';
export default {
  components: {
    OtpForm
  },
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
        v => /.+@.+/.test(v) || 'Email address must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      target: '',
      error: false,
      errorMsg: '',
      isMFAMobileNoEnabled: false,
      otpDialog: false,
      otp: '',
      errors: []
    };
  },
  computed: {
    label () {
      return this.isMFAMobileNoEnabled
        ? 'We sent the authentication code to your mobile number. Enter the code in the form above to verify your identity.'
        : 'Enter the code from Google Authenticator in the form above to verify your identity.';
    }
  },
  watch: {
    otpDialog (val) {
      if (val) {
        this.$nextTick(() => {
          document.getElementById('otpField').focus();
        });
      }
    }
  },
  methods: {
    init () {
      this.target = this.$route.query.target || process.env.VUE_APP_CMS_URL;
    },
    async submit () {
      try {
        this.loading = true;
        const payload = { email: this.email, password: this.password };
        if (this.otp) payload.otp = this.otp;
        const { 
          accessToken, 
          code, 
          message, 
          isMFAMobileNoEnabled
        } = await signin(payload);
        if (code === 206 && message === 'Missing MFA token') {
          this.isMFAMobileNoEnabled = !!isMFAMobileNoEnabled;
          this.otpDialog = true;
        } else {
          window.location = `${this.target}?token=${accessToken}`;
        }
        if (this.otp)
          this.otpDialog = false;
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
    }
  },
  created () {
    this.init();
  }
};
</script>

<style scoped>
.signin-title {
  font-weight: 500;
}

.router-link {
  text-decoration: none;
}

.bg {
  /* background-image: url('../assets/images/mycure-signup-062618-footer-BG.png'); */
  background-repeat: repeat-x;
  background-attachment: fixed;
  background-position: bottom center;
  /* background-size: 250px, contain; */
  /* background-position: bottom right 50px, bottom; */
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

.night-sky {
  background-color: rgb(28,28,28);
  background-color: -moz-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: -webkit-linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  background-color: linear-gradient(180deg, rgba(28,28,28,1) 0%, rgba(60,60,60,1) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#1c191c",endColorstr="#3c3c3c",GradientType=1);
}
</style>