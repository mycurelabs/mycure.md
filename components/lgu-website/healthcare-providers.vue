<template lang="pug">
  div(v-if="doctors")
    v-container
      v-row
        v-col(cols="12").text-left
          h2 Healthcare Providers
      v-row.px-9.mt-5
        template(v-for="doctor in doctors")
          provider(:doctor="doctor")
</template>

<script>
// components
import Provider from './provier-item';

export default {
  components: {
    Provider,
  },
  props: {
    doctors: {
      type: Array,
      default: () => ([]),
    },
  },
};
</script>
