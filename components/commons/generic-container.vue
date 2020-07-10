<template lang="pug">
  v-container
    v-row(v-bind="containerRowBindings")
      v-col(v-bind="containerColBindings")
        slot(name="default")
</template>

<script>
export default {
  props: {
    containerRowBindings: {
      type: Object,
      default: () => ({
        justify: 'center',
        align: 'center',
        noGutters: true,
      }),
    },
    containerColBindings: {
      type: Object,
      default: () => ({
        cols: 12,
        sm: 12,
        md: 12,
        lg: 10,
        xl: 8,
      }),
    },
  },
};
</script>
