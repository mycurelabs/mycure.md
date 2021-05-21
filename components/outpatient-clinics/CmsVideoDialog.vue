<template lang="pug">
  v-dialog(v-model="dialog" max-width="600")
    v-card(width="600").pt-5
      v-card-text
        a(v-if="dialog")
          iframe(
            align="middle"
            id="ytplayer"
            type="text/html" width="100%" height="400"
            src="https://www.youtube.com/embed/ZR8e-Egav0M?autoplay=1&loop=1&showinfo=0&rel=0"
            frameborder="0"
            allowfullscreen
          )
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dialog: {
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
