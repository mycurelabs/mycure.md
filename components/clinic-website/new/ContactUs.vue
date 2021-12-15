<template lang="pug">
  v-card(flat :class="$isMobile ? 'px-4' : 'px-12'").py-8
    v-row
      v-col(cols="12" md="6")
        h3.mc-h3.title--text Contact Us
        br
        v-col(cols="12")
          span.mc-b4.mb-4 {{ address }}
          h3.mc-h5.title--text.mb-4 Facility Schedule
          span.mc-b4 {{ description }}
      v-col(v-if="!$isMobile" cols="1")
        v-divider(vertical)
      v-col(cols="12" md="5")
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
