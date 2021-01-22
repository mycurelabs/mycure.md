<template lang="pug">
  v-container
    v-row(justify="center" align="center" style="min-height: 80vh")
      v-col(cols="12" align="center" align-self="end" :class="{ 'mt-2': $isMobile }")
        v-btn(
          v-if="backButton"
          style="position: absolute; left: 0; top: 0;"
          text
          :class="!$isMobile ? 'ma-7' : 'ma-2'"
          @click="$nuxt.$router.push({ name: 'signup-individual' })"
        )
          v-icon.primary--text mdi-arrow-left
          strong.text-capitalize.primary--text.font-18 Back
        img(
          src="~/assets/images/sign-up-individual-step-1/mycure-sso-sign-in-logo.svg"
          alt="MYCURE logo"
          width="60"
          @click="$nuxt.$router.push({ name: 'index' })"
        ).link-to-home
      v-col(
        cols="12"
        sm="4"
        lg="3"
        xl="2"
        align-self="start"
      )
        img(src="~/assets/images/sign-up-individual-step-1/mycure-referral-code-info-box.png" width="100%")
      v-col(
        cols="12"
        sm="6"
        md="5"
        lg="4"
        xl="3"
        justify="center"
        align-self="start"
      )
        div(:class="{ 'text-center': $isMobile }")
          h1 Enter your&nbsp;
            br
            | Referral Code
          br
          v-row
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
                width="120"
                color="primary"
                large
                :disabled="loading || !user.referralCode"
                :loading="loading"
                @click="submitCode"
              ) Submit
          v-alert(:value="referralCodeError" type="error").text-justify {{ referralCodeErrorMessage }}
          v-divider.mb-6
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
      backButton: true,
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
      this.backButton = false;
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
        window.$amplitude.logEvent('ACQ024 Btn > Submit Ref');
        this.$nuxt.$router.push({ name: 'signup-individual-step-1', params: { data: accountInvitation } });
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
.link-to-home:hover {
  cursor: pointer;
}
</style>
