<template lang="pug">
  div.bottom-bg
    v-container.mt-10
      v-row(justify="center" align="center")
        v-col(cols="12" md="4")
          img(
            src="~/assets/images/payment/mycure-accounts-checkout-success-callback-image.png"
            width="100%"
            alt="Checkout success"
          )
        v-col(
          cols="12"
          md="5"
          align-self="center"
          :class="{'text-center': $isMobile }"
        )
          img(src="~/assets/images/mycure-logo.svg" height="50")
          h1 YOUR PAYMENT WAS SUCCESSFUL!
          p.mt-3 Congratulations! You can now starting exploring MYCURE.
          v-btn(
            color="accent"
            large
            @click="onOkayClick"
          ).ml-0.text-none.font-weight-bold.elevation-0 Start exploring MYCURE!
</template>

<script>
export default {
  layout: 'empty',
  head () {
    return {
      title: 'Trial Active - MYCURE Sign Up',
    };
  },
  methods: {
    onOkayClick () {
      this.$nuxt.$router.push({ name: 'signin' });
    },
  },
};
</script>

<style scoped>
.bottom-bg {
  background-image: url('../../../assets/images/payment/mycure-accounts-checkout-success-callback-bg.png');
  background-size: contain;
  background-position: bottom;
  min-height: 100vh;
  width: 100%;
}
</style>
