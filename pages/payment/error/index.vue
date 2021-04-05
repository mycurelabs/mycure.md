<template lang="pug">
  v-content.bottom-bg
    v-container.mt-10
      v-row(justify="center" align="center")
        v-col(cols="12" md="4").pa-2
          img(
            src="~/assets/images/payment/mycure-accounts-checkout-cancel-callback-image.png"
            width="100%"
            alt="Checkout error"
          )
        v-col(
          cols="12"
          md="5"
          align-self="center"
          :class="{'text-center': $isMobile }"
        )
          img(src="~/assets/images/mycure-logo.svg" height="50")
          h1 TRIAL FAILED
          p.mt-3
            | Oops! Something went wrong!
            br
            | You can always continue later. For the meantime,
            br
            | you can now start exploring MYCURE's FREE tier.
          v-btn(
            color="primary"
            large
            @click="onGoBack"
          ).ml-0.text-none.font-weight-bold.elevation-0 Start Exploring MYCURE!
</template>

<script>
export default {
  layout: 'empty',
  methods: {
    onGoBack () {
      this.$nuxt.$router.push({ name: 'signin' });
    },
  },
  head () {
    return {
      title: 'Trial Failed - MYCURE Sign Up',
    };
  },
};
</script>

<style scoped>
.bottom-bg {
  background-image: url('../../../assets/images/payment/mycure-accounts-checkout-cancel-callback-bg.png');
  background-size: contain;
  background-position: bottom;
  min-height: 100vh;
  width: 100%;
}
</style>
