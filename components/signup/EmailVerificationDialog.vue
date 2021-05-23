<template lang="pug">
  v-dialog(v-model="model" width="400" persistent)
    v-card.pt-3
      v-card-text.text-center
        img(
          src="~/assets/images/mycure-sign-up-success-pop-up-image.png"
          alt="Email"
        )
        h1.my-6.font-40 Sign Up Success!
        p.subheading A verification link has been sent to
          br
          b {{ email ? email : 'your email.' }}
      v-card-text.text-center
        v-btn(
          large
          bottom
          color="primary"
          @click="$emit('confirm')"
        ).text-none.font-weight-bold Okay!
</template>

<script>
export default {
  props: {
    value: null, // eslint-disable-line
    email: {
      type: String,
      default: '',
    },
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
