<template lang="pug">
  v-app
    v-content.bottom-bg
      v-container(fill-height)
        v-layout(row wrap justify-center align-center)
          v-flex(xs12 md4)
            img(
              src="../../assets/images/payment/mycure-accounts-checkout-success-callback-image.png"
              width="100%"
              alt="Checkout success"
            )
          v-flex(
            xs12
            md5
            align-self-center
            :class="{'text-xs-center': $isMobile }"
          )
            img(src="../../assets/images/mycure-logo.svg" height="50")
            h1.font-work-sans YOUR TRIAL IS NOW ACTIVE!
            p.mt-3 Congratulations! You can now starting exploring MYCURE.
            v-btn(
              :color="$mcColors.mcAltGreen"
              large
              @click="onOkayClick"
            ).ml-0.text-none.font-weight-bold.elevation-0.white--text Start exploring MYCURE!
</template>

<script>
export default {
  computed: {
    price () {
      // - TODO: return price param
      return 50;
    },
    date () {
      // - TODO: return date param
      return 'March 20, 2020';
    },
  },
  mounted () {
    console.warn('just to verify stripe pk', process.env.VUE_APP_STRIPE_PK);
  },
  methods: {
    onOkayClick () {
      this.$router.push({ name: 'signin' });
    },
  },
};
</script>

<style scoped>
.bottom-bg {
  background-image: url('../../assets/images/payment/mycure-accounts-checkout-success-callback-bg.png');
  background-size: contain;
  background-position: bottom;
  min-height: 100vh;
  width: 100%;
}
</style>
