<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="9").text-center
        h1(:class="panelHeaderClasses") Protecting your medical records with confidence
    v-row(justify="center").grey--text.font-open-sans
      v-col(cols="12" md="6")
        p(:class="descriptionClasses") You'll never have to worry about your data privacy concerns. Keeping them secure is our priority.
      v-col(cols="12" md="6")
        p(:class="descriptionClasses") Being HIPAA Compliant, we demonstrate our commitment to industry-leading best practices for your security and privacy of protected health information.
</template>

<script>
import classBinder from '~/utils/class-binder';
export default {
  props: {
    extended: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    panelHeaderClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
      });
    },
    headerClasses () {
      return classBinder(this, {
        mobile: ['font-s'],
        regular: ['font-m'],
      });
    },
    descriptionClasses () {
      return classBinder(this, {
        mobile: ['font-xs'],
        regular: ['font-s'],
      });
    },
  },
};
</script>
