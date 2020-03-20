<template lang="pug">
  v-app
    v-content.bottom-bg
      v-container(fill-height)
        v-layout(row wrap align-center justify-center)
          v-flex(xs12 md4)
            img(
              src="../../assets/images/payment/mycure-accounts-checkout-cancel-callback-image.png"
              width="100%"
              alt="Checkout error"
            )
          v-flex(
            xs12
            md5
            align-self-center
            :class="{'text-xs-center': $isMobile }"
          )
            img(src="../../assets/images/mycure-logo.svg" height="50")
            h1.font-work-sans PAYMENT FAILED.
            p.mt-3
              | Oops! Something went wrong with your payment.
              br
              | Please go back and try again.
            v-btn(
              color="primary"
              large
              @click="onGoBack"
            ).text-none.font-weight-bold.elevation-0 Go Back
</template>

<script>
export default {
  methods: {
    onGoBack () {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>
.bottom-bg {
  background-image: url('../../assets/images/payment/mycure-accounts-checkout-cancel-callback-bg.png');
  background-size: contain;
  background-position: bottom;
  min-height: 100vh;
  width: 100%;
}
</style>
