<template lang="pug">
  v-col(:cols="column" :class="{'py-16': !disableParentPadding}")
    v-row(v-bind="rowBindings")
      slot(name="default")
</template>

<script>
export default {
  props: {
    column: {
      type: String,
      default: '10',
    },
    rowBindings: {
      type: Object,
      default: () => ({}),
    },
    disableParentPadding: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
