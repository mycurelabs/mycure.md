<template lang="pug">
  v-col(:cols="column" :class="{'py-16': !disableParentPadding}")
    v-row(v-bind="rowBindings")
      slot(name="default")
</template>

<script>
export default {
  props: {
    /**
     * Set column props of whole panel
     * @type {Number, String}
     */
    column: {
      type: [Number, String],
      default: '10',
    },
    /**
     * Set row props of whole panel
     * @type {Object}
     * @example {justify: 'center'}
     */
    rowBindings: {
      type: Object,
      default: () => ({}),
    },
    /**
     * If panel should have no padding in the y-axis
     * @type {Boolean}
     */
    disableParentPadding: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
