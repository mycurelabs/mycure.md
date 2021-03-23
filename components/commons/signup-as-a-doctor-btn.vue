<template lang="pug">
  v-btn(
    v-bind="bindings"
    :to="{ name: 'signup-health-facilities' }"
    :class="[...defaultClasses, ...extraClasses]"
  ) A Doctor
</template>

<script>
export default {
  props: {
    extraBindings: {
      type: Object,
      default: () => ({}),
    },
    extraClasses: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    defaultBindings () {
      return {
        color: '#8db738',
        depressed: true,
      };
    },
    bindings () {
      return {
        ...this.defaultBindings,
        ...this.extraBindings,
      };
    },
    defaultClasses () {
      return [
        'text-none',
        'white--text',
      ];
    },
  },
};
</script>
