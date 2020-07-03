<template lang="pug">
  v-btn(
    v-bind="bindings"
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
    href () {
      return process.browser && `${window.location.origin}/signup/individual`;
    },
    defaultBindings () {
      return {
        color: '#8db738',
        depressed: true,
        href: this.href,
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
