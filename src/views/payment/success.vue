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
            h1.font-work-sans PAYMENT SUCCESSFUL!
            p.mt-3
              | Your new subscription amounts to a total of&nbsp;
              b ${{ price }}
              br
              | Your next due date will be on&nbsp;
              b {{ date }}
            v-btn(
              :color="$mcColors.mcAltGreen"
              large
              @click="onOkayClick"
              style="width: 120px;"
            ).text-none.font-weight-bold.elevation-0.white--text Okay!
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
  methods: {
    onOkayClick () {
      this.$router.push({ name: 'home' });
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
