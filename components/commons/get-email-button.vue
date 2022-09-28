<template lang="pug">
v-form(ref="formRef" @submit.prevent="submit")
  v-text-field(
    v-model="email"
    type="email"
    placeholder="Email Address"
    background-color="white"
    color="primary"
    outlined
    required
    :rules="[v => !!v || 'Email address is required', isEmail]"
  )
    template(slot="append")
      v-btn(
        type="submit"
        style="margin-top: -11px; margin-right: -6px;"
        depressed
        large
        :color="buttonColor"
        :loading="loading"
        :disabled="loading"
      ).text-none Get Started
</template>

<script>
export default {
  props: {
    buttonColor: {
      type: String,
      default: 'primary',
    },
  },
  data () {
    return {
      email: '',
      loading: false,
    };
  },
  methods: {
    async submit () {
      try {
        if (!await this.$refs.formRef.validate()) return;
        await this.emailCapture(this.email);
        this.$router.push({
          name: 'signup-health-facilities',
          query: {
            email: this.email,
          },
        });
      } catch (e) {
        console.error(e);
      }
    },
    emailCapture (email) {
      return this.$sdk.service('accounts/onboarding').create({ email });
    },
    isEmail (v) {
      const valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
      return valid || 'Invalid email!';
    },
  },
};
</script>
