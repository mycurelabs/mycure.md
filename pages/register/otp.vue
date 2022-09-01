<template lang="pug">
v-row(justify="center").red
  v-col(cols="11" md="6").text-center
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
      ).green
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
