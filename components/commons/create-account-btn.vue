<template lang="pug">
  v-btn(
    v-bind="bindings"
    href="href"
    :class="[...defaultClasses, ...extraClasses]"
  ) {{ content }}
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
    content: {
      type: String,
      default: '',
    },
  },
  computed: {
    href () {
      const pxPortalUrl = process.env.PX_PORTAL_URL;
      const { id } = this.$route.params;
      return `${pxPortalUrl}/appointment/step-1?doctor=${id}`;
    },
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
