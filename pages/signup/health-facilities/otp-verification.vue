<template lang="pug">
div
</template>

<script>
import { signin } from '~/utils/axios';
import headMeta from '~/utils/head-meta';
export default {
  layout: 'empty',
  middleware: ['disable-route'],
  data () {
    return {
      step1Data: {},
    };
  },
  head () {
    return headMeta({
      title: 'MYCURE | OTP Verification of your Account',
      description:
        'Create a free MYCURE account today and become a techy doctor in minutes! Better operations, beautiful reports, bye paperworks!',
      socialBanner: require('~/assets/images/banners/homepage-og-banner.png'),
    });
  },
  async mounted () {
    // NOTE: The otp page is now just a passthrough page
    // to success signup. This is because we don't need
    // to verify the mobile number anymore.
    // We can remove this page in the future. We are only
    // taking advantage of the current signup flow and the
    // already written post-signup steps code.
    await this.init();
  },
  methods: {
    async init () {
      this.step1Data = JSON.parse(localStorage.getItem('facility:step1:model'));

      const { accessToken } = await signin({
        email: this.step1Data.email,
        password: this.step1Data.password,
      });

      localStorage.clear();

      // Record track
      this.$gtag.event('click', {
        event_category: 'signup',
        event_label: 'signup-step-3-otp-success',
      });

      window.location = `${process.env.CMS_URL}?token=${accessToken}`;

      this.clearLocalStorage();
    },
    clearLocalStorage () {
      window.localStorage.removeItem('signup:subscription-id');
      window.localStorage.removeItem('signup:stripe:session-id');
      window.localStorage.removeItem('facility:step1:model');
      window.localStorage.removeItem('signup:current-signin-up-user');
    },
  },
};
</script>

<style scoped>
.main-container {
  min-height: 85vh;
}
.disable-hover:hover {
  cursor: not-allowed;
}

.link-to-home:hover {
  cursor: pointer;
}

.single-field {
  width: 50px;
  height: 50px;
  font-size: 20px;
  background-image: linear-gradient(
    to left,
    black 70%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 90px 2px;
  border: 0;
  padding-left: 25px;
}

.single-field:focus {
  outline: none;
}

.night-field {
  background-image: linear-gradient(
    to left,
    white 70%,
    rgba(255, 255, 255, 0) 0%
  ) !important;
  color: white;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.mobile-otp >>> .otp-input {
  margin-left: 4px;
  margin-right: 4px;
}
@media screen and (min-width: 768px) {
  .main-container {
    min-height: 73vh;
  }
}
@media screen and (min-width: 1024px) {
  .main-container {
    min-height: 87vh;
  }
}
@media screen and (device-width: 1280px) and (device-height: 800px) {
  .main-container {
    min-height: 76vh;
  }
}
@media screen and (device-width: 1280px) and (device-height: 1024px) {
  .main-container {
    min-height: 81vh;
  }
}
@media screen and (min-width: 1366px) {
  .main-container {
    min-height: 60vh;
    margin-bottom: -3%;
  }
}
@media screen and (min-width: 1440px) {
  .main-container {
    min-height: 82vh;
  }
}
@media screen and (min-width: 1680px) {
  .main-container {
    min-height: 84vh;
  }
}
@media screen and (min-width: 1920px) {
  .main-container {
    min-height: 83vh;
  }
}
@media screen and (min-width: 2304px) {
  .main-container {
    min-height: 86vh;
  }
}
@media screen and (min-width: 2560px) {
  .main-container {
    min-height: 85vh;
  }
}
</style>
