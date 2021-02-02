<template lang="pug">
  v-card(color="#f0f0f0" flat)
    v-toolbar(color="#f0f0f0" flat)
      v-tabs(v-model="activeServiceType")
        v-tab(href="#lab") #[b Laboratory]
        v-tab(href="#imaging") #[b Imaging]
        v-tab(href="#pe") #[b PE Packages]
        v-tab(href="#doctors" ) #[b Doctors]
        v-tab(href="#procedure") #[b Procedures]
    v-card-text
      template(v-for="item in items")
        service-item(
          :item="item"
          :is-doctor="activeServiceType === 'doctors'"
        )
        v-divider
</template>

<script>
import ServiceItem from './service-item';
export default {
  components: {
    ServiceItem,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
    items: {
      type: Array,
      default: () => ([]),
    },
  },
  data () {
    return {};
  },
  computed: {
    activeServiceType: {
      get () {
        return this.value;
      },
      set (val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>
