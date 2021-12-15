<template lang="pug">
  v-card(flat :class="$isMobile ? 'px-4' : 'px-12'").py-8
    v-row
      v-col(cols="12" md="9")
        h3.mc-h3.title--text About Clinic
        br
        v-avatar(size="120").elevation-4
          img(:src="picUrl").img-border
        br
        br
        h3.mc-h3.title--text.mb-4 {{ clinicName }}
        span.mc-b4 {{ description }}
</template>

<script>
export default {
  props: {
    clinicName: {
      type: String,
      default: null,
    },
    picUrl: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
};
</script>

<style scoped>
.img-border {
  border: 8px solid white;
}
</style>
