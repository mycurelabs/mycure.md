<template lang="pug">
v-row(justify="center")
  v-col(cols="11" md="2").mr-5.primary
  v-col(cols="11" md="5")
    h1 Verify it's you
    p Please enter the OTP sent to +xxxxxxxxxxx
    div.d-flex.text-center.justify-center.my-15
      v-otp-input(
        ref="otpInput"
        separator=""
        input-classes="otp-input"
        :class="{ 'mobile-otp': $isMobile }"
        :is-input-num="true"
        :num-inputs="6"
        :should-auto-focus="true"
        @on-change="otp = $event"
      )
    v-btn(
      color="primary"
      type="submit"
      large
      block
      depressed
    ) Verify
    br
    p Didn't receive OTP? #[a Resend]
</template>

<script>
export default {
  layout: 'RegistrationLayout',
  data () {
    return {
      otp: null,
    };
  },
};
</script>

<style scoped>
.mobile-otp >>> .otp-input {
  margin-left: 4px;
  margin-right: 4px;
}
</style>
