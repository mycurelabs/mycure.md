<template lang="pug">
  v-container.pt-6
    v-row(align="center" justify="center")
      v-col(cols="12" sm="8" md="12" align="center" justify="center")
        img(
          :width="$isMobile ? '180px' : ($isRegularScreen ? '170px' : '260px')"
          :height="$isMobile ? '50.28px' : ($isRegularScreen ? '47.48px' : '72.61px')"
          src="~/assets/images/MYCURE-virtual-clinic-healthcare-practice-online-logo.svg"
          @click="$nuxt.$router.push({ name: 'index' })"
        ).link-to-home
      v-col(cols="12" sm="8" md="4" justify="center")
        v-card(width="100%")
          img(
            src="~/assets/images/forgot-password/mycure-password-banner-forgot.png"
            :width="$isMobile ? '360px' : ($isRegularScreen ? '363.48px' : '563.48px')"
            :height="$isMobile ? '121.64px' : ($isRegularScreen ? '122.83px' : '190.41px')"
          ).mx-auto
          v-card-text.px-4
            div.text-center
              h1(:class="titleSizeClasses").signin-title Forgot your password?
            br
            p.font-16 No worries! Just follow these steps :
            v-badge(
              v-for="(data, key) in forgotPasswordStep"
              :key="key"
              color="primary"
              :content="key + 1"
              inline
              left
            ).px-2.py-2.font-16
              span.pl-3.pr-5 {{data.step}}
          v-card-text.px-4
            v-form(ref="form" v-model="valid" @submit.prevent="submit")
              v-text-field(
                v-model="email"
                label="Email Address"
                :rules="emailRules"
                outlined
              )
            v-alert(
              :value="error"
              type="error"
            ) {{errorMsg}}
          v-card-text.mt-n5
            v-row
              v-col
                v-btn(
                  text
                  right
                  :to="{ name: 'signin' }"
                ).text-none Back to Login
              v-col.text-right
                v-btn(
                  @click="submit"
                  color="primary"
                  :disabled="!valid || loading"
                  :loading="loading"
                ).font-weight-bold Submit
    v-dialog(v-model="successDialog" width="250" persistent)
      v-card.pa-1
        v-card-text.text-center.pt-5
          h2 Success!
          img(src="~/assets/images/forgot-password/mycure-password-modal-success.png")
          p Password reset link sent to&nbsp;
            br
            span.primary--text {{email}}
        v-card-text.text-center#success-image
          v-btn(color="primary" @click="done" rounded).font-weight-bold Got it!
</template>

<script>
import { forgotPassword } from '~/utils/axios';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'signin',
  data () {
    return {
      forgotPasswordStep: [
        { step: 'Enter your MYCURE email address below.' },
        { step: 'Carefully follow the instructions we sent to your email address.' },
        { step: 'Login to MYCURE using your new password.' },
      ],
      valid: false,
      loading: false,
      email: '',
      emailRules: [
        v => !!v || 'Email address is required',
        v => /.+@.+/.test(v) || 'Email address must be valid',
      ],
      error: false,
      errorMsg: '',
      successDialog: false,
    };
  },
  head () {
    return headMeta({
      title: 'Sign In to MYCURE - Forgot Password',
      description: 'Welcome to MYCURE Complete Clinic Management System. Sign in today and get ready to easily create, store, and retrieve your electronic medical records (EMR).',
      // - TODO: Replace with local if applicable
      socialBanner: 'https://firebasestorage.googleapis.com/v0/b/mc-v4-prod.appspot.com/o/web-main-assets%2FMYCURE-Open-Graph-Images-Home.png?alt=media&token=61978d70-326f-4323-8e6a-17d7b9c9a53b',
    });
  },
  computed: {
    logoWidth () {
      return [this.$isMobile ? '50%' : '15%'];
    },
    titleSizeClasses () {
      return [this.$isMobile ? 'font-24' : 'font-34'];
    },
  },
  methods: {
    async submit () {
      try {
        this.loading = true;
        const payload = { email: this.email };
        await forgotPassword(payload);
        this.successDialog = true;
      } catch (e) {
        console.error(e);
        this.error = true;
        this.errorMsg = 'There was an error. Please try again later.';
      } finally {
        this.loading = false;
      }
    },
    done () {
      this.email = '';
      this.$refs.form.resetValidation();
      this.successDialog = false;
    },
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
