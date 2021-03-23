<template lang="pug">
  v-btn(
    v-bind="bindings"
    :href="href"
    :class="[...defaultClasses, ...extraClasses]"
  ) A Patient
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
      return `${process.env.PX_PORTAL_URL}`;
    },
    defaultBindings () {
      return {
        color: '#edba42',
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
