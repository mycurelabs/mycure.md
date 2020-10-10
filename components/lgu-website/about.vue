<template lang="pug">
  v-container.mt-5
    v-row
      v-col(cols="12").text-left
        h2 About
    v-row.px-9.mt-5
      v-col(cols="12" sm="8")
        p {{ description }}
        h3.grey--text.text--darken-2 Consult online with {{ name }} healthcare providers today.
        v-btn(
          depressed
          color="primary"
          @click="$emit('toggleSelectBrgyDialog')"
        ).mt-3 Consult Now
      v-col(cols="12" sm="4").text-center
        v-avatar(size="175")
          img(
            :src="picURL"
            alt="LOGO"
          )
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    picURL: {
      type: String,
      default: null,
    },
  },
};
</script>
