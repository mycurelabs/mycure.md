<template lang="pug">
  v-dialog(v-model="videoDialog" max-width="600px")
    v-layout(row justify-center)
      v-card(width="600")
        v-card-text
          iframe(
            align="middle"
            id="ytplayer" 
            type="text/html" 
            :height="!$isMobile ? '400' : '175'" 
            :width="!$isMobile ? '570' : '300'"
            src="https://www.youtube.com/embed/zvM3LIvq-6k?autoplay=0&loop=1&showinfo=0rel=0"
            frameborder="0"
            allowfullscreen
          )
</template>

<script>
export default {
  props: {
    value: null
  },
  computed: {
    videoDialog: {
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

