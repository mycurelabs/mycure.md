<template lang="pug">
  v-dialog(v-model="model" width="400" persistent)
    v-card
      v-card-text.text-xs-center
        h1 Signup Success!
        br
        p.subheading To verify your account, we sent a verification email to your email {{ email }}!
      v-card-text.text-xs-center
        v-btn(
          large
          color="success"
          @click="$emit('confirm')"
        ) Okay!
</template>

<script>
export default {
  props: {
    value: null,
    email: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      }
    }
  }
};
</script>