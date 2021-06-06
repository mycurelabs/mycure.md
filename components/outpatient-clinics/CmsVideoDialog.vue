<template lang="pug">
  v-dialog(v-model="dialog" max-width="800" max-height="500")
    v-card(width="800").pt-5
      v-card-text
        a(v-if="dialog")
          iframe(
            align="middle"
            id="ytplayer"
            type="text/html" width="100%" height="500"
            src="https://www.youtube.com/embed/YjymFVmKX_U"
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
