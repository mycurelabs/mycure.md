<template lang="pug">
  v-container(class="fill-height")
    v-row(align="center" justify="center")
      v-col(cols="12" sm="6" md="5")
        v-card
          v-card-text.px-4
            img(
              width="120"
              src="@/assets/images/mycure-header-logo.png"
              @click="$router.push({ name: 'home' })"
            ).link-to-home.mb-3
            h1.signin-title Forgot your password?
            p No worries! Just follow these steps:
            p 1. Enter your MYCURE email address below.
            p 2. Carefully follow the instructions we sent to your email address.
            p 3. Login to MYCURE using your new password.
          v-card-text.px-4
            v-form(ref="form" v-model="valid" @submit.prevent="submit")
              v-text-field(
                v-model="email"
                solo
                label="Email Address"
                :rules="emailRules"
              )
            v-alert(
              :value="error"
              type="error"
            ) {{errorMsg}}
          v-card-text.px-4
            v-row
              v-col
                v-btn(
                  flat
                  right
                  :to="{ name: 'signin' }"
                ).text-none Back to Login
              v-col
                v-btn(
                  type="submit"
                  color="success"
                  :disabled="!valid || loading"
                  :loading="loading"
                ).right Submit

    v-dialog(v-model="successDialog" width="400" persistent)
      v-card
        v-card-text.text-xs-center
          h1 Success!
          h2 Password reset link sent to
            span.primary--text {{email}}
        v-card-text(style="height: 120px").text-xs-center#success-image
          v-btn(color="success" @click="done") Done
</template>

<script>
import dayOrNight from '@/utils/day-or-night';
import { forgotPassword } from '@/utils/axios';
export default {
  layout: 'user',
  data () {
    this.dayOrNight = dayOrNight();
    return {
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
