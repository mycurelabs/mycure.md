<template lang="pug">
  v-container
    v-row(justify="center" align="center" style="min-height: 80vh")
      v-col(
        cols="11"
        sm="6"
        md="5"
        lg="4"
        xl="3"
        justify="center"
        align="center"
      )
        v-card
          img(
            src="~/assets/images/sign-up-individual-step-1/mycure-su-banner-invite-code@2x.png"
            alt="Request Sent"
            width="100%"
          )
          v-card-text.text-center
            h1.py-5 Enter your&nbsp;
              br(v-if="!$isMobile")
              | Referral Code.
            v-row(no-gutters)
              v-col.d-inline-flex
                v-text-field(
                  v-model="user.referralCode"
                  label="Referral Code"
                  width="100%"
                  ref="referralCode"
                  outlined
                  required
                  :disabled="loading"
                ).pr-2
                v-btn(
                  height="55"
                  color="primary"
                  large
                  :disabled="loading || !user.referralCode"
                  :loading="loading"
                  @click="submitCode"
                ) Submit
            v-alert(:value="referralCodeError" type="error").text-justify {{ referralCodeErrorMessage }}
            v-divider.pb-5
            span Got problems with your code?
              br(v-if="$isMobile")
              strong.primary--text
                a(@click="toggleCrispChat") &nbsp;Contact Us.
</template>

<script>
// - utils
import { getWaitlist } from '~/utils/axios';
import dayOrNight from '~/utils/day-or-night';
import { setItem } from '~/utils/localStorage';

export default {
  data () {
    this.dayOrNight = dayOrNight();
    return {
      // UI STATE
      loading: false,
      // MODELS
      user: {
        referralCode: '',
      },
      // ERROR
      referralCodeError: false,
      referralCodeErrorMessage: 'Invalid referral code.',
    };
  },
  created () {
    const { referralCode } = this.$route.query;
    if (referralCode) {
      this.user.referralCode = referralCode;
    }
  },
  mounted () {
    if (process.browser) {
      this.$nextTick(() => {
        this.$refs.referralCode.focus();
      });
    }
  },
  methods: {
    async submitCode () {
      try {
        this.loading = true;
        this.referralCodeError = false;
        const accountInvitation = await getWaitlist({ referralCode: this.user.referralCode });
        if (!accountInvitation) {
          this.referralCodeError = true;
          return;
        }
        setItem('account-invitation', { referralCode: this.user.referralCode });
        this.$nuxt.$router.push({ name: 'signup-individual-step-1' });
      } catch (e) {
        this.referralCodeError = true;
        console.error(e);
      } finally {
        this.loading = false;
      }
    },
    toggleCrispChat () {
      const message = 'Hello, I have problem with my referral code.';
      window.$crisp.push(['do', 'chat:toggle']);
      window.$crisp.push(['do', 'message:send', ['text', message]]);
    },
  },
};
</script>

<style scoped>
h1 {
  line-height: 35px;
}
</style>
