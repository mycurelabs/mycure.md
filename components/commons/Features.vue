<template lang="pug">
  v-container
    v-row(justify="center")
      v-col(cols="12" md="8").text-center
        h1(:class="titleClasses").lh-title {{ title }}
      v-col(cols="12" md="6").text-center
        p(:class="descriptionClasses").grey--text.font-open-sans {{ description }}
      v-col(cols="12")
        v-row(justify="center" align="center")
          v-col(cols="12" md="4" v-for="(item, key) in items" :key="key").text-center
            h3.font-s.grey--text {{ item.title }}
            p(v-if="item.description").font-xs.grey--text {{ item.description }}
            a.primary--text.font-weight-bold Learn more.
</template>

<script>
import classBinder from '~/utils/class-binder';
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    titleClasses () {
      return classBinder(this, {
        mobile: ['font-m'],
        regular: ['font-l'],
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
